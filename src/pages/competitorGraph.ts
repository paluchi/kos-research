import { useCallback, useEffect, useState } from "react";

export interface GraphCategory {
  id: string;
  name: string;
  parent?: string; // parent theme override; falls back to auto-theme when unset
}
export interface GraphState {
  categories: GraphCategory[];
  assignments: Record<string, string[]>; // competitor name -> category ids
}

export type CatTarget = { kind: "existing"; id: string } | { kind: "new"; name: string };

const STORAGE_KEY = "kos-graph-v2";
const uid = () => crypto.randomUUID();
const EMPTY: GraphState = { categories: [], assignments: {} };

function load(): GraphState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as { categories?: GraphCategory[]; assignments?: Record<string, string | string[]> };
    const assignments: Record<string, string[]> = {};
    for (const [name, val] of Object.entries(parsed.assignments ?? {})) {
      assignments[name] = Array.isArray(val) ? val : [val]; // migrate old single-value form
    }
    return dedupe({ categories: parsed.categories ?? [], assignments });
  } catch {
    return EMPTY;
  }
}

const norm = (s: string) => s.trim().toLowerCase();

// Collapse categories that share a name (case-insensitive) into one canonical
// category, remapping every assignment so the picker AND graph treat them as one.
function dedupe(state: GraphState): GraphState {
  const canonical = new Map<string, string>(); // normalized name -> canonical id
  const remap = new Map<string, string>(); // any id -> canonical id
  const categories: GraphCategory[] = [];
  for (const cat of state.categories) {
    const key = norm(cat.name);
    const existing = canonical.get(key);
    if (existing) {
      remap.set(cat.id, existing);
    } else {
      canonical.set(key, cat.id);
      remap.set(cat.id, cat.id);
      categories.push({ id: cat.id, name: cat.name.trim(), parent: cat.parent });
    }
  }
  const valid = new Set(categories.map((c) => c.id));
  const assignments: Record<string, string[]> = {};
  for (const [name, ids] of Object.entries(state.assignments)) {
    const mapped = ids.map((id) => remap.get(id) ?? id).filter((id) => valid.has(id));
    const uniq = [...new Set(mapped)];
    if (uniq.length) assignments[name] = uniq;
  }
  return { categories, assignments };
}

export interface CategoryGroup {
  category: GraphCategory;
  members: string[];
}

// Real competitors grouped under the category each is assigned to.
export function groupByCategory(state: GraphState): CategoryGroup[] {
  return state.categories.map((category) => ({
    category,
    members: Object.entries(state.assignments)
      .filter(([, catIds]) => catIds.includes(category.id))
      .map(([name]) => name),
  }));
}

export function useGraph() {
  const [state, setState] = useState<GraphState>(load);

  // On mount: collapse any legacy duplicate categories and rewrite clean storage.
  // Keep in sync if another view (e.g. a modal) writes while this is mounted.
  useEffect(() => {
    const cleaned = load();
    setState(cleaned);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setState(load());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const persist = useCallback((next: GraphState) => {
    setState(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const addCategory = useCallback(
    (name: string) => {
      const n = name.trim();
      if (!n) return;
      const s = load();
      if (s.categories.some((c) => norm(c.name) === norm(n))) return; // no duplicate names
      persist({ ...s, categories: [...s.categories, { id: uid(), name: n }] });
    },
    [persist],
  );

  const renameCategory = useCallback(
    (id: string, name: string) => {
      const n = name.trim();
      if (!n) return;
      const s = load();
      persist({
        ...s,
        categories: s.categories.map((c) => (c.id === id ? { ...c, name: n } : c)),
      });
    },
    [persist],
  );

  const setCategoryParent = useCallback(
    (id: string, parent: string) => {
      const s = load();
      const p = parent.trim();
      persist({
        ...s,
        categories: s.categories.map((c) =>
          c.id === id ? { ...c, parent: p || undefined } : c,
        ),
      });
    },
    [persist],
  );

  const removeCategory = useCallback(
    (id: string) => {
      const s = load();
      const assignments: Record<string, string[]> = {};
      for (const [name, catIds] of Object.entries(s.assignments)) {
        const kept = catIds.filter((cid) => cid !== id);
        if (kept.length) assignments[name] = kept;
      }
      persist({ categories: s.categories.filter((c) => c.id !== id), assignments });
    },
    [persist],
  );

  // Add a competitor (by name) to an existing or brand-new category — keeps any it already has.
  const assignCompetitor = useCallback(
    (name: string, target: CatTarget) => {
      const s = load();
      const current = s.assignments[name] ?? [];
      if (target.kind === "new") {
        const cn = target.name.trim();
        if (!cn) return;
        // Reuse an existing same-named category instead of making a duplicate.
        const existing = s.categories.find((c) => norm(c.name) === norm(cn));
        if (existing) {
          if (current.includes(existing.id)) return;
          persist({ ...s, assignments: { ...s.assignments, [name]: [...current, existing.id] } });
          return;
        }
        const id = uid();
        persist({
          categories: [...s.categories, { id, name: cn }],
          assignments: { ...s.assignments, [name]: [...current, id] },
        });
      } else {
        if (current.includes(target.id)) return;
        persist({ ...s, assignments: { ...s.assignments, [name]: [...current, target.id] } });
      }
    },
    [persist],
  );

  // Remove a competitor from one category (or all, if no category id given).
  const unassignCompetitor = useCallback(
    (name: string, categoryId?: string) => {
      const s = load();
      const assignments = { ...s.assignments };
      if (!categoryId) {
        delete assignments[name];
      } else {
        const kept = (assignments[name] ?? []).filter((cid) => cid !== categoryId);
        if (kept.length) assignments[name] = kept;
        else delete assignments[name];
      }
      persist({ ...s, assignments });
    },
    [persist],
  );

  return {
    state,
    groups: groupByCategory(state),
    addCategory,
    renameCategory,
    removeCategory,
    setCategoryParent,
    assignCompetitor,
    unassignCompetitor,
  };
}

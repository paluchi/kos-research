import { useMemo, useState } from "react";
import { Plus, X, ChevronRight, ChevronDown } from "lucide-react";
import { useGraph } from "./competitorGraph";
import { competitors, type Competitor } from "../data/competitors";
import { CompetitorModal } from "./CompetitorModal";

const PALETTE = [
  "#6366f1", "#ef4444", "#f97316", "#22c55e", "#06b6d4",
  "#8b5cf6", "#ec4899", "#f59e0b", "#14b8a6", "#3b82f6",
];

interface TrieNode {
  key: string;
  catId: string;
  catName: string;
  size: number; // total competitors in this category (global)
  children: Map<string, TrieNode>;
  leaves: string[]; // competitors whose smallest category is this node
}

function TreeBox({
  node,
  depth,
  colorFor,
  onOpen,
}: {
  node: TrieNode;
  depth: number;
  colorFor: Record<string, string>;
  onOpen: (name: string) => void;
}) {
  const [open, setOpen] = useState(depth < 2);
  const color = colorFor[node.catId] ?? "#94a3b8";
  const kids = [...node.children.values()].sort((a, b) => b.size - a.size || a.catName.localeCompare(b.catName));
  const hasBody = kids.length > 0 || node.leaves.length > 0;

  return (
    <div className="rounded-lg border border-border bg-surface" style={{ borderLeft: `4px solid ${color}` }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-surface-hover"
      >
        {hasBody ? (
          open ? <ChevronDown size={14} className="text-text-muted shrink-0" /> : <ChevronRight size={14} className="text-text-muted shrink-0" />
        ) : (
          <span className="w-3.5 shrink-0" />
        )}
        <span className="inline-block w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
        <span className="flex-1 text-sm font-semibold text-text truncate" title={node.catName}>
          {node.catName}
        </span>
        <span className="text-xs text-text-muted shrink-0">{node.size}</span>
      </button>

      {open && hasBody && (
        <div className="pl-4 pr-2 pb-2 space-y-2">
          {node.leaves.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[...node.leaves].sort().map((name) => (
                <button
                  key={name}
                  onClick={() => onOpen(name)}
                  className="rounded-full border border-border bg-surface-alt px-2.5 py-0.5 text-[13px] text-text hover:border-accent hover:text-accent transition-colors"
                  title="Open competitor"
                >
                  {name}
                </button>
              ))}
            </div>
          )}
          {kids.map((k) => (
            <TreeBox key={k.key} node={k} depth={depth + 1} colorFor={colorFor} onOpen={onOpen} />
          ))}
        </div>
      )}
    </div>
  );
}

export function GraphManager() {
  const { state, groups, addCategory, removeCategory } = useGraph();
  const [newCat, setNewCat] = useState("");
  const [selected, setSelected] = useState<Competitor | null>(null);

  const openCompetitor = (name: string) => {
    const c = competitors.find((x) => x.name === name);
    if (c) setSelected(c);
  };

  const submitCat = () => {
    if (!newCat.trim()) return;
    addCategory(newCat);
    setNewCat("");
  };

  const colorFor = useMemo(() => {
    const m: Record<string, string> = {};
    state.categories.forEach((c, i) => (m[c.id] = PALETTE[i % PALETTE.length]));
    return m;
  }, [state.categories]);

  // Build the hierarchy from the data: each competitor's path is its categories
  // ordered largest→smallest. Shared big categories become parents; leaves are competitors.
  const roots = useMemo(() => {
    const size = new Map(groups.map((g) => [g.category.id, g.members.length]));
    const nameById = new Map(state.categories.map((c) => [c.id, c.name]));
    const root: TrieNode = { key: "", catId: "", catName: "", size: Infinity, children: new Map(), leaves: [] };

    for (const [name, catIds] of Object.entries(state.assignments)) {
      const valid = catIds.filter((id) => nameById.has(id));
      if (!valid.length) continue;
      const path = [...valid].sort(
        (a, b) => (size.get(b)! - size.get(a)!) || nameById.get(a)!.localeCompare(nameById.get(b)!),
      );
      let node = root;
      let key = "";
      for (const id of path) {
        key += "/" + id;
        let child = node.children.get(id);
        if (!child) {
          child = { key, catId: id, catName: nameById.get(id)!, size: size.get(id)!, children: new Map(), leaves: [] };
          node.children.set(id, child);
        }
        node = child;
      }
      node.leaves.push(name);
    }
    return [...root.children.values()].sort((a, b) => b.size - a.size || a.catName.localeCompare(b.catName));
  }, [state.assignments, state.categories, groups]);

  const empty = groups.filter((g) => g.members.length === 0);
  const placed = Object.values(state.assignments).filter((a) => a.length > 0).length;

  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-text mb-1">Competitor Map</h2>
      <p className="text-sm text-text-muted mb-4">
        Built from your data: the category with the most competitors is the top parent; each competitor nests
        down through its categories (largest → smallest) to itself. {roots.length} root categories · {placed} competitors mapped.
      </p>

      <div className="flex gap-1.5 max-w-md mb-6">
        <input
          value={newCat}
          onChange={(e) => setNewCat(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submitCat()}
          placeholder="New category…"
          className="flex-1 rounded-md border border-border bg-surface-alt px-2.5 py-1.5 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
        <button
          onClick={submitCat}
          className="flex items-center gap-1 rounded-md bg-accent px-2.5 py-1.5 text-xs font-medium text-white hover:bg-accent-hover"
        >
          <Plus size={14} /> Category
        </button>
      </div>

      {roots.length === 0 ? (
        <p className="text-sm text-text-muted">
          No competitors assigned yet. Open a competitor and set its categories in the Notes tab.
        </p>
      ) : (
        // Break out of the page's max-width container to fill the whole main area.
        <div className="relative left-1/2 -translate-x-1/2" style={{ width: "min(calc(100vw - 16rem), 1700px)" }}>
          <div className="px-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 items-start">
              {roots.map((node) => (
                <TreeBox key={node.key} node={node} depth={0} colorFor={colorFor} onOpen={openCompetitor} />
              ))}
            </div>

            {empty.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-2">Empty categories</p>
                <div className="flex flex-wrap gap-1.5">
                  {empty.map((g) => (
                    <span
                      key={g.category.id}
                      className="inline-flex items-center gap-1 rounded-full border border-dashed border-border bg-surface px-2.5 py-1 text-xs text-text-muted"
                    >
                      {g.category.name}
                      <button onClick={() => removeCategory(g.category.id)} className="hover:text-danger" title="Delete category">
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {selected && <CompetitorModal c={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

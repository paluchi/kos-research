import { useState } from "react";
import type { CatTarget, GraphCategory } from "./competitorGraph";

const NEW_SENTINEL = "__new__";

// Select an existing category or type a new one. Calls back with a CatTarget.
export function CategoryPicker({
  categories,
  valueId,
  placeholder = "category…",
  onPick,
}: {
  categories: GraphCategory[];
  valueId?: string;
  placeholder?: string;
  onPick: (t: CatTarget) => void;
}) {
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState("");

  if (creating) {
    const confirm = () => {
      if (name.trim()) onPick({ kind: "new", name });
      setName("");
      setCreating(false);
    };
    return (
      <div className="flex gap-1">
        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") confirm();
            if (e.key === "Escape") {
              setName("");
              setCreating(false);
            }
          }}
          placeholder="New category name…"
          className="rounded-md border border-accent bg-surface-alt px-2 py-1 text-xs text-text placeholder:text-text-muted focus:outline-none"
        />
        <button onClick={confirm} className="rounded-md bg-accent px-2 py-1 text-xs text-white hover:bg-accent-hover">
          OK
        </button>
      </div>
    );
  }

  return (
    <select
      value={valueId ?? ""}
      onChange={(e) => {
        const v = e.target.value;
        if (v === NEW_SENTINEL) setCreating(true);
        else if (v) onPick({ kind: "existing", id: v });
      }}
      className="rounded-md border border-border bg-surface-alt px-2 py-1 text-xs text-text focus:border-accent focus:outline-none"
    >
      <option value="">{placeholder}</option>
      {categories.map((c) => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
      <option value={NEW_SENTINEL}>＋ New category…</option>
    </select>
  );
}

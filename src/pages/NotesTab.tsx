import { useEffect, useRef, useState } from "react";
import type { Competitor } from "../data/competitors";
import { CategoryPicker } from "./CategoryPicker";
import { useGraph } from "./competitorGraph";
import { downscaleImage } from "./imageNotes";

export const notesKey = (name: string) => `kos-notes:${name}`;
const keyFor = (c: Competitor) => notesKey(c.name);

export function NotesTab({ c }: { c: Competitor }) {
  const storageKey = keyFor(c);
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const [status, setStatus] = useState<"saved" | "saving" | "error">("saved");
  const [dragOver, setDragOver] = useState(false);
  const { state, assignCompetitor, unassignCompetitor } = useGraph();
  const assignedIds = state.assignments[c.name] ?? [];
  const unassignedCategories = state.categories.filter((cat) => !assignedIds.includes(cat.id));

  useEffect(() => {
    if (ref.current) ref.current.innerHTML = localStorage.getItem(storageKey) ?? "";
    setStatus("saved");
  }, [storageKey]);

  const scheduleSave = () => {
    setStatus("saving");
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      try {
        localStorage.setItem(storageKey, ref.current?.innerHTML ?? "");
        setStatus("saved");
      } catch {
        setStatus("error");
      }
    }, 400);
  };

  const insertImage = (dataUrl: string) => {
    const el = ref.current;
    if (!el) return;
    const img = document.createElement("img");
    img.src = dataUrl;
    img.className = "max-w-full rounded-md my-2";
    const sel = window.getSelection();
    if (sel && sel.rangeCount && el.contains(sel.anchorNode)) {
      const range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(img);
      range.setStartAfter(img);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    } else {
      el.appendChild(img);
    }
    scheduleSave();
  };

  const handleFiles = (files: FileList | File[]) => {
    Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .forEach((f) => downscaleImage(f).then(insertImage));
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs text-text-muted">
          Private notes — drop or paste images, type around them. Stored locally in this browser.
        </p>
        <span className={`text-[10px] ${status === "error" ? "text-danger" : "text-text-muted"}`}>
          {status === "saved" ? "Saved" : status === "saving" ? "Saving…" : "Storage full — image too large"}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-surface-alt px-3 py-2">
        <span className="text-xs font-medium text-text">Map categories:</span>
        {assignedIds.map((id) => {
          const cat = state.categories.find((x) => x.id === id);
          if (!cat) return null;
          return (
            <span
              key={id}
              className="inline-flex items-center gap-1 rounded-full border border-accent bg-accent-muted px-2 py-0.5 text-xs text-accent-hover"
            >
              {cat.name}
              <button
                onClick={() => unassignCompetitor(c.name, id)}
                className="hover:text-danger"
                title="Remove from this category"
              >
                ×
              </button>
            </span>
          );
        })}
        <CategoryPicker
          categories={unassignedCategories}
          placeholder={assignedIds.length ? "add another…" : "add category…"}
          onPick={(t) => assignCompetitor(c.name, t)}
        />
      </div>

      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={scheduleSave}
        onPaste={(e) => {
          const files = Array.from(e.clipboardData.files).filter((f) => f.type.startsWith("image/"));
          if (files.length) {
            e.preventDefault();
            handleFiles(files);
          }
        }}
        onDragOver={(e) => {
          if (e.dataTransfer.types.includes("Files")) {
            e.preventDefault();
            setDragOver(true);
          }
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          setDragOver(false);
          if (e.dataTransfer.files.length) {
            e.preventDefault();
            handleFiles(e.dataTransfer.files);
          }
        }}
        data-placeholder={`Notes on ${c.name}…`}
        className={`w-full min-h-[300px] rounded-lg border bg-surface-alt p-3 text-sm text-text focus:outline-none overflow-y-auto max-h-[50vh] [&:empty]:before:content-[attr(data-placeholder)] [&:empty]:before:text-text-muted ${
          dragOver ? "border-accent" : "border-border focus:border-accent"
        }`}
      />
    </div>
  );
}

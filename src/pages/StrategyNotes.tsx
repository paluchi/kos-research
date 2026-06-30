import { useEffect, useRef, useState } from "react";
import { downscaleImage } from "./imageNotes";

const STORAGE_KEY = "kos-strategy-notes";

export function StrategyNotes() {
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const [status, setStatus] = useState<"saved" | "saving" | "error">("saved");
  const [open, setOpen] = useState(true);
  const [dragOver, setDragOver] = useState(false);

  // Load once when the editor mounts / becomes visible.
  useEffect(() => {
    if (open && ref.current) ref.current.innerHTML = localStorage.getItem(STORAGE_KEY) ?? "";
  }, [open]);

  const scheduleSave = () => {
    setStatus("saving");
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, ref.current?.innerHTML ?? "");
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
    <section className="mb-12">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={() => setOpen((o) => !o)}
          className="text-xl font-semibold text-text hover:text-accent"
          title={open ? "Collapse" : "Expand"}
        >
          {open ? "▾" : "▸"} Strategy notes
        </button>
        <span className={`text-[11px] ${status === "error" ? "text-danger" : "text-text-muted"}`}>
          {status === "saved" ? "Saved" : status === "saving" ? "Saving…" : "Storage full — image too large"}
        </span>
      </div>
      {open && (
        <>
          <p className="text-sm text-text-muted mb-3">
            Free-form scratchpad — patterns, synthesis, anything cross-cutting. Drop or paste images too. Stored
            locally in this browser.
          </p>
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
            data-placeholder="Paste or type your strategy notes, patterns, synthesis… drop images anywhere."
            className={`w-full min-h-[360px] rounded-lg border bg-surface-alt p-3 text-sm text-text leading-relaxed focus:outline-none overflow-y-auto max-h-[70vh] [&:empty]:before:content-[attr(data-placeholder)] [&:empty]:before:text-text-muted ${
              dragOver ? "border-accent" : "border-border focus:border-accent"
            }`}
          />
        </>
      )}
    </section>
  );
}

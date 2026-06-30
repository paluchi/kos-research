import { useRef } from "react";
import { Maximize2, ExternalLink } from "lucide-react";

const base = import.meta.env.BASE_URL;

const DECKS = [
  {
    title: "KOS — The AI Operating System",
    desc: "The vision: the first AI operating system for your organization.",
    url: `${base}kos_operating_system.html`,
  },
  {
    title: "The AI Analytics Landscape",
    desc: "Competitive intelligence — who's building what, and what KOS should be.",
    url: `${base}kos_competitive_landscape.html`,
  },
];

function DeckFrame({ title, desc, url }: { title: string; desc: string; url: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  return (
    <div className="mb-12">
      <div className="flex items-end justify-between gap-4 mb-3">
        <div>
          <h2 className="text-xl font-semibold text-text">{title}</h2>
          <p className="text-sm text-text-muted">{desc}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => frameRef.current?.requestFullscreen?.()}
            className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-text hover:border-accent hover:text-accent"
          >
            <Maximize2 size={15} /> Fullscreen
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-text hover:border-accent hover:text-accent"
          >
            <ExternalLink size={15} /> Open in new tab
          </a>
        </div>
      </div>
      <div className="rounded-xl border border-border overflow-hidden shadow-sm bg-black">
        <iframe
          ref={frameRef}
          src={url}
          title={title}
          allowFullScreen
          className="w-full block"
          style={{ aspectRatio: "16 / 9", border: "0" }}
        />
      </div>
    </div>
  );
}

export function SlidesPage() {
  return (
    <>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-text mb-2">Slides</h1>
        <p className="text-sm text-text-muted">
          Pitch decks. Arrow keys or click to navigate; Fullscreen for presenting.
        </p>
      </header>

      {/* Break out of the page's max-width container to fill the main area. */}
      <div className="relative left-1/2 -translate-x-1/2" style={{ width: "min(calc(100vw - 16rem), 1700px)" }}>
        <div className="px-6">
          {DECKS.map((d) => (
            <DeckFrame key={d.url} {...d} />
          ))}
        </div>
      </div>
    </>
  );
}

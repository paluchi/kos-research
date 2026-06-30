import { Badge } from "../components/Badge";
import { competitors } from "../data/competitors";
import { notesKey } from "./NotesTab";
import { GraphManager } from "./GraphManager";
import { StrategyNotes } from "./StrategyNotes";

const statusVariant = (s: string) =>
  s === "active" ? "success" : s === "dead" ? "danger" : "warning";

export function NotesPage() {
  const withNotes = competitors
    .map((c) => ({ c, html: localStorage.getItem(notesKey(c.name)) ?? "" }))
    .filter((n) => n.html.trim().length > 0);

  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-text mb-3">Notes</h1>
        <p className="text-lg text-accent-hover leading-relaxed max-w-3xl">
          All competitor notes in one place — read straight through.
        </p>
        <p className="text-sm text-text-muted mt-2">
          {withNotes.length} of {competitors.length} competitors have notes.
        </p>
      </header>

      <StrategyNotes />

      <GraphManager />

      {withNotes.length === 0 ? (
        <p className="text-text-muted">
          No notes yet. Open a competitor and use the <span className="text-text">Notes</span> tab to add some.
        </p>
      ) : (
        <div className="space-y-10">
          {withNotes.map(({ c, html }) => (
            <section key={c.name} className="border-b border-border pb-8 last:border-b-0">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h2 className="text-xl font-semibold text-text">{c.name}</h2>
                <Badge label={c.tier} variant="accent" />
                <Badge label={c.status} variant={statusVariant(c.status)} />
                <span className="text-xs text-text-muted">{c.category}</span>
              </div>
              <div
                className="text-sm text-text leading-relaxed [&_img]:max-w-full [&_img]:rounded-md [&_img]:my-2"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </section>
          ))}
        </div>
      )}
    </>
  );
}

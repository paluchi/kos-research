import { useState } from "react";
import { Badge } from "../components/Badge";
import type { Competitor } from "../data/competitors";
import {
  OverviewTab, PositioningTab, InvestorsTab, MarketsTab, GrowthTab,
} from "./CompetitorModalTabs";
import { UserVoicesTab } from "./UserVoicesTab";
import { NotesTab } from "./NotesTab";

const statusVariant = (s: Competitor["status"]) =>
  s === "active" ? "success" : s === "dead" ? "danger" : "warning";

const statusLabel = (s: Competitor["status"]) =>
  s === "active" ? "Active" : s === "dead" ? "Shut down" : s === "maintenance" ? "Maintenance" : "Acquired";

const threatVariant = (t: number) =>
  t <= 2 ? "danger" : t === 3 ? "warning" : "success";

type Tab = "overview" | "positioning" | "voices" | "investors" | "markets" | "growth" | "notes";

interface Props {
  c: Competitor;
  onClose: () => void;
}

export function CompetitorModal({ c, onClose }: Props) {
  const [tab, setTab] = useState<Tab>("overview");
  const deep = c.deep;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-surface border border-border rounded-xl shadow-2xl w-full max-w-3xl">
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-border">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-text hover:text-accent transition-colors"
              >
                {c.name}
              </a>
              <Badge label={`T${c.threat}`} variant={threatVariant(c.threat)} />
              <Badge label={c.tier} variant="accent" />
              <Badge label={statusLabel(c.status)} variant={statusVariant(c.status)} />
            </div>
            <p className="text-xs text-text-muted">{c.category} · {c.dimensions.length} KOS dimensions</p>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text text-xl leading-none p-1">
            &times;
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border px-5 overflow-x-auto">
          {(["overview", "positioning", "voices", "investors", "markets", "growth", "notes"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
                tab === t
                  ? "border-accent text-accent"
                  : "border-transparent text-text-muted hover:text-text"
              }`}
            >
              {t === "overview" ? "Overview" : t === "positioning" ? "Positioning" : t === "voices" ? "User Voices" : t === "investors" ? "Investors" : t === "markets" ? "Markets & Clients" : t === "growth" ? "Growth" : "Notes"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-5 max-h-[65vh] overflow-y-auto">
          {tab === "overview" && <OverviewTab c={c} />}
          {tab === "positioning" && <PositioningTab c={c} />}
          {tab === "voices" && <UserVoicesTab c={c} />}
          {tab === "investors" && <InvestorsTab c={c} />}
          {tab === "markets" && <MarketsTab c={c} />}
          {tab === "growth" && <GrowthTab c={c} />}
          {tab === "notes" && <NotesTab c={c} />}
        </div>

        {/* Sources footer */}
        <div className="border-t border-border px-5 py-3">
          <div className="flex flex-wrap gap-2">
            {c.sources.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-accent hover:text-accent-hover underline underline-offset-2"
              >
                {s.label}
              </a>
            ))}
            {deep?.deepSources?.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-accent hover:text-accent-hover underline underline-offset-2"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

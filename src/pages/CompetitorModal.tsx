import { useState } from "react";
import { Badge } from "../components/Badge";
import type { Competitor } from "../data/competitors";

const statusVariant = (s: Competitor["status"]) =>
  s === "active" ? "success" : s === "dead" ? "danger" : "warning";

const statusLabel = (s: Competitor["status"]) =>
  s === "active" ? "Active" : s === "dead" ? "Shut down" : s === "maintenance" ? "Maintenance" : "Acquired";

const threatVariant = (t: number) =>
  t <= 2 ? "danger" : t === 3 ? "warning" : "success";

type Tab = "overview" | "investors" | "markets" | "growth";

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
        <div className="flex border-b border-border px-5">
          {(["overview", "investors", "markets", "growth"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors ${
                tab === t
                  ? "border-accent text-accent"
                  : "border-transparent text-text-muted hover:text-text"
              }`}
            >
              {t === "overview" ? "Overview" : t === "investors" ? "Investors" : t === "markets" ? "Markets & Clients" : "Growth"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-5 max-h-[65vh] overflow-y-auto">
          {tab === "overview" && <OverviewTab c={c} />}
          {tab === "investors" && <InvestorsTab c={c} />}
          {tab === "markets" && <MarketsTab c={c} />}
          {tab === "growth" && <GrowthTab c={c} />}
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

/* ── Overview Tab ─────────────────────────────── */

function OverviewTab({ c }: { c: Competitor }) {
  return (
    <div className="space-y-4">
      {/* Dimensions */}
      {c.dimensions.length > 0 && (
        <div>
          <SectionLabel>KOS Dimensions Matched</SectionLabel>
          <div className="flex flex-wrap gap-1.5">
            {c.dimensions.map((d) => (
              <span key={d} className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent font-medium">
                {d}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Product */}
      <div>
        <SectionLabel>Product</SectionLabel>
        <p className="text-sm text-text-muted">{c.product}</p>
      </div>

      {/* Metrics */}
      <div>
        <SectionLabel>Key Metrics</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <MetricBox label="Funding" value={c.funding} />
          <MetricBox label="Valuation" value={c.valuation} />
          <MetricBox label="Revenue" value={c.revenue} />
          <MetricBox label="Team" value={c.team} />
          <MetricBox label="LinkedIn" value={c.linkedin} />
          <MetricBox label="Customers" value={c.customers} />
          <MetricBox label="Pricing" value={c.pricing} />
          <MetricBox label="Traffic" value={c.traffic} />
        </div>
      </div>

      {/* Weaknesses */}
      <div>
        <SectionLabel variant="danger">Weaknesses</SectionLabel>
        <p className="text-sm text-text-muted">{c.weaknesses}</p>
      </div>
    </div>
  );
}

/* ── Investors Tab ────────────────────────────── */

function InvestorsTab({ c }: { c: Competitor }) {
  const deep = c.deep;
  if (!deep?.fundingRounds?.length && !deep?.keyInvestors?.length) {
    return <EmptyState>Investor data not yet available for this competitor.</EmptyState>;
  }

  return (
    <div className="space-y-4">
      {/* Key Investors */}
      {deep.keyInvestors && deep.keyInvestors.length > 0 && (
        <div>
          <SectionLabel>Key Investors</SectionLabel>
          <div className="flex flex-wrap gap-1.5">
            {deep.keyInvestors.map((inv) => (
              <span key={inv} className="text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                {inv}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Funding Timeline */}
      {deep.fundingRounds && deep.fundingRounds.length > 0 && (
        <div>
          <SectionLabel>Funding Timeline</SectionLabel>
          <div className="space-y-2">
            {deep.fundingRounds.map((r, i) => (
              <div key={i} className="flex items-start gap-3 text-xs">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mt-1" />
                  {i < deep.fundingRounds!.length - 1 && <div className="w-px h-full bg-border flex-1" />}
                </div>
                <div className="pb-3 flex-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-semibold text-text">{r.round}</span>
                    <span className="text-accent font-bold">{r.amount}</span>
                    <span className="text-text-muted">{r.date}</span>
                  </div>
                  {r.lead && <p className="text-text-muted mt-0.5">Led by {r.lead}</p>}
                  {r.investors && r.investors.length > 0 && (
                    <p className="text-text-muted mt-0.5">+ {r.investors.join(", ")}</p>
                  )}
                  {r.valuation && <p className="text-text-muted mt-0.5">Valuation: {r.valuation}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Milestones */}
      {deep.milestones && deep.milestones.length > 0 && (
        <div>
          <SectionLabel>Key Milestones</SectionLabel>
          <div className="space-y-1.5">
            {deep.milestones.map((m, i) => (
              <div key={i} className="flex gap-2 text-xs">
                <span className="text-text-muted whitespace-nowrap">{m.date}</span>
                <span className="text-text">{m.event}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Markets & Clients Tab ────────────────────── */

function MarketsTab({ c }: { c: Competitor }) {
  const deep = c.deep;
  if (!deep?.markets && !deep?.clientsByVertical?.length && !deep?.clientTimeline?.length) {
    return <EmptyState>Market and client data not yet available for this competitor.</EmptyState>;
  }

  return (
    <div className="space-y-4">
      {/* Geographic Markets */}
      {deep?.markets?.geos && deep.markets.geos.length > 0 && (
        <div>
          <SectionLabel>Geographic Markets</SectionLabel>
          <div className="flex flex-wrap gap-1.5">
            {deep.markets.geos.map((g) => (
              <span key={g} className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                {g}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Industry Verticals */}
      {deep?.markets?.verticals && deep.markets.verticals.length > 0 && (
        <div>
          <SectionLabel>Industry Verticals</SectionLabel>
          <div className="flex flex-wrap gap-1.5">
            {deep.markets.verticals.map((v) => (
              <span key={v} className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-medium">
                {v}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Target segment */}
      {deep?.markets?.target && (
        <div>
          <SectionLabel>Target Segment</SectionLabel>
          <span className="text-xs px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 font-medium">
            {deep.markets.target}
          </span>
        </div>
      )}

      {/* Client count timeline */}
      {deep?.clientTimeline && deep.clientTimeline.length > 0 && (
        <div>
          <SectionLabel>Customer Count Over Time</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {deep.clientTimeline.map((e) => (
              <div key={e.year} className="rounded-lg border border-border px-3 py-2">
                <div className="text-[10px] text-text-muted">{e.year}</div>
                <div className="text-xs font-bold text-accent">{e.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Clients by vertical */}
      {deep?.clientsByVertical && deep.clientsByVertical.length > 0 && (
        <div>
          <SectionLabel>Clients by Industry</SectionLabel>
          <div className="space-y-2">
            {deep.clientsByVertical.map((cv) => (
              <div key={cv.vertical}>
                <span className="text-xs font-medium text-text">{cv.vertical}</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {cv.clients.map((cl) => (
                    <span key={cl} className="text-[10px] px-1.5 py-0.5 rounded bg-surface-hover text-text-muted">
                      {cl}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Growth Tab ───────────────────────────────── */

function GrowthTab({ c }: { c: Competitor }) {
  const deep = c.deep;
  if (!deep?.revenueTimeline?.length && !deep?.employeeTimeline?.length) {
    return <EmptyState>Growth data not yet available for this competitor.</EmptyState>;
  }

  return (
    <div className="space-y-4">
      {/* Revenue Timeline */}
      {deep?.revenueTimeline && deep.revenueTimeline.length > 0 && (
        <div>
          <SectionLabel>Revenue / ARR Over Time</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {deep.revenueTimeline.map((e) => (
              <div key={e.year} className="rounded-lg border border-border px-3 py-2">
                <div className="text-[10px] text-text-muted">{e.year}</div>
                <div className="text-xs font-bold text-accent">{e.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Employee Timeline */}
      {deep?.employeeTimeline && deep.employeeTimeline.length > 0 && (
        <div>
          <SectionLabel>Team Size Over Time</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {deep.employeeTimeline.map((e) => (
              <div key={e.year} className="rounded-lg border border-border px-3 py-2">
                <div className="text-[10px] text-text-muted">{e.year}</div>
                <div className="text-xs font-bold text-text">{e.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Basic metrics from main data */}
      <div>
        <SectionLabel>Current Snapshot</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <MetricBox label="Revenue" value={c.revenue} />
          <MetricBox label="Team" value={c.team} />
          <MetricBox label="Traffic" value={c.traffic} />
        </div>
      </div>
    </div>
  );
}

/* ── Shared UI ────────────────────────────────── */

function SectionLabel({ children, variant }: { children: React.ReactNode; variant?: "danger" }) {
  return (
    <h4 className={`text-xs font-semibold mb-2 ${variant === "danger" ? "text-danger" : "text-text"}`}>
      {children}
    </h4>
  );
}

function MetricBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border p-2">
      <div className="text-[10px] text-text-muted mb-0.5">{label}</div>
      <div className="text-xs text-text">{value}</div>
    </div>
  );
}

function EmptyState({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center py-10">
      <p className="text-sm text-text-muted">{children}</p>
      <p className="text-xs text-text-muted mt-1">Deep research is being gathered — check back soon.</p>
    </div>
  );
}

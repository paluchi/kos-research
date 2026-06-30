import type { Competitor } from "../data/competitors";

/* ── Formatters ──────────────────────────────── */

function fmtM(v: number): string {
  return v >= 1000 ? `$${(v / 1000).toFixed(1).replace(/\.0$/, "")}B` : `$${Math.round(v)}M`;
}

function fmtNum(n: number): string {
  return n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`
    : n >= 1_000 ? `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`
    : String(n);
}

export function formatFunding(c: Competitor): string {
  if (c.funding.isPublic) return `Public${c.funding.parentCompany ? ` (${c.funding.parentCompany})` : ""}`;
  if (c.funding.isBootstrapped) return "Bootstrapped";
  if (c.funding.totalRaisedM == null) return "Not disclosed";
  const base = fmtM(c.funding.totalRaisedM);
  return c.funding.notes ? `${base}. ${c.funding.notes}` : base;
}

export function formatValuation(c: Competitor): string {
  if (c.valuation.amountM == null) return c.valuation.notes || "Not disclosed";
  const base = fmtM(c.valuation.amountM);
  return c.valuation.notes ? `${base}. ${c.valuation.notes}` : base;
}

export function formatRevenue(c: Competitor): string {
  const parts: string[] = [];
  if (c.revenue.annualM != null) parts.push(`${c.revenue.isEstimated ? "~" : ""}${fmtM(c.revenue.annualM)}/yr`);
  if (c.revenue.arrM != null) parts.push(`${fmtM(c.revenue.arrM)} ARR`);
  if (parts.length === 0 && c.revenue.notes) return c.revenue.notes;
  if (parts.length === 0) return "Not disclosed";
  return c.revenue.notes ? `${parts.join(". ")}. ${c.revenue.notes}` : parts.join(". ");
}

export function formatTeam(c: Competitor): string {
  if (c.team.headcount == null) return c.team.notes || "Not disclosed";
  const prefix = c.team.isApproximate ? "~" : "";
  const base = `${prefix}${c.team.headcount.toLocaleString()} employees`;
  const parent = c.team.parentHeadcount ? ` (within ${fmtNum(c.team.parentHeadcount)} parent)` : "";
  return c.team.notes ? `${base}${parent}. ${c.team.notes}` : `${base}${parent}`;
}

export function formatLinkedIn(c: Competitor): string {
  if (c.linkedin.followers == null) return "N/A";
  return `${fmtNum(c.linkedin.followers)} followers${c.linkedin.isParentPage ? " (parent page)" : ""}`;
}

export function formatCustomers(c: Competitor): string {
  const parts: string[] = [];
  if (c.customers.totalCount) parts.push(`${fmtNum(c.customers.totalCount)}${c.customers.countLabel ? ` ${c.customers.countLabel}` : ""}`);
  if (c.customers.notable.length > 0) parts.push(c.customers.notable.join(", "));
  if (c.customers.notes) parts.push(c.customers.notes);
  return parts.join(". ") || "Not disclosed";
}

export function formatPricing(c: Competitor): string {
  const plans = c.pricing.plans.map(p => {
    if (p.pricePerUserMo) return `${p.name} $${p.pricePerUserMo}/user/mo`;
    if (p.priceFlatMo != null) return p.priceFlatMo === 0 ? `${p.name} (free)` : `${p.name} $${p.priceFlatMo.toLocaleString()}/mo`;
    return p.name;
  });
  const base = plans.join(". ");
  return c.pricing.notes ? `${base}. ${c.pricing.notes}` : base || "Not disclosed";
}

export function formatTraffic(c: Competitor): string {
  const parts: string[] = [];
  if (c.traffic.monthlyVisits) parts.push(`${fmtNum(c.traffic.monthlyVisits)} visits/mo`);
  if (c.traffic.marketSharePct) parts.push(`${c.traffic.marketSharePct}% market share`);
  if (c.traffic.notes) parts.push(c.traffic.notes);
  return parts.join(". ") || "Not available";
}

/* ── Shared UI ────────────────────────────────── */

export function SectionLabel({ children, variant }: { children: React.ReactNode; variant?: "danger" }) {
  return (
    <h4 className={`text-xs font-semibold mb-2 ${variant === "danger" ? "text-danger" : "text-text"}`}>
      {children}
    </h4>
  );
}

export function MetricBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border p-2">
      <div className="text-[10px] text-text-muted mb-0.5">{label}</div>
      <div className="text-xs text-text">{value}</div>
    </div>
  );
}

export function EmptyState({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center py-10">
      <p className="text-sm text-text-muted">{children}</p>
      <p className="text-xs text-text-muted mt-1">Deep research is being gathered — check back soon.</p>
    </div>
  );
}

/* ── Overview Tab ─────────────────────────────── */

export function OverviewTab({ c }: { c: Competitor }) {
  return (
    <div className="space-y-4">
      {c.dimensions.length > 0 && (
        <div>
          <SectionLabel>KOS Dimensions Matched</SectionLabel>
          <div className="flex flex-wrap gap-1.5">
            {c.dimensions.map((d) => (
              <span key={d} className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent font-medium">{d}</span>
            ))}
          </div>
        </div>
      )}
      <div>
        <SectionLabel>Product</SectionLabel>
        <p className="text-sm text-text-muted">{c.product}</p>
      </div>
      <div>
        <SectionLabel>Key Metrics</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <MetricBox label="Funding" value={formatFunding(c)} />
          <MetricBox label="Valuation" value={formatValuation(c)} />
          <MetricBox label="Revenue" value={formatRevenue(c)} />
          <MetricBox label="Team" value={formatTeam(c)} />
          <MetricBox label="LinkedIn" value={formatLinkedIn(c)} />
          <MetricBox label="Customers" value={formatCustomers(c)} />
          <MetricBox label="Pricing" value={formatPricing(c)} />
          <MetricBox label="Traffic" value={formatTraffic(c)} />
        </div>
      </div>
      <div>
        <SectionLabel variant="danger">Weaknesses</SectionLabel>
        <ul className="text-sm text-text-muted list-disc list-inside space-y-0.5">
          {c.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
        </ul>
      </div>
    </div>
  );
}

/* ── Positioning Tab ──────────────────────────── */

export function PositioningTab({ c }: { c: Competitor }) {
  const p = c.positioning;
  if (!p) return <EmptyState>Positioning data not yet available for this competitor.</EmptyState>;

  const techColor = (t: string) =>
    t === "high" ? "text-red-600 bg-red-50 border-red-200"
    : t === "medium" ? "text-amber-600 bg-amber-50 border-amber-200"
    : t === "low" ? "text-blue-600 bg-blue-50 border-blue-200"
    : "text-gray-600 bg-gray-50 border-gray-200";

  return (
    <div className="space-y-4">
      {p.targetUsers && p.targetUsers.length > 0 && (
        <div>
          <SectionLabel>Target Users{p.usersPerOrg ? ` (${p.usersPerOrg})` : ""}</SectionLabel>
          <div className="space-y-2">
            {p.targetUsers.map((u, i) => (
              <div key={i} className="rounded-lg border border-border p-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-text">{u.role}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${techColor(u.technical ?? "")}`}>{u.technical ?? u.techLevel}</span>
                </div>
                <p className="text-[11px] text-text-muted">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {p.excludes && p.excludes.length > 0 && (
        <div>
          <SectionLabel variant="danger">Who It Excludes</SectionLabel>
          <ul className="text-xs text-text-muted list-disc list-inside space-y-0.5">
            {p.excludes.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </div>
      )}
      {p.redOcean && p.redOcean.length > 0 && (
        <div>
          <SectionLabel>Red Ocean (Same as KOS)</SectionLabel>
          <ul className="text-xs text-text-muted list-disc list-inside space-y-0.5">
            {p.redOcean.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      )}
      {p.blueOceanKos && p.blueOceanKos.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold mb-2 text-green-700">KOS Has, They Don't</h4>
          <ul className="text-xs text-text-muted list-disc list-inside space-y-0.5">
            {p.blueOceanKos.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      )}
      {p.blueOceanThem && p.blueOceanThem.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold mb-2 text-amber-700">They Have, KOS Doesn't</h4>
          <ul className="text-xs text-text-muted list-disc list-inside space-y-0.5">
            {p.blueOceanThem.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ── Investors Tab ────────────────────────────── */

export function InvestorsTab({ c }: { c: Competitor }) {
  const deep = c.deep;
  if (!deep?.fundingRounds?.length && !deep?.keyInvestors?.length) {
    return <EmptyState>Investor data not yet available for this competitor.</EmptyState>;
  }
  return (
    <div className="space-y-4">
      {deep.keyInvestors && deep.keyInvestors.length > 0 && (
        <div>
          <SectionLabel>Key Investors</SectionLabel>
          <div className="flex flex-wrap gap-1.5">
            {deep.keyInvestors.map((inv) => (
              <span key={inv} className="text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 font-medium">{inv}</span>
            ))}
          </div>
        </div>
      )}
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
                  {r.investors && r.investors.length > 0 && <p className="text-text-muted mt-0.5">+ {r.investors.join(", ")}</p>}
                  {r.valuation && <p className="text-text-muted mt-0.5">Valuation: {r.valuation}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
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

export function MarketsTab({ c }: { c: Competitor }) {
  const deep = c.deep;
  if (!deep?.markets && !deep?.clientsByVertical?.length && !deep?.clientTimeline?.length) {
    return <EmptyState>Market and client data not yet available for this competitor.</EmptyState>;
  }
  return (
    <div className="space-y-4">
      {deep?.markets?.geos && deep.markets.geos.length > 0 && (
        <div>
          <SectionLabel>Geographic Markets</SectionLabel>
          <div className="flex flex-wrap gap-1.5">
            {deep.markets.geos.map((g) => (
              <span key={g} className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">{g}</span>
            ))}
          </div>
        </div>
      )}
      {deep?.markets?.verticals && deep.markets.verticals.length > 0 && (
        <div>
          <SectionLabel>Industry Verticals</SectionLabel>
          <div className="flex flex-wrap gap-1.5">
            {deep.markets.verticals.map((v) => (
              <span key={v} className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-medium">{v}</span>
            ))}
          </div>
        </div>
      )}
      {deep?.markets?.target && (
        <div>
          <SectionLabel>Target Segment</SectionLabel>
          <span className="text-xs px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 font-medium">{deep.markets.target}</span>
          {deep.markets.notes && <p className="text-xs text-text-muted mt-1.5">{deep.markets.notes}</p>}
        </div>
      )}
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
      {deep?.clientsByVertical && deep.clientsByVertical.length > 0 && (
        <div>
          <SectionLabel>Clients by Industry</SectionLabel>
          <div className="space-y-2">
            {deep.clientsByVertical.map((cv) => (
              <div key={cv.vertical}>
                <span className="text-xs font-medium text-text">{cv.vertical}</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {cv.clients.map((cl) => (
                    <span key={cl} className="text-[10px] px-1.5 py-0.5 rounded bg-surface-hover text-text-muted">{cl}</span>
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

export function GrowthTab({ c }: { c: Competitor }) {
  const deep = c.deep;
  if (!deep?.revenueTimeline?.length && !deep?.employeeTimeline?.length) {
    return <EmptyState>Growth data not yet available for this competitor.</EmptyState>;
  }
  return (
    <div className="space-y-4">
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
      <div>
        <SectionLabel>Current Snapshot</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <MetricBox label="Revenue" value={formatRevenue(c)} />
          <MetricBox label="Team" value={formatTeam(c)} />
          <MetricBox label="Traffic" value={formatTraffic(c)} />
        </div>
      </div>
    </div>
  );
}

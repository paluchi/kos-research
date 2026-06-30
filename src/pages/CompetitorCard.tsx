import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import type { Competitor } from "../data/competitors";

const statusVariant = (s: Competitor["status"]) =>
  s === "active" ? "success" : s === "dead" ? "danger" : "warning";

const statusLabel = (s: Competitor["status"]) =>
  s === "active" ? "Active" : s === "dead" ? "Shut down" : s === "maintenance" ? "Maintenance" : "Acquired";

const threatVariant = (t: number) =>
  t <= 2 ? "danger" : t === 3 ? "warning" : "success";

const threatLabel = (t: number) =>
  `T${t}`;

function fmtM(v: number): string {
  return v >= 1000 ? `$${(v / 1000).toFixed(1).replace(/\.0$/, "")}B` : `$${Math.round(v)}M`;
}

function fmtNum(n: number): string {
  return n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`
    : n >= 1_000 ? `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`
    : String(n);
}

function fmtFunding(c: Competitor): string {
  if (c.funding.isPublic) return `Public${c.funding.parentCompany ? ` (${c.funding.parentCompany})` : ""}`;
  if (c.funding.isBootstrapped) return "Bootstrapped";
  if (c.funding.totalRaisedM == null) return "Not disclosed";
  return fmtM(c.funding.totalRaisedM);
}

function fmtValuation(c: Competitor): string {
  if (c.valuation.amountM == null) return "N/A";
  return fmtM(c.valuation.amountM);
}

function fmtRevenue(c: Competitor): string {
  if (c.revenue.arrM != null) return `${fmtM(c.revenue.arrM)} ARR`;
  if (c.revenue.annualM != null) return `${c.revenue.isEstimated ? "~" : ""}${fmtM(c.revenue.annualM)}/yr`;
  return "N/A";
}

function fmtTeam(c: Competitor): string {
  if (c.team.headcount == null) return "N/A";
  return `${c.team.isApproximate ? "~" : ""}${c.team.headcount.toLocaleString()}`;
}

function fmtLinkedIn(c: Competitor): string {
  if (c.linkedin.followers == null) return "N/A";
  return fmtNum(c.linkedin.followers);
}

function fmtCustomers(c: Competitor): string {
  if (c.customers.notable.length > 0) return c.customers.notable.slice(0, 4).join(", ");
  if (c.customers.totalCount) return `${fmtNum(c.customers.totalCount)} ${c.customers.countLabel || "customers"}`;
  return "N/A";
}

function fmtPricing(c: Competitor): string {
  if (c.pricing.startingPricePerUserMo) return `From $${c.pricing.startingPricePerUserMo}/user/mo`;
  if (c.pricing.hasFreeTier) return "Free tier available";
  if (c.pricing.hasEnterpriseTier) return "Enterprise (custom)";
  return "N/A";
}

function fmtTraffic(c: Competitor): string {
  if (c.traffic.monthlyVisits) return `${fmtNum(c.traffic.monthlyVisits)}/mo`;
  return c.traffic.notes || "N/A";
}

interface Props {
  c: Competitor;
  onClick?: () => void;
}

export function CompetitorCard({ c, onClick }: Props) {
  return (
    <Card className="mb-3 cursor-pointer hover:border-accent/50 transition-colors" onClick={onClick}>
      {/* Header */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-text font-semibold text-base hover:text-accent transition-colors">
          {c.name}
        </span>
        <Badge label={threatLabel(c.threat)} variant={threatVariant(c.threat)} />
        <Badge label={c.tier} variant="accent" />
        <Badge label={statusLabel(c.status)} variant={statusVariant(c.status)} />
      </div>

      {/* Dimensions matched */}
      {c.dimensions.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {c.dimensions.map((d) => (
            <span
              key={d}
              className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent font-medium"
            >
              {d}
            </span>
          ))}
        </div>
      )}

      {/* Product */}
      <p className="text-sm mb-3">{c.product}</p>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs mb-3">
        <Metric label="Funding" value={fmtFunding(c)} />
        <Metric label="Valuation" value={fmtValuation(c)} />
        <Metric label="Revenue" value={fmtRevenue(c)} />
        <Metric label="Team" value={fmtTeam(c)} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs mb-3">
        <Metric label="LinkedIn" value={fmtLinkedIn(c)} />
        <Metric label="Customers" value={fmtCustomers(c)} />
        <Metric label="Pricing" value={fmtPricing(c)} />
        <Metric label="Traffic" value={fmtTraffic(c)} />
      </div>

      {/* Weaknesses */}
      <div className="text-xs mb-3">
        <span className="text-danger font-medium block mb-1">Weaknesses</span>
        <ul className="list-disc list-inside space-y-0.5">
          {c.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
        </ul>
      </div>

      {/* Sources */}
      {c.sources.length > 0 && (
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
        </div>
      )}
    </Card>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-text font-medium block mb-0.5">{label}</span>
      <span className="text-text-muted">{value}</span>
    </div>
  );
}

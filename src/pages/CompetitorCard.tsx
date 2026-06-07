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
        <Metric label="Funding" value={c.funding} />
        <Metric label="Valuation" value={c.valuation} />
        <Metric label="Revenue" value={c.revenue} />
        <Metric label="Team" value={c.team} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs mb-3">
        <Metric label="LinkedIn" value={c.linkedin} />
        <Metric label="Customers" value={c.customers} />
        <Metric label="Pricing" value={c.pricing} />
        <Metric label="Traffic" value={c.traffic} />
      </div>

      {/* Weaknesses */}
      <div className="text-xs mb-3">
        <span className="text-danger font-medium block mb-1">Weaknesses</span>
        <p>{c.weaknesses}</p>
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

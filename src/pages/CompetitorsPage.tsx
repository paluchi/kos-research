import { useState } from "react";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { competitors, categories } from "../data/competitors";
import { computeStats } from "../data/competitorStats";
import { CompetitorCard } from "./CompetitorCard";
import { CompetitorModal } from "./CompetitorModal";
import { downloadCompetitorsMarkdown } from "./exportMarkdown";
import { Download } from "lucide-react";
import type { Competitor } from "../data/competitors";

type StatusFilter = "all" | "active" | "dead" | "acquired" | "maintenance";

type ThreatFilter = "all" | 1 | 2 | 3 | 4 | 5;

const threatLabels: Record<number, string> = {
  1: "T1 — Direct competitor",
  2: "T2 — High overlap",
  3: "T3 — Partial overlap",
  4: "T4 — Tangential",
  5: "T5 — Not relevant",
};

export function CompetitorsPage() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [threatFilter, setThreatFilter] = useState<ThreatFilter>("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Competitor | null>(null);

  const filtered = competitors.filter((c) => {
    if (statusFilter !== "all" && c.status !== statusFilter) return false;
    if (categoryFilter !== "all" && c.category !== categoryFilter) return false;
    if (threatFilter !== "all" && c.threat !== threatFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.product.toLowerCase().includes(q) ||
        c.tier.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const stats = computeStats(competitors);

  return (
    <>
      <header className="mb-10 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text mb-3">Competitive Analysis</h1>
          <p className="text-text-muted">
            Deep research on {competitors.length} competitors across {categories.length} categories
            — funding, revenue, product, weaknesses, and sources.
          </p>
        </div>
        <button
          onClick={() => downloadCompetitorsMarkdown(competitors, categories)}
          title="Export all competitor data + notes as Markdown"
          className="shrink-0 inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-accent text-white hover:opacity-90 transition-opacity"
        >
          <Download size={16} />
          Export Markdown
        </button>
      </header>

      {/* Market snapshot */}
      <Section title="Market snapshot">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <StatCard value={stats.total} label="Total tracked" />
          <StatCard value={stats.activeCount} label="Active players" />
          <StatCard value={stats.deadCount} label="Dead / Acquired" />
          <StatCard value={stats.categories} label="Categories" />
          <StatCard value={stats.totalFunding} label="Combined funding (active)" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-3">
          <StatCard value={stats.t2Count} label="T2 threats (high overlap)" />
          <StatCard value={stats.t3Count} label="T3 threats (partial)" />
          <StatCard value={stats.avgDims} label="Avg dimensions / competitor" />
          <StatCard value={stats.withLLM} label="Have LLM Chat" />
          <StatCard value={`${stats.rarestDim} (${stats.rarestDimCount})`} label="Rarest KOS dimension" />
        </div>
      </Section>

      {/* Filters */}
      <Section title="Competitor profiles">
        <div className="mb-4 space-y-2">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by name, product, or tier..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
          />

          {/* Status filter */}
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs text-text-muted self-center mr-1">Status:</span>
            {(["all", "active", "dead", "acquired", "maintenance"] as StatusFilter[]).map((f) => (
              <FilterButton
                key={f}
                label={f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
                active={statusFilter === f}
                onClick={() => setStatusFilter(f)}
              />
            ))}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs text-text-muted self-center mr-1">Category:</span>
            <FilterButton
              label="All"
              active={categoryFilter === "all"}
              onClick={() => setCategoryFilter("all")}
            />
            {categories.map((cat) => (
              <FilterButton
                key={cat}
                label={cat}
                active={categoryFilter === cat}
                onClick={() => setCategoryFilter(cat)}
              />
            ))}
          </div>

          {/* Threat tier filter */}
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs text-text-muted self-center mr-1">Threat:</span>
            <FilterButton
              label="All"
              active={threatFilter === "all"}
              onClick={() => setThreatFilter("all")}
            />
            {([1, 2, 3, 4, 5] as const).map((t) => (
              <FilterButton
                key={t}
                label={threatLabels[t]}
                active={threatFilter === t}
                onClick={() => setThreatFilter(t)}
              />
            ))}
          </div>
        </div>

        <p className="text-xs text-text-muted mb-3">
          Showing {filtered.length} of {competitors.length}
        </p>

        {filtered.map((c) => (
          <CompetitorCard key={c.name} c={c} onClick={() => setSelected(c)} />
        ))}

        {filtered.length === 0 && (
          <Card>
            <p className="text-text-muted text-center py-6">No competitors match your filters.</p>
          </Card>
        )}
      </Section>

      {/* Key takeaways */}
      <Section title="Key takeaways">
        <div className="space-y-3">
          <Card title="Graveyard signal">
            DataGPT ($22M), Rows ($35M), Actiondesk ($4M), PopSQL ($18.5M), Hyperquery,
            Seek AI, and Outerbase — all dead, acquired, or absorbed. The market punishes
            AI analytics startups that can't find PMF fast enough. DataGPT killed their
            $99/mo tier to go enterprise-only with 14 people — and shut down months later.
          </Card>
          <Card title="The $100K+ gap">
            Enterprise BI (ThoughtSpot $100K+, Domo $50K+, Sigma $61K+, Tableau $42+/user)
            is expensive, warehouse-dependent, and complex to implement. Open-source
            (Metabase, Superset) lacks multi-tenancy and presentations. Consumer tools
            (Julius) have no team features. KOS sits in the whitespace.
          </Card>
          <Card title="Platform lock-in everywhere">
            Databricks Genie requires Databricks. Snowflake Cortex requires Snowflake.
            BigQuery AI requires Google Cloud. QuickSight requires AWS. Power BI requires
            Azure. Looker requires BigQuery. SAP requires SAP. Every major platform locks
            you in. KOS is cloud-agnostic — connect to any source.
          </Card>
          <Card title="KOS competitive advantages">
            <ul className="space-y-1.5">
              <li>- <b>14+ native database drivers</b> — no cloud warehouse dependency</li>
              <li>- <b>Multi-tenant RBAC</b> — tenant → scope → user, not "admin/member"</li>
              <li>- <b>Model-agnostic engine</b> — not locked to one AI provider</li>
              <li>- <b>End-to-end</b> — connect → query → visualize → present → automate</li>
              <li>- <b>Centralized knowledge</b> — shared team context that persists</li>
              <li>- <b>VPN/SSH tunneling</b> — secure access to on-prem databases</li>
              <li>- <b>Mid-market pricing</b> — not $100K+/yr enterprise-only</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Modal */}
      {selected && (
        <CompetitorModal c={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

function StatCard({ value, label }: { value: string | number; label: string }) {
  return (
    <Card>
      <div className="text-2xl font-bold text-accent">{value}</div>
      <div className="text-xs text-text-muted">{label}</div>
    </Card>
  );
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs px-2 py-0.5 rounded-full border transition-colors ${
        active
          ? "bg-accent text-white border-accent"
          : "border-gray-300 text-text-muted hover:border-accent hover:text-accent"
      }`}
    >
      {label}
    </button>
  );
}

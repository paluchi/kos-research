import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { DataTable } from "../components/DataTable";
import { painColumns, painPoints, platformComparison } from "./positioningData";

export function PositioningPage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-text mb-3">Positioning</h1>
        <p className="text-text-muted">
          Differentiation, competitive whitespace, and defensibility.
        </p>
      </header>

      <Section title="Pain points vs KOS solution">
        <DataTable columns={painColumns} rows={painPoints} />
      </Section>

      <Section
        title="KOS vs enterprise AI platforms"
        subtitle="What they have, what they'll build, what they won't — and where KOS is truly different"
      >
        {platformComparison.map((row) => (
          <Card key={row.dimension} className="mb-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-text font-semibold text-base">{row.dimension}</span>
              <Badge
                label={`Threat: ${row.threat}`}
                variant={row.threat === "high" ? "danger" : row.threat === "medium" ? "warning" : "success"}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {(["openai", "anthropic", "google"] as const).map((provider) => {
                const cell = row[provider];
                return (
                  <div key={provider}>
                    <span className="text-text font-medium block mb-1">
                      {provider === "openai" ? "OpenAI" : provider === "anthropic" ? "Anthropic" : "Google"}
                    </span>
                    <p>{cell.text}</p>
                    {cell.sources && cell.sources.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {cell.sources.map((s) => (
                          <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer"
                            className="text-[10px] text-accent hover:text-accent-hover underline underline-offset-2">
                            {s.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div>
                <span className="text-accent font-medium block mb-1">KOS</span>
                <p>{row.kos}</p>
              </div>
            </div>
          </Card>
        ))}
      </Section>

      <Section title="Threat assessment">
        <div className="space-y-3">
          <Card title="What they WILL build (accept it)">
            <ul className="space-y-1.5">
              <li>- <span className="text-text font-medium">More database connectors</span> — Google already has 40+ via MCP Toolbox, Anthropic has 418+ verified connectors, OpenAI adding MCP support. The connector gap will shrink.</li>
              <li>- <span className="text-text font-medium">Better in-chat visualization</span> — Claude Live Artifacts already generate interactive charts (D3, Plotly, React). ChatGPT Code Interpreter improving. Google has full Looker BI.</li>
              <li>- <span className="text-text font-medium">Enterprise RBAC</span> — OpenAI has 6 predefined roles + SCIM + SSO. Google has full IAM with Agent Identity. Anthropic RBAC still in beta but will mature.</li>
              <li>- <span className="text-text font-medium">Scheduled automation</span> — OpenAI has Tasks (max 10/user), Anthropic has Routines (max 25/day), Google has Cloud Workflows + Scheduler. All will expand limits.</li>
              <li>- <span className="text-text font-medium">Company knowledge bases</span> — OpenAI already has Company Knowledge (Enterprise). Google has Agentspace + Looker semantic layer. Anthropic will follow.</li>
              <li>- <span className="text-text font-medium">Broader data residency</span> — OpenAI already covers 9 regions. Google has sovereign cloud options. Anthropic will add EU hosting eventually.</li>
            </ul>
          </Card>
          <Card title="What they WON'T build (KOS advantage)">
            <ul className="space-y-1.5">
              <li>- <span className="text-text font-medium">True multi-tenancy</span> — all three serve one org per workspace. None support tenant → scope → user hierarchies. Multi-org management requires separate workspaces with no cross-org controls.</li>
              <li>- <span className="text-text font-medium">Cloud-agnostic data layer</span> — Google won't optimize for AWS databases. OpenAI has no infrastructure layer. Anthropic depends on Bedrock/Vertex for deployment. Each is locked to their own ecosystem.</li>
              <li>- <span className="text-text font-medium">Single-product data pipeline</span> — OpenAI needs 3-5 products to go from DB to report. Anthropic needs 2-3. Google needs 4-6 (BigQuery + Looker + Vertex AI + Cloud Run). None offer connect → query → visualize → present → automate in one interface.</li>
              <li>- <span className="text-text font-medium">Model-agnostic execution</span> — their tools are locked to their own models. KOS swaps LLMs without changing anything else. The brain is the orchestration layer, not the model.</li>
              <li>- <span className="text-text font-medium">Management centralization</span> — OpenAI: 4-7 admin surfaces, 2 separate SSO systems, 2 billing systems. Anthropic: 4-7 admin APIs, 2 identity domains. Google: 6-10 admin consoles, 15+ metered services. None offer a single pane of glass.</li>
              <li>- <span className="text-text font-medium">Predictable, accessible pricing</span> — OpenAI: $108K/year floor (150-seat minimum). Anthropic: $20 seat + unpredictable token costs (5-12x seat price). Google: $250K-$800K+/year full stack. All require significant upfront commitment or hidden variable costs.</li>
              <li>- <span className="text-text font-medium">Zero-engineer setup</span> — OpenAI needs engineers for MCP servers. Anthropic needs them for custom connectors. Google needs 3-5+ FTEs (data eng, LookML dev, cloud architect). KOS: plug in credentials, connect, query — no engineers required.</li>
              <li>- <span className="text-text font-medium">Persistent shared knowledge that learns</span> — Anthropic has no shared team memory. OpenAI's is fragmented across Projects/Memory/Files/Custom GPTs. Google's requires LookML expertise. None have a living knowledge base that captures business logic from conversations and shares it across all users.</li>
            </ul>
          </Card>
          <Card title="The real moat">
            <p className="mb-3">
              KOS is not competing on AI model quality — that{"'"}s commoditized and swappable.
              The moat is the <span className="text-text font-medium">orchestration layer</span>:
            </p>
            <ul className="space-y-1.5">
              <li>- <span className="text-text font-medium">Proprietary execution engine</span> purpose-built for data intelligence</li>
              <li>- <span className="text-text font-medium">14+ optimized connector drivers</span> — no MCP middleware, no third-party hosting, minutes to connect</li>
              <li>- <span className="text-text font-medium">Multi-tenant access control</span> that none of the three platforms support natively</li>
              <li>- <span className="text-text font-medium">One product, one interface, one bill</span> — vs 3-10 fragmented tools and admin surfaces</li>
              <li>- <span className="text-text font-medium">Model-agnostic by design</span> — swap Gemini, OpenAI, or local models without touching anything else</li>
              <li>- <span className="text-text font-medium">Minutes to first insight</span> — vs weeks (OpenAI/Anthropic) or months (Google) for live data analytics</li>
            </ul>
            <p className="mt-3 text-accent-hover">
              Platform vendors will always prioritize their own ecosystem.
              KOS works across all of them — and that{"'"}s exactly the point.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Entry wedge">
        <Card>
          <p className="text-text font-medium mb-2">
            First client: Alkira Living — lease management organization managing
            1,000+ properties.
          </p>
          <p>
            They do data analytics and presentation over SQL databases. Current
            stack includes PowerBI, large engineering team, decentralized
            knowledge. Their pain: complex databases with missing topology,
            engineers introducing errors, time wasted understanding connections,
            no centralized AI with access control.
          </p>
          <p className="mt-3 text-accent-hover">
            This is the beachhead: operations-heavy mid-market companies with
            SQL databases, engineering bottlenecks, and a need to democratize
            data access.
          </p>
        </Card>
      </Section>

    </>
  );
}

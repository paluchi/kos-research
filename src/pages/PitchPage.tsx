import { Section } from "../components/Section";
import { Card } from "../components/Card";

const capabilities = [
  { verb: "Query", desc: "Ask questions in natural language — KOS translates your query into whatever is needed to access your data source, whether it's a database, document, spreadsheet, or file" },
  { verb: "Explore", desc: "Browse schemas, understand table relationships, discover data topology" },
  { verb: "Analyze", desc: "Generate any kind of visualization — charts, tables, maps, dashboards, and custom visual outputs" },
  { verb: "Present", desc: "Create slide decks, multi-tab dashboards, pages, and forms — organize all your visualizations and share them" },
  { verb: "Automate", desc: "Schedule scripts, publish APIs, run recurring data jobs" },
  { verb: "Learn", desc: "Build a centralized knowledge base that captures business logic, edge cases, and context — shared across your entire team" },
  { verb: "Extend", desc: "Built-in optimized connectors for major data sources, plus MCP support and custom API-based connectors — build your own brain that not only reads data but can also take actions" },
];


export function PitchPage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-text mb-3">Product Pitch</h1>
        <p className="text-lg text-accent-hover leading-relaxed max-w-3xl">
          KOS is an AI-powered data intelligence & analytics platform. Connect
          structured and unstructured data sources, centralize your
          organization's knowledge, and let any team query, visualize, and
          automate — with enterprise-grade access control built in.
        </p>
      </header>

      <Section title="What it does">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {capabilities.map((c) => (
            <Card key={c.verb}>
              <span className="text-accent-hover font-semibold">{c.verb}</span>
              {" — "}
              {c.desc}
            </Card>
          ))}
        </div>
      </Section>

      <Section title="How it works" subtitle="Model-agnostic, proprietary execution engine">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Card title="Foundational Model (Fuel)">
            KOS is model-agnostic. Use Google Gemini, OpenAI, or even your own
            self-hosted model. The LLM provides the reasoning — KOS provides
            everything else.
          </Card>
          <Card title="KOS Engine (Brain)">
            A proprietary execution engine that bridges any LLM to your data.
            It handles tool orchestration, access control, knowledge
            management, and multi-step agentic workflows.
          </Card>
          <Card title="Tools & Connectors (App Layer)">
            A plug-and-play suite of built-in connectors and tools that let
            KOS connect to all your sources, query them, visualize results,
            generate outputs, and take actions on your behalf.
          </Card>
        </div>
        <Card className="mt-3">
          <div className="font-mono text-xs text-text-muted leading-loose text-center">
            Your LLM → KOS Engine → Tools & Connectors → Your Data Sources
          </div>
        </Card>
      </Section>

      <Section title="Access control" subtitle="Multi-tenant RBAC">
        <Card>
          <div className="space-y-2">
            <p>
              <span className="text-text font-medium">Tenant</span> — organization
              level. Owns scopes, connectors, users.
            </p>
            <p>
              <span className="text-text font-medium">Scope</span> — department or
              location within a tenant. Resources can be scoped.
            </p>
            <p>
              <span className="text-text font-medium">User</span> — individual with
              role-based access (superuser, editor, reader) per scope.
            </p>
            <p>
              <span className="text-text font-medium">Visibility</span> — each
              resource (connector, chat, vault, knowledge) has tenant / scope /
              user-level visibility controls.
            </p>
          </div>
        </Card>
      </Section>

      <Section title="Business model">
        <Card>
          Subscription-based with a shared quota across all organization
          members, renewed monthly. Pay yearly with a discount or monthly —
          upgrade or downgrade anytime based on your usage.
        </Card>
      </Section>
    </>
  );
}

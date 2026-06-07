import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";

const objections = [
  {
    objection: "We already have PowerBI / Tableau",
    frequency: "Very common",
    variant: "danger" as const,
    reality: "70%+ of mid-market already has a BI tool. Typical PowerBI deployment: 15-25% monthly active users vs licensed.",
    counter: "KOS achieves higher adoption because chat has zero learning curve. Position as complement, not replacement. Start with one use case they can't do well today (e.g., cross-database queries, NL analytics for non-technical users).",
  },
  {
    objection: "Security concerns with AI accessing our data",
    frequency: "#1 for AI tools",
    variant: "danger" as const,
    reality: "Data teams and CISOs are nervous about LLMs seeing sensitive data. They ask: does AI send data externally? Can it be prompt-injected? Where is data processed? Does AI respect row-level security?",
    counter: "KOS queries in-place — data doesn't leave their infrastructure. Multi-tenant RBAC built-in with visibility controls. EU hosting available. Clear architecture diagram showing data flow.",
  },
  {
    objection: "Migration cost / switching cost",
    frequency: "Common",
    variant: "warning" as const,
    reality: "\"We have 500 dashboards in Tableau. Who rebuilds them?\" \"Our team knows PowerBI — retraining costs money.\"",
    counter: "Don't migrate. Start with one department or use case. Prove value in 30 days. KOS complements, doesn't require ripping out existing tools.",
  },
  {
    objection: "We can build this ourselves",
    frequency: "CTOs say this",
    variant: "warning" as const,
    reality: "Engineering leaders at tech-savvy companies. They probably already tried. Internal BI tools take 6-18 months and are never maintained.",
    counter: "280+ releases of the devkit alone. Building this properly = years of work on prompt caching, agentic loops, multi-tenant access control, connector drivers, knowledge management.",
  },
  {
    objection: "Vendor risk — will you exist in 3 years?",
    frequency: "Legitimate",
    variant: "warning" as const,
    reality: "Mid-market companies worry about startups disappearing.",
    counter: "Paying customers, active development (280+ releases), open data formats, export capabilities. Offer contractual data portability guarantees.",
  },
  {
    objection: "Budget / timing",
    frequency: "Soft no",
    variant: "default" as const,
    reality: "Spanish mid-market analytics budgets: 30-40% lower than UK. Most set budgets in Q4. Selling Q2-Q3 means discretionary budget or waiting.",
    counter: "Usage-based pricing, start small. Show ROI calculation: engineer hours saved vs KOS cost. Find the champion who has discretionary budget.",
  },
  {
    objection: "Need to involve more stakeholders",
    frequency: "Always",
    variant: "default" as const,
    reality: "Translation: \"I'm not the decision-maker\" or \"I need political cover.\" Enterprise: 6-10 stakeholders. Mid-market: 3-5.",
    counter: "Help the champion build the internal case. Provide ROI templates, security documentation, architecture diagrams they can forward.",
  },
];

export function ObjectionsPage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-text mb-3">Sales Objections</h1>
        <p className="text-text-muted">
          Common objections, what they really mean, and how to handle them.
        </p>
      </header>

      <Section title="Objection playbook">
        {objections.map((o) => (
          <Card key={o.objection}>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-text font-semibold text-base">
                "{o.objection}"
              </span>
              <Badge label={o.frequency} variant={o.variant} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-text font-medium block mb-1.5">
                  Reality
                </span>
                <p>{o.reality}</p>
              </div>
              <div>
                <span className="text-accent-hover font-medium block mb-1.5">
                  Counter
                </span>
                <p>{o.counter}</p>
              </div>
            </div>
          </Card>
        ))}
      </Section>
    </>
  );
}

import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";

const buyers = [
  {
    role: "Head of Data / Director of Analytics",
    context: "Mid-market (200-2K employees)",
    desc: "Most common decision-maker. Owns the budget, feels the pain daily, champions the tool internally.",
  },
  {
    role: "CTO / VP Engineering",
    context: "Mid-market",
    desc: "Signs off when the platform touches infrastructure or has security implications. Often has veto power.",
  },
  {
    role: "CFO / VP Finance",
    context: "When use case is financial",
    desc: "Buyer when the use case is financial reporting, FP&A, or operational efficiency.",
  },
  {
    role: "Chief Data Officer (CDO)",
    context: "Enterprise (2K+ employees)",
    desc: "Standard in large enterprises. Owns data strategy and analytics budget.",
  },
];

const users = [
  {
    role: "Data Analyst",
    pct: "30-40%",
    level: "High (SQL, Python)",
    tools: "DBeaver, DataGrip, Jupyter, Tableau, PowerBI",
    needs: "Fast querying, shareable dashboards, version control",
  },
  {
    role: "Business Analyst",
    pct: "20-30%",
    level: "Medium (Excel, basic SQL)",
    tools: "Excel, PowerBI, Google Sheets, Looker",
    needs: "Self-service without waiting for data team",
  },
  {
    role: "Operations Manager",
    pct: "15-20%",
    level: "Low (reads dashboards)",
    tools: "Email reports, PowerPoint, embedded dashboards",
    needs: "Scheduled reports, alerts when KPIs move",
  },
  {
    role: "Executive",
    pct: "5-10%",
    level: "Very low",
    tools: "Whatever is emailed to them",
    needs: "Single screen with KPIs, NL questions like 'How did Q2 compare?'",
  },
];

const triggers = [
  { trigger: "Tool sprawl", desc: "Teams using 4-5 different tools. Leadership wants consolidation." },
  { trigger: "New data leader hired", desc: "New CDO/Head of Analytics audits and replaces stack within 6-12 months." },
  { trigger: "Cloud migration", desc: "Moving to AWS/GCP/Azure — existing BI doesn't connect well." },
  { trigger: "Board pressure", desc: "Board asks for better dashboards or real-time KPIs." },
  { trigger: "Renewal shock", desc: "Tableau/PowerBI license renewal with steep price increase." },
  { trigger: "AI hype cycle", desc: "Executives hear about 'AI analytics' and want NL querying." },
  { trigger: "Compliance event", desc: "Failed audit or GDPR incident forces rethinking data access." },
];

export function PersonasPage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-text mb-3">Personas</h1>
        <p className="text-text-muted">
          Who buys, who uses, and what triggers the purchase.
        </p>
      </header>

      <Section title="Buyers" subtitle="Who signs the check">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {buyers.map((b) => (
            <Card key={b.role}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-text font-semibold">{b.role}</span>
                <Badge label={b.context} />
              </div>
              <p>{b.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Users" subtitle="Who uses it daily">
        {users.map((u) => (
          <Card key={u.role}>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-text font-semibold">{u.role}</span>
              <Badge label={u.pct} variant="accent" />
              <Badge label={u.level} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mt-2">
              <div>
                <span className="text-text font-medium block mb-1">Current tools</span>
                {u.tools}
              </div>
              <div>
                <span className="text-text font-medium block mb-1">Needs</span>
                {u.needs}
              </div>
            </div>
          </Card>
        ))}
      </Section>

      <Section title="Purchase triggers" subtitle="What makes them start looking">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {triggers.map((t) => (
            <Card key={t.trigger} title={t.trigger}>
              {t.desc}
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Key insight">
        <Card>
          <p className="text-text">
            The biggest failure mode for BI tools is that they are bought for
            business users but built for data analysts. If business analysts and
            operations managers can't self-serve, the tool becomes "the data
            team's tool" and usage collapses to 10-15% of licenses purchased.
          </p>
          <p className="mt-3 text-accent-hover font-medium">
            KOS solves this because chat has zero learning curve.
          </p>
        </Card>
      </Section>
    </>
  );
}

import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { DataTable } from "../components/DataTable";

const marketData = [
  { segment: "BI Software", value2025: "$40B", projected: "$81B (2033)", cagr: "9.3%" },
  { segment: "AI Enterprise Intelligence", value2025: "$18B", projected: "$63B (2034)", cagr: "14.3%" },
  { segment: "BI + Analytics Combined", value2025: "$44B", projected: "$96B (2035)", cagr: "8.9%" },
];

const marketColumns = [
  { key: "segment" as const, label: "Segment" },
  { key: "value2025" as const, label: "2025" },
  { key: "projected" as const, label: "Projected" },
  { key: "cagr" as const, label: "CAGR" },
];

const drivers = [
  "Integration of generative AI and agentic workflows into BI",
  "Adoption of cloud-based analytics tools",
  "Demand for real-time insights across operational databases",
  "Democratization of data access beyond technical users",
  "EU digitalization funds (Next Generation) fueling SMB adoption",
];

const spainInsights = [
  { title: "Market maturity", desc: "Spain is 2-3 years behind UK/Nordics in analytics adoption — less competition, more greenfield accounts." },
  { title: "PowerBI dominance", desc: "Microsoft 365 bundling makes PowerBI the default. But typical adoption is 15-25% of licensed users." },
  { title: "Qlik presence", desc: "Historical market share in Spain and LATAM. Some mid-market still runs QlikView." },
  { title: "SAP in large enterprise", desc: "IBEX 35 companies (Telefonica, Repsol, Inditex) run SAP Analytics Cloud or legacy BusinessObjects." },
  { title: "Sales culture", desc: "Relationship-driven. LinkedIn cold outreach converts lower than US. Events and referrals are more effective." },
  { title: "Price sensitivity", desc: "Spanish mid-market budgets are 30-40% lower than equivalent UK companies." },
  { title: "Decision cycles", desc: "6-12 months mid-market, 12-18 months enterprise. More risk-averse with new vendors." },
  { title: "Languages", desc: "Spanish-language product is a competitive advantage. Most competitors are English-only." },
];

export function MarketPage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-text mb-3">Market Research</h1>
        <p className="text-text-muted">
          Market sizing, growth drivers, and geographic focus analysis.
        </p>
      </header>

      <Section title="Market size" subtitle="AI-specific segment grows at nearly 2x the overall BI market">
        <DataTable columns={marketColumns} rows={marketData} />
      </Section>

      <Section title="Growth drivers">
        <Card>
          <ul className="space-y-2">
            {drivers.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">-</span>
                {d}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Why now?">
        <Card>
          <p>
            The rise of capable AI models (2023-2026) enabled a new class of
            products that can communicate with external systems — not just
            generate text but actually <span className="text-text font-medium">execute queries</span>,{" "}
            <span className="text-text font-medium">browse schemas</span>, and{" "}
            <span className="text-text font-medium">orchestrate multi-step workflows</span>{" "}
            across databases and APIs. This was not possible 3 years ago. The
            technology matured at the exact moment enterprises are looking to
            democratize data access.
          </p>
        </Card>
      </Section>

      <Section title="Geographic focus: Spain" subtitle="Entry market, then EU expansion">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {spainInsights.map((item) => (
            <Card key={item.title} title={item.title}>
              {item.desc}
            </Card>
          ))}
        </div>
      </Section>

      <Section title="EU regulatory landscape">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Card title="GDPR">
            Data residency is non-negotiable. EU companies require processing
            within the EU. A GDPR-compliant DPA is legally required before
            handling personal data.
          </Card>
          <Card title="EU AI Act">
            Coming into full force 2025-2026. If AI supports decisions affecting
            people (HR, credit, segmentation), transparency and risk assessment
            requirements apply.
          </Card>
          <Card title="DORA">
            For financial services clients — adds requirements around third-party
            ICT risk management. Banks and insurers will ask about DORA compliance.
          </Card>
          <Card title="CSRD">
            Corporate Sustainability Reporting Directive requires ESG metric
            reporting — creates demand for analytics platforms handling
            sustainability data.
          </Card>
        </div>
      </Section>
    </>
  );
}

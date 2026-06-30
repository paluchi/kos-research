export const marketSegments = [
  { segment: "BI Software (Global)", value2025: "$33-40B", projected: "$81B (2033)", cagr: "9.3%", source: "Grand View Research" },
  { segment: "AI in Enterprise Analytics", value2025: "$24B", projected: "$155B (2030)", cagr: "37.6%", source: "Grand View Research" },
  { segment: "Self-Service BI", value2025: "$7-12B", projected: "$12-29B (2030)", cagr: "11-18%", source: "Mordor Intelligence" },
  { segment: "Conversational AI", value2025: "$14.8B", projected: "$82B (2034)", cagr: "21.0%", source: "Fortune Business Insights" },
  { segment: "GenAI in Analytics", value2025: "$1.6B", projected: "$10.9B (2033)", cagr: "26.8%", source: "Metastat Insights" },
  { segment: "Data Analytics Platforms", value2025: "$70B", projected: "$302B (2030)", cagr: "28.7%", source: "Grand View Research" },
  { segment: "Europe BI Software", value2025: "$9-14B", projected: "$20-27B (2033)", cagr: "~10%", source: "MarketDataForecast" },
];

export const marketColumns = [
  { key: "segment" as const, label: "Segment" },
  { key: "value2025" as const, label: "2025 Size" },
  { key: "projected" as const, label: "Projected" },
  { key: "cagr" as const, label: "CAGR" },
  { key: "source" as const, label: "Source" },
];

export const tamSamSom = [
  {
    label: "TAM",
    title: "Total Addressable Market",
    value: "$10-15B",
    desc: "Self-service BI ($10B) + GenAI in Analytics ($1.6B) + conversational AI applied to analytics. This is the global market for AI-powered, self-service data intelligence platforms.",
  },
  {
    label: "SAM",
    title: "Serviceable Addressable Market",
    value: "$1.5-2.5B",
    desc: "Europe BI market ($9-14B) filtered for mid-market companies (~22-25% of BI revenue = $2-3.5B), further filtered for SQL-database-centric companies (~60-70%) = $1.5-2.5B.",
  },
  {
    label: "SOM",
    title: "Serviceable Obtainable Market (Years 1-3)",
    value: "EUR 3-30M",
    desc: "Spain: ~23,000 mid-market companies. At 0.5-2% penetration (115-460 customers) with EUR 15-30K ACV = EUR 1.7-13.8M. Expanding to broader EU mid-market in year 2-3: 200-1,000 customers = EUR 3-30M.",
  },
];

export const adoptionStats = [
  { stat: "Employees who actively use BI tools in orgs that have them", value: "25-29%", source: "IBM / DataStackHub" },
  { stat: "Enterprises with at least one BI platform deployed", value: "78%+", source: "G2" },
  { stat: "Employees who NEVER touch BI tools they're licensed for", value: "71-75%", source: "Derived from IBM/G2" },
  { stat: "Power BI active monthly users", value: "30M+", source: "ElectroIQ" },
  { stat: "Power BI usage in Fortune 500", value: "97%", source: "ElectroIQ" },
  { stat: "Data analyst time spent on ad-hoc requests", value: "30-70%", source: "OWOX" },
  { stat: "Engineer time on incident response vs building", value: "30-40%", source: "Fabi.ai" },
  { stat: "Organizations using AI in at least one function", value: "88%", source: "McKinsey" },
  { stat: "Companies deploying GenAI for core functions", value: "71%", source: "O-Mega AI" },
  { stat: "Average annual AI investment per org", value: "$6.5M", source: "Netguru" },
];

export const adoptionColumns = [
  { key: "stat" as const, label: "Metric" },
  { key: "value" as const, label: "Value" },
  { key: "source" as const, label: "Source" },
];

export const dataTeamCosts = [
  { role: "Data Engineer", us: "$131-137K", spain: "~EUR 45-60K" },
  { role: "Senior Data Engineer", us: "$117-180K", spain: "~EUR 55-80K" },
  { role: "Data Analyst", us: "$83-94K", spain: "~EUR 30-45K" },
  { role: "BI Developer", us: "$95-120K", spain: "~EUR 40-55K" },
  { role: "Minimal data team (4 people)", us: "$450-600K/yr", spain: "~EUR 200-350K/yr" },
];

export const dataTeamColumns = [
  { key: "role" as const, label: "Role" },
  { key: "us" as const, label: "US (annual)" },
  { key: "spain" as const, label: "Spain/EU (annual)" },
];

export const drivers = [
  "Integration of generative AI and agentic workflows into BI — every vendor is adding it, but none are AI-native",
  "Adoption of cloud-based analytics tools reducing entry costs from $500K+ to <$50K/year",
  "Demand for real-time insights across operational databases, not just data warehouses",
  "Democratization of data access beyond technical users — 75% of licensed BI users never touch the tools",
  "EU digitalization funds (Next Generation EU) fueling SMB adoption — EUR 4.7B for Spain alone",
  "Gartner: GenAI and AI agents will create a $58B market shakeup in productivity tools by 2027",
  "Forrester: 3 out of 4 firms building agentic architectures on their own will fail — opening the door for purpose-built platforms",
];

export const aiDisruption = [
  { insight: "Every BI vendor now claims genAI and agentic AI capabilities", source: "Forrester Wave Q2 2025", detail: "But they're retrofitting AI onto legacy architectures. AI-native platforms have a structural advantage." },
  { insight: "By 2025-2026, 50% of analytics queries will be via NLP or voice", source: "Gartner", detail: "The shift from dashboard-first to conversation-first analytics is accelerating." },
  { insight: "GenAI is leveling the BI playing field", source: "Forrester", detail: "All vendors build on the same LLMs. Differentiation comes from orchestration, connectors, and UX — not model quality." },
  { insight: "AI-powered analytics is 95% faster than traditional BI", source: "Suzano case study / Querio", detail: "50,000 employees got instant data access. Audit time: 14 days → 1 hour." },
  { insight: "66% of organizations report AI productivity gains", source: "BoldBI", detail: "But fewer than 1/3 of enterprises link AI to tangible financial growth — execution gap remains." },
  { insight: "Half of business decisions will be augmented or automated by AI agents", source: "Gartner 2026", detail: "The transition from 'AI-assisted' to 'AI-first' analytics is a generational platform shift." },
];

export const buyerSegments = [
  { segment: "Large Enterprise (>1000)", share: "~61%", trend: "Dominant but share declining slowly", opportunity: "Long sales cycles (12-18mo), high ACV, complex procurement. Not KOS's initial target." },
  { segment: "Mid-Market (100-1000)", share: "~22-25%", trend: "Fastest growing segment", opportunity: "KOS sweet spot. Can't afford $450K+ data teams but need data intelligence. Decision cycles: 6-12 months." },
  { segment: "SMB (<100)", share: "~15-17%", trend: "Growing rapidly via cloud BI", opportunity: "Price sensitive. Self-serve. Low ACV but high volume. Future expansion for KOS." },
];

export const buyerColumns = [
  { key: "segment" as const, label: "Segment" },
  { key: "share" as const, label: "Market Share" },
  { key: "trend" as const, label: "Trend" },
  { key: "opportunity" as const, label: "KOS Opportunity" },
];

export const spainInsights = [
  { title: "Digital transformation market", desc: "~USD 42B (2025), projected USD 110B by 2031. CAGR 17.6%. Spain is investing heavily in digital infrastructure." },
  { title: "Kit Digital program", desc: "EUR 3B in government grants for SME digitalization. 1.5M SMEs targeted over 5 years. Direct funding for tools like KOS." },
  { title: "NGEU allocation", desc: "Spain received EUR 140B total (grants + loans). EUR 4.7B specifically for SME digitalization." },
  { title: "Target companies", desc: "~18,800 medium-sized firms (50-249 employees) + ~4-5K with 250-999 employees = ~23,000 mid-market targets in Spain." },
  { title: "Market maturity", desc: "Spain is 2-3 years behind UK/Nordics in analytics adoption — less competition, more greenfield accounts." },
  { title: "PowerBI dominance", desc: "Microsoft 365 bundling makes PowerBI the default. But typical adoption is 15-25% of licensed users — the rest still use Excel." },
  { title: "Price sensitivity", desc: "Spanish mid-market budgets are 30-40% lower than equivalent UK companies. Competitive pricing is essential." },
  { title: "Sales culture", desc: "Relationship-driven. LinkedIn cold outreach converts lower than US. Events, referrals, and government program partnerships are more effective." },
  { title: "Language advantage", desc: "Spanish-language product is a competitive moat. Most AI analytics competitors are English-only." },
  { title: "Decision cycles", desc: "6-12 months mid-market, 12-18 months enterprise. More risk-averse with new vendors than US/UK buyers." },
];

export const euRegulations = [
  { name: "GDPR", desc: "Data residency is non-negotiable. EU companies require processing within the EU. A GDPR-compliant DPA is legally required before handling personal data. KOS's cloud-agnostic deployment supports EU-only hosting." },
  { name: "EU AI Act", desc: "Coming into full force 2025-2026. If AI supports decisions affecting people (HR, credit, segmentation), transparency and risk assessment requirements apply. KOS's model-agnostic approach and audit trail support compliance." },
  { name: "DORA", desc: "For financial services clients — adds requirements around third-party ICT risk management. Banks and insurers will ask about DORA compliance before onboarding any AI platform." },
  { name: "CSRD", desc: "Corporate Sustainability Reporting Directive requires ESG metric reporting — creates demand for analytics platforms handling sustainability data. A potential vertical for KOS." },
];

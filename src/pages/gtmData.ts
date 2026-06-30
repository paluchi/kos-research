export const buyers = [
  {
    role: "Head of Data / Director of Analytics",
    context: "Mid-market (200-2K employees)",
    desc: "Most common decision-maker. Owns the budget, feels the pain daily, champions the tool internally. Speaks SQL, understands dashboards, frustrated by request queues.",
    painPoints: "Team spends 30-70% on ad-hoc requests. Hiring analysts is slow and expensive. BI adoption is 15-25% across the org.",
    kosHook: "Show them the NL-to-SQL demo on their own database schema. They'll see the adoption gap close in real time.",
  },
  {
    role: "CTO / VP Engineering",
    context: "Mid-market",
    desc: "Signs off when the platform touches infrastructure or has security implications. Often has veto power. Cares about architecture, API design, and data flow.",
    painPoints: "Engineers drowning in ad-hoc data requests instead of building product. Fragmented tool stack. Security concerns with shadow AI usage.",
    kosHook: "Architecture diagram showing data stays in their infra. Multi-tenant RBAC. Model-agnostic = no vendor lock-in. API publishing for automations.",
  },
  {
    role: "CFO / VP Finance",
    context: "Financial use cases",
    desc: "Buyer when the use case is financial reporting, FP&A, or operational efficiency. Cares about ROI, cost reduction, and compliance.",
    painPoints: "Manual Excel/PowerPoint reporting cycles. Data team costs $200-600K/yr. Can't get answers without filing tickets.",
    kosHook: "ROI calculator: hours saved on reporting × engineer hourly rate. Show them the report automation and scheduled scripts.",
  },
  {
    role: "COO / Operations Director",
    context: "Operations-heavy orgs",
    desc: "In property management, logistics, retail — whoever owns the operational data. Needs real-time visibility into KPIs without waiting for IT.",
    painPoints: "Manages by spreadsheets and email. No self-service access to operational databases. Reports arrive days late.",
    kosHook: "Live dashboard from their operational DB in 10 minutes. Scheduled daily email reports. NL queries: 'Which properties had maintenance requests last week?'",
  },
  {
    role: "Chief Data Officer (CDO)",
    context: "Enterprise (2K+)",
    desc: "Standard in large enterprises. Owns data strategy and analytics budget. Evaluates against Gartner Magic Quadrant criteria.",
    painPoints: "Low BI adoption. Data governance gaps. Multiple tools with no unified access control. Pressure from board on AI strategy.",
    kosHook: "Centralized knowledge + multi-tenant RBAC + model-agnostic. Position as the governed AI analytics layer their existing stack is missing.",
  },
];

export const users = [
  {
    role: "Data Analyst",
    pct: "30-40%",
    level: "High (SQL, Python)",
    tools: "DBeaver, DataGrip, Jupyter, Tableau, PowerBI",
    needs: "Fast querying, shareable dashboards, version control, schema exploration",
    kosValue: "Query any connected DB in NL or SQL. Auto-generated visualizations. Schema explorer with AI-documented relationships. Saves hours per day on ad-hoc requests.",
  },
  {
    role: "Business Analyst",
    pct: "20-30%",
    level: "Medium (Excel, basic SQL)",
    tools: "Excel, PowerBI, Google Sheets, Looker",
    needs: "Self-service without waiting for data team. Drag-and-drop dashboards. Export to PowerPoint.",
    kosValue: "NL queries eliminate the SQL barrier. Export to PPTX/PDF/Excel. Build dashboards without engineering help. The 75% of BI users who never touch Tableau — this is their tool.",
  },
  {
    role: "Operations Manager",
    pct: "15-20%",
    level: "Low (reads dashboards)",
    tools: "Email reports, PowerPoint, embedded dashboards",
    needs: "Scheduled reports, alerts when KPIs move, real-time operational visibility",
    kosValue: "Scheduled scripts deliver reports automatically. NL questions: 'Show me occupancy rates above 90%'. Zero learning curve — just chat.",
  },
  {
    role: "Executive (C-suite / VP)",
    pct: "5-10%",
    level: "Very low",
    tools: "Whatever is emailed or presented to them",
    needs: "Single screen with KPIs. Ad-hoc questions like 'How did Q2 compare?' without waiting for analyst.",
    kosValue: "Dashboard pages with live KPIs. NL queries for ad-hoc exploration. Presentations generated from live data. No training needed.",
  },
  {
    role: "IT / DevOps",
    pct: "5%",
    level: "High (infra)",
    tools: "Cloud consoles, Terraform, monitoring tools",
    needs: "Secure deployment. SSO integration. Audit logs. No shadow AI.",
    kosValue: "Multi-tenant RBAC, SSO support, audit trail, VPN/SSH tunneling. One platform to govern instead of individual ChatGPT accounts.",
  },
];

export const triggers = [
  { trigger: "Tool sprawl", desc: "Teams using 4-5 different tools (Excel + PowerBI + Jupyter + Slack bots + ChatGPT). Leadership wants consolidation into one governed platform.", frequency: "Very common" },
  { trigger: "New data leader hired", desc: "New CDO/Head of Analytics audits and replaces stack within 6-12 months. They want to make their mark. Best window to sell.", frequency: "Common" },
  { trigger: "Cloud migration", desc: "Moving to AWS/GCP/Azure — existing on-premise BI doesn't connect well. Window to introduce cloud-native tools.", frequency: "Common" },
  { trigger: "Board pressure on AI", desc: "Board asks 'What's our AI strategy?' — executives scramble to show they're adopting AI for data analytics.", frequency: "Growing fast" },
  { trigger: "Renewal shock", desc: "Tableau/PowerBI/Looker license renewal with steep price increase. Especially painful when only 15-25% of licenses are actively used.", frequency: "Common" },
  { trigger: "Compliance event", desc: "Failed audit or GDPR incident forces rethinking data access controls. Shadow AI (individual ChatGPT usage with company data) flagged as risk.", frequency: "Increasing" },
  { trigger: "Data team burnout/turnover", desc: "Key analyst or engineer leaves. Backlog explodes. Management realizes they need tooling, not just headcount.", frequency: "Very common" },
  { trigger: "Budget cycle (Q4)", desc: "Most companies set budgets in Q4. Best time to close deals. Selling Q2-Q3 means discretionary budget or building the case for Q4.", frequency: "Seasonal" },
];

export const salesCycle = [
  { stage: "Awareness", duration: "Ongoing", activities: "LinkedIn content, events, referrals, Kit Digital program partnerships. Cold outreach converts lower in Spain — warm intros are critical.", kos: "Publish case studies, ROI calculators, demo videos. Position KOS in Kit Digital vendor lists." },
  { stage: "Discovery", duration: "1-2 weeks", activities: "Understand their data stack, pain points, budget, decision-makers. Map stakeholders (3-5 in mid-market, 6-10 in enterprise).", kos: "Ask: What databases? What BI tools? Who uses them? What % adoption? What's the ad-hoc request backlog?" },
  { stage: "Demo / POC", duration: "2-4 weeks", activities: "Connect to their actual database. Show NL queries on their data. Build a dashboard they can share internally. This is the make-or-break moment.", kos: "10-minute live connection to their DB. NL query on their schema. Auto-generated dashboard. Send them a link they can show their boss." },
  { stage: "Evaluation", duration: "2-6 weeks", activities: "Security review (CTO/CISO). Procurement process. Legal review of DPA. Comparison with alternatives. Internal champion builds the case.", kos: "Provide: architecture diagram, security whitepaper, DPA template, ROI spreadsheet, competitive comparison. Help the champion sell internally." },
  { stage: "Negotiation", duration: "1-3 weeks", activities: "Pricing, contract terms, SLA, data residency commitments. Spain: expect 30-40% lower budgets than UK. Annual vs monthly.", kos: "Flexible pricing. Start small (one department). Annual discount. EU hosting commitment. Data portability guarantee." },
  { stage: "Close", duration: "1 week", activities: "Signature. Onboarding plan. Success criteria defined.", kos: "30-day success plan: connect DBs, train 5 key users, build 3 dashboards, measure adoption." },
];

export const salesCycleColumns = [
  { key: "stage" as const, label: "Stage" },
  { key: "duration" as const, label: "Duration" },
  { key: "activities" as const, label: "Activities" },
  { key: "kos" as const, label: "KOS Playbook" },
];

export const objections = [
  {
    objection: "We already have PowerBI / Tableau",
    frequency: "Very common",
    variant: "danger" as const,
    reality: "70%+ of mid-market already has a BI tool. Typical PowerBI deployment: 15-25% monthly active users vs licensed. The other 75% are stuck in Excel or filing tickets to the data team.",
    counter: "Don't replace — complement. 'Your analysts keep using PowerBI. KOS gives everyone else access too.' Start with one use case they can't do today: cross-database queries, NL analytics for non-technical users, or automated reporting.",
    proof: "Show the adoption gap: 'You have 500 PowerBI licenses. How many people logged in last month?' The answer is always painful.",
  },
  {
    objection: "Security concerns with AI accessing our data",
    frequency: "#1 blocker",
    variant: "danger" as const,
    reality: "CISOs ask: Does AI send data externally? Can it be prompt-injected? Where is data processed? Does it respect row-level security? Meanwhile, their employees are pasting company data into ChatGPT daily.",
    counter: "KOS queries in-place — data doesn't leave their infrastructure. Multi-tenant RBAC with per-resource visibility controls. EU hosting available. No training on customer data. Architecture diagram showing the data flow is the closer.",
    proof: "'Your employees are already using ChatGPT with company data and zero governance. KOS gives you the same AI capability with enterprise-grade controls.'",
  },
  {
    objection: "We can build this ourselves",
    frequency: "CTOs say this",
    variant: "warning" as const,
    reality: "Engineering leaders at tech-savvy companies. They probably already tried with LangChain + a vector DB. Internal BI tools take 6-18 months, are never maintained, and cover 2-3 of the 13 dimensions KOS provides.",
    counter: "Ask: 'How long to build multi-tenant RBAC, 14 optimized DB connectors, a knowledge management system, visualization engine, scheduled automation, and a production-grade prompt orchestration layer? And then maintain it?' The answer is years and a dedicated team.",
    proof: "KOS has 280+ releases of the execution engine alone. That's years of refinement they'd have to replicate.",
  },
  {
    objection: "Migration cost / switching cost",
    frequency: "Common",
    variant: "warning" as const,
    reality: "'We have 500 dashboards in Tableau. Who rebuilds them?' 'Our team knows PowerBI — retraining costs money.' This is a status quo bias objection — the real fear is disruption.",
    counter: "No migration required. KOS runs alongside existing tools. Start with one department or one use case. Prove value in 30 days. If it works, adoption spreads naturally because chat is easier than any dashboard builder.",
    proof: "'You're not replacing 500 dashboards. You're giving the 75% of your org who never touch those dashboards a way to access the same data.'",
  },
  {
    objection: "Vendor risk — will you exist in 3 years?",
    frequency: "Legitimate",
    variant: "warning" as const,
    reality: "Mid-market companies in Spain are especially risk-averse with new vendors. They've been burned by startups that disappeared. They need to trust you'll be around.",
    counter: "Paying customers, active development velocity, open data formats, full export capabilities. Offer contractual data portability guarantees. Reference customers who can speak to the relationship.",
    proof: "Show the product evolution: 280+ releases, 14+ connectors, multi-tenant architecture. This isn't a weekend project — it's a mature platform.",
  },
  {
    objection: "ChatGPT / Copilot already does this",
    frequency: "Growing",
    variant: "danger" as const,
    reality: "Executives see ChatGPT analyzing CSVs and think 'problem solved.' They don't realize ChatGPT can't connect to their databases, has no access control, no shared knowledge, no persistent dashboards, and no automation.",
    counter: "Live demo: 'Connect to your database, query it in NL, build a dashboard, schedule a report, share it with your team — all with access control. Now try that in ChatGPT.' The gap becomes obvious in 5 minutes.",
    proof: "See our competitive analysis: ChatGPT needs 3-5 separate products to do what KOS does in one. $108K/yr minimum. And still no multi-tenancy, no DB connectors, no persistent dashboards.",
  },
  {
    objection: "Budget / timing — not right now",
    frequency: "Soft no",
    variant: "default" as const,
    reality: "Translation: 'I don't have discretionary budget' or 'I need to wait for Q4 planning.' Spanish mid-market analytics budgets are 30-40% lower than UK equivalents.",
    counter: "Start with a free POC or minimal paid pilot. Show the ROI: engineer hours saved × hourly rate > KOS cost. Ask about Kit Digital grants — EUR 3B in Spanish government digitalization funds. Find the champion who has discretionary budget.",
    proof: "ROI calculation: If one analyst spends 2 hours/day on ad-hoc requests and KOS reduces that by 80%, that's 1.6 hours/day × $50/hr × 250 days = $20K/yr saved per analyst.",
  },
  {
    objection: "Need to involve more stakeholders",
    frequency: "Always",
    variant: "default" as const,
    reality: "'I need to check with my CTO / CISO / procurement.' Translation: 'I'm not the decision-maker' or 'I need political cover.' Mid-market: 3-5 stakeholders. Enterprise: 6-10.",
    counter: "Help the champion build the internal case. Provide: ROI templates, security documentation, architecture diagrams, competitive comparison they can forward. Offer to do a technical deep-dive with their CTO separately.",
    proof: "Pre-built sales enablement kit: one-pager, security FAQ, architecture diagram, ROI calculator, DPA template. Make it easy for them to sell internally.",
  },
  {
    objection: "We need on-premise deployment",
    frequency: "Enterprise / regulated",
    variant: "warning" as const,
    reality: "Banks, insurance, government — some require on-premise or VPC deployment. They won't send data to a SaaS platform regardless of security claims.",
    counter: "KOS is cloud-agnostic — deployable via Cloud Run to any region. EU hosting available. VPN/SSH tunneling means KOS connects to their DBs without data leaving their network. For true on-premise needs: discuss dedicated deployment options.",
    proof: "Architecture: KOS sends queries to the database and receives results. Raw data is not stored or cached in KOS. The LLM sees query results, not the full database.",
  },
];

export const adoptionStrategy = [
  { phase: "Week 1-2", goal: "Connect & wow", activities: "Connect 1-2 databases. Run live NL queries with the champion. Build their first dashboard. Get a 'wow' moment they can screenshot and share." },
  { phase: "Week 3-4", goal: "Expand users", activities: "Add 5-10 users from the champion's team. Set up shared knowledge base with business logic. Schedule first automated report. Measure: queries/day, unique users." },
  { phase: "Month 2-3", goal: "Prove ROI", activities: "Track time saved on ad-hoc requests. Document use cases that were impossible before (cross-DB queries, NL access for non-technical users). Present ROI to leadership." },
  { phase: "Month 3-6", goal: "Expand departments", activities: "Roll out to additional teams (finance, ops, executive). Add more connectors. Build department-specific dashboards and knowledge entries. Move from pilot to contract." },
];

export const adoptionColumns = [
  { key: "phase" as const, label: "Phase" },
  { key: "goal" as const, label: "Goal" },
  { key: "activities" as const, label: "Activities" },
];

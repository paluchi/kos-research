import type { DeepResearch } from "./competitors";

export const deepAI: Record<string, DeepResearch> = {
  "Julius AI": {
    fundingRounds: [
      { date: "2022", round: "Pre-seed", amount: "$1M", lead: "Y Combinator (S22)" },
      { date: "2023", round: "Angel", amount: "$3.5M", lead: "AI Grant", investors: ["8VC"] },
      { date: "Jul 2025", round: "Seed", amount: "$10M", lead: "Bessemer Venture Partners", investors: ["Horizon VC", "8VC", "Y Combinator", "AI Grant"] },
    ],
    keyInvestors: [
      "Bessemer Venture Partners",
      "Y Combinator",
      "8VC",
      "Horizon VC",
      "AI Grant",
      "Angels: Aravind Srinivas (Perplexity CEO), Guillermo Rauch (Vercel CEO), Jeff Lawson (Twilio co-founder)",
    ],
    markets: {
      geos: [
        "United States (~21% — largest single market, SF HQ, but notably lower concentration than most competitors)",
        "India (~14% — strong second market, driven by students and price-sensitive users)",
        "Europe (~15% — distributed across UK, Germany, France)",
        "Southeast Asia (~10% — organic adoption)",
        "Rest of World (~40% — unusually global due to student/academic base and product-led virality)",
      ],
      verticals: [
        "Education / Research / Academia (~25% — heaviest single segment, student pricing, thesis analysis)",
        "SaaS / Technology (~20% — product analytics, user behavior, operational metrics)",
        "Marketing / Advertising (~15% — Google Ads + Meta Ads connectors drive this segment)",
        "Finance / Fintech (~15% — financial modeling, forecasting, revenue analysis)",
        "E-commerce / Retail (~10% — customer behavior, inventory analytics)",
        "Other (~15% — healthcare, consulting, freelancers, individual analysts)",
      ],
      target: "Consumer to SMB (prosumer data analysts, individuals, small teams)",
    },
    clientTimeline: [
      { year: 2024, value: "500K+ users" },
      { year: 2025, value: "2M+ users" },
      { year: 2026, value: "2M+ users, 4M lines of code executed daily" },
    ],
    clientsByVertical: [
      { vertical: "Education", clients: ["Harvard Business School (required course, 900+ students)", "Rice University"] },
      { vertical: "Finance", clients: ["Unnamed hedge funds (currency/energy modeling)"] },
      { vertical: "Hospitality", clients: ["Unnamed Fortune 500 (87,500+ properties)"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "$1M ARR" },
      { year: 2026, value: "$15M+ ARR" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~5" },
      { year: 2025, value: "~12" },
      { year: 2026, value: "17 (Tracxn, May 2026)" },
    ],
    milestones: [
      { date: "2022", event: "Founded by Rahul Sonwalkar (ex-Uber/Meta); graduated YC S22 batch" },
      { date: "2024", event: "Reached $1M ARR with 5-person team" },
      { date: "2025", event: "Harvard Business School adopts Julius as required course tool (900+ students)" },
      { date: "2025", event: "Surpassed 2M users and 10M+ data visualizations created" },
      { date: "Jul 2025", event: "Raised $10M seed led by Bessemer Venture Partners ($14.5M total)" },
      { date: "2026", event: "$15M+ ARR — 15x revenue growth in 2 years" },
      { date: "Spring 2026", event: "Enterprise features: RBAC role assignments, SSO/SAML, audit logging" },
      { date: "2026", event: "DB connectors expanded: MySQL, SQL Server, Databricks, Vertica added to PostgreSQL/Snowflake/BigQuery/Supabase" },
      { date: "2026", event: "MCP protocol support, Google Ads/Meta Ads connectors, Notebooks" },
      { date: "Mar 2026", event: "874K monthly visits (+27% MoM), 53% organic search" },
    ],
    deepSources: [
      { label: "TechCrunch Seed", url: "https://techcrunch.com/2025/07/28/ai-data-analyst-startup-julius-nabs-10m-seed-round/" },
      { label: "Julius Funding Announcement", url: "https://julius.ai/articles/funding-announcement" },
      { label: "GetLatka", url: "https://getlatka.com/companies/julius.ai" },
      { label: "Sacra Profile", url: "https://sacra.com/c/julius/" },
      { label: "Tracxn", url: "https://tracxn.com/d/companies/julius-ai/__SFBCBnCQlh21pXb4hZqW79rqkAB1mLIzSeKJna_frI8" },
      { label: "Coefficient Pricing", url: "https://coefficient.io/julius-ai-pricing" },
    ],
  },

  "Basedash": {
    fundingRounds: [
      { date: "Aug 2020", round: "Pre-seed", amount: "Undisclosed", lead: "Y Combinator (S20)" },
      { date: "May 2023", round: "Seed", amount: "$4.4M", lead: "Matrix", investors: ["Y Combinator", "Form Capital", "Worklife", "Angels: founders of Figma, Notion, Bloom Tech"] },
    ],
    keyInvestors: [
      "Matrix",
      "Y Combinator",
      "Form Capital",
      "Worklife",
      "Angels: Dylan Field (Figma), Ivan Zhao (Notion)",
    ],
    markets: {
      geos: ["US ~55%", "Europe ~20%", "Canada ~10% (Montreal HQ)", "Rest of World ~15%"],
      verticals: ["SaaS/Tech Startups", "E-commerce", "Product Teams"],
      target: "SMB to Mid-market",
      notes: "Very small customer base (~100+ teams). 3-person startup. Profile skews toward Product Hunt / YC-adjacent tech companies. Limited public data — only ~4 companies on TheirStack.",
    },
    clientTimeline: [
      { year: 2024, value: "Not disclosed" },
      { year: 2026, value: "100+ teams" },
    ],
    revenueTimeline: [
      { year: 2021, value: "$201.6K" },
      { year: 2024, value: "$1M ARR" },
    ],
    employeeTimeline: [
      { year: 2021, value: "3" },
      { year: 2024, value: "~7" },
      { year: 2026, value: "~3" },
    ],
    milestones: [
      { date: "2020", event: "Founded by Max Musing; graduated YC S20 as database admin tool" },
      { date: "May 2023", event: "Raised $4.4M seed led by Matrix" },
      { date: "2024", event: "Full pivot from admin tool to AI-native BI platform" },
      { date: "2024", event: "Reached $1M ARR with 7-person team" },
      { date: "2025", event: "Launched Slack app, MCP server (Claude/Cursor integration), Automations" },
      { date: "2026", event: "Shipped Skills, Dashboard Agent, full app embedding, zero data retention mode within weeks" },
      { date: "2026", event: "SOC 2 Type II compliance achieved" },
    ],
    deepSources: [
      { label: "Seed Announcement", url: "https://www.basedash.com/blog/basedash-raises-4-4m-led-by-matrix" },
      { label: "GetLatka", url: "https://getlatka.com/companies/basedash.com" },
      { label: "YC Profile", url: "https://www.ycombinator.com/companies/basedash" },
      { label: "Tracxn", url: "https://tracxn.com/d/companies/basedash/___5oKx8UQJ4wRD20KgZzDuAu_bxSobduSziK3OxQtW-s" },
      { label: "MCP Server", url: "https://www.basedash.com/features/mcp-server" },
      { label: "Embedding Docs", url: "https://www.basedash.com/docs/features/embedding" },
    ],
  },

  "Equals": {
    fundingRounds: [
      { date: "Jul 2022", round: "Seed", amount: "$6.6M", lead: "Craft Ventures", investors: ["BoxGroup"] },
      { date: "Nov 2022", round: "Series A", amount: "$16M", lead: "Andreessen Horowitz (a16z)", investors: ["Craft Ventures", "BoxGroup"] },
    ],
    keyInvestors: [
      "Andreessen Horowitz (a16z)",
      "Craft Ventures",
      "BoxGroup",
    ],
    markets: {
      geos: [
        "United States (~65% — SF/NYC startup ecosystem dominant, a16z portfolio companies heavy adopters)",
        "UK / Europe (~15% — London fintech and SaaS, some Scandinavian adoption)",
        "Canada / Australia (~10% — English-speaking SaaS markets)",
        "Rest of World (~10% — minimal in Asia, LATAM, non-English markets)",
      ],
      verticals: [
        "SaaS / Software (~45% — Series A-C tracking MRR, churn, LTV, pipeline)",
        "Fintech / Financial Services (~20% — revenue modeling, Stripe-heavy workflows)",
        "E-commerce / DTC (~15% — Shopify/Stripe analytics, cohort analysis, marketing spend)",
        "RevOps / Go-to-Market (~10% — Salesforce + HubSpot pipeline analytics)",
        "Other (~10% — agencies, consulting, early-stage non-SaaS)",
      ],
      clients: ["Notion", "Framer", "Descript"],
    },
    milestones: [
      { date: "2021", event: "Founded by Bobby Pinero (CEO) and Ben McRedmond (CPO), both ex-Intercom" },
      { date: "Jul 2022", event: "Seed round $6.6M from Craft Ventures" },
      { date: "Nov 2022", event: "Series A $16M from a16z — TechCrunch coverage" },
      { date: "2024", event: "AI Assist (GPT-4 Turbo) added — formula and SQL generation via Cmd+J" },
      { date: "2025", event: "Equals Warehouse (Snowflake-backed) launched — cross-source joins" },
      { date: "2025", event: "Pricing restructured from per-seat ($39/mo) to annual contracts ($24K-$60K/yr, unlimited seats)" },
      { date: "2026", event: "Dashboard Ask feature — follow-up questions on dashboards backed by spreadsheet logic" },
      { date: "2026", event: "Salesforce CRM writeback, Notion/Coda embedding, SOC 2 Type II certification" },
    ],
    deepSources: [
      { label: "Tracxn Profile", url: "https://tracxn.com/d/companies/equals/__qsus2FrC9LrEvWFtUwKRH6u0KCHapnsiRgIZpMm6I1g" },
      { label: "TechCrunch Series A", url: "https://techcrunch.com/2022/11/09/equals-secures-15m-investment-to-supercharge-spreadsheets/" },
      { label: "SoftwareFinder", url: "https://softwarefinder.com/analytics-software/equals-software" },
      { label: "Equals Docs", url: "https://docs.equals.com/" },
    ],
  },

  "BlazeSQL": {
    fundingRounds: [],
    keyInvestors: [],
    markets: {
      geos: [
        "Europe (~40% — Berlin HQ, EU-Startups listed)",
        "United States (~35%)",
        "Rest of World (~25%)",
      ],
      verticals: [
        "Tech / SaaS (~35%)",
        "E-commerce / Retail (~20%)",
        "Finance (~15%)",
        "Healthcare (~10%)",
        "Logistics / Supply Chain (~10%)",
        "Other (~10%)",
      ],
      target: "SMB to Mid-market",
      notes: "Bootstrapped indie product, no published customer list. Estimates based on EU origin, English-language product, and stated industry focus. Revenue undisclosed beyond $1K+ MRR (Oct 2023).",
    },
    revenueTimeline: [
      { year: 2023, value: "$1K+ MRR (Oct 2023)" },
    ],
    employeeTimeline: [
      { year: 2023, value: "1 (solo founder)" },
      { year: 2026, value: "1 (solo founder)" },
    ],
    milestones: [
      { date: "2023", event: "Founded by Justus Mulli as indie-hacker project in Berlin" },
      { date: "Oct 2023", event: "Broke $1K MRR within 6 months of launch" },
      { date: "2024", event: "Launched desktop app for local data processing" },
      { date: "2025", event: "Expanded to 12+ databases: Snowflake, BigQuery, Redshift, Databricks, Athena, ClickHouse, Oracle, SAP SQL Anywhere" },
      { date: "2025", event: "Launched white-label embedded analytics with row-level access and user auth API" },
      { date: "2026", event: "Added automated weekly email reports with AI-generated metric change explanations" },
    ],
    deepSources: [
      { label: "Indie Hackers", url: "https://www.indiehackers.com/post/breaking-1k-mrr-within-6-months-of-indie-hacking-6f6cfff21e" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/blazesql" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/blazesql" },
      { label: "EU-Startups", url: "https://www.eu-startups.com/directory/blazesql/" },
      { label: "Setup Guide", url: "https://help.blazesql.com/en/article/how-to-set-up-blaze-for-your-company-rkfp8n/" },
    ],
  },

  "AskYourDatabase": {
    fundingRounds: [],
    keyInvestors: [],
    markets: {
      geos: ["US ~40%", "Asia (HK, China, SEA) ~25%", "Europe ~20%", "Rest of World (LATAM, India, MENA) ~15%"],
      verticals: ["SaaS / Software startups", "SMBs", "Agencies / Freelancers", "E-commerce"],
      target: "Individual users & SMBs (indie devs, small teams)",
      notes: "~100+ companies. Wherever AppSumo and Product Hunt reach. Cost-conscious buyers worldwide. Asia strong due to HK-based founder.",
    },
    revenueTimeline: [
      { year: 2024, value: "~$100K ARR" },
    ],
    employeeTimeline: [
      { year: 2023, value: "1 (solo founder)" },
      { year: 2026, value: "1 (solo founder)" },
    ],
    milestones: [
      { date: "2023", event: "Founded in Hong Kong as self-funded project (registered Delaware)" },
      { date: "2024", event: "Reached ~$100K ARR as solo founder" },
      { date: "2025", event: "Added NoSQL (MongoDB) support, embeddable chatbot/dashboard widgets, REST API" },
    ],
    deepSources: [
      { label: "GetLatka", url: "https://getlatka.com/companies/askyourdatabase" },
      { label: "Product", url: "https://www.askyourdatabase.com" },
      { label: "Pricing", url: "https://www.askyourdatabase.com/pricing" },
      { label: "G2", url: "https://www.g2.com/products/askyourdatabase/reviews" },
    ],
  },

  "WrenAI": {
    fundingRounds: [
      { date: "2018-2023", round: "Multiple (Canner parent)", amount: "Undisclosed (5 rounds)", lead: "Hive Ventures, Taiwania Capital, SparkLabs Taiwan" },
      { date: "Dec 2023", round: "Convertible note (Canner)", amount: "Undisclosed", lead: "Undisclosed" },
    ],
    keyInvestors: ["Hive Ventures", "Taiwania Capital Management", "SparkLabs Taiwan", "Startup Island TAIWAN"],
    markets: {
      geos: [
        "Taiwan / Asia (~30% — founders Taiwanese, Canner founded in Taipei, early Asia-Pacific adoption)",
        "United States (~30% — satellite office presence, growing US market, tech/SaaS companies)",
        "Europe (~20% — community adoption through open-source channels)",
        "Middle East (~5% — mentioned in marketing, unverified)",
        "Rest of World (~15% — global open-source community, 15.5K GitHub stars distributed globally)",
      ],
      verticals: [
        "Technology / Developer Tools (~30% — data teams building internal analytics)",
        "Data Engineering / Analytics (~25% — teams augmenting existing BI with NLQ)",
        "Startups / SMBs (~20% — small teams needing affordable data access)",
        "Financial Services (~10%)",
        "Healthcare, Manufacturing, Retail, Media, Automotive (mentioned in marketing, unverified)",
      ],
      target: "Small-to-mid-size data teams. 1-3 data engineers for MDL setup + 5-15 analysts/business users querying. Free tier and affordable pricing target startups and small data teams.",
      notes: "Geographic and vertical estimates based on founder origin, GitHub community, and marketing materials. No official breakdown available. No verified enterprise customer logos disclosed.",
    },
    clientTimeline: [
      { year: 2025, milestone: "Claims 50,000+ users (likely OSS downloads/Docker pulls) and 15,000+ data experts. $1.5M ARR (founder-reported)." },
    ],
    revenueTimeline: [
      { year: 2025, value: "$1.5M ARR (founder-reported on Getlatka, not independently verified)" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~8" },
      { year: 2025, value: "~14-15 (Getlatka/Crustdata, ~15.4% YoY growth)" },
    ],
    milestones: [
      { date: "2018", event: "Canner founded in Taipei, Taiwan by Howard Chi and William Chang. SparkLabs Taipei Batch 1." },
      { date: "Mar 2024", event: "WrenAI launched as open-source project under Canner (GitHub repo created Mar 13, 2024)" },
      { date: "2024", event: "Reached ~3,000 GitHub stars by year-end. 12+ database connectors." },
      { date: "Feb 2025", event: "AI-powered spreadsheets launched — row/column NL operations" },
      { date: "2025", event: "Grew to 15,500 GitHub stars. $1.5M ARR. Wren Engine on Apache DataFusion (Rust) matured. MCP support added." },
      { date: "2025", event: "Memory system with LanceDB hybrid retrieval. Human-in-the-loop learning. AI Skills system." },
    ],
    deepSources: [
      { label: "GitHub", url: "https://github.com/Canner/WrenAI" },
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/getwren.ai" },
      { label: "Canner Crunchbase", url: "https://www.crunchbase.com/organization/cannerdata" },
      { label: "Canner About", url: "https://cannerdata.com/about" },
      { label: "DataFusion Blog", url: "https://medium.com/wrenai/powering-semantic-sql-for-ai-agents-with-apache-datafusion-da963e69804f" },
      { label: "Hive Ventures Deep Dive", url: "https://hiveventures.medium.com/deep-dive-with-hive-howard-chi-ceo-of-canner-9ab7a7bd9d2c" },
      { label: "2024 Year in Review", url: "https://medium.com/wrenai/wren-ai-2024-year-in-review-a-fruitful-journey-and-exciting-plans-ahead-6496bd37c906" },
    ],
  },
  "Athena Intelligence": {
    fundingRounds: [
      { date: "Jan 2026", round: "Seed", amount: "$6M", lead: "Undisclosed", investors: ["Village Global", "Forward Deployed VC", "Angels (ex-OpenAI, Retool, Palantir, Scale AI)"] },
    ],
    keyInvestors: [
      "Village Global",
      "Forward Deployed VC",
      "Angels: Amjad Masad (Replit CEO), ex-OpenAI/Retool/Palantir/Scale AI employees",
    ],
    markets: {
      geos: [
        "US (~85% — finance, legal, consulting, defense, CPG)",
        "Europe (~10% — UK, Switzerland — finance, legal)",
        "Rest of World (~5% — too early for meaningful distribution)",
      ],
      verticals: [
        "Finance / Banking / PE / Hedge Funds / Audit (~35%)",
        "Legal / Law Firms / Litigation / Due Diligence (~25%)",
        "Consulting / Professional Services (~15%)",
        "Defense / Government (~10%)",
        "CPG / Food & Beverage (~10%)",
        "Other (~5%)",
      ],
      target: "Large regulated enterprises (Fortune 500)",
      notes: "Very early-stage (~$1.2M ARR, 13 people). Customer count likely low dozens. All geo/vertical estimates based on stated verticals and positioning, not confirmed customer data.",
    },
    revenueTimeline: [
      { year: 2025, value: "$1.2M ARR" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~11-13" },
    ],
    milestones: [
      { date: "2022", event: "Founded in New York by Brendon Geils (ex-Palantir, Scale AI)" },
      { date: "2024", event: "Launched Olympus AI-native analytics platform" },
      { date: "2025", event: "Reached $1.2M ARR; partnered with Nutrient for PDF processing" },
      { date: "Jan 2026", event: "Raised $6M seed (Village Global, Forward Deployed VC)" },
      { date: "2026", event: "SOC 2 Type II certified; HIPAA compliance (cloud); BYOC on AWS/Azure/GCP" },
    ],
    deepSources: [
      { label: "GetLatka", url: "https://getlatka.com/companies/athenaintelligence.ai" },
      { label: "Signalbase Funding", url: "https://www.trysignalbase.com/news/funding/athena-intelligence-secures-60" },
      { label: "StartuphubAI", url: "https://www.startuphub.ai/startups/athena-intelligence" },
      { label: "Village Global Portfolio", url: "https://www.villageglobal.vc/companies/athenaintelligence" },
      { label: "Nutrient Partnership", url: "https://www.nutrient.io/blog/athena-nutrient-enterprise-ai-compliance/" },
      { label: "Docs (llms-full.txt)", url: "https://resources.athenaintel.com/llms-full.txt" },
    ],
  },

  "Dot (GetDot.ai)": {
    fundingRounds: [
      { date: "2021", round: "YC S21", amount: "Undisclosed", lead: "Y Combinator" },
    ],
    keyInvestors: [
      "Y Combinator",
    ],
    markets: {
      geos: ["Europe (40%, HQ Berlin)", "US (35%)", "RoW (25%)"],
      verticals: ["EdTech", "Mobility/Travel", "E-Commerce", "Data Infrastructure", "Food/Delivery"],
      target: "Mid-market to enterprise data teams (100+ teams)",
      notes: "Legal entity Snowboard Software GmbH (Berlin). Strong European customer base (BlaBlaCar, Babbel, Flix, Choco). US presence via Duolingo, Airbyte. Product-led growth, bootstrapped post-YC.",
    },
    clientTimeline: [
      { year: 2023, value: "Early customers" },
      { year: 2025, value: "100+ trusted teams" },
    ],
    clientsByVertical: [
      { vertical: "EdTech", clients: ["Duolingo", "Babbel"] },
      { vertical: "Mobility/Travel", clients: ["BlaBlaCar", "Flix"] },
      { vertical: "Data Infrastructure", clients: ["Airbyte"] },
      { vertical: "Food/Delivery", clients: ["Choco"] },
      { vertical: "Logistics", clients: ["Emerge"] },
    ],
    revenueTimeline: [
      { year: 2025, value: "$770K ARR" },
    ],
    employeeTimeline: [
      { year: 2023, value: "8" },
      { year: 2025, value: "7" },
    ],
    milestones: [
      { date: "2021", event: "Founded by Rick Radewagen, Sven Rudolph, Théo Tortorici. YC S21 batch." },
      { date: "2023", event: "Launched product — AI data assistant for data warehouses." },
      { date: "2024", event: "Expanded to 13 database connectors (Snowflake, BigQuery, Redshift, Databricks, Postgres, MySQL, SQL Server, Fabric, ClickHouse, Oracle, DuckDB, SAP HANA, Athena). Semantic layer integrations (dbt, Looker, Power BI, Azure Analysis Services, Steep, Cube)." },
      { date: "2025", event: "100+ trusted teams. SOC 2 Type I & II certified (Prescient Assurance). Deep Analysis with PPTX export. Custom Skills (Python-based extensions). Scheduled Reports with Work/Result Gates. MCP server. BI tool integrations (Tableau, Metabase, Sigma, Qlik). $770K ARR." },
    ],
    deepSources: [
      { label: "YC Profile", url: "https://www.ycombinator.com/companies/dot" },
      { label: "GetLatka", url: "https://getlatka.com/companies/getdot.ai" },
      { label: "Docs", url: "https://docs.getdot.ai/" },
      { label: "Security", url: "https://docs.getdot.ai/security-and-support/security-and-privacy.md" },
      { label: "About", url: "https://www.getdot.ai/about" },
    ],
  },

  "Defog.ai": {
    fundingRounds: [
      { date: "Jan 2023", round: "Seed (YC W23)", amount: "$2.2M", lead: "Y Combinator", investors: ["Script Capital", "Pioneer Fund", "Hike Ventures", "Dharmesh Shah (HubSpot)", "Divya Bhat (ex-YC)"] },
    ],
    keyInvestors: [
      "Y Combinator (W23)",
      "Script Capital",
      "Pioneer Fund",
      "Hike Ventures",
      "Dharmesh Shah (HubSpot co-founder)",
      "Divya Bhat (former YC Visiting Partner)",
    ],
    markets: {
      geos: ["Singapore (HQ)", "US (primary customers)", "Global (enterprise)"],
      verticals: ["Automotive", "Finance", "Publishing", "Pharma/Biotech", "Healthcare", "Manufacturing"],
      target: "Enterprise data teams (7–100+ person departments)",
      notes: "7-person team reaching $1.1M ARR in ~18 months. SQLCoder (open-source) has 300K+ downloads on HuggingFace. Enterprise pricing at $5K/mo+ signals upmarket focus. Alpha Defog Agents delivering 4x productivity gains in healthcare/manufacturing/finance.",
    },
    clientTimeline: [
      { year: 2024, value: "$1.1M ARR (GetLatka)" },
    ],
    clientsByVertical: [
      { vertical: "Automotive", clients: ["Toyota"] },
      { vertical: "Finance", clients: ["Alliance Bernstein"] },
      { vertical: "Publishing", clients: ["Macmillan"] },
      { vertical: "Pharma", clients: ["Genmab"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "$1.1M" },
    ],
    milestones: [
      { date: "Jan 2023", event: "Founded by Medha Basu and Rishabh Srivastava. YC W23 batch." },
      { date: "2023", event: "Released SQLCoder on HuggingFace (CC BY-SA 4.0). Outperformed GPT-4 on SQL benchmarks." },
      { date: "2024", event: "Reached $1.1M ARR. 300K+ SQLCoder downloads. Expanded to 8 database connectors." },
      { date: "2025", event: "Launched Defog Agents (multi-step AI agents). Alpha customers report 4x productivity gains." },
    ],
    deepSources: [
      { label: "GetLatka", url: "https://getlatka.com/companies/defog" },
      { label: "Defog Blog - Agents", url: "https://defog.ai/blog/agents" },
      { label: "SQLCoder HuggingFace", url: "https://huggingface.co/defog" },
      { label: "Tracxn", url: "https://tracxn.com/d/companies/defog/__TZvDjLLGFoTqXI7GpogSCa3YISB_9yx4VM1Ss-jR5u0" },
      { label: "YC Profile", url: "https://www.ycombinator.com/companies/defog" },
    ],
  },

  "Kanaries / RATH": {
    fundingRounds: [
      { date: "Feb 2022", round: "Angel", amount: "Undisclosed", lead: "Chuxin Capital", investors: ["Hillhouse Investment", "Monad Ventures"] },
      { date: "Feb 2024", round: "Seed", amount: "Undisclosed", lead: "MiraclePlus", investors: ["Yinxinggu Capital"] },
    ],
    keyInvestors: ["MiraclePlus", "Yinxinggu Capital", "Chuxin Capital", "Hillhouse Investment", "Monad Ventures"],
    markets: {
      geos: [
        "China (~30% — HQ Hangzhou, Chinese investors, local dev community)",
        "United States (~25% — English docs, GitHub community)",
        "India (~12% — data science community, cost-sensitive)",
        "Europe (~15% — Germany, UK, France, OSS-friendly)",
        "Southeast Asia (~8%)",
        "Rest of World (~10%)",
      ],
      verticals: [
        "Technology / Software (~30%)",
        "Academic / Research (~25%)",
        "Finance (~15%)",
        "E-commerce / Retail (~10%)",
        "Healthcare (~10%)",
      ],
      target: "Individual data scientists, academics, developers (not enterprise)",
      notes: "PyGWalker 15.8K GitHub stars. RATH 4.7K stars. Paid cloud users likely far fewer. Skews technical Python/data science community. Very little enterprise penetration.",
    },
    milestones: [
      { date: "2021", event: "Founded in Hangzhou, China." },
      { date: "Feb 2022", event: "Angel funding from Chuxin Capital, Hillhouse, Monad." },
      { date: "2023", event: "PyGWalker released — turns pandas DataFrames into Tableau-like viz with one line of code. Rapid GitHub growth." },
      { date: "Feb 2024", event: "Seed funding from MiraclePlus, Yinxinggu Capital." },
      { date: "2025", event: "PyGWalker reaches 15K+ GitHub stars. RATH cloud with ChatGPT integration." },
    ],
    deepSources: [
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/kanaries" },
      { label: "RATH GitHub", url: "https://github.com/Kanaries/Rath" },
      { label: "PyGWalker GitHub", url: "https://github.com/Kanaries/pygwalker" },
      { label: "Pricing", url: "https://kanaries.net/subscribe" },
    ],
  },

  "MindsDB": {
    fundingRounds: [
      { date: "2017-2022", round: "Multiple Seed rounds", amount: "~$12.5M", lead: "Various", investors: ["Y Combinator", "OpenOcean", "MMC", "SpeedInvest", "TQ Ventures", "UC Berkeley SkyDeck Fund"] },
      { date: "Feb 2023", round: "Series A", amount: "$16.5M", lead: "Benchmark" },
      { date: "Jun 2023", round: "Series A Extension", amount: "$25M", lead: "Mayfield", investors: ["Benchmark", "NVentures (NVIDIA)"] },
    ],
    keyInvestors: ["Benchmark", "Mayfield", "Y Combinator", "NVentures (NVIDIA)", "OpenOcean", "Walden Catalyst Ventures"],
    markets: {
      geos: [
        "US (~40% — Bay Area tech companies, SaaS startups, fintech)",
        "Europe (~25% — GDPR alignment, Eastern Europe and Nordics strong)",
        "LATAM (~15% — >30% of 2025 growth from LATAM + Eastern Europe. Brazil, Argentina, Colombia)",
        "Asia (~12% — Southeast Asia via MongoDB/MariaDB integrations. India, Singapore, Indonesia)",
        "Rest of World (~8% — government-constrained markets attracted by data sovereignty)",
      ],
      verticals: [
        "Fintech (largest revenue driver)",
        "E-commerce",
        "Healthcare",
        "Agriculture",
        "Technology/SaaS",
      ],
      target: "Developer-first adoption. Very small customer base — revenue ~$5.3M with 36 employees. Bottom-up adoption. No enterprise customers publicly disclosed.",
      notes: "27.1K→35K GitHub stars indicates strong developer awareness but limited enterprise penetration. Fintech and e-commerce are largest revenue drivers. LATAM + Eastern Europe fastest-growing regions.",
    },
    clientTimeline: [
      { year: 2023, value: "60+ employees, developer community growing" },
      { year: 2024, value: "$5.3M revenue (GetLatka), team down to ~37" },
      { year: 2026, value: "~36 core team, ~35K GitHub stars, Anton agent launched" },
    ],
    revenueTimeline: [
      { year: 2024, value: "$5.3M (GetLatka)" },
    ],
    employeeTimeline: [
      { year: 2023, value: "60+" },
      { year: 2024, value: "~37 (GetLatka)" },
      { year: 2026, value: "~36 core (Tracxn), ~47-48 incl contractors (PitchBook)" },
    ],
    milestones: [
      { date: "2017", event: "Founded in Berkeley, CA by Adam Carrigan and Jorge Torres" },
      { date: "2020", event: "Y Combinator batch. Open-source in-database ML via SQL." },
      { date: "Feb 2023", event: "Series A $16.5M from Benchmark — 'put machine learning into more applications'" },
      { date: "Jun 2023", event: "Series A Extension $25M from Mayfield. NVIDIA NVentures investment." },
      { date: "2024", event: "Pivot to federated query engine / AI data hub. 200+ connectors." },
      { date: "2025", event: "Pivot to 'universal language for AI agents.' MCP Server positioning. MindsHub cloud launch." },
      { date: "Apr 2026", event: "Anton launched — open-source autonomous BI agent for conversational analytics" },
    ],
    deepSources: [
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/mindsdb" },
      { label: "GetLatka", url: "https://getlatka.com/companies/mindsdb" },
      { label: "Benchmark Raise", url: "https://mindsdb.com/newsroom/mindsdb-raises-16-5m-from-benchmark-to-put-machine-learning-into-more-applications" },
      { label: "NVIDIA Funding", url: "https://venturebeat.com/ai/mindsdb-raises-funding-from-nvidia-to-democratize-ai-application-development/" },
      { label: "Anton Launch PR", url: "https://www.prnewswire.com/news-releases/mindsdb-launches-anton-an-open-source-autonomous-bi-agent-for-conversational-analytics-302732433.html" },
      { label: "Tracxn Profile", url: "https://tracxn.com/d/companies/mindsdb/__OMm6l6GYrmW_kBU5JLQQ-Lt60jMckThbu1LnvqcZI8A" },
    ],
  },

  "TextQL": {
    fundingRounds: [
      { date: "Jan 2024", round: "Seed", amount: "$4.1M", lead: "Neo + DCM Ventures", investors: ["Unshackled Ventures", "Worklife Ventures", "PageOne Ventures", "FirstHand Ventures", "Indicator Fund"] },
      { date: "Apr 2026", round: "Series B", amount: "$17M", lead: "Blackstone Innovations Investments", investors: ["HOF Capital", "Neo", "DCM Ventures", "Dropbox", "Allison Pickens", "Unshackled Ventures", "Varsha Rao", "angels from OpenAI, Snowflake, Datadog, MongoDB, Browserbase, Crusoe, Warner Bros Discovery, Datafold"] },
    ],
    keyInvestors: ["Blackstone Innovations Investments", "Neo", "DCM Ventures", "HOF Capital", "Dropbox", "Tristan Handy (dbt CEO)", "Chris Prucha (ex-Notion founder)"],
    markets: {
      geos: [
        "United States (~90%+ — all named customers US-based enterprises)",
        "Rest of World (~5-10% — GDPR compliant, global deployment capability, minimal international presence)",
      ],
      verticals: [
        "Financial Services / Real Estate (~30%) — Blackstone as investor+customer, dedicated solutions page",
        "Technology (~25%) — Amazon, Dropbox, Scale AI, Amazon Ring",
        "Healthcare (~20%) — Lumeris marquee client, dedicated vertical with advisory board (2026 launch)",
        "Media / Entertainment (~10%) — NBA",
        "Government / Public Sector (~5%) — OpenGov",
        "Retail / Manufacturing / Other (~10%) — dedicated solutions pages",
      ],
      target: "Large enterprises with existing data warehouses and SaaS tools. Tens of thousands of employees. 10-100+ users per org.",
    },
    clientsByVertical: [
      { vertical: "Financial Services", clients: ["Blackstone"] },
      { vertical: "Technology", clients: ["Amazon", "Dropbox", "Scale AI", "Amazon Ring"] },
      { vertical: "Healthcare", clients: ["Lumeris"] },
      { vertical: "Media / Entertainment", clients: ["NBA"] },
      { vertical: "Government", clients: ["OpenGov"] },
      { vertical: "Other", clients: ["RxB", "ATG"] },
    ],
    employeeTimeline: [
      { year: 2022, value: "2 (founders: Ethan Ding + Mark Hay)" },
      { year: 2024, value: "~16 (GetLatka, late 2024)" },
      { year: 2026, value: "~44 (Tracxn Mar 2026, ~3x growth in 6 months)" },
    ],
    revenueTimeline: [
      { year: 2024, value: "~$200K ARR (estimated, pre-9x growth)" },
      { year: 2025, value: "$1.8M ARR (GetLatka). 9x YoY. Net dollar retention >300%." },
    ],
    milestones: [
      { date: "2022", event: "Founded by Ethan Ding (CEO, ex-Bessemer VC data team) and Mark Hay (CTO, ex-Meta ML) in San Francisco" },
      { date: "Jan 2024", event: "Seed $4.1M co-led by Neo + DCM Ventures. Launched Ana AI agent. Angels include Tristan Handy (dbt CEO)." },
      { date: "2024", event: "Deployed at Amazon, Dropbox, Scale AI. Petabyte-scale enterprise environments. Built 63 connectors (18 SQL + 45 API)." },
      { date: "2025", event: "9x YoY revenue growth to $1.8M ARR. Net dollar retention >300%. Team grew from ~16 to ~44." },
      { date: "Apr 2026", event: "Series B $17M led by Blackstone Innovations. Blackstone CTO John Stecher: 'Fastest time-to-value for AI on complex data.'" },
      { date: "2026", event: "Launched Healthcare vertical with Lumeris as marquee client. Executive advisory board covering 120M+ US individuals. Dedicated Integration, Analytics, Reconciliation agents." },
      { date: "2026", event: "Added MCP support, Incognito privacy engine, Playbooks (scheduled analyses), on-prem/VPC/air-gapped deployment." },
    ],
    deepSources: [
      { label: "Series B (TextQL blog)", url: "https://textql.com/blog/textql-raises-17m-blackstone" },
      { label: "Fortune (Series B)", url: "https://fortune.com/2026/04/17/textql-blackstone/" },
      { label: "Seed (TechCrunch)", url: "https://techcrunch.com/2024/01/24/textql-aims-to-add-ai-powered-intelligence-on-top-of-business-data/" },
      { label: "Healthcare launch (PR Newswire)", url: "https://www.prnewswire.com/news-releases/textql-launches-healthcare-vertical-marquee-155400246.html" },
      { label: "GetLatka", url: "https://getlatka.com/companies/textql.com" },
    ],
  },

  "Supersimple": {
    fundingRounds: [
      { date: "Apr 2024", round: "Pre-seed", amount: "$2.2M (€2M)", lead: "Tera Ventures", investors: ["Specialist VC", "Tiny VC", "Ott Kaukver (ex-CTO Twilio)", "Alvar Lumberg (co-founder Grünfin)", "Indrek Kasela", "Märt Kelder"] },
    ],
    keyInvestors: ["Tera Ventures", "Specialist VC", "Tiny VC", "Ott Kaukver (ex-CTO Twilio)"],
    markets: {
      geos: [
        "Estonia/Nordics (~40% — HQ in Tallinn, most named customers are Estonian/Finnish startups)",
        "Europe ex-Nordics (~25% — UK, Germany, Netherlands. Tech/SaaS startups.)",
        "US (~25% — some presence mentioned but not prominently featured)",
        "Rest of World (~10% — minimal documented presence)",
      ],
      verticals: [
        "B2B SaaS — exclusive vertical focus (by their own admission)",
        "E-commerce — Twice Commerce (customer)",
        "Manufacturing — Fractory (customer)",
        "DevOps/Cloud — Dashbird (customer)",
        "Education — Kood (customer)",
      ],
      target: "B2B SaaS companies with 20-200 employees, data already in a SQL warehouse, at least one data-literate person. 'May not be as beneficial for businesses outside of B2B SaaS.'",
    },
    clientsByVertical: [
      { vertical: "E-commerce/SaaS", clients: ["Twice Commerce", "Supliful", "Storipress"] },
      { vertical: "Manufacturing", clients: ["Fractory"] },
      { vertical: "DevOps/Cloud", clients: ["Dashbird"] },
      { vertical: "Education", clients: ["Kood"] },
      { vertical: "Other", clients: ["Petstable", "Reiterate", "Muhoov"] },
    ],
    employeeTimeline: [
      { year: 2021, value: "2 (co-founders: Marko Klopets CEO, Priit Haamer CTO)" },
      { year: 2024, value: "~8 (LinkedIn, post-funding)" },
      { year: 2026, value: "~8 (LinkedIn)" },
    ],
    milestones: [
      { date: "2021", event: "Founded by Marko Klopets (CEO) and Priit Haamer (CTO) in Tallinn, Estonia. Both ex-Sixfold (merged with Transporeon, sold for $2B)." },
      { date: "Apr 2024", event: "$2.2M pre-seed led by Tera Ventures. Announced explainable AI focus." },
      { date: "Feb 2026", event: "Autopilot / Research Mode — AI agent runs background research autonomously." },
      { date: "Mar 2026", event: "GitHub Agent integration. CLI export/import for dashboards-as-code." },
      { date: "Apr 2026", event: "Server-side Python blocks in Docker sandboxes. User groups and RLS." },
      { date: "May 2026", event: "AI Skills — reusable, permissioned instruction packs. ClickHouse, MotherDuck, StarRocks, Apache Spark connectors added." },
      { date: "Jun 2026", event: "Slack integration (@Supersimple). Multiple database connections per model." },
    ],
    deepSources: [
      { label: "Funding PR (PRNewswire)", url: "https://www.prnewswire.com/news-releases/supersimple-raises-2-2-million-to-rethink-how-companies-work-with-data-in-age-of-artificial-intelligence-302105252.html" },
      { label: "EU-Startups Coverage", url: "https://www.eu-startups.com/2024/04/tallinn-based-supersimple-raises-e2-million-pre-seed-to-rethink-how-companies-work-with-structured-data/" },
      { label: "Changelog", url: "https://www.supersimple.io/changelog" },
      { label: "Pricing", url: "https://www.supersimple.io/pricing" },
    ],
  },
};

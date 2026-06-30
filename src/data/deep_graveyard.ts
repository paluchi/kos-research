import type { DeepResearch } from "./competitors";

export const deepGraveyard: Record<string, DeepResearch> = {
  "Outerbase": {
    fundingRounds: [
      { date: "2022", round: "Pre-seed (YC W23)", amount: "$500K", lead: "Y Combinator", investors: ["TRAC", "Surface Ventures"] },
    ],
    keyInvestors: ["Y Combinator", "TRAC", "Surface Ventures"],
    markets: {
      geos: [
        "US (Pittsburgh, PA HQ — 80%+)",
        "Europe (~10%)",
        "Asia-Pacific (~5%)",
        "Rest of World (~5%)",
      ],
      verticals: [
        "Developer Tools & Startups — primary audience, devs needing quick DB UI",
        "SaaS / Small Business — teams wanting spreadsheet-like DB access",
        "Education — students and bootcamp learners exploring databases",
        "Open Source Community — GitHub contributors (4.7K stars on Studio)",
      ],
      target: "Individual developers and small engineering teams needing lightweight database management",
    },
    revenueTimeline: [
      { year: 2023, value: "Minimal (free beta, YC batch)" },
      { year: 2024, value: "$440K ARR (GetLatka estimate)" },
    ],
    employeeTimeline: [
      { year: 2022, value: "2 (co-founders)" },
      { year: 2023, value: "~6 (post-YC)" },
      { year: 2024, value: "~4 (pre-acquisition)" },
      { year: 2025, value: "4 → absorbed into Cloudflare D1 team" },
    ],
    milestones: [
      { date: "2022", event: "Founded by Brandon Strittmatter (ex-DigitalOcean) & Brayden Wilmoth (ex-Walmart); YC W23 batch" },
      { date: "2023", event: "Launched EZQL (text-to-SQL), spreadsheet data explorer, Commands (workflow automation), Starbase (REST API generation)" },
      { date: "2024", event: "Released Data Catalog/Glossary, plugin system, Astra UI component library; open-sourced Studio (4.7K GitHub stars)" },
      { date: "Apr 7, 2025", event: "Acquired by Cloudflare (~$1.3M valuation); team joins D1/database tooling group" },
      { date: "Oct 15, 2025", event: "Hosted cloud service shut down; OSS Outerbase Studio continues on GitHub as community project" },
    ],
    deepSources: [
      { label: "Cloudflare Acquisition Blog", url: "https://blog.cloudflare.com/cloudflare-acquires-outerbase-database-dx/" },
      { label: "GetLatka Revenue Data", url: "https://getlatka.com/companies/outerbase.com" },
      { label: "Y Combinator Profile", url: "https://www.ycombinator.com/companies/outerbase" },
      { label: "Product Hunt Launch", url: "https://www.producthunt.com/products/outerbase" },
    ],
  },

  "Seek AI": {
    fundingRounds: [
      { date: "2022", round: "Pre-seed", amount: "~$3M", lead: "Conviction Partners, Battery Ventures" },
      { date: "Jan 2023", round: "Seed", amount: "$7.5M", lead: "Conviction Partners, Battery Ventures", investors: ["Mustafa Suleyman (DeepMind co-founder)", "Tristan Handy (dbt Labs CEO)", "Bob Muglia (ex-Snowflake CEO)", "NJP Ventures"] },
      { date: "Jun 2025", round: "Acquisition", amount: "Undisclosed", lead: "IBM (Data & AI division, GM Ritika Gunnar)" },
    ],
    keyInvestors: ["Battery Ventures", "Conviction Partners (Sarah Guo)", "Mustafa Suleyman", "Tristan Handy", "Bob Muglia"],
    markets: {
      geos: [
        "United States (~34% — primary market, NYC HQ)",
        "India (~16% — developer/enterprise traffic)",
        "Brazil (~9%)",
        "Rest of World (~41%)",
      ],
      verticals: [
        "Financial Services / Fintech (primary — founder from Citadel, Battlefin as named customer)",
        "E-commerce / B2C Retail",
        "Consumer Packaged Goods (CPG)",
        "B2B SaaS",
        "Healthcare and Government (via IBM integration post-acquisition)",
      ],
      target: "Enterprise only. No SMB or mid-market offering.",
      notes: "Geographic data unverified from public sources. Industry clusters inferred from founder background (Citadel), named customers (Battlefin), and product positioning.",
    },
    clientsByVertical: [
      { vertical: "Financial Services", clients: ["Battlefin (CEO: Tim Harrington, reported 10x ROI)"] },
    ],
    employeeTimeline: [
      { year: 2021, value: "Founded — 3 co-founders" },
      { year: 2023, value: "Small team post-seed (~5-8 est.)" },
      { year: 2025, value: "~9 at acquisition (unverified)" },
    ],
    milestones: [
      { date: "Sep 2021", event: "Founded in NYC by Sarah Nagy (ex-Citadel Ashler Capital), David Lee (ex-DataFox/Oracle), Raz Besaleli (Head of AI)" },
      { date: "Jan 2023", event: "Raised $7.5M seed co-led by Conviction Partners and Battery Ventures with notable AI angels" },
      { date: "Nov 2023", event: "MiniSeek model achieves 91.2% execution accuracy on Yale's Spider SQL benchmark — first ML model to surpass 90% (previous SOTA 86.6%)" },
      { date: "Jun 2024", event: "Launched 'Seek Native' Snowflake Native App on Snowflake Marketplace — runs entirely within customer's Snowflake account via Snowpark Container Services" },
      { date: "Jun 2025", event: "Acquired by IBM; team absorbed into watsonx AI Labs at One Madison, Manhattan. IBM Data & AI division (GM Ritika Gunnar). Acqui-hire — technology and team, not a scaled business." },
    ],
    deepSources: [
      { label: "IBM Acquisition (TechCrunch)", url: "https://techcrunch.com/2025/06/02/ibm-acquires-data-analysis-startup-seek-ai-opens-ai-accelerator-in-nyc/" },
      { label: "IBM Newsroom", url: "https://newsroom.ibm.com/2025-06-02-ibm-unveils-watsonx-ai-labs-the-ultimate-accelerator-for-ai-builders,-startups-and-enterprises-in-new-york-city" },
      { label: "MiniSeek Spider Benchmark", url: "https://www.seek.ai/blog/miniseek-first-model-to-surpass-90-accuracy-on-spider-test-benchmark" },
      { label: "Seed Announcement", url: "https://finance.yahoo.com/news/seek-ai-secures-7-5m-130000749.html" },
      { label: "Snowflake Native App Launch", url: "https://www.businesswire.com/news/home/20240604742665/en/Seek-AI-Launches-Seek-Native-a-Snowflake-Native-App-on-Snowflake-Marketplace" },
      { label: "Battery Ventures Investment", url: "https://www.battery.com/blog/our-investment-in-seek/" },
      { label: "Founder Profile (Princeton)", url: "https://bcf.princeton.edu/news/forging-a-career-path-of-her-own-meet-bcf-alumnus-and-startup-founder-sarah-nagy/" },
    ],
  },

  "Rows.com": {
    fundingRounds: [
      { date: "2016", round: "Seed", amount: "Undisclosed", lead: "Cherry Ventures" },
      { date: "2018", round: "Series A", amount: "$8M", lead: "Accel", investors: ["Cherry Ventures"] },
      { date: "Feb 2021", round: "Series B", amount: "$16M", lead: "Lakestar", investors: ["Accel", "Cherry Ventures"] },
      { date: "May 2024", round: "Series C", amount: "€8M (~$8.7M)", lead: "Indico Capital Partners", investors: ["Cherry Ventures", "Accel", "Lakestar", "Armilar Venture Partners"] },
      { date: "Feb 2026", round: "Acquisition", amount: "Undisclosed", lead: "Superhuman" },
    ],
    keyInvestors: ["Accel", "Cherry Ventures", "Lakestar", "Indico Capital Partners", "Armilar Venture Partners"],
    markets: {
      geos: [
        "Europe (~45-50% — Porto/Berlin HQ, European investors, European bank integrations)",
        "North America (~35-40% — US growth market, English-first product)",
        "Rest of World (~10-15%)",
      ],
      verticals: [
        "Marketing / Digital Agencies (~30%) — Google Analytics, ad platforms, social media analytics",
        "SaaS / Tech Startups (~25%) — Stripe, product analytics, growth metrics",
        "E-commerce (~15%) — Shopify data, transaction tracking",
        "Financial Services / Fintech (~10%) — bank integrations, Stripe revenue",
        "Professional Services / Consulting (~10%)",
        "Other (~10%)",
      ],
      target: "Freelancers, marketing/sales teams, and SMBs needing SaaS data aggregation in spreadsheets",
    },
    clientTimeline: [
      { year: 2024, value: "1M+ active users ('overnight success after 8 years')" },
      { year: 2026, value: "2.2M lifetime users (at shutdown)" },
    ],
    employeeTimeline: [
      { year: 2018, value: "~30 (post-Series A)" },
      { year: 2021, value: "~60+ (post-Series B, Porto + Berlin)" },
      { year: 2024, value: "~67 (Tracxn Jul 2024)" },
      { year: 2026, value: "Team joined Superhuman/Coda" },
    ],
    milestones: [
      { date: "2016", event: "Founded as 'dashdash' by Humberto Ayres Pereira (CEO, EE + MBA) and Torben Schulz (COO) in Porto, Portugal" },
      { date: "2018", event: "Series A $8M from Accel. Opened Berlin office. Expanded team to 30+." },
      { date: "Nov 2020", event: "Rebranded from dashdash to Rows. Public launch with spreadsheet + integrations positioning." },
      { date: "Feb 2021", event: "Series B $16M led by Lakestar. 200+ features shipped since Series A." },
      { date: "2023", event: "Launched AI Analyst — AI-powered data analysis within spreadsheet. Reached 50+ native SaaS integrations." },
      { date: "May 2024", event: "Series C €8M from Indico Capital Partners. AI expansion: web scraping agent, enhanced Python execution." },
      { date: "2024", event: "Reached 1M+ active users. 10 Product Hunt launches with 5.0/5 rating and multiple 'Top Post' badges." },
      { date: "Feb 2025", event: "~$475K/month revenue (~$5.7M ARR). Company profitable." },
      { date: "Feb 2026", event: "Acquired by Superhuman. Rows team to strengthen Coda's data capabilities within Superhuman's AI productivity suite (Grammarly, Mail, Coda, Go)." },
      { date: "May 31, 2026", event: "Rows.com fully shut down. All spreadsheets, data connections, scheduled automations, and published dashboards stopped working permanently." },
    ],
    deepSources: [
      { label: "Rows joining Superhuman (official)", url: "https://rows.com/blog/post/rows-is-joining-superhuman" },
      { label: "Superhuman acquisition announcement", url: "https://blog.superhuman.com/superhuman-to-acquire-rows/" },
      { label: "Series B (TechCrunch)", url: "https://techcrunch.com/2021/02/22/rows-formerly-dashdash-raises-16m-to-build-and-populate-web-apps-using-only-spreadsheet-skills/" },
      { label: "Series B Pitch Deck analysis", url: "https://www.alexanderjarvis.com/rows-pitch-deck-to-raise-16m-series-b-round/" },
      { label: "Series C (FinSMEs)", url: "https://www.finsmes.com/2024/05/rows-raises-8-7m-in-funding.html" },
      { label: "Starter Story breakdown", url: "https://www.starterstory.com/rows-breakdown" },
    ],
  },

  "PopSQL": {
    fundingRounds: [
      { date: "Sep 2020", round: "Seed", amount: "$3.4M", lead: "Gradient Ventures (Google)", investors: ["FundersClub", "Y Combinator"] },
      { date: "Feb 2022", round: "Series A", amount: "$14M", lead: "Tiger Global", investors: ["Gradient Ventures", "Y Combinator", "FundersClub"] },
      { date: "Apr 2024", round: "Acquisition", amount: "Undisclosed", lead: "Timescale (now Tiger Data)" },
    ],
    keyInvestors: ["Tiger Global", "Gradient Ventures (Google)", "Y Combinator", "FundersClub"],
    markets: {
      geos: [
        "US (~75% — technology, SaaS startups, financial services, marketing/advertising)",
        "Czech Republic (~25% — unusually high concentration)",
        "Europe ex-Czech (minimal)",
        "Rest of World (minimal — very US-centric product)",
      ],
      verticals: ["Tech/SaaS", "Real Estate", "Fintech", "E-commerce/Logistics", "Marketing/Advertising"],
      target: "Data teams at mid-market. 36% medium-sized companies, 43% with >$1B revenue. Median contract ~$17.5K/year.",
      notes: "Product shutting down Sep 1, 2026. All data permanently deleted. Features being absorbed into Tiger Cloud (Postgres-focused).",
    },
    clientTimeline: [
      { year: 2020, value: "200+ teams" },
      { year: 2022, value: "2,000+ teams" },
      { year: 2024, value: "Acquired by Timescale/Tiger Data. Limited support mode." },
      { year: 2026, value: "Shutting down permanently Sep 1, 2026." },
    ],
    clientsByVertical: [
      { vertical: "Tech/SaaS", clients: ["Instacart", "Auth0", "Clearbit", "Udacity"] },
      { vertical: "Real Estate/Logistics", clients: ["Redfin", "Shipt", "Vroom"] },
      { vertical: "Fintech", clients: ["Ramp"] },
      { vertical: "Other", clients: ["Doodle"] },
    ],
    revenueTimeline: [
      { year: 2023, value: "~$1.9M" },
    ],
    employeeTimeline: [
      { year: 2022, value: "~25" },
      { year: 2024, value: "~12 (post-acquisition)" },
    ],
    milestones: [
      { date: "2017", event: "Founded by Rahil Sondhi as side project while at Instacart" },
      { date: "Sep 2020", event: "Seed round $3.4M from Gradient Ventures (Google)" },
      { date: "Feb 2022", event: "$14M Series A from Tiger Global" },
      { date: "Apr 3, 2024", event: "Acquired by Timescale (now Tiger Data). Terms undisclosed." },
      { date: "2025", event: "Features being absorbed into Tiger Cloud (Postgres-focused)" },
      { date: "2026", event: "Limited support mode. Permanently shutting down Sep 1, 2026. All data deleted, no archive or migration." },
    ],
    deepSources: [
      { label: "Seed Round", url: "https://popsql.com/blog/seed-round" },
      { label: "Series A", url: "https://popsql.com/blog/series-a" },
      { label: "Acquisition", url: "https://popsql.com/blog/popsql-is-joining-timescale" },
      { label: "Limited Support", url: "https://popsql.com/blog/popsql-limited-support" },
      { label: "Crunchbase Acquisition", url: "https://www.crunchbase.com/acquisition/timescaledb-acquires-popsql--b9a6571d" },
    ],
  },

  "Hyperquery": {
    fundingRounds: [
      { date: "2021-2022", round: "Seed", amount: "$2.98M", lead: "Khosla Ventures", investors: ["Hyperplane Venture Capital", "SEMA Translink", "Operator Stack Fund", "Community Access Fund"] },
    ],
    keyInvestors: ["Khosla Ventures", "Hyperplane Venture Capital", "SEMA Translink Investment"],
    markets: {
      geos: ["US (75%, SF/Seattle/NYC)", "Europe (15%, Docplanner in Poland)", "Asia (5%, team members in Seoul)", "RoW (5%)"],
      verticals: ["Software/SaaS", "E-commerce", "AdTech", "HealthTech"],
      target: "Data analysts and small-to-medium data teams at startups and mid-market companies",
      notes: "Very small customer base — likely low hundreds at most. Sub-$1M ARR. Horizontal — no strong vertical focus. Fully remote team (SF, Seattle, NYC, Seoul, HCMC, Santa Cruz).",
    },
    clientsByVertical: [
      { vertical: "HealthTech", clients: ["Docplanner"] },
      { vertical: "E-commerce", clients: ["Brooklinen"] },
      { vertical: "AdTech", clients: ["Zeeto"] },
      { vertical: "SaaS", clients: ["Output"] },
    ],
    employeeTimeline: [
      { year: 2022, value: "~8" },
      { year: 2024, value: "~13" },
    ],
    milestones: [
      { date: "2020", event: "Founded by Joseph Moon (CEO) and Robert Yi (CTO), both ex-Airbnb/Wayfair data scientists who met at Harvard" },
      { date: "2021-2022", event: "$2.98M seed led by Khosla Ventures. Built AI-powered collaborative SQL+Python notebook." },
      { date: "2023", event: "Product matured with Jinja2 templating, dbt integration, Notion/Confluence embedding. SOC 2 Type II + HIPAA + GDPR certified." },
      { date: "Jul 2024", event: "Acquired by Deepnote. Clients (Docplanner, Output, Zeeto) migrated to Deepnote platform." },
      { date: "Aug 2024", event: "Product fully sunset. All users migrated to Deepnote." },
      { date: "2025", event: "Founders launched Oxygen Intelligence (oxy.tech) — open-source agentic data platform built on Rust/DuckDB. hyperquery.ai domain now serves Oxygen Intelligence." },
    ],
    deepSources: [
      { label: "Acquisition Press Release", url: "https://www.businesswire.com/news/home/20240729061332/en/Deepnote-Acquires-Hyperquery-Enabling-Organizations-to-Democratize-AI-and-Data-Analytics" },
      { label: "Deepnote Blog", url: "https://deepnote.com/blog/deepnote-acquires-hyperquery" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/hyperquery" },
      { label: "Oxygen Intelligence", url: "https://www.oxy.tech/about" },
    ],
  },

  "Zing Data": {
    fundingRounds: [
      { date: "Jun 2022", round: "Seed", amount: "$2.4M", lead: "Kindred Ventures", investors: ["Correlation Ventures", "industry angels (early Amplitude/Robinhood backers)"] },
    ],
    keyInvestors: ["Kindred Ventures", "Correlation Ventures"],
    markets: {
      geos: [
        "US (~70% — Silicon Valley HQ, English-language product)",
        "Europe (~15%)",
        "Asia (~10%)",
        "RoW (~5%)",
      ],
      verticals: [
        "SaaS / Tech Startups (~30% — quick analytics for small teams)",
        "Operations / Field Teams (~25% — mobile-first appealed to non-desk workers)",
        "Marketing / Growth (~20%)",
        "General SMB (~25%)",
      ],
      target: "SMBs and mobile-first field teams. No dominant vertical — horizontal tool.",
      notes: "8,000+ users and companies. Fortune Global 1000 clients (unnamed). Partnerships with Databricks, ClickHouse, Google.",
    },
    revenueTimeline: [
      { year: 2025, value: "$220K ARR (Jul 2025, getlatka)" },
    ],
    employeeTimeline: [
      { year: 2021, value: "2 (co-founders only)" },
      { year: 2022, value: "2-3 (post-seed)" },
      { year: 2025, value: "2-5 (getlatka says 2, Tracxn says 5 — likely co-founders + contractors)" },
    ],
    milestones: [
      { date: "Jan 2021", event: "Founded by Zack Hendlin and Sabin Thomas (MIT classmates). Pioneered mobile-first BI analytics." },
      { date: "Jun 2022", event: "$2.4M seed from Kindred Ventures + Correlation Ventures. TechCrunch coverage." },
      { date: "2023", event: "Featured as TechCrunch Disrupt company. Secured Databricks, ClickHouse, Google partnerships." },
      { date: "2024", event: "SwiftQuery AI launched — NLQ via OpenAI and Google LLMs. Google Sheets bidirectional integration." },
      { date: "Jul 2025", event: "$220K ARR reached — revenue growing but insufficient scale." },
      { date: "Dec 21, 2025", event: "Service sunset. Founder: 'we didn't build something indispensable to enough people willing to pay fast enough.' Cited AI competition, entrenched legacy systems, browser-based AI making standalone tools redundant." },
    ],
    deepSources: [
      { label: "TechCrunch Seed", url: "https://techcrunch.com/2022/06/29/with-2-4m-seed-zing-data-wants-to-put-data-analysis-in-the-palm-of-your-hand/" },
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/getzingdata.com" },
      { label: "Founder Shutdown Post", url: "https://www.linkedin.com/posts/zackhendlin_zing-data-is-shutting-down-we-were-building-activity-7407938738158305280-ELtu" },
      { label: "Kindred Ventures Investment", url: "https://medium.com/kindred-ventures/our-investment-in-zing-data-ae44220fa3b6" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/zing-data" },
    ],
  },

  "DataGPT": {
    fundingRounds: [
      { date: "2021-2023", round: "Pre-seed + Seed", amount: "~$10M", lead: "Undisclosed" },
      { date: "Oct 2024", round: "Series B", amount: "$11.9M", lead: "Undisclosed" },
    ],
    keyInvestors: ["Undisclosed (total ~$22M raised)"],
    markets: {
      geos: ["US (San Francisco HQ)"],
      verticals: ["QSR/Food Service", "Streaming/Media"],
      target: "Enterprise",
      notes: "Started product-led ($99/mo) targeting SMB/mid-market, then pivoted to enterprise-only ($10K-$30K pilots). The pivot killed bottom-up adoption without establishing enterprise pipeline. No meaningful customer base accumulated.",
    },
    clientsByVertical: [
      { vertical: "QSR", clients: ["Papa Johns"] },
      { vertical: "Streaming", clients: ["Plex"] },
    ],
    employeeTimeline: [
      { year: 2024, value: "~14" },
      { year: 2025, value: "0 (shut down)" },
    ],
    milestones: [
      { date: "2021", event: "Founded by Arina Curtis (CEO), Darren Pegg (CTO), Sasha MacKinnon as Comparative Inc" },
      { date: "Oct 2023", event: "Launched DataGPT conversational AI analyst with Lightning Cache Engine" },
      { date: "Mid 2024", event: "Had $99/mo Xpress tier — accessible, product-led growth possible" },
      { date: "Late 2024", event: "Killed $99/mo tier, minimum jumped to ~$3,333/mo. Pivoted enterprise-only." },
      { date: "Oct 2024", event: "Raised $11.9M Series B while simultaneously killing affordable tier" },
      { date: "Late 2025", event: "Shut down silently — 404 errors, team departed, founders scrubbed from company page, no press release" },
    ],
    deepSources: [
      { label: "Shutdown Analysis", url: "https://www.blazesql.com/blog/datagpt-shutdown-alternatives" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/comparative" },
      { label: "Tracxn", url: "https://tracxn.com/d/companies/datagpt/__pfu-mfDPatP6JyvhaP4eq9OXuaUTG83DPNpBOdjM_0Y" },
    ],
  },

  "Actiondesk": {
    fundingRounds: [
      { date: "Aug 2019", round: "Pre-seed (YC S19)", amount: "$150K", lead: "Y Combinator" },
      { date: "May 2022", round: "Seed", amount: "$3.9M", lead: "Tiger Global", investors: ["Bling Capital", "Y Combinator", "Speedinvest", "Liquid 2 Ventures", "FCVC"] },
    ],
    keyInvestors: ["Tiger Global", "Y Combinator", "Bling Capital", "Speedinvest"],
    markets: {
      geos: ["US", "Europe (Paris-founded)"],
      verticals: ["SaaS Operations", "Data Workflow"],
      target: "SMB ops teams",
    },
    revenueTimeline: [
      { year: 2023, value: "$1.2M" },
    ],
    employeeTimeline: [
      { year: 2023, value: "~9" },
    ],
    milestones: [
      { date: "2019", event: "Founded; graduated YC S19 batch" },
      { date: "May 2022", event: "$3.9M seed led by Tiger Global" },
      { date: "Nov 2023", event: "Acquired by Datadog; product discontinued" },
    ],
    deepSources: [
      { label: "Datadog Acquisition", url: "https://www.datadoghq.com/blog/datadog-acquires-actiondesk/" },
      { label: "GetLatka", url: "https://getlatka.com/companies/actiondesk" },
    ],
  },

  "TIBCO Spotfire": {
    fundingRounds: [
      { date: "1996-2006", round: "Multiple (pre-IPO)", amount: "$40M total", lead: "Credit Suisse, New Leaf Venture Partners, SEB" },
      { date: "Jun 2007", round: "Acquisition", amount: "$195M", lead: "TIBCO Software" },
      { date: "Sep 2022", round: "PE Buyout", amount: "Part of TIBCO", lead: "Vista Equity + Evergreen Coast Capital (formed Cloud Software Group)" },
    ],
    keyInvestors: ["Vista Equity Partners", "Evergreen Coast Capital", "Cloud Software Group"],
    markets: {
      geos: ["US", "EMEA", "APAC"],
      verticals: ["Oil & Gas", "Pharma/Life Sciences", "Semiconductor", "Manufacturing", "Banking"],
      target: "Enterprise (Global 2000)",
    },
    clientTimeline: [
      { year: 2025, value: "9,170+" },
    ],
    clientsByVertical: [
      { vertical: "Energy", clients: ["ExxonMobil", "ConocoPhillips", "Occidental Petroleum"] },
      { vertical: "Consumer/Industrial", clients: ["Cargill"] },
      { vertical: "Financial", clients: ["Bank of Montreal"] },
    ],
    revenueTimeline: [
      { year: 2025, value: "$750M" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~2,500" },
    ],
    milestones: [
      { date: "1996", event: "Founded as Spotfire Inc (spun out of Chalmers University research)" },
      { date: "Jun 2007", event: "Acquired by TIBCO for $195M" },
      { date: "Sep 2022", event: "TIBCO merged into Cloud Software Group (Vista Equity + Citrix)" },
      { date: "May 2023", event: "Spotfire re-established as standalone business unit within CSG" },
    ],
    deepSources: [
      { label: "Spotfire History", url: "https://www.spotfire.com/about" },
      { label: "TIBCO Acquisition", url: "https://www.informationweek.com/it-sectors/tibco-acquires-spotfire-for-195-million" },
      { label: "Enlyft Market Share", url: "https://enlyft.com/tech/products/tibco-spotfire" },
    ],
  },

  "Steep": {
    fundingRounds: [
      { date: "Oct 2022", round: "Pre-seed", amount: "~$1M", lead: "Inventure", investors: ["Alliance VC", "Antler"] },
      { date: "Jul 2024", round: "Seed", amount: "€4M (~$4.29M)", lead: "Connect Ventures", investors: ["Inventure", "Alliance VC", "Antler", "Greens"], valuation: "Undisclosed" },
    ],
    keyInvestors: ["Connect Ventures", "Inventure", "Alliance VC", "Antler", "Greens", "Carl Pei (Nothing/OnePlus founder, angel)"],
    markets: {
      geos: [
        "Europe (~60% — Stockholm HQ, strong Nordic/Scandinavian customer base: Voi, Voyado, Juni, Monta)",
        "North America (~25% — Philadelphia Inquirer is a named customer, US expansion target)",
        "Rest of World (~15%)",
      ],
      verticals: [
        "Mobility / Transportation (~25%) — Voi (e-scooters), Bounce (ride-sharing), Veo (micromobility), Monta (EV charging)",
        "SaaS / Tech (~25%) — Framer (design), Stravito (insights), Alloy (identity)",
        "Fintech / Payments (~20%) — Juni (financial platform)",
        "E-commerce / Retail (~15%) — Voyado (customer experience), Hairburst",
        "Media + Other (~15%) — Philadelphia Inquirer, Instabox, Budbee",
      ],
      target: "Tech-forward startups and scale-ups with 50-500 employees, existing SQL warehouse, data team wanting governed metrics",
    },
    clientsByVertical: [
      { vertical: "Mobility / Transport", clients: ["Voi", "Bounce", "Veo", "Monta"] },
      { vertical: "SaaS / Tech", clients: ["Framer", "Alloy", "Stravito"] },
      { vertical: "Fintech", clients: ["Juni"] },
      { vertical: "E-commerce / Retail", clients: ["Voyado", "Hairburst"] },
      { vertical: "Media", clients: ["Philadelphia Inquirer"] },
      { vertical: "Logistics", clients: ["Instabox", "Budbee"] },
    ],
    employeeTimeline: [
      { year: 2021, value: "2 (founders: Johan Baltzar + Nino Höglund)" },
      { year: 2022, value: "~5-8 (post pre-seed)" },
      { year: 2024, value: "~15 (post seed)" },
      { year: 2026, value: "~20 (GetLatka)" },
    ],
    revenueTimeline: [
      { year: 2025, value: "$2.2M ARR (GetLatka)" },
    ],
    milestones: [
      { date: "2021", event: "Founded by Johan Baltzar (CEO, ex-Spotify/iZettle/PayPal/Kry analytics lead) and Nino Höglund (ex-Spotify/iZettle/PayPal/Kry design lead) in Stockholm" },
      { date: "Oct 2022", event: "Pre-seed ~$1M from Inventure, Alliance VC, Antler. Carl Pei (Nothing/OnePlus founder) as angel investor." },
      { date: "Oct 2023", event: "Search, caching & performance improvements — early product maturity" },
      { date: "Jan 2024", event: "dbt Cloud + Cube integrations launched — first-class semantic layer interop" },
      { date: "Jul 2024", event: "Seed €4M led by Connect Ventures. AI Chart Builder launched." },
      { date: "Dec 2024", event: "Entities feature launched — row-level drill-down objects within metrics framework" },
      { date: "Feb 2025", event: "Semantic Graph (Modules) launched — visual join paths and relationships" },
      { date: "Nov 2025", event: "Define in Code launched — YAML-based metric definitions with GitHub version control" },
      { date: "Jan 2026", event: "Steep API launched — metadata and metric query endpoints" },
      { date: "Mar 2026", event: "Steep AI launched — conversational agent grounded in semantic model, natural language Q&A" },
      { date: "May 2026", event: "Row-Level Security (Enterprise) + MCP support (mcp.steep.app) launched" },
    ],
    deepSources: [
      { label: "Seed Round (Tech.eu)", url: "https://tech.eu/2024/07/03/swedish-analytics-startup-steep-raises-4m-seed/" },
      { label: "GetLatka", url: "https://getlatka.com/companies/steep.app" },
      { label: "ArcticStartup", url: "https://arcticstartup.com/steep-raises-e4m-seed/" },
      { label: "Changelog", url: "https://steep.app/changelog" },
      { label: "Pre-seed (TechFundingNews)", url: "https://techfundingnews.com/steep-collects-e1m-to-help-companies-setup-analytics-in-15-minutes/" },
    ],
  },

  "Evidence.dev": {
    fundingRounds: [
      { date: "Sep 2023", round: "Seed", amount: "$2.1M", lead: "A.Capital", investors: ["SV Angel", "Y Combinator", "Tristan Handy (dbt)", "Joe Morrissey", "Tido Carriero"] },
    ],
    keyInvestors: ["A.Capital", "SV Angel", "Y Combinator", "Tristan Handy (dbt founder)"],
    markets: {
      geos: ["US ~50%", "Europe (UK, Western Europe) ~25%", "Canada (home market) ~10%", "Rest of World ~15%"],
      verticals: ["Tech/SaaS (dominant)", "Real Estate (Crexi)", "Insurance (Assurance IQ)", "Healthcare/Veterinary (Modern Animal, Dialogue)", "Media (Victory+)", "Advertising/Retail Media (Zitcha)"],
      target: "Technical data teams at tech-forward companies with existing data engineering capability",
    },
    clientTimeline: [
      { year: 2023, value: "GitHub approaching 2K stars at seed" },
      { year: 2026, value: "6.4K GitHub stars, 17K weekly npm downloads, 2K+ Slack community" },
    ],
    clientsByVertical: [
      { vertical: "Tech", clients: ["Apple", "IDC"] },
      { vertical: "Real Estate", clients: ["Crexi"] },
      { vertical: "Insurance", clients: ["Assurance IQ"] },
      { vertical: "Healthcare", clients: ["Modern Animal", "Dialogue"] },
      { vertical: "Media", clients: ["Victory+"] },
      { vertical: "Advertising", clients: ["Zitcha"] },
    ],
    employeeTimeline: [
      { year: 2021, value: "2 (founders)" },
      { year: 2025, value: "~6" },
    ],
    milestones: [
      { date: "2021", event: "Founded by Sean Hughes & Adam McAskill; graduated YC S21" },
      { date: "Sep 2023", event: "$2.1M seed led by A.Capital; launched Evidence Cloud (Starter/Team/Enterprise)" },
      { date: "2024", event: "Named one of fastest-growing OSS startups by Runa Capital" },
      { date: "2025", event: "Evidence Studio launched — web IDE, AI Dev Agent, AI Chat, Evidence Query Engine (ClickHouse-based)" },
      { date: "Feb 2026", event: "Latest release @evidence-dev/evidence@40.1.8. Pricing updated to per-user model ($15/user Team, $25/user Pro)" },
    ],
    deepSources: [
      { label: "TechCrunch", url: "https://techcrunch.com/2023/09/13/evidence-business-intelligence-open-source-code/" },
      { label: "Seed Announcement", url: "https://evidence.dev/blog/fundraise-and-cloud" },
      { label: "GitHub", url: "https://github.com/evidence-dev/evidence" },
      { label: "YC Profile", url: "https://www.ycombinator.com/companies/evidence" },
    ],
  },

  "NLSQL": {
    fundingRounds: [
      { date: "2020", round: "Grant", amount: "Undisclosed", lead: "German Federal Ministry (Healthcare BI)" },
    ],
    keyInvestors: ["Bootstrapped / grant-funded"],
    markets: {
      geos: ["Europe ~40% (London HQ, SAP ecosystem strong in EMEA)", "US ~30% (Azure Marketplace, Teams/Slack adoption)", "Middle East ~10% (enterprise SAP deployments in Gulf states)", "Asia-Pacific ~10% (SAP HANA in manufacturing)", "Rest of World ~10%"],
      verticals: ["Manufacturing/Industrial (~25% — SAP HANA/ERP core)", "Healthcare (~15% — patient data, clinician decision support)", "Financial Services (~15%)", "Retail/Consumer (~15% — SAP Business One)", "Technology/SaaS (~10%)", "Government/Public Sector (~10%)"],
      target: "Enterprise front-line employees querying data via Teams/Slack chatbot. 10-50 users per org, deployed per department.",
    },
    clientsByVertical: [
      { vertical: "Airlines", clients: ["Delta Airlines"] },
      { vertical: "Healthcare", clients: ["Healthcare systems (case studies mentioned)"] },
      { vertical: "Manufacturing", clients: ["SAP ecosystem customers"] },
    ],
    employeeTimeline: [
      { year: 2025, value: "~6-10" },
    ],
    milestones: [
      { date: "2018", event: "Founded by Denis Chernenko (CEO) in London/Kyiv; first cloud text-to-SQL API" },
      { date: "2020", event: "German Federal Ministry grant for Healthcare BI module" },
      { date: "2022", event: "SAP certified (Built on SAP Cloud Platform); listed on SAP App Center" },
      { date: "2024", event: "Added AI Agents and anomaly detection features. Azure Marketplace listing." },
    ],
    deepSources: [
      { label: "Website", url: "https://nlsql.com/" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/nlsql" },
      { label: "SAP Certification", url: "https://community.sap.com/t5/technology-blog-posts-by-sap/nlsql-1-0-achieves-sap-certified-built-on-sap-cloud-platform/ba-p/13388141" },
      { label: "Capterra", url: "https://www.capterra.com/p/180750/NLSQL-AI-bot/" },
    ],
  },

  "Vanna AI": {
    fundingRounds: [
      { date: "2024", round: "Competition", amount: "$20K", lead: "Paddle AI Launchpad (winner)" },
    ],
    keyInvestors: ["Bootstrapped — no VC funding"],
    markets: {
      geos: [
        "US (~45% — HQ in Fairfield, CT; NVIDIA partnership signals US enterprise focus)",
        "India (~15% — strong open-source developer community)",
        "Europe (~20% — Python/data engineering community adoption)",
        "Asia ex-India (~10% — Chinese and Southeast Asian developer communities)",
        "RoW (~10%)",
      ],
      verticals: [
        "Technology / SaaS (~30% — developers building internal analytics tools)",
        "Data Engineering / Analytics (~25% — teams augmenting existing BI with NLQ)",
        "Startups / SMBs (~20% — small teams needing quick data access without BI investment)",
        "Finance (~10% — quick SQL generation for analytical queries)",
        "Education / Research (~15% — academic use, tutorials, learning projects)",
      ],
      target: "Developers and data analysts (open-source self-serve). No dominant vertical — horizontal developer tool.",
      notes: "Geographic/vertical estimates based on GitHub community and cloud user patterns. No official breakdown available.",
    },
    revenueTimeline: [
      { year: 2024, value: "~$100K" },
      { year: 2025, value: "$330K ARR (getlatka, 3-person team)" },
    ],
    employeeTimeline: [
      { year: 2025, value: "3 (getlatka)" },
      { year: 2026, value: "4 (Tracxn, Jan 2026)" },
    ],
    milestones: [
      { date: "2023", event: "Founded by Zain Hoda (ex-BlackRock quant) and Aditya Sudhakar; MIT-licensed open-source Python RAG framework" },
      { date: "2024", event: "Won Paddle AI Launchpad ($20K); Google Cloud Ready — BigQuery designation" },
      { date: "2024", event: "NVIDIA NIM integration — featured on NVIDIA technical blog for accelerated text-to-SQL inference" },
      { date: "Oct 2025", event: "Reached 20,000 GitHub stars" },
      { date: "2026", event: "Vanna 2.0 released — complete architectural rewrite: user-aware agent framework, RBAC, audit logs, streaming UI, embeddable components" },
      { date: "Mar 29, 2026", event: "GitHub repository archived by owner — transition to proprietary Vanna 2.0 cloud product. Community concerns about open-core bait-and-switch." },
    ],
    deepSources: [
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/vanna.ai" },
      { label: "GitHub (archived)", url: "https://github.com/vanna-ai/vanna" },
      { label: "NVIDIA NIM Blog", url: "https://developer.nvidia.com/blog/accelerating-text-to-sql-inference-on-vanna-with-nvidia-nim-for-faster-analytics/" },
      { label: "CB Insights", url: "https://www.cbinsights.com/company/vanna-ai" },
      { label: "Tracxn Profile", url: "https://tracxn.com/d/companies/vannaai/__HrM43V18_7QajdMlkPkiP8_dFFc_6DNKRvPtiO3pOYk" },
      { label: "Founder Interview", url: "https://promptsninja.com/vanna-ai-interview/" },
    ],
  },
};

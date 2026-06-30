import type { DeepResearch } from "./competitors";

export const deepInfra: Record<string, DeepResearch> = {
  "Metabase": {
    fundingRounds: [
      { date: "Feb 2019", round: "Series A", amount: "$13M", lead: "New Enterprise Associates", investors: ["Expa"] },
      { date: "May 2021", round: "Series B", amount: "$30M", lead: "Insight Partners", investors: ["Expa", "Centre Street Partners"] },
    ],
    keyInvestors: ["Insight Partners", "New Enterprise Associates", "Expa", "Centre Street Partners"],
    markets: {
      geos: [
        "United States (~34% — ~1,099 companies)",
        "Brazil (~20% — ~656 companies, unusually strong for BI tool)",
        "India (~13% — ~414 companies)",
        "Germany (~5%)",
        "United Kingdom (~4%)",
        "France (~4%)",
        "Rest of Europe (~8%)",
        "Rest of LATAM (~5%)",
        "Rest of APAC (~5%)",
      ],
      verticals: [
        "Technology / Software / SaaS (~25%)",
        "Financial Services / Fintech (~14%)",
        "Internet / Digital (~10%)",
        "AI / ML (~8%)",
        "E-commerce / Retail (~8%)",
        "Healthcare (~6%)",
        "Education (~6%)",
        "Media / Entertainment (~5%)",
        "Manufacturing (~4%)",
      ],
      target: "SMB to Mid-market (40% are 11-50 employee companies)",
      notes: "4,379 commercial customers (6sense). 50,000+ total organizations. 200+ countries. 47.6K GitHub stars, 100M+ Docker pulls. Brazil unusually strong (~20%) driven by OSS adoption culture and cost sensitivity. Very global distribution. Skews tech-forward startups. Relatively weak in traditional enterprise (gov, manufacturing, utilities).",
    },
    clientTimeline: [
      { year: 2023, value: "60K+ orgs" },
      { year: 2025, value: "50,000+ orgs (revised count), $13.4M ARR" },
      { year: 2026, value: "4,379 commercial (6sense), 50,000+ total, 47.6K GitHub stars" },
    ],
    clientsByVertical: [
      { vertical: "QSR/Retail", clients: ["McDonald's"] },
      { vertical: "Finance", clients: ["Capital One", "AngelList Venture"] },
      { vertical: "Tech/AI", clients: ["HuggingFace", "Axway"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "~$8M" },
      { year: 2025, value: "$13.4M ARR (GetLatka)" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~122" },
      { year: 2026, value: "~125" },
    ],
    milestones: [
      { date: "2014", event: "Founded in San Francisco." },
      { date: "Feb 2019", event: "Series A $13M from NEA." },
      { date: "May 2021", event: "Series B $30M from Insight Partners." },
      { date: "2024", event: "100M+ Docker pulls. 60% YoY revenue growth." },
      { date: "Mar 2026", event: "v59: Data Studio (semantic layer), AI SQL generation in OSS (BYO Anthropic key), Metabot AI assistant." },
      { date: "Apr 2026", event: "v60: Open-sourced AI tools. MCP server. Metabot in Slack. BYO model support. Split multi-series charts. Metrics explorer." },
      { date: "May 2026", event: "v61: AI governance layer — per-group controls, token/message limits, AI usage analytics. Dashboards-as-code from AI terminal. Metrics math." },
    ],
    deepSources: [
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/metabase.com" },
      { label: "Tracxn Profile", url: "https://tracxn.com/d/companies/metabase/__mmcSpUJQUbp5CDeW1GNS5aWGEAcpOJz22NS8cVG-Iz8" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/metabase" },
      { label: "6sense Market Share", url: "https://6sense.com/tech/data-visualization/metabase-market-share" },
      { label: "Releases", url: "https://www.metabase.com/releases" },
      { label: "Data Studio", url: "https://www.metabase.com/product/data-studio/" },
      { label: "MongoDB Support", url: "https://www.metabase.com/data-sources/mongo-db" },
    ],
  },

  "Apache Superset / Preset": {
    fundingRounds: [
      { date: "2020", round: "Seed", amount: "$12.5M", lead: "Andreessen Horowitz (a16z)" },
      { date: "Aug 2021", round: "Series B", amount: "$35.9M", lead: "Redpoint Ventures", investors: ["a16z", "Fathom Capital"] },
    ],
    keyInvestors: ["Andreessen Horowitz", "Redpoint Ventures", "Fathom Capital"],
    markets: {
      geos: ["US ~55%", "Europe (UK, Germany, France, Nordics) ~18%", "India ~12%", "APAC ex-India ~10%", "LATAM ~5%"],
      verticals: ["IT & Software", "Financial Services", "E-commerce", "Data Analytics / AI", "Healthcare", "Fintech"],
      target: "Mid-market & startups (technical data teams)",
      notes: "~3,900 companies. Heavy OSS adoption in India/LATAM (cost-conscious). US dominated by IT/software (42%). India driven by IT services/outsourcing (40%). LATAM by fintech/banking (30%).",
    },
    clientTimeline: [
      { year: 2026, value: "~3,900 companies" },
    ],
    clientsByVertical: [
      { vertical: "Tech", clients: ["Airbnb (original creator)", "Netflix", "Dropbox", "Lyft"] },
      { vertical: "OSS Community", clients: ["60K+ GitHub stars", "19K+ Slack users"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "$2.8-$3.7M (Preset)" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~45 (Preset)" },
    ],
    milestones: [
      { date: "2015", event: "Created at Airbnb by Max Beauchemin (also created Apache Airflow)" },
      { date: "2018", event: "Preset (commercial company) founded" },
      { date: "2020", event: "Preset raises $12.5M seed from a16z" },
      { date: "2021", event: "Graduated to Apache Top-Level Project" },
      { date: "2026", event: "MongoDB native support added; PWA support" },
    ],
    deepSources: [
      { label: "Preset Series B", url: "https://www.prnewswire.com/news-releases/preset-raises-35-9m-series-b-to-democratize-business-intelligence-301357746.html" },
      { label: "GetLatka", url: "https://getlatka.com/companies/preset" },
      { label: "Enlyft", url: "https://enlyft.com/tech/products/apache-superset" },
      { label: "6sense", url: "https://6sense.com/tech/data-visualization/superset-market-share" },
    ],
  },

  "Grafana Labs": {
    fundingRounds: [
      { date: "2021", round: "Series C", amount: "$220M", lead: "Sequoia Capital", investors: ["GIC", "Coatue"] },
      { date: "Aug 2024", round: "Series D ext.", amount: "$270M", lead: "GIC", investors: ["CapitalG", "Lightspeed", "Sequoia"], valuation: "$6.6B" },
      { date: "Mar 2026", round: "Series E", amount: "$249.9M", lead: "GIC", investors: ["ICONIQ", "Lightspeed", "Sequoia", "Coatue", "CapitalG"], valuation: "$9B" },
    ],
    keyInvestors: ["GIC (Singapore sovereign wealth)", "Sequoia Capital", "Lightspeed Venture Partners", "ICONIQ", "Coatue", "CapitalG (Alphabet)", "J.P. Morgan", "Ontario Teachers' Pension Plan", "Sapphire Ventures", "Tiger Global", "Lead Edge Capital"],
    markets: {
      geos: [
        "United States (~42% — largest market, enterprise SaaS and tech dominant)",
        "Brazil (~14% — strong open-source adoption in LATAM's largest tech market)",
        "India (~10% — developer community, cost-conscious orgs)",
        "Europe (~25-30% — Germany and UK strongest, manufacturing/telecoms/IoT)",
        "APAC ex-India (~5-10% — growing, new Japan subsidiary 2025)",
      ],
      verticals: [
        "IT & Services (~27% — SRE/DevOps monitoring core use case)",
        "Computer Software (~15% — application observability for SaaS)",
        "Financial Services (~10% — low-latency monitoring, compliance)",
        "Manufacturing & Telecom (~15% — Industry 4.0, IoT, network ops)",
        "Media, Retail, E-commerce (~10% — site reliability, performance)",
        "Public Sector / Government (~5% — FedRAMP deployments)",
      ],
      target: "Enterprise to startups (70% of Fortune 50, free tier for individuals)",
      notes: "7,000+ orgs, 25M+ users. 100% remote, 50+ countries. Unusually broad adoption — from 3-person startups on free tier to Fortune 50. Mid-market sweet spot: 50-500 employees with 10-50 active Grafana users.",
    },
    clientTimeline: [
      { year: 2024, value: "5,000+ orgs" },
      { year: 2025, value: "7,000+ orgs, 25M+ users" },
    ],
    clientsByVertical: [
      { vertical: "AI/Tech", clients: ["Anthropic", "NVIDIA", "Microsoft", "Salesforce"] },
      { vertical: "Financial Services", clients: ["Bloomberg", "J.P. Morgan Chase", "TD Bank"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "$250M ARR" },
      { year: 2025, value: "$400M+ ARR" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~1,400" },
      { year: 2025, value: "~1,700" },
      { year: 2026, value: "~1,800" },
    ],
    milestones: [
      { date: "2014", event: "Founded by Raj Dutt, Torkel Ödegaard, Anthony Woods. Forked from Kibana." },
      { date: "Apr 2025", event: "FedRAMP High + DoD IL5 authorization achieved (via Palantir FedStart)." },
      { date: "Jul 2025", event: "Gartner Magic Quadrant Leader for Observability 2025 (2nd consecutive year). Furthest in 'Completeness of Vision'." },
      { date: "Sep 2025", event: "Surpassed $400M ARR and 7,000 customers. Secondary led by Ontario Teachers', Sapphire Ventures, Tiger Global." },
      { date: "Mar 2026", event: "Series E $249.9M led by GIC at ~$9B valuation ($1.09B total raised)." },
      { date: "Apr 2026", event: "GrafanaCON 2026: Grafana 13 launched. Assistant extended to Enterprise + OSS. AI Observability in Preview. Assistant Skills GA. Free AI for all users." },
    ],
    deepSources: [
      { label: "$400M ARR", url: "https://grafana.com/press/2025/09/30/grafana-labs-surpasses-400m-arr-and-7000-customers-gains-new-investors-to-accelerate-global-expansion/" },
      { label: "$9B Valuation", url: "https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/" },
      { label: "Breakout Year", url: "https://grafana.com/press/2026/02/03/grafana-labs-caps-a-breakout-year-of-growth-and-product-innovation/" },
      { label: "FedRAMP High", url: "https://grafana.com/press/2025/04/16/grafana-labs-achieves-fedramp-high-authorization-appoints-new-federal-leader/" },
      { label: "Gartner MQ 2025", url: "https://grafana.com/blog/grafana-labs-named-a-leader-again-in-the-2025-gartner-magic-quadrant-for-observability-platforms/" },
      { label: "Assistant Everywhere", url: "https://grafana.com/blog/grafana-assistant-everywhere/" },
      { label: "Tracxn", url: "https://tracxn.com/d/companies/grafana/___YLnv1__Y26usD-QBbRWcBhyQ87C4VBrvKqkMV7TkUQ/funding-and-investors" },
    ],
  },

  "Chat2DB": {
    fundingRounds: [
      { date: "Jan 2024", round: "Seed", amount: "Undisclosed", lead: "Miracleplus", investors: ["Woqu Tech"] },
    ],
    keyInvestors: ["Miracleplus", "Woqu Tech"],
    markets: {
      geos: ["China ~40% (Hangzhou HQ)", "US ~20%", "Europe ~15%", "India ~12%", "Rest of Asia ~8%", "LATAM/Other ~5%"],
      verticals: ["Tech/Software", "Developer Tools", "E-commerce/Retail", "Financial Services", "IT Services"],
      target: "Individual developers to SMB",
      notes: "1M+ users claimed, 25.7K GitHub stars. Paying customer count unknown. Geo estimates from GitHub star distribution and issue language. Strong China adoption due to Hangzhou origin + Chinese-language docs.",
    },
    clientTimeline: [
      { year: 2025, value: "1M+ users, 25.7K GitHub stars" },
    ],
    milestones: [
      { date: "Jun 2023", event: "Repository created on GitHub; open-sourced (Apache 2.0 + Chat2DB License)" },
      { date: "Jan 2024", event: "Seed funding from Miracleplus + Woqu Tech" },
      { date: "2025", event: "Surpassed 25K GitHub stars and 1M users; 43 releases, 3,894 commits" },
      { date: "Jan 2025", event: "Last release v0.3.7 — development pace slowing" },
      { date: "2026", event: "Chat2DB++ migration announced — architectural upgrade in progress" },
    ],
    deepSources: [
      { label: "GitHub", url: "https://github.com/CodePhiliaX/Chat2DB" },
      { label: "Product", url: "https://chat2db.ai/" },
      { label: "Pricing", url: "https://chat2db.ai/en-US/pricing" },
      { label: "Supported DBs", url: "https://chat2db.ai/resources/docs/connection/support-database" },
    ],
  },

  "Redash": {
    fundingRounds: [
      { date: "~2013", round: "Angel/Grant", amount: "~$50K", lead: "Aleph (Israel)" },
      { date: "Jun 2020", round: "Acquisition", amount: "Undisclosed", lead: "Databricks" },
    ],
    keyInvestors: ["Aleph (Israel)"],
    markets: {
      geos: [
        "US (~43% — largest market, tech companies)",
        "India (~17% — strong developer adoption)",
        "Indonesia (~11%)",
        "Israel (founding ecosystem, Tel Aviv/Rehovot HQ)",
        "Rest of World (~29% — scattered Europe/LATAM)",
      ],
      verticals: [
        "Information Technology & Services (18%) — primary vertical",
        "Computer Software / SaaS (15%) — tech startups and scale-ups",
        "Internet (14%) — web companies and platforms",
        "Financial Services (7%)",
        "ML/AI & Data Analytics — data-heavy teams",
        "DevOps / Data Engineering — pipeline monitoring, infrastructure metrics",
      ],
      target: "Mid-size tech companies (100-5,000 employees). Small data teams (5-20) create queries/dashboards, many more consume. Company size sweet spot: 100-249 employees.",
    },
    clientTimeline: [
      { year: 2020, value: "Thousands of orgs (pre-acquisition). Notable: Atlassian, Cloudflare, Mozilla, SoundCloud." },
      { year: 2025, value: "~206 companies (6sense). 985 companies (TheIRStack). 0.18% analytics market share (Enlyft). Declining." },
    ],
    clientsByVertical: [
      { vertical: "Tech/SaaS", clients: ["Atlassian", "Cloudflare", "SoundCloud"] },
      { vertical: "Internet/Open Source", clients: ["Mozilla"] },
    ],
    employeeTimeline: [
      { year: 2020, value: "1-25 (pre-acquisition, small team)" },
      { year: 2023, value: "0 employees. 7 volunteer maintainers (Apr 2023 community reboot)." },
      { year: 2026, value: "7 volunteer maintainers. Arik Fraimovich (BDFL, Databricks). Justin Clift (admin since Jun 2023)." },
    ],
    milestones: [
      { date: "2013", event: "Founded by Arik Fraimovich in Israel (Tel Aviv/Rehovot). Open-source SQL query and visualization tool." },
      { date: "Jun 24, 2020", event: "Acquired by Databricks. Terms undisclosed. Team joined Databricks. Product integrated into Databricks SQL dashboards." },
      { date: "Nov 30, 2021", event: "Hosted service at app.redash.io shut down. All customer data deleted within 30 days. Users urged to self-host." },
      { date: "2020-2023", event: "~3 years of near-abandonment. Minimal GitHub activity. Community trust damaged. Users migrated to Metabase, Superset, Grafana." },
      { date: "Apr 3, 2023", event: "Community-led reboot announced (GitHub Discussion #5962). 7 volunteer maintainers recruited. Databricks confirmed zero financial/dev support." },
      { date: "Jun 2023", event: "Justin Clift granted admin permissions to reduce dependency on Fraimovich." },
      { date: "Mar 2026", event: "Latest release v26.3.0. 28.6K GitHub stars, 4.6K forks, 101 total releases." },
    ],
    deepSources: [
      { label: "Databricks Acquisition Blog", url: "https://www.databricks.com/blog/2020/06/24/welcoming-redash-to-databricks.html" },
      { label: "TechCrunch Acquisition", url: "https://techcrunch.com/2020/06/24/databricks-acquires-redash-a-visualizations-service-for-data-scientists/" },
      { label: "Community Reboot Discussion", url: "https://github.com/getredash/redash/discussions/5962" },
      { label: "6sense Market Data", url: "https://6sense.com/tech/data-visualization/redash-market-share" },
      { label: "Enlyft Market Share", url: "https://enlyft.com/tech/products/redash" },
    ],
  },

  "DBeaver": {
    fundingRounds: [
      { date: "Apr 2023", round: "Seed", amount: "$6M", lead: "Headline", investors: ["Prospective Technologies"] },
    ],
    keyInvestors: ["Headline", "Prospective Technologies Ventures"],
    markets: {
      geos: ["Global (4 continents)", "US", "Europe"],
      verticals: ["Software Development", "Database Administration", "Data Engineering"],
      target: "Individual developers to Enterprise (8M+ community users)",
    },
    clientTimeline: [
      { year: 2024, value: "4,000+ paying" },
      { year: 2025, value: "5,000+ paying" },
    ],
    revenueTimeline: [
      { year: 2025, value: "$15M" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~60" },
    ],
    milestones: [
      { date: "Apr 2023", event: "First institutional funding ($6M seed from Headline)" },
      { date: "2023", event: "Moved to subscription-only model (v23.3)" },
      { date: "2025", event: "Revenue reached $15M with 5,000+ paying customers" },
    ],
    deepSources: [
      { label: "TechCrunch Seed", url: "https://techcrunch.com/2023/04/11/dbeaver-takes-6m-seed-investment-to-build-on-growing-popularity/" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/dbeaver" },
    ],
  },

  "Collibra": {
    fundingRounds: [
      { date: "2019", round: "Series E", amount: "$100M", lead: "CapitalG (Alphabet)" },
      { date: "2020", round: "Series F", amount: "$112.5M", lead: "ICONIQ Capital", investors: ["Index Ventures", "Durable Capital Partners"], valuation: "$2.3B" },
      { date: "Nov 2021", round: "Series G", amount: "$250M", lead: "Sequoia Capital Global Equities", investors: ["Sofina", "Tiger Global"], valuation: "$5.25B" },
    ],
    keyInvestors: ["Sequoia Capital", "ICONIQ Capital", "CapitalG", "Index Ventures", "Battery Ventures", "Tiger Global", "Sofina"],
    markets: {
      geos: ["US", "Europe (Brussels HQ)", "Global"],
      verticals: ["Financial Services", "Healthcare/Pharma", "Insurance", "Telecom", "Energy"],
      target: "Enterprise (1,000+ customers)",
    },
    clientTimeline: [
      { year: 2024, value: "~900" },
      { year: 2025, value: "1,000+" },
    ],
    clientsByVertical: [
      { vertical: "Mining/Energy", clients: ["Anglo American", "ENGIE"] },
      { vertical: "Automotive", clients: ["Cox Automotive"] },
      { vertical: "Financial Services", clients: ["Bank of Cyprus", "ING"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "~$180M" },
      { year: 2025, value: "$210M (targeting $350M ARR pre-IPO)" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~1,024" },
      { year: 2026, value: "~1,100" },
    ],
    milestones: [
      { date: "Nov 2021", event: "Series G at $5.25B valuation" },
      { date: "Jul 2025", event: "Acquired Deasy Labs (AI governance)" },
      { date: "2026-2028", event: "IPO targeted" },
    ],
    deepSources: [
      { label: "Series G", url: "https://www.collibra.com/company/newsroom/press-releases/collibra-raises-250-million-in-funding-round-led-by-sequoia-capital-global-equities-and-sofina-more-than-doubling-its-valuation-to-5-25-billion" },
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/collibra" },
    ],
  },

  "Alation": {
    fundingRounds: [
      { date: "Mar 2015", round: "Series A", amount: "$9M", lead: "Costanoa Ventures", investors: ["Data Collective", "Andreessen Horowitz", "General Catalyst"] },
      { date: "Jul 2017", round: "Series B", amount: "$23M", lead: "Icon Ventures", investors: ["Harmony Partners", "Costanoa"] },
      { date: "Jan 2019", round: "Series C", amount: "$50M", lead: "Sapphire Ventures", investors: ["ISAI", "Salesforce Ventures"] },
      { date: "Jun 2021", round: "Series D", amount: "$110M", lead: "Riverwood Capital", investors: ["Sanabil", "Snowflake Ventures", "Costanoa", "Dell Technologies Capital"], valuation: "$1.2B" },
      { date: "Nov 2022", round: "Series E", amount: "$123M", lead: "Thoma Bravo", investors: ["Sanabil", "Costanoa", "Databricks Ventures"], valuation: "$1.7B" },
      { date: "Early 2026", round: "Extension", amount: "$23M" },
    ],
    keyInvestors: ["Thoma Bravo", "Riverwood Capital", "Sapphire Ventures", "Costanoa Ventures", "Salesforce Ventures", "Databricks Ventures", "Snowflake Ventures"],
    markets: {
      geos: ["US 73% (~361 customers)", "UK 8% (~40)", "APAC ex-India 7% (~140)", "Europe ex-UK 7%", "India 5% (~25-126)"],
      verticals: ["Financial Services & Insurance", "IT & Software", "Healthcare & Pharma", "Energy & Manufacturing", "Telecom", "Government & Education", "Airlines & Transport"],
      target: "Enterprise (Fortune 100)",
      notes: "40% of Fortune 100. 44% large enterprises, 33% mid-market, 23% SMB. Regulation-driven adoption — FSI #1 or #2 in every geography.",
    },
    clientTimeline: [
      { year: 2023, value: "500+" },
      { year: 2025, value: "550+" },
      { year: 2026, value: "650+" },
    ],
    clientsByVertical: [
      { vertical: "Tech/Software", clients: ["Cisco", "DocuSign", "Salesforce"] },
      { vertical: "Financial Services", clients: ["Nasdaq", "Discover", "5/3 Bank"] },
      { vertical: "Insurance", clients: ["Munich Re", "American Family Insurance"] },
      { vertical: "Pharma/Healthcare", clients: ["Pfizer"] },
      { vertical: "Airlines", clients: ["Virgin Australia", "Finnair", "SAS"] },
      { vertical: "Energy/Utilities", clients: ["Endeavour Energy"] },
      { vertical: "Telecom", clients: ["Spark New Zealand"] },
    ],
    revenueTimeline: [
      { year: 2022, value: "$100M+ ARR" },
      { year: 2024, value: "~$109M" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~727" },
      { year: 2025, value: "~629 (-8% YoY)" },
    ],
    milestones: [
      { date: "2012", event: "Founded in Redwood City, CA" },
      { date: "Jun 2021", event: "Reached unicorn status at $1.2B valuation (Series D)" },
      { date: "Nov 2022", event: "Series E at $1.7B valuation" },
      { date: "May 2025", event: "Acquired Numbers Station AI (AI agents for data)" },
      { date: "2025", event: "Launched AlationIQ agentic AI suite (Agent Studio, Chat with Your Data)" },
      { date: "Early 2026", event: "$23M extension round" },
    ],
    deepSources: [
      { label: "Series E", url: "https://www.alation.com/news-and-press/alation-raises-series-e-funding/" },
      { label: "Customers", url: "https://www.alation.com/customers/" },
      { label: "GetLatka", url: "https://getlatka.com/companies/alation" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/alation" },
      { label: "Enlyft", url: "https://enlyft.com/tech/products/alation" },
      { label: "6sense", url: "https://6sense.com/tech/analytics/alation-market-share" },
      { label: "TheirStack", url: "https://theirstack.com/en/technology/alation/in" },
      { label: "APAC Blog", url: "https://www.alation.com/blog/apac-driving-data-culture-with-alation/" },
    ],
  },

  "Atlan": {
    fundingRounds: [
      { date: "2021", round: "Series A", amount: "$16M", lead: "Insight Partners", investors: ["Sequoia India"] },
      { date: "Sep 2022", round: "Series B", amount: "$50M", lead: "Insight Partners", investors: ["Salesforce Ventures"] },
      { date: "May 2024", round: "Series C", amount: "$105M", lead: "GIC + Meritech Capital", investors: ["Insight Partners", "Salesforce Ventures"], valuation: "$750M" },
    ],
    keyInvestors: ["GIC", "Insight Partners", "Meritech Capital", "Sequoia Capital India", "Salesforce Ventures"],
    markets: {
      geos: ["US", "Europe", "India (origin)", "Global (6 continents)"],
      verticals: ["Financial Services", "Media", "Automotive", "Tech/SaaS"],
      target: "Enterprise (400+ customers, $10T+ combined market cap)",
    },
    clientTimeline: [
      { year: 2024, value: "300+" },
      { year: 2025, value: "400+" },
    ],
    clientsByVertical: [
      { vertical: "Financial Services", clients: ["Mastercard", "Nasdaq", "CME Group", "Plaid"] },
      { vertical: "Tech/SaaS", clients: ["Workday", "HubSpot", "Cisco", "Autodesk", "Dropbox"] },
      { vertical: "Media", clients: ["FOX", "News Corp", "Virgin Media O2"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "~$20M" },
      { year: 2025, value: "$34.9M" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~540" },
      { year: 2026, value: "~561" },
    ],
    milestones: [
      { date: "May 2024", event: "Series C at $750M valuation; 7x revenue growth in two years" },
      { date: "2025", event: "Named to Redpoint InfraRed 100; Re:Govern conference" },
    ],
    deepSources: [
      { label: "Series C", url: "https://atlan.com/atlan-raises-105m-funding/" },
      { label: "Tracxn", url: "https://tracxn.com/d/companies/atlan/__wmS8cTNiTpcWtSAsRTmxu2alNUcymWvjDPnevifoSnQ" },
    ],
  },

  "Retool": {
    fundingRounds: [
      { date: "Oct 2020", round: "Series B", amount: "$50M", lead: "Sequoia Capital", investors: ["BOND Capital"] },
      { date: "Dec 2021", round: "Series C", amount: "$20M", lead: "Sequoia Capital", valuation: "$1.85B" },
      { date: "Jul 2022", round: "Series C ext.", amount: "$45M", lead: "Sequoia Capital", investors: ["BOND", "Elad Gil", "Stripe founders"], valuation: "$3.2B" },
    ],
    keyInvestors: ["Sequoia Capital", "BOND Capital", "Y Combinator", "Elad Gil", "Patrick & John Collison (Stripe)", "Nat Friedman"],
    markets: {
      geos: [
        "US (~69% — Silicon Valley/tech startup ecosystem dominant)",
        "UK (~7%)",
        "India (~6%)",
        "Canada (~4%)",
        "Germany (~3%)",
        "Rest of Europe (~5%)",
        "Rest of World (~6%)",
      ],
      verticals: [
        "Technology / Software / SaaS (~40% — internal ops tools, admin panels)",
        "Financial Services / Fintech (~15% — Stripe, Coinbase, Plaid, Brex)",
        "E-commerce / Marketplaces (~10% — order management, inventory, support)",
        "Healthcare (~8%)",
        "Logistics / Operations (~7%)",
        "Media / Entertainment (~5% — Netflix, Roblox)",
        "Other (~15%)",
      ],
      target: "Broad: startups (20-49 employees: 57 companies), mid-market (100-249: 84 companies), enterprise (10,000+: 41 companies). Very tech-forward customer base.",
      notes: "Heavily US-concentrated. 500K+ users claimed (likely includes free tier). 0.71% market share in Cross Platform App Dev Tools (6sense). Different market category from BI.",
    },
    clientTimeline: [
      { year: 2023, value: "$93.5M ARR, ~340 employees" },
      { year: 2024, value: "$138.6M ARR (GetLatka), ~401 employees" },
      { year: 2025, value: "$120M+ ARR (Sacra), ~447 employees" },
      { year: 2026, value: "~470 employees, targeting 500+" },
    ],
    clientsByVertical: [
      { vertical: "Tech/SaaS", clients: ["Amazon", "DoorDash", "Coinbase", "Brex", "OpenAI", "Apple", "Adobe", "Plaid"] },
      { vertical: "Fintech", clients: ["Stripe", "Coinbase", "Plaid", "Brex"] },
      { vertical: "Media/Entertainment", clients: ["Netflix", "Roblox"] },
      { vertical: "Government", clients: ["FEMA"] },
    ],
    revenueTimeline: [
      { year: 2023, value: "$93.5M ARR (GetLatka)" },
      { year: 2024, value: "$138.6M ARR (GetLatka, ~48% YoY growth)" },
      { year: 2025, value: "$120M+ ARR (Sacra, different methodology)" },
    ],
    employeeTimeline: [
      { year: 2023, value: "~340" },
      { year: 2024, value: "~401 (16.7% growth)" },
      { year: 2025, value: "~447 (Tracxn/Revelio)" },
      { year: 2026, value: "~471 (PitchBook)" },
    ],
    milestones: [
      { date: "2017", event: "Founded in San Francisco" },
      { date: "Oct 2020", event: "Series B $50M from Sequoia Capital" },
      { date: "Jul 2022", event: "Series C extension at $3.2B valuation" },
      { date: "Apr 2025", event: "Launched AppGen — AI app generation from prompts" },
      { date: "May 2025", event: "Launched Retool Agents and AI Actions for workflow automation" },
    ],
    deepSources: [
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/retool" },
      { label: "Sacra Profile", url: "https://sacra.com/c/retool/" },
      { label: "Sacra Valuation", url: "https://sacra.com/c/retool/valuation/" },
      { label: "Contrary Research", url: "https://research.contrary.com/company/retool" },
      { label: "6sense Market Share", url: "https://6sense.com/tech/cross-platform-app-dev-tools/retool-market-share" },
      { label: "Tracxn Profile", url: "https://tracxn.com/d/companies/retool/__3Qw2mDrisfHcLzB8sG6xEXwD7lueXw7kuVlus34H2KY" },
    ],
  },

  "Trevor.io": {
    fundingRounds: [
      { date: "2020", round: "Pre-seed", amount: "Undisclosed", lead: "Techstars" },
      { date: "2021", round: "Seed", amount: "$10.7M", lead: "OpenOcean", investors: ["Four Rivers Group", "Star Power Partners", "Clearsign Capital"] },
    ],
    keyInvestors: ["OpenOcean", "Four Rivers Group", "Techstars", "Star Power Partners", "Clearsign Capital"],
    markets: {
      geos: ["US", "Europe"],
      verticals: ["Finance", "Tech/SaaS"],
      target: "SMB to Mid-market (startups, banks, public companies)",
    },
    employeeTimeline: [
      { year: 2025, value: "~11" },
    ],
    milestones: [
      { date: "2021", event: "$10.7M seed round led by OpenOcean" },
    ],
    deepSources: [
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/trevor" },
      { label: "Parsers.vc", url: "https://parsers.vc/startup/trevor.io/" },
    ],
  },

  "Cube.dev": {
    fundingRounds: [
      { date: "2021", round: "Series A", amount: "$15.5M", lead: "Decibel Partners", investors: ["Bain Capital Ventures", "Eniac Ventures", "Betaworks"] },
      { date: "Jun 2024", round: "Series B", amount: "$25M", lead: "Databricks Ventures", investors: ["Salesforce Ventures", "Bain Capital", "Decibel", "645 Ventures"] },
    ],
    keyInvestors: ["Databricks Ventures", "Decibel Partners", "Bain Capital Ventures", "Eniac Ventures", "645 Ventures", "Salesforce Ventures", "Betaworks"],
    markets: {
      geos: [
        "United States (~55%)",
        "Europe (~25%)",
        "India (~8%)",
        "APAC ex-India (~7%)",
        "LATAM / Other (~5%)",
      ],
      verticals: [
        "SaaS / Software (embedded analytics) (~35%)",
        "Financial Services (~15%)",
        "Data Analytics / ML (~15%)",
        "E-commerce / Retail (~10%)",
        "AdTech / Media (~10%)",
        "Healthcare (~5%)",
        "Other (~10%)",
      ],
      target: "Mid-market to Enterprise (20% of Fortune 1000)",
      notes: "Massive open-source distribution (90K servers, 5M+ users) but paying customer base is smaller. 200+ Agentic Analytics customers. Geo estimates based on funding sources, case studies, and positioning.",
    },
    clientTimeline: [
      { year: 2025, value: "90K servers, 5M+ end users, 200+ Agentic Analytics customers" },
    ],
    clientsByVertical: [
      { vertical: "SaaS/Software", clients: ["Brex", "Webflow", "Wix", "Drata"] },
      { vertical: "Enterprise", clients: ["Intuit", "Alcon"] },
      { vertical: "AdTech", clients: ["Gadsme"] },
      { vertical: "Healthcare", clients: ["RamSoft"] },
      { vertical: "Fintech", clients: ["Cyndx"] },
    ],
    revenueTimeline: [
      { year: 2025, value: "$7.9M ARR" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~72" },
    ],
    milestones: [
      { date: "2019", event: "Founded by Artyom Keydunov (CEO) and Pavel Tiunov (CTO), ex-Statsbot co-founders" },
      { date: "2021", event: "Series A $15.5M led by Decibel Partners" },
      { date: "Jun 2024", event: "Series B $25M led by Databricks Ventures" },
      { date: "Oct 2025", event: "Launched Agentic Analytics platform with Analytics Chat, Workbooks, Visual Modeler" },
      { date: "2026", event: "Recognized in Gartner 2026 Market Guide for Agentic Analytics. 18K+ GitHub stars." },
    ],
    deepSources: [
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/cube.dev" },
      { label: "Series B", url: "https://cube.dev/blog/cubes-raises-25-million" },
      { label: "Agentic Analytics", url: "https://cube.dev/blog/cube-agentic-analytics" },
      { label: "Gartner 2026", url: "https://cube.dev/blog/cube-recognized-in-the-2026-gartner-r-market-guide-for-agentic-analytics" },
      { label: "Data Sources Docs", url: "https://docs.cube.dev/admin/connect-to-data/data-sources" },
    ],
  },
};

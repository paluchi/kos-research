import type { DeepResearch } from "./competitors";

// T3 threat companies: Data Governance + Adjacent Tools
export const deepInfra2: Record<string, DeepResearch> = {
  "Collibra": {
    fundingRounds: [
      { date: "2012", round: "Seed", amount: "$1.46M" },
      { date: "2012", round: "Series A", amount: "$1.2M" },
      { date: "2015", round: "Series B", amount: "$23M", lead: "Index Ventures", investors: ["Dawn Capital"] },
      { date: "2017", round: "Series C", amount: "$50M", lead: "ICONIQ Capital", investors: ["Battery Ventures", "Dawn Capital", "Index Ventures", "Newion"] },
      { date: "2018", round: "Series D", amount: "$58M", lead: "ICONIQ Capital", investors: ["Battery Ventures", "Dawn Capital", "Index Ventures"] },
      { date: "2019", round: "Series E", amount: "$100M", lead: "CapitalG (Alphabet)" },
      { date: "2020", round: "Series F", amount: "$112.5M", lead: "ICONIQ Capital", investors: ["Index Ventures", "Durable Capital Partners"], valuation: "$2.3B" },
      { date: "Nov 2021", round: "Series G", amount: "$250M", lead: "Sequoia Capital Global Equities", investors: ["Sofina", "Tiger Global"], valuation: "$5.25B" },
    ],
    keyInvestors: ["Sequoia Capital", "ICONIQ Capital", "CapitalG", "Index Ventures", "Battery Ventures", "Dawn Capital", "Tiger Global", "Sofina", "Durable Capital Partners"],
    markets: {
      geos: ["US ~63% (~1,078 customers)", "UK ~9% (~150 customers)", "France ~6% (~106 customers)", "Rest of Europe (Germany, Benelux, Nordics) ~12%", "Rest of World (APAC, Canada, LATAM) ~10%"],
      verticals: ["IT & Software", "Financial Services & Wealth Management", "Insurance", "Healthcare / Pharma", "Manufacturing", "Telecom"],
      target: "Enterprise",
      notes: "2,057+ companies (6sense). 706 companies with 10,000+ employees — heaviest in heavily regulated enterprises. Even stronger in financial services/insurance than Alation. Brussels HQ gives strong Benelux presence. Governance mandated by regulators at largest accounts.",
    },
    clientTimeline: [
      { year: 2024, value: "~900" },
      { year: 2025, value: "1,000+" },
      { year: 2026, value: "2,057+ (6sense)" },
    ],
    clientsByVertical: [
      { vertical: "Mining/Energy", clients: ["Anglo American", "ENGIE"] },
      { vertical: "Automotive", clients: ["Cox Automotive"] },
      { vertical: "Healthcare", clients: ["Nuffield Health"] },
      { vertical: "Financial Services", clients: ["Bank of Cyprus"] },
    ],
    revenueTimeline: [
      { year: 2018, value: "$60M" },
      { year: 2023, value: "$100M" },
      { year: 2024, value: "~$180M" },
      { year: 2025, value: "$210M" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~1,024" },
      { year: 2026, value: "~1,095" },
    ],
    milestones: [
      { date: "Nov 2021", event: "Series G $250M at $5.25B valuation (Sequoia, Tiger Global, Sofina)" },
      { date: "Jul 2025", event: "Acquired Deasy Labs (AI governance)" },
      { date: "2025", event: "Reached $210M ARR and 1,000+ customers (doubled from $100M in 2023)" },
      { date: "Oct 2025", event: "Launched MCP Server for governed AI context" },
      { date: "Mar 2026", event: "AI Command Center GA — AI governance across Vertex AI, SageMaker, Databricks" },
      { date: "2026-2028", event: "IPO targeted" },
    ],
    deepSources: [
      { label: "Series G", url: "https://www.collibra.com/company/newsroom/press-releases/collibra-raises-250-million-in-funding-round-led-by-sequoia-capital-global-equities-and-sofina-more-than-doubling-its-valuation-to-5-25-billion" },
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/collibra" },
      { label: "6sense Market Share", url: "https://6sense.com/tech/governance-risk-and-compliance/collibra-market-share" },
      { label: "Pricing Analysis", url: "https://checkthat.ai/brands/collibra/pricing" },
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
      { label: "GetLatka", url: "https://getlatka.com/companies/alation" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Alation" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/alation" },
      { label: "Enlyft", url: "https://enlyft.com/tech/products/alation" },
      { label: "6sense", url: "https://6sense.com/tech/analytics/alation-market-share" },
      { label: "TheirStack", url: "https://theirstack.com/en/technology/alation/in" },
    ],
  },

  "Atlan": {
    fundingRounds: [
      { date: "2020", round: "Seed", amount: "$3.5M", lead: "Waterbridge Ventures", investors: ["Sequoia Capital India"] },
      { date: "2021", round: "Series A", amount: "$16M", lead: "Insight Partners", investors: ["Sequoia India"] },
      { date: "Sep 2022", round: "Series B", amount: "$50M", lead: "Insight Partners", investors: ["Salesforce Ventures", "Sequoia India"] },
      { date: "May 2024", round: "Series C", amount: "$105M", lead: "GIC", investors: ["Meritech Capital", "Insight Partners", "Sequoia India", "Salesforce Ventures"], valuation: "$750M" },
    ],
    keyInvestors: ["GIC", "Insight Partners", "Meritech Capital", "Sequoia Capital India", "Salesforce Ventures"],
    markets: {
      geos: ["US ~63% (~224 customers)", "India ~9% (~31 customers)", "France ~8% (~28 customers)", "UK + Rest of Europe ~12%", "Rest of World ~8%"],
      verticals: ["Financial Services", "Tech/SaaS", "Manufacturing/Industrial", "Media/Entertainment", "Healthcare/Pharma", "Retail/Consumer"],
      target: "Enterprise",
      notes: "400+ customers. Strongest in 10,000+ employee enterprises (103 companies). Co-founded by Indian founders (Prukalpa Sankar, Varun Banka), strong India presence with offices there. Leader in all 4 major analyst quadrants (Gartner MQ Metadata 2025, Gartner MQ D&A Governance 2026, Forrester Wave Data Catalogs 2024, Forrester Wave Data Governance 2025).",
    },
    clientTimeline: [
      { year: 2024, value: "300+" },
      { year: 2025, value: "400+" },
    ],
    clientsByVertical: [
      { vertical: "Financial Services", clients: ["Mastercard", "Nasdaq", "CME Group", "Plaid"] },
      { vertical: "Automotive/Manufacturing", clients: ["General Motors", "Ingersoll Rand"] },
      { vertical: "Tech/SaaS", clients: ["Workday", "HubSpot", "Elastic", "Autodesk", "GitLab", "Dropbox", "Zoom"] },
      { vertical: "Media/Consumer", clients: ["FOX", "News Corp", "Unilever", "Ralph Lauren", "Virgin Media O2", "Dr. Martens", "Urban Outfitters"] },
      { vertical: "Healthcare", clients: ["NHS", "Scripps", "Medtronic"] },
      { vertical: "Travel", clients: ["easyJet"] },
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
      { date: "May 2024", event: "Series C $105M at $750M valuation (led by GIC + Meritech); 7x revenue growth in two years" },
      { date: "2025", event: "Named to Redpoint Ventures InfraRed 100 list" },
      { date: "2025", event: "Re:Govern conference with Mastercard, GM, Workday leaders" },
      { date: "2025", event: "Gartner MQ Leader for Metadata Management" },
      { date: "2026", event: "Gartner MQ Leader for Data & Analytics Governance" },
      { date: "Apr 2026", event: "Context Agents: 690K+ descriptions across 50+ customers, 87% rated on par or better than human writing" },
    ],
    deepSources: [
      { label: "Series C", url: "https://atlan.com/atlan-raises-105m-funding/" },
      { label: "Tracxn", url: "https://tracxn.com/d/companies/atlan/__wmS8cTNiTpcWtSAsRTmxu2alNUcymWvjDPnevifoSnQ" },
      { label: "6sense Market Share", url: "https://6sense.com/tech/data-analysis/atlan-market-share" },
      { label: "Vendr Pricing", url: "https://www.vendr.com/marketplace/atlan" },
      { label: "MCP Docs", url: "https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/atlan-mcp-overview" },
    ],
  },

  "Cube.dev": {
    fundingRounds: [
      { date: "2020", round: "Seed", amount: "$6.2M", lead: "Eniac Ventures", investors: ["645 Ventures"] },
      { date: "2021", round: "Series A", amount: "$15.5M", lead: "Decibel Partners", investors: ["Bain Capital Ventures", "Eniac"] },
      { date: "2024", round: "Series B", amount: "$25M", lead: "Databricks Ventures", investors: ["Salesforce Ventures", "Bain Capital", "Decibel"] },
    ],
    keyInvestors: ["Databricks Ventures", "Decibel Partners", "Bain Capital Ventures", "Eniac Ventures", "645 Ventures", "Salesforce Ventures"],
    markets: {
      geos: ["US (primary)", "Global"],
      verticals: ["Tech/SaaS", "AdTech", "Healthcare IT", "Fintech"],
      target: "Mid-market to Enterprise (20% of Fortune 1000)",
    },
    clientTimeline: [
      { year: 2025, value: "90K servers, 5M+ end users" },
    ],
    clientsByVertical: [
      { vertical: "AdTech", clients: ["Gadsme"] },
      { vertical: "Healthcare", clients: ["RamSoft"] },
      { vertical: "HR/Recruiting", clients: ["Jobber"] },
      { vertical: "Education", clients: ["Cloud Academy"] },
      { vertical: "Fintech", clients: ["Cyndx"] },
    ],
    revenueTimeline: [
      { year: 2025, value: "$7.9M" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~72" },
      { year: 2026, value: "~49-72" },
    ],
    milestones: [
      { date: "2024", event: "Series B led by Databricks Ventures ($25M)" },
      { date: "2025", event: "Adding AI agent capabilities to semantic layer" },
    ],
    deepSources: [
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/cube.dev" },
      { label: "Series B", url: "https://cube.dev/blog/cubes-raises-25-million" },
      { label: "Tracxn", url: "https://tracxn.com/d/companies/cube/__RApAHPQaUWYuriYoolAL15Oo9cENMtUCda8Dn9kVa7E" },
    ],
  },

  "Trevor.io": {
    fundingRounds: [
      { date: "2020", round: "Pre-seed", amount: "Undisclosed", lead: "Techstars", investors: ["Bay Partners (Neal Dempsey)"] },
      { date: "2021", round: "Seed", amount: "$10.7M", lead: "OpenOcean", investors: ["Four Rivers Group", "Star Power Partners", "Clearsign Capital"] },
    ],
    keyInvestors: ["OpenOcean", "Four Rivers Group", "Techstars", "Star Power Partners", "Clearsign Capital", "Bay Partners (Neal Dempsey)"],
    markets: {
      geos: [
        "North America (~40-45% — US startup ecosystem, primary growth market)",
        "Europe (~35-40% — London HQ, Berlin engineering, European investors)",
        "Rest of World (~15-20%)",
      ],
      verticals: [
        "SaaS / Technology startups (~40-50%) — product teams querying their own database",
        "Fintech (~15-20%) — Scalapay (Italy's first unicorn) as named customer",
        "E-commerce (~10-15%) — orders, customers, inventory tracking",
        "Marketing / Digital agencies (~10-15%)",
        "Other (~5-10%)",
      ],
      target: "Startups and SMBs with 10-200 employees and a SQL database. Non-technical teams wanting self-serve data access.",
    },
    clientsByVertical: [
      { vertical: "Fintech", clients: ["Scalapay (Italy's first unicorn, $700M+ raised)"] },
      { vertical: "HR / Education", clients: ["Zen Educate", "Goodtime"] },
    ],
    employeeTimeline: [
      { year: 2016, value: "2 (co-founders: Tom Gardiner + Harry Marshall)" },
      { year: 2021, value: "~10-15 (post-seed)" },
      { year: 2024, value: "~11 (Tracxn). Founding team spins off Embeddable.com (14 employees, €6M raised Dec 2024)." },
      { year: 2026, value: "~10-15 estimated. Product in maintenance mode." },
    ],
    milestones: [
      { date: "2016", event: "Founded by Tom Gardiner (CEO, ex-RefME CTO) and Harry Marshall (COO) in London. Legal entity: TMD Technology Limited." },
      { date: "2020", event: "Techstars accelerator. Pre-seed funding." },
      { date: "2021", event: "Seed $10.7M led by OpenOcean. Rapid feature development: visual query builder, dashboards, Sheets export, Zapier." },
      { date: "Sep 2022", event: "Last blog post published. Product development slows significantly after this point." },
      { date: "Dec 2024", event: "Founding team launches Embeddable.com spinoff (embedded analytics). €6M seed led by OpenOcean. 14 employees, 36+ customers, 800+ beta applications. 'Embedded Analytics Solution of the Year' 2026." },
      { date: "2025-2026", event: "Trevor.io in effective maintenance mode. No major product updates. Zero AI features while competitors add LLM capabilities." },
    ],
    deepSources: [
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/trevor" },
      { label: "Parsers.vc", url: "https://parsers.vc/startup/trevor.io/" },
      { label: "Customer Stories", url: "https://trevor.io/customer-stories" },
      { label: "Embeddable.com funding (TechCrunch)", url: "https://techcrunch.com/2024/12/12/embedded-data-analytics-startup-embeddable-is-still-handpicking-its-customers-despite-strong-demand/" },
      { label: "About page", url: "https://trevor.io/about" },
    ],
  },

  "GoodData": {
    fundingRounds: [
      { date: "Jul 2008", round: "Angel", amount: "$2M", investors: ["Tim O'Reilly", "Esther Dyson", "Windcrest Partners"] },
      { date: "2009", round: "Series A", amount: "$3M", lead: "Andreessen Horowitz", investors: ["O'Reilly AlphaTech", "General Catalyst"] },
      { date: "2009", round: "Series A ext.", amount: "$2M", lead: "Windcrest Partners" },
      { date: "2011", round: "Series B", amount: "$15M", lead: "Andreessen Horowitz", investors: ["Fidelity Growth Partners", "General Catalyst", "Windcrest Partners"] },
      { date: "2012", round: "Series C", amount: "$25M", lead: "Tenaya Capital", investors: ["Andreessen Horowitz", "Fidelity Growth Partners", "General Catalyst", "Windcrest Partners"] },
      { date: "2013", round: "Series D", amount: "$22M", lead: "TOTVS Ventures" },
      { date: "Sep 2014", round: "Series E", amount: "$11M" },
      { date: "May 2020", round: "Strategic", amount: "Undisclosed", lead: "Visa Inc.", investors: ["Visa Ventures"] },
      { date: "Jul 2021", round: "Credit Facility", amount: "$45M", lead: "J.P. Morgan" },
    ],
    keyInvestors: ["Andreessen Horowitz", "Tenaya Capital", "General Catalyst", "J.P. Morgan", "Visa Ventures", "Intel Capital", "TOTVS Ventures", "Fidelity Growth Partners", "Tim O'Reilly", "Esther Dyson"],
    markets: {
      geos: ["US (55%, SF HQ)", "Europe (30%, Czech Republic/Prague engineering office)", "UK (8% of European share)", "Asia (8%, India/Japan/Singapore)", "LATAM (3%, Brazil)", "RoW (4%)"],
      verticals: ["Software/SaaS (embedded analytics primary use case)", "Financial Services/Payments", "Hospitality/Tourism", "Retail/E-commerce", "Healthcare", "Manufacturing", "Insurance"],
      target: "Mid-market to Enterprise SaaS companies embedding analytics into their products (primary). Also used for internal BI by some orgs.",
      notes: "Heavily SaaS/software skewed — embedded analytics drives most revenue. Financial services second-largest vertical. European presence strong due to Czech origins and Prague engineering. Compliance-sensitive industries value self-hosted GoodData CN option.",
    },
    clientTimeline: [
      { year: 2020, value: "~100K organizations" },
      { year: 2025, value: "140K+ organizations, 3.2M+ users" },
      { year: 2026, value: "123K+ organizations, 3.9M users (Q1 2026 press release)" },
    ],
    clientsByVertical: [
      { vertical: "Payments", clients: ["Visa"] },
      { vertical: "Hospitality/Tourism", clients: ["Mews", "Zartico"] },
      { vertical: "Professional Services", clients: ["Kantata"] },
      { vertical: "E-commerce/Retail", clients: ["Boozt"] },
      { vertical: "Automotive", clients: ["MSX International"] },
      { vertical: "Construction", clients: ["Blackhyve"] },
      { vertical: "Creative Services", clients: ["Fuel Studios"] },
    ],
    revenueTimeline: [
      { year: 2020, value: "$29.1M" },
      { year: 2024, value: "$63M ARR" },
      { year: 2025, value: "'Record-breaking' (no figure disclosed)" },
    ],
    employeeTimeline: [
      { year: 2023, value: "~312" },
      { year: 2024, value: "~257" },
      { year: 2026, value: "~282" },
    ],
    milestones: [
      { date: "Apr 2007", event: "Founded by Roman Stanek in Cambridge, MA (prev. founded NetBeans → Sun Microsystems, Systinet → HP)" },
      { date: "2009", event: "Series A from Andreessen Horowitz — early a16z bet" },
      { date: "2012", event: "Cumulative $53.5M raised" },
      { date: "May 2020", event: "Strategic investment and partnership with Visa Inc." },
      { date: "Jun 2021", event: "Snowflake integration partnership" },
      { date: "May 2025", event: "AI Assistant GA — conversational analytics with RAG, BYO-LLM (OpenAI, Claude, Gemini, Llama)" },
      { date: "Sep 2025", event: "Acquired Understand Labs (data storytelling, founded by ex-Stories.bi/Workday CTO)" },
      { date: "2025", event: "Rebranded from GoodData to GoodData.AI — AI-native pivot. 'Record-breaking 2025.'" },
      { date: "Jan 2026", event: "MCP Server launch — 30+ analytics tools exposed for external AI agent integration" },
      { date: "Apr 2026", event: "Agent Builder launch — multi-agent enterprise platform with 5 config surfaces, A2A protocol" },
      { date: "May 2026", event: "A2A (Agent-to-Agent) protocol support added to Agent Builder" },
    ],
    deepSources: [
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/gooddata-corporation" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/GoodData" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/good-data" },
      { label: "AI Assistant GA Press Release", url: "https://www.gooddata.com/press-releases/gooddata-rolls-out-ai-assistant-embeddable-generative-analytics/" },
      { label: "MCP Server + Enterprise Wins", url: "https://www.gooddata.ai/press-releases/gooddata-kicks-off-2026-with-mcp-server-launch-and-major-enterprise-wins/" },
      { label: "Understand Labs Acquisition", url: "https://www.gooddata.com/press-releases/gooddata-acquires-understand-labs-accelerates-ai-data-storytelling-and-agentic-vision/" },
      { label: "Zartico Case Study", url: "https://www.gooddata.ai/resources/zartico-case-study/" },
    ],
  },

  "Luzmo": {
    fundingRounds: [
      { date: "2018", round: "Pre-seed", amount: "Undisclosed", lead: "Imec.istart" },
      { date: "2020", round: "Seed", amount: "$2.4M", lead: "Axeleo Capital", investors: ["LRM"] },
      { date: "Jan 2023", round: "Series A", amount: "$10.8M (€10M)", lead: "Hi Inov-Dentressangle", investors: ["Axeleo Capital (returning)", "LRM (returning)", "SmartFin (returning)"] },
    ],
    keyInvestors: ["Hi Inov-Dentressangle", "Axeleo Capital", "LRM", "SmartFin", "Imec.istart"],
    markets: {
      geos: ["US ~27%", "Belgium ~16% (home market)", "France ~14%", "Netherlands ~9%", "UK ~5%", "Canada ~5%", "Rest of World ~24%"],
      verticals: ["Computer Software/SaaS (25%)", "IT Services (16%)", "Internet (5%)", "HR Tech", "Marketing Tech", "CRM", "Environmental Services", "Financial Services", "Healthcare", "Government", "Real Estate"],
      target: "SaaS companies embedding analytics (240+ clients). 51% medium companies (50-1000 emp), 33% small (<50), 6% large (>1000). >1/3 of revenue from North America.",
    },
    clientsByVertical: [
      { vertical: "Customer Support", clients: ["Dixa"] },
      { vertical: "E-commerce/Payments", clients: ["FastSpring"] },
      { vertical: "Marketing", clients: ["Selligent Marketing Cloud", "Marigold"] },
      { vertical: "Climate/Environmental", clients: ["Greenly"] },
      { vertical: "IT/Asset Management", clients: ["Lansweeper"] },
      { vertical: "Workspace/Coworking", clients: ["Workero", "zapfloor"] },
      { vertical: "Video/Events", clients: ["24sessions"] },
    ],
    employeeTimeline: [
      { year: 2023, value: "~40+" },
      { year: 2025, value: "~42-51 across 4 continents" },
    ],
    milestones: [
      { date: "2015", event: "Founded as Cumul.io in Leuven, Belgium by Karel Callens, Thomas De Clerck, Haroen Vermylen" },
      { date: "2018", event: "Pre-seed from Imec.istart accelerator" },
      { date: "2020", event: "Seed $2.4M led by Axeleo Capital" },
      { date: "Jan 2023", event: "Series A €10M led by Hi Inov-Dentressangle. Rebranded from Cumul.io to Luzmo" },
      { date: "Nov 2024", event: "Luzmo IQ launched — multi-turn conversational analytics embedded in dashboards" },
      { date: "Early 2026", event: "Agent APIs launched — 7 specialized AI endpoints (Metadata, Discovery, Visualization, Formula, Chat, Chat History, Message)" },
    ],
    deepSources: [
      { label: "Series A", url: "https://www.luzmo.com/blog/cumul-io-raises-funding" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/luzmo" },
      { label: "Luzmo IQ Launch", url: "https://www.globenewswire.com/news-release/2024/11/21/2984932/0/en/Luzmo-IQ-launches-to-Bring-Hyper-Personalized-AI-Analytics-and-Data-Insights-to-Any-Application-or-Workflow.html" },
      { label: "Agent APIs", url: "https://www.luzmo.com/blog/introducing-agent-apis" },
    ],
  },

  "Reveal (Infragistics)": {
    markets: {
      geos: ["US (Cranbury, NJ HQ)", "Global"],
      verticals: ["Software Development", "Enterprise Applications", "ISVs"],
      target: "Development teams embedding analytics (2M+ developers use Infragistics tools)",
    },
    revenueTimeline: [
      { year: 2025, value: "$46.6M (Infragistics total)" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~207 (Infragistics total)" },
    ],
    milestones: [
      { date: "1989", event: "Infragistics founded (bootstrapped, no external funding)" },
      { date: "2019", event: "Launched Reveal embedded BI product" },
      { date: "Mar 2026", event: "Launched conversational AI analytics for embedded use" },
    ],
    deepSources: [
      { label: "AI Launch", url: "https://www.globenewswire.com/news-release/2026/03/26/3263072/0/en/Reveal-Brings-Conversational-AI-Analytics-Directly-into-Enterprise-Applications.html" },
      { label: "Growjo", url: "https://growjo.com/company/Infragistics_Corp" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/infragistics" },
    ],
  },

  "Monte Carlo": {
    fundingRounds: [
      { date: "2019-2021", round: "Seed through Series B", amount: "~$41M combined", lead: "Accel", investors: ["GGV Capital", "Redpoint Ventures"] },
      { date: "Aug 2021", round: "Series C", amount: "$60M", lead: "ICONIQ Growth", investors: ["GGV Capital", "Redpoint Ventures", "Salesforce Ventures"] },
      { date: "May 2022", round: "Series D", amount: "$135M", lead: "IVP", investors: ["Accel", "GGV Capital", "ICONIQ Growth", "Redpoint Ventures"], valuation: "$1.6B" },
    ],
    keyInvestors: ["IVP", "Accel", "GGV Capital", "ICONIQ Growth", "Redpoint Ventures", "Salesforce Ventures"],
    markets: {
      geos: ["US (74%)", "UK (5%)", "India (4%)", "Germany (3%)", "Canada (3%)", "France (2%)", "Rest of Europe (4%)", "RoW (5%)"],
      verticals: ["Technology/SaaS (35%)", "Financial Services (15%)", "Healthcare/Pharma (10%)", "Manufacturing/Industrial (10%)", "E-commerce/Retail (10%)", "Media/Entertainment (5%)", "Other (15%)"],
      target: "Large enterprise data teams (10,000+ employees majority). Fortune 500 focus. Only data engineering teams use it — 5-30 users per org.",
      notes: "Extremely US-concentrated. Data observability as a category is still early-adopter, concentrated in Silicon Valley and US tech companies. International adoption growing but lags. Named 2025 Databricks Data Governance Partner of the Year.",
    },
    clientTimeline: [
      { year: 2022, value: "100+ customers (at Series D)" },
      { year: 2025, value: "400+ enterprise customers, ~4,126 companies (TheirStack)" },
    ],
    clientsByVertical: [
      { vertical: "Financial Services", clients: ["Nasdaq", "Intuit", "Credit Karma"] },
      { vertical: "Healthcare/Pharma", clients: ["Roche"] },
      { vertical: "Manufacturing/Industrial", clients: ["Honeywell"] },
      { vertical: "Media/Entertainment", clients: ["Fox"] },
      { vertical: "Travel/Airlines", clients: ["American Airlines", "JetBlue", "Skyscanner"] },
      { vertical: "Food & Beverage", clients: ["PepsiCo"] },
    ],
    revenueTimeline: [
      { year: 2023, value: "$71.9M ARR" },
      { year: 2025, value: "$81.6M ARR (GetLatka, Nov 2025)" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~383" },
      { year: 2025, value: "~559" },
      { year: 2026, value: "~546" },
    ],
    milestones: [
      { date: "Jan 2019", event: "Founded by Barr Moses (CEO, ex-Gainsight VP) and Lior Gavish (CTO, ex-Sookasa/Barracuda). Met at Stanford." },
      { date: "2020-2021", event: "Pioneered 'data observability' as a category. 800% YoY revenue growth. ARR scaled 8x between summer 2020 and summer 2021." },
      { date: "Aug 2021", event: "Series C $60M led by ICONIQ Growth" },
      { date: "May 2022", event: "Series D $135M led by IVP at $1.6B valuation — unicorn status" },
      { date: "Apr 2023", event: "Fivetran native integration launched" },
      { date: "Sep 2025", event: "Agent Observability launched — first platform to monitor AI agent inputs/outputs with LLM-as-judge evaluations" },
      { date: "Mar 2026", event: "Agent Observability expanded — end-to-end visibility across context, performance, behavior, and outputs" },
      { date: "2025", event: "Named 2025 Databricks Data Governance Partner of the Year. G2 #1 Data Observability for 8 consecutive quarters." },
    ],
    deepSources: [
      { label: "Series D TechCrunch", url: "https://techcrunch.com/2022/05/24/monte-carlo-raises-135m-series-d-at-1-6b-price-showing-that-unicorn-rounds-are-still-a-thing/" },
      { label: "Agent Observability Launch", url: "https://www.businesswire.com/news/home/20250909271741/en/Monte-Carlo-Launches-Agent-Observability-to-Help-Teams-Build-Reliable-AI" },
      { label: "Agent Obs Expansion", url: "https://www.businesswire.com/news/home/20260312700545/en/Monte-Carlos-New-Agent-Observability-Delivers-End-to-End-Visibility-Across-Context-Performance-Behavior-and-Outputs" },
      { label: "Databricks Partner of Year", url: "https://www.businesswire.com/news/home/20250610917063/en/Monte-Carlo-Named-2025-Databricks-Data-Governance-Partner-of-the-Year" },
      { label: "G2 #1 (8th Quarter)", url: "https://www.montecarlodata.com/blog-monte-carlo-recognized-as-the-1-data-observability-platform-by-g2-for-8th-consecutive-quarter/" },
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/montecarlodata.com" },
      { label: "Contrary Research", url: "https://research.contrary.com/company/monte-carlo" },
    ],
  },
};

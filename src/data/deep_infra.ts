import type { DeepResearch } from "./competitors";

export const deepInfra: Record<string, DeepResearch> = {
  "Metabase": {
    fundingRounds: [
      { date: "Feb 2019", round: "Series A", amount: "$13M", lead: "New Enterprise Associates", investors: ["Expa"] },
      { date: "May 2021", round: "Series B", amount: "$30M", lead: "Insight Partners", investors: ["Expa", "Centre Street Partners"] },
    ],
    keyInvestors: ["Insight Partners", "New Enterprise Associates", "Expa", "Centre Street Partners"],
    markets: {
      geos: ["US (34.7%)", "Brazil (18.5%)", "India (12.2%)", "Global"],
      verticals: ["Tech/SaaS", "Finance", "Healthcare", "Retail", "Education"],
      target: "SMB to Mid-market (40% are 11-50 employee companies)",
    },
    clientTimeline: [
      { year: 2023, value: "60K+ orgs" },
      { year: 2025, value: "90K+ orgs" },
    ],
    clientsByVertical: [
      { vertical: "QSR/Retail", clients: ["McDonald's"] },
      { vertical: "Finance", clients: ["Capital One", "AngelList Venture"] },
      { vertical: "Tech/AI", clients: ["HuggingFace", "Axway"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "~$8M" },
      { year: 2025, value: "$13.4M ARR" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~122" },
      { year: 2026, value: "~126" },
    ],
    milestones: [
      { date: "May 2021", event: "Series B ($30M) from Insight Partners" },
      { date: "2024", event: "100M+ Docker pulls; 60% YoY revenue growth" },
      { date: "2025", event: "Launched Metabot AI (NL to SQL, Anthropic-powered) and MCP server" },
    ],
    deepSources: [
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/metabase.com" },
      { label: "Tracxn Profile", url: "https://tracxn.com/d/companies/metabase/__mmcSpUJQUbp5CDeW1GNS5aWGEAcpOJz22NS8cVG-Iz8" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/metabase" },
    ],
  },

  "Apache Superset / Preset": {
    fundingRounds: [
      { date: "2020", round: "Seed", amount: "$12.5M", lead: "Andreessen Horowitz (a16z)" },
      { date: "Aug 2021", round: "Series B", amount: "$35.9M", lead: "Redpoint Ventures", investors: ["a16z", "Fathom Capital"] },
    ],
    keyInvestors: ["Andreessen Horowitz", "Redpoint Ventures", "Fathom Capital"],
    markets: {
      geos: ["US (San Mateo HQ)", "Global OSS community"],
      verticals: ["Tech/SaaS", "Data Engineering", "DevOps"],
      target: "Technical data teams (self-hosted or Preset cloud)",
    },
    clientsByVertical: [
      { vertical: "Tech", clients: ["Airbnb (original creator)", "Lyft"] },
      { vertical: "OSS Community", clients: ["70K+ GitHub stars", "19K+ Slack users"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "$2.8-$3.7M (Preset)" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~45 (Preset)" },
    ],
    milestones: [
      { date: "2020", event: "Preset founded by Max Beauchemin (creator of Superset + Airflow)" },
      { date: "2021", event: "Graduated to Apache Top-Level Project" },
    ],
    deepSources: [
      { label: "Preset Series B", url: "https://www.prnewswire.com/news-releases/preset-raises-35-9m-series-b-to-democratize-business-intelligence-301357746.html" },
      { label: "GetLatka", url: "https://getlatka.com/companies/preset" },
    ],
  },

  "Grafana Labs": {
    fundingRounds: [
      { date: "2021", round: "Series C", amount: "$220M", lead: "Sequoia Capital", investors: ["GIC", "Coatue"] },
      { date: "Aug 2024", round: "Series D ext.", amount: "$270M", lead: "GIC", investors: ["CapitalG", "Lightspeed", "Sequoia"], valuation: "$6B" },
      { date: "Feb 2026", round: "Series E", amount: "$250M", lead: "ICONIQ", investors: ["GIC", "Lightspeed", "Sequoia", "Coatue", "CapitalG"], valuation: "$9B" },
    ],
    keyInvestors: ["GIC", "Sequoia Capital", "Lightspeed Venture Partners", "ICONIQ", "Coatue", "CapitalG", "J.P. Morgan"],
    markets: {
      geos: ["Global (100% remote, 50+ countries)", "US", "EMEA", "APAC"],
      verticals: ["Tech/AI", "Financial Services", "Manufacturing", "Telecom", "Government/FedRAMP"],
      target: "Enterprise (70% of Fortune 50)",
    },
    clientTimeline: [
      { year: 2024, value: "5,000+" },
      { year: 2025, value: "7,000+" },
      { year: 2026, value: "12,000+" },
    ],
    clientsByVertical: [
      { vertical: "AI/Tech", clients: ["Anthropic", "NVIDIA", "Microsoft", "Salesforce"] },
      { vertical: "Financial Services", clients: ["J.P. Morgan Chase", "TD Bank"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "$250M ARR" },
      { year: 2025, value: "$400M+ ARR" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~1,700" },
      { year: 2026, value: "~1,843" },
    ],
    milestones: [
      { date: "Sep 2025", event: "Surpassed $400M ARR and 7,000 customers" },
      { date: "Feb 2026", event: "Series E at $9B valuation" },
      { date: "2025", event: "Named Gartner MQ Leader for Observability; FedRAMP authorized" },
    ],
    deepSources: [
      { label: "$400M ARR", url: "https://grafana.com/press/2025/09/30/grafana-labs-surpasses-400m-arr-and-7000-customers-gains-new-investors-to-accelerate-global-expansion/" },
      { label: "$9B Valuation", url: "https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/" },
      { label: "Breakout Year", url: "https://grafana.com/press/2026/02/03/grafana-labs-caps-a-breakout-year-of-growth-and-product-innovation/" },
    ],
  },

  "Chat2DB": {
    fundingRounds: [
      { date: "2023", round: "Pre-seed", amount: "Undisclosed", lead: "Miracleplus" },
    ],
    keyInvestors: ["Miracleplus", "Woqu Tech"],
    markets: {
      geos: ["China (Hangzhou HQ)", "Global (open-source)"],
      verticals: ["Tech/SaaS", "Developer Tools"],
      target: "Individual developers to SMB",
    },
    clientTimeline: [
      { year: 2025, value: "1M+ users, 20K+ GitHub stars" },
    ],
    milestones: [
      { date: "2023", event: "Founded in Hangzhou; open-sourced (Apache 2.0)" },
      { date: "2025", event: "Surpassed 20K GitHub stars and 1M users" },
    ],
    deepSources: [
      { label: "GitHub", url: "https://github.com/CodePhiliaX/Chat2DB" },
      { label: "Product", url: "https://chat2db.ai/" },
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
      { date: "Jun 2021", round: "Series D", amount: "$110M", lead: "Riverwood Capital", investors: ["Sanabil", "Snowflake Ventures", "Dell Technologies Capital"], valuation: "$1.2B" },
      { date: "Nov 2022", round: "Series E", amount: "$123M", lead: "Thoma Bravo", investors: ["Sanabil", "Costanoa", "Databricks Ventures"], valuation: "$1.7B" },
      { date: "Early 2026", round: "Extension", amount: "$23M" },
    ],
    keyInvestors: ["Thoma Bravo", "Riverwood Capital", "Sapphire Ventures", "Costanoa Ventures", "Salesforce Ventures", "Databricks Ventures"],
    markets: {
      geos: ["US (Redwood City HQ)", "EMEA", "APAC"],
      verticals: ["Financial Services", "Pharma/Healthcare", "Tech", "Telecom"],
      target: "Enterprise (40% of Fortune 100)",
    },
    clientTimeline: [
      { year: 2023, value: "500+" },
      { year: 2026, value: "650+" },
    ],
    clientsByVertical: [
      { vertical: "Tech", clients: ["Cisco", "DocuSign", "Salesforce"] },
      { vertical: "Financial/Pharma", clients: ["Nasdaq", "Pfizer", "Virgin Australia"] },
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
      { date: "Jun 2021", event: "Reached unicorn status at $1.2B valuation" },
      { date: "May 2025", event: "Acquired Numbers Station AI (AI agents for data)" },
    ],
    deepSources: [
      { label: "Series E", url: "https://www.alation.com/news-and-press/alation-raises-series-e-funding/" },
      { label: "GetLatka", url: "https://getlatka.com/companies/alation" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/alation" },
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
      geos: ["US (primary)", "UK", "France", "Germany", "Canada"],
      verticals: ["Tech/SaaS", "Fintech", "E-commerce", "Government", "Fitness"],
      target: "Startups to Enterprise (sweet spot 50-500 employees)",
    },
    clientTimeline: [
      { year: 2024, value: "10,000+" },
      { year: 2025, value: "10,000+" },
    ],
    clientsByVertical: [
      { vertical: "Tech", clients: ["Amazon", "DoorDash", "Coinbase", "Brex"] },
      { vertical: "Government", clients: ["FEMA"] },
      { vertical: "Media/Consumer", clients: ["Disney+ Hotstar", "Orangetheory Fitness"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "$90M ARR" },
      { year: 2025, value: "$120-138.6M ARR" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~340" },
      { year: 2026, value: "~471" },
    ],
    milestones: [
      { date: "Jul 2022", event: "Series C extension at $3.2B valuation" },
      { date: "Apr 2025", event: "Launched AppGen (AI app generation from prompts)" },
      { date: "May 2025", event: "Launched Agents and AI Actions" },
    ],
    deepSources: [
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/retool" },
      { label: "Sacra Profile", url: "https://sacra.com/c/retool/" },
      { label: "Contrary Research", url: "https://research.contrary.com/company/retool" },
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
      { date: "2021", round: "Series A", amount: "$15.5M", lead: "Decibel Partners", investors: ["Bain Capital Ventures", "Eniac Ventures"] },
      { date: "Jun 2024", round: "Series B", amount: "$25M", lead: "Databricks Ventures", investors: ["Salesforce Ventures", "Bain Capital", "Decibel"] },
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
      { vertical: "Fintech", clients: ["Cyndx"] },
    ],
    revenueTimeline: [
      { year: 2025, value: "$7.9M" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~72" },
    ],
    milestones: [
      { date: "Jun 2024", event: "Series B led by Databricks Ventures ($25M)" },
      { date: "2025", event: "Adding AI agent capabilities to semantic layer" },
    ],
    deepSources: [
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/cube.dev" },
      { label: "Series B", url: "https://cube.dev/blog/cubes-raises-25-million" },
    ],
  },
};

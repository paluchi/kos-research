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
      { vertical: "Healthcare", clients: ["Nuffield Health"] },
      { vertical: "Financial Services", clients: ["Bank of Cyprus"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "~$180M" },
      { year: 2025, value: "$210M" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~1,024" },
      { year: 2026, value: "~1,100" },
    ],
    milestones: [
      { date: "Nov 2021", event: "Series G at $5.25B valuation" },
      { date: "Jul 2025", event: "Acquired Deasy Labs (AI governance)" },
      { date: "2025", event: "Reached $210M revenue and 1,000+ customers" },
      { date: "2026-2028", event: "IPO targeted" },
    ],
    deepSources: [
      { label: "Series G", url: "https://www.collibra.com/company/newsroom/press-releases/collibra-raises-250-million-in-funding-round-led-by-sequoia-capital-global-equities-and-sofina-more-than-doubling-its-valuation-to-5-25-billion" },
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/collibra" },
      { label: "BrandHopper History", url: "https://thebrandhopper.com/2023/07/20/collibra-history-founders-business-revenue-model-funding/" },
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
      geos: ["US (primary)", "EMEA", "APAC"],
      verticals: ["Financial Services", "Pharma/Healthcare", "Tech", "Telecom"],
      target: "Enterprise (40% of Fortune 100)",
    },
    clientTimeline: [
      { year: 2023, value: "500+" },
      { year: 2025, value: "550+" },
      { year: 2026, value: "650+" },
    ],
    clientsByVertical: [
      { vertical: "Tech", clients: ["Cisco", "DocuSign"] },
      { vertical: "Financial Services", clients: ["Nasdaq"] },
      { vertical: "Pharma", clients: ["Pfizer"] },
      { vertical: "Enterprise", clients: ["Salesforce", "Virgin Australia"] },
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
      { date: "Nov 2022", event: "Series E at $1.7B valuation" },
      { date: "May 2025", event: "Acquired Numbers Station AI (AI agents for data)" },
    ],
    deepSources: [
      { label: "GetLatka", url: "https://getlatka.com/companies/alation" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Alation" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/alation" },
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
      geos: ["US", "Europe (UK)", "India (origin)", "Global"],
      verticals: ["Financial Services", "Media", "Automotive", "Tech/SaaS", "Consumer"],
      target: "Enterprise (400+ customers representing $10T+ in market cap)",
    },
    clientTimeline: [
      { year: 2024, value: "300+" },
      { year: 2025, value: "400+" },
    ],
    clientsByVertical: [
      { vertical: "Financial Services", clients: ["Mastercard", "Nasdaq", "CME Group", "Plaid"] },
      { vertical: "Automotive", clients: ["General Motors"] },
      { vertical: "Tech/SaaS", clients: ["Workday", "HubSpot", "Elastic", "Autodesk", "GitLab", "Dropbox"] },
      { vertical: "Media/Consumer", clients: ["FOX", "News Corp", "Unilever", "Ralph Lauren", "Virgin Media O2"] },
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
      { date: "May 2024", event: "Series C at $750M valuation; 7x revenue growth in two years" },
      { date: "2025", event: "Named to Redpoint Ventures InfraRed 100 list" },
      { date: "2025", event: "Re:Govern conference with Mastercard, GM, Workday leaders" },
    ],
    deepSources: [
      { label: "Series C", url: "https://atlan.com/atlan-raises-105m-funding/" },
      { label: "Tracxn", url: "https://tracxn.com/d/companies/atlan/__wmS8cTNiTpcWtSAsRTmxu2alNUcymWvjDPnevifoSnQ" },
      { label: "CompWorth", url: "https://compworth.com/company/atlan" },
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
      { date: "2020", round: "Pre-seed", amount: "Undisclosed", lead: "Techstars" },
      { date: "2021", round: "Seed", amount: "$10.7M", lead: "OpenOcean", investors: ["Four Rivers Group", "Star Power Partners", "Clearsign Capital"] },
    ],
    keyInvestors: ["OpenOcean", "Four Rivers Group", "Techstars", "Star Power Partners", "Clearsign Capital"],
    markets: {
      geos: ["US", "Europe"],
      verticals: ["Finance", "Tech/SaaS"],
      target: "SMB to Mid-market (startups, banks, public companies)",
    },
    milestones: [
      { date: "2021", event: "$10.7M seed round led by OpenOcean" },
    ],
    deepSources: [
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/trevor" },
      { label: "Parsers.vc", url: "https://parsers.vc/startup/trevor.io/" },
    ],
  },

  "GoodData": {
    fundingRounds: [
      { date: "Jul 2008", round: "Angel", amount: "$2M", investors: ["Tim O'Reilly", "Esther Dyson", "Windcrest Partners"] },
      { date: "2009", round: "Series A", amount: "$3M", lead: "Andreessen Horowitz", investors: ["O'Reilly AlphaTech", "General Catalyst"] },
      { date: "2009", round: "Series A ext.", amount: "$2M", lead: "Windcrest Partners" },
      { date: "2011", round: "Series B", amount: "$15M", lead: "Andreessen Horowitz" },
      { date: "2012", round: "Series C", amount: "$25M", lead: "Andreessen Horowitz", investors: ["Tenaya Capital"] },
      { date: "2013", round: "Series D", amount: "$22M", lead: "Tenaya Capital" },
      { date: "Sep 2014", round: "Series E", amount: "$11M" },
      { date: "Jul 2021", round: "Credit Facility", amount: "$45M", lead: "J.P. Morgan" },
    ],
    keyInvestors: ["Andreessen Horowitz", "Tenaya Capital", "General Catalyst", "J.P. Morgan", "Visa Ventures", "Intel Capital", "TOTVS"],
    markets: {
      geos: ["US (SF HQ)", "Europe (Czech Republic origin)", "Global"],
      verticals: ["HR Tech", "Marketing", "CRM", "Hospitality", "Payments"],
      target: "SMB to Enterprise (embedded analytics for SaaS companies)",
    },
    clientTimeline: [
      { year: 2025, value: "140K+ organizations, 3.2M+ users" },
    ],
    clientsByVertical: [
      { vertical: "Payments", clients: ["Visa"] },
      { vertical: "Hospitality", clients: ["Travelodge", "Mews"] },
      { vertical: "Communications", clients: ["Twilio"] },
    ],
    revenueTimeline: [
      { year: 2025, value: "$63M" },
    ],
    employeeTimeline: [
      { year: 2025, value: "~257" },
      { year: 2026, value: "~282" },
    ],
    milestones: [
      { date: "2007", event: "Founded by Roman Stanek in San Francisco" },
      { date: "Sep 2025", event: "Acquired Understand Labs" },
      { date: "2025", event: "Rebranded to GoodData.AI; pivoted to AI analytics" },
    ],
    deepSources: [
      { label: "GetLatka Revenue", url: "https://getlatka.com/companies/gooddata-corporation" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/GoodData" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/good-data" },
    ],
  },

  "Luzmo": {
    fundingRounds: [
      { date: "2018", round: "Pre-seed", amount: "Undisclosed", lead: "Imec.istart" },
      { date: "2020", round: "Seed", amount: "$2.4M", lead: "Axeleo Capital", investors: ["LRM"] },
      { date: "Jan 2023", round: "Series A", amount: "$10.8M", lead: "Hi Inov", investors: ["Axeleo", "LRM", "SmartFin"] },
    ],
    keyInvestors: ["Hi Inov", "Axeleo Capital", "LRM", "SmartFin", "Imec.istart"],
    markets: {
      geos: ["Belgium (Leuven HQ)", "US (Brooklyn)", "Global"],
      verticals: ["HR Tech", "Marketing SaaS", "CRM", "Hospitality"],
      target: "SaaS companies embedding analytics (240+ clients)",
    },
    clientsByVertical: [
      { vertical: "Customer Support", clients: ["Dixa"] },
      { vertical: "E-commerce", clients: ["FastSpring"] },
      { vertical: "Marketing", clients: ["Selligent"] },
    ],
    employeeTimeline: [
      { year: 2025, value: "~42-51" },
    ],
    milestones: [
      { date: "2015", event: "Founded as Cumul.io in Belgium" },
      { date: "Jan 2023", event: "Series A ($10.8M) and rebrand to Luzmo" },
    ],
    deepSources: [
      { label: "Series A", url: "https://www.luzmo.com/blog/cumul-io-raises-funding" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/luzmo" },
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
};

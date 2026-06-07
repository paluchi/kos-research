import type { DeepResearch } from "./competitors";

export const deepEnterprise: Record<string, DeepResearch> = {
  "Microsoft Power BI": {
    markets: {
      geos: ["Global (US 43%, Brazil 13%, UK 9%)"],
      verticals: ["Manufacturing", "Financial Services", "Retail", "Healthcare", "Government"],
      target: "SMB to Enterprise (97% of Fortune 500)",
    },
    clientTimeline: [
      { year: 2023, value: "~20M monthly users" },
      { year: 2025, value: "375,000+ orgs, 30M+ monthly active users" },
    ],
    clientsByVertical: [
      { vertical: "Retail/CPG", clients: ["Walmart", "Coca-Cola", "Nestle"] },
      { vertical: "Financial Services", clients: ["Mastercard", "BNY Mellon", "HDFC Bank"] },
      { vertical: "Healthcare", clients: ["Johnson & Johnson", "Cleveland Clinic"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "~$3-4B (est.)" },
      { year: 2025, value: "$4B+ (est., 30% BI market share)" },
    ],
    milestones: [
      { date: "Jul 2015", event: "Power BI launched as cloud service" },
      { date: "2008-2025", event: "Gartner MQ Leader for 18 consecutive years" },
      { date: "Apr 2025", event: "40% price increase (Pro $10 to $14/user/mo)" },
    ],
    deepSources: [
      { label: "Market Stats", url: "https://electroiq.com/stats/power-bi-statistics/" },
      { label: "Market Share", url: "https://6sense.com/tech/business-intelligence-bi/microsoft-power-bi-market-share" },
    ],
  },

  "Tableau (Salesforce)": {
    fundingRounds: [
      { date: "2004", round: "Series A", amount: "$5M", lead: "New Enterprise Associates" },
      { date: "2008", round: "Series B", amount: "$10M", lead: "NEA" },
      { date: "May 2013", round: "IPO", amount: "$254M", lead: "NYSE: DATA", valuation: "$3B" },
      { date: "Jun 2019", round: "Acquisition", amount: "$15.7B", lead: "Salesforce (all-stock deal)" },
    ],
    keyInvestors: ["New Enterprise Associates (NEA)", "Meritech Capital"],
    markets: {
      geos: ["Global (US, EMEA, APAC)"],
      verticals: ["Financial Services", "Tech", "Consulting", "Telecom", "Media", "Retail"],
      target: "Enterprise (120K+ organizations)",
    },
    clientTimeline: [
      { year: 2020, value: "86K+ orgs" },
      { year: 2024, value: "120K+ orgs, 4M+ Tableau Public users" },
      { year: 2025, value: "16-17% BI market share" },
    ],
    clientsByVertical: [
      { vertical: "Financial Services", clients: ["JPMorgan", "Citibank", "Deloitte"] },
      { vertical: "Tech/Telecom", clients: ["Amazon", "LinkedIn", "Netflix", "Verizon"] },
    ],
    revenueTimeline: [
      { year: 2019, value: "$1.16B (pre-acquisition)" },
      { year: 2025, value: "~$5.8B (est., within Salesforce $41.5B)" },
    ],
    milestones: [
      { date: "May 2013", event: "IPO on NYSE at $3B valuation" },
      { date: "Jun 2019", event: "Acquired by Salesforce for $15.7B (42% premium)" },
      { date: "2024", event: "Launched Tableau Agent and Einstein AI integration" },
    ],
    deepSources: [
      { label: "Acquisition", url: "https://www.cnbc.com/2019/06/10/salesforce-to-buy-tableau-software-in-an-all-stock-deal.html" },
      { label: "Stats", url: "https://electroiq.com/stats/tableau-statistics/" },
    ],
  },

  "Looker (Google Cloud)": {
    fundingRounds: [
      { date: "2012", round: "Seed", amount: "$2M", lead: "First Round Capital" },
      { date: "Aug 2013", round: "Series A", amount: "$18M", lead: "Redpoint Ventures" },
      { date: "Jan 2016", round: "Series C", amount: "$48M", lead: "Kleiner Perkins" },
      { date: "Mar 2017", round: "Series D", amount: "$81.5M", lead: "CapitalG (Google)" },
      { date: "Dec 2018", round: "Series E", amount: "$103M", lead: "Premji Invest", valuation: "$1.6B" },
      { date: "Feb 2020", round: "Acquisition", amount: "$2.6B", lead: "Google Cloud" },
    ],
    keyInvestors: ["Redpoint Ventures", "First Round Capital", "Kleiner Perkins", "CapitalG", "Premji Invest", "Meritech Capital"],
    markets: {
      geos: ["US (primary)", "EMEA", "APAC"],
      verticals: ["Media", "E-commerce", "Tech/SaaS", "Energy"],
      target: "Mid-market to Enterprise",
    },
    clientsByVertical: [
      { vertical: "Media", clients: ["BuzzFeed", "Hearst", "King"] },
      { vertical: "E-commerce", clients: ["Etsy", "Shopify"] },
      { vertical: "Tech", clients: ["Yahoo", "Sunrun"] },
    ],
    milestones: [
      { date: "Jun 2019", event: "Google announces $2.6B acquisition" },
      { date: "Feb 2020", event: "Acquisition closes; merged into Google Cloud" },
      { date: "2023", event: "Looker Studio (free) and Looker (enterprise) product lines unified" },
    ],
    deepSources: [
      { label: "Google Acquisition", url: "https://techcrunch.com/2020/02/13/google-closes-2-6b-looker-acquisition/" },
      { label: "Origin Story", url: "https://review.firstround.com/the-inside-story-of-how-this-startup-turned-a-216-word-pitch-email-into-a-2-6-billion-acquisition/" },
    ],
  },

  "Qlik": {
    fundingRounds: [
      { date: "Jul 2010", round: "IPO", amount: "$IPO on NASDAQ", lead: "NASDAQ: QLIK" },
      { date: "Jun 2016", round: "Take-private", amount: "$3B", lead: "Thoma Bravo" },
      { date: "May 2023", round: "Acquisition", amount: "Undisclosed", lead: "Qlik acquired Talend" },
      { date: "Nov 2024", round: "Minority investment", amount: "Undisclosed", lead: "ADIA", investors: ["Thoma Bravo (new equity co-invest)"] },
    ],
    keyInvestors: ["Thoma Bravo", "Abu Dhabi Investment Authority (ADIA)"],
    markets: {
      geos: ["Global (US, EMEA, APAC)"],
      verticals: ["Financial Services", "Manufacturing", "Government/Public Sector", "Healthcare", "Automotive"],
      target: "Enterprise",
    },
    clientsByVertical: [
      { vertical: "Financial Services", clients: ["PayPal", "Deloitte"] },
      { vertical: "Manufacturing", clients: ["Samsung", "Boeing", "Volvo"] },
      { vertical: "Healthcare/Gov", clients: ["NHS", "Cisco"] },
    ],
    revenueTimeline: [
      { year: 2022, value: "~$1B" },
      { year: 2024, value: "~$1.3B" },
    ],
    employeeTimeline: [{ year: 2024, value: "~4,586 (post-Talend merger)" }],
    milestones: [
      { date: "Jun 2016", event: "Taken private by Thoma Bravo for $3B" },
      { date: "May 2023", event: "Acquired Talend (data integration)" },
      { date: "Nov 2024", event: "ADIA minority investment; 14 acquisitions since 2016" },
      { date: "Mar 2025", event: "Shifted to capacity-based pricing (no per-user)" },
    ],
    deepSources: [
      { label: "ADIA Investment", url: "https://www.qlik.com/us/news/company/press-room/press-releases/qlik-accelerating-growth-attracts-significant-investment-from-thoma-bravo-and-adia" },
      { label: "Revenue", url: "https://getlatka.com/companies/qlik" },
    ],
  },

  "SAP Analytics Cloud": {
    markets: {
      geos: ["Global (strongest EMEA/DACH region)"],
      verticals: ["Manufacturing", "Automotive", "Consumer Goods", "Energy"],
      target: "Enterprise (SAP ecosystem, 3,500-7,600 orgs)",
    },
    clientsByVertical: [
      { vertical: "Manufacturing/Auto", clients: ["Siemens", "Bosch", "Porsche"] },
      { vertical: "CPG/Energy", clients: ["Nestle", "Unilever", "Shell", "ExxonMobil"] },
    ],
    milestones: [
      { date: "2017", event: "Rebranded to SAP Analytics Cloud" },
      { date: "2024", event: "Joule AI Copilot integrated" },
    ],
    deepSources: [
      { label: "Pricing", url: "https://www.sap.com/spain/products/data-cloud/cloud-analytics/pricing.html" },
      { label: "Market Share", url: "https://enlyft.com/tech/products/sap-analytics-cloud" },
    ],
  },

  "IBM Cognos Analytics": {
    fundingRounds: [
      { date: "Nov 2007", round: "Acquisition", amount: "$5B", lead: "IBM acquired Cognos Inc." },
    ],
    markets: {
      geos: ["US (56%)", "Canada (8%)", "France (7%)"],
      verticals: ["Government", "Financial Services", "Insurance", "Aerospace"],
      target: "Large Enterprise (31,400+ customers)",
    },
    clientsByVertical: [
      { vertical: "Government", clients: ["US Federal agencies", "Government of Canada"] },
      { vertical: "Financial Services", clients: ["Bank of Montreal", "CIBC"] },
    ],
    revenueTimeline: [{ year: 2024, value: "<$1B (est., 4-5% BI market share)" }],
    milestones: [
      { date: "Nov 2007", event: "IBM acquired Cognos for $5B" },
      { date: "2023", event: "AI-powered NL query and insights added" },
    ],
    deepSources: [
      { label: "Market Share", url: "https://6sense.com/tech/analytics/ibm-cognos-analytics-market-share" },
      { label: "Pricing", url: "https://www.ibm.com/products/cognos-analytics/pricing" },
    ],
  },

  "MicroStrategy (Strategy)": {
    markets: {
      geos: ["Global (US 32%, international 68%)"],
      verticals: ["Retail/Hospitality", "Pharma", "Financial Services", "Government"],
      target: "Large Enterprise",
    },
    clientsByVertical: [
      { vertical: "Hospitality", clients: ["Hilton", "McDonald's"] },
      { vertical: "Pharma", clients: ["Pfizer"] },
      { vertical: "Financial", clients: ["USAA", "eBay"] },
    ],
    revenueTimeline: [
      { year: 2023, value: "$496M (BI software)" },
      { year: 2024, value: "~$457M (declining)" },
    ],
    employeeTimeline: [{ year: 2024, value: "~1,851" }],
    milestones: [
      { date: "Jun 1998", event: "IPO on NASDAQ" },
      { date: "Aug 2020", event: "Began Bitcoin treasury strategy (shifted company focus)" },
      { date: "Feb 2025", event: "Rebranded to 'Strategy'; market cap ~$80B (Bitcoin-driven)" },
    ],
    deepSources: [{ label: "SEC Filing", url: "https://www.sec.gov/Archives/edgar/data/0001050446/000095017025100916/mstr-ex99_1.htm" }],
  },

  "Sisense": {
    fundingRounds: [
      { date: "Jun 2010", round: "Series A", amount: "Undisclosed", lead: "Genesis Partners" },
      { date: "Jun 2014", round: "Series C", amount: "$50M", lead: "DFJ Growth", valuation: "$1.1B" },
      { date: "Sep 2018", round: "Series E", amount: "$80M", lead: "DFJ" },
      { date: "Jan 2020", round: "Series F", amount: "$100M", lead: "Insight Partners", valuation: "$1B" },
    ],
    keyInvestors: ["Insight Partners", "Battery Ventures", "DFJ Growth", "Bessemer Venture Partners"],
    markets: {
      geos: ["US (NYC HQ)", "Israel (R&D)", "Global"],
      verticals: ["Tech/SaaS", "Healthcare", "Financial Services", "Aerospace"],
      target: "Mid-market to Enterprise (embedded analytics)",
    },
    clientsByVertical: [
      { vertical: "Tech/SaaS", clients: ["GitLab", "ZoomInfo", "Tinder"] },
      { vertical: "Healthcare", clients: ["Philips Healthcare"] },
      { vertical: "Financial", clients: ["Nasdaq", "Northern Trust"] },
      { vertical: "Aerospace", clients: ["Rolls-Royce", "Airbus"] },
    ],
    revenueTimeline: [{ year: 2023, value: "$140M" }, { year: 2024, value: "$184.8M" }],
    employeeTimeline: [{ year: 2023, value: "~650" }, { year: 2025, value: "~598 (declining)" }],
    milestones: [
      { date: "2014", event: "Reached unicorn status at $1.1B valuation" },
      { date: "Apr 2024", event: "Security breach disclosed (CISA advisory issued)" },
    ],
    deepSources: [{ label: "Revenue", url: "https://getlatka.com/companies/sisense" }],
  },

  "TIBCO Spotfire": {
    fundingRounds: [
      { date: "Pre-2007", round: "VC rounds", amount: "$40M total", lead: "Credit Suisse" },
      { date: "May 2007", round: "Acquisition", amount: "$195M", lead: "TIBCO Software" },
      { date: "Sep 2014", round: "Take-private", amount: "$4.3B", lead: "Vista Equity Partners (acquired TIBCO)" },
    ],
    keyInvestors: ["Vista Equity Partners", "Cloud Software Group (parent)"],
    markets: {
      geos: ["US", "EMEA", "APAC"],
      verticals: ["Oil & Gas", "Pharma/Life Sciences", "Financial Services"],
      target: "Enterprise (advanced analytics)",
    },
    revenueTimeline: [{ year: 2024, value: "~$20M (Spotfire product, est.)" }],
    employeeTimeline: [{ year: 2025, value: "~137 (Spotfire division)" }],
    milestones: [
      { date: "May 2007", event: "Acquired by TIBCO for $195M" },
      { date: "Sep 2022", event: "TIBCO merged with Citrix into Cloud Software Group" },
      { date: "May 2023", event: "Spotfire spun out as standalone BU (HQ Goteborg)" },
    ],
    deepSources: [
      { label: "History", url: "https://www.spotfire.com/about" },
      { label: "CSG", url: "https://diginomica.com/cloud-software-group-explained-tibco-and-citrix-still-very-much-enterprise-line-sight" },
    ],
  },

  "Databricks AI/BI (Genie)": {
    fundingRounds: [
      { date: "Sep 2013", round: "Series A", amount: "$13.9M", lead: "Andreessen Horowitz" },
      { date: "Feb 2021", round: "Series G", amount: "$1B", lead: "Franklin Templeton", valuation: "$28B" },
      { date: "Nov 2024", round: "Series J", amount: "$10B", lead: "Thrive Capital", investors: ["a16z", "ICONIQ", "GIC"], valuation: "$62B" },
      { date: "Dec 2025", round: "Series L", amount: "$4B+", lead: "Thrive Capital", investors: ["a16z", "ICONIQ", "JPMorgan"], valuation: "$134B" },
    ],
    keyInvestors: ["Andreessen Horowitz", "Thrive Capital", "ICONIQ", "Franklin Templeton", "T. Rowe Price", "GIC", "BlackRock", "Fidelity"],
    markets: {
      geos: ["Global (US 55%, UK, India top 3)"],
      verticals: ["Financial Services", "Healthcare", "Retail", "Energy", "Media", "Manufacturing"],
      target: "Enterprise (60%+ of Fortune 500)",
    },
    clientTimeline: [
      { year: 2024, value: "12,000+ orgs" },
      { year: 2026, value: "20,000+ orgs; 800+ at $1M+ ARR; 70+ at $10M+" },
    ],
    clientsByVertical: [
      { vertical: "Financial Services", clients: ["Standard Chartered", "Experian"] },
      { vertical: "Retail/Consumer", clients: ["7-Eleven", "Conagra", "Rivian"] },
      { vertical: "Media", clients: ["Conde Nast", "Comcast"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "$2.4B run rate" },
      { year: 2025, value: "$4.8B run rate (+55% YoY)" },
      { year: 2026, value: "$5.4B+ run rate (+65% YoY)" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~11,500" },
      { year: 2025, value: "~14,500" },
    ],
    milestones: [
      { date: "2025", event: "AI/BI Genie reached GA; Premier Inc scaling to 20K users" },
      { date: "Dec 2025", event: "$4B+ Series L at $134B; largest private tech company" },
      { date: "Mar 2026", event: "Genie Code launched (autonomous Python/SQL agent)" },
    ],
    deepSources: [
      { label: "Revenue", url: "https://www.databricks.com/company/newsroom/press-releases/databricks-grows-65-yoy-surpasses-5-4-billion-revenue-run-rate" },
      { label: "AI/BI GA", url: "https://www.databricks.com/blog/aibi-genie-now-generally-available" },
    ],
  },

  "Snowflake Cortex Analyst": {
    fundingRounds: [
      { date: "2012", round: "Seed", amount: "$5M", lead: "Sutter Hill Ventures" },
      { date: "Oct 2018", round: "Series F", amount: "$450M", lead: "Sequoia Capital", valuation: "$3.5B" },
      { date: "Sep 2020", round: "IPO", amount: "$3.4B raised", lead: "NYSE: SNOW", valuation: "$33B" },
    ],
    keyInvestors: ["Sutter Hill Ventures", "Sequoia Capital", "Altimeter Capital", "ICONIQ", "Berkshire Hathaway", "Salesforce Ventures"],
    markets: {
      geos: ["Global (US primary, EMEA, APAC)"],
      verticals: ["Financial Services", "Healthcare", "Retail", "Tech", "Media"],
      target: "Enterprise (745 Forbes Global 2000 customers)",
    },
    clientTimeline: [
      { year: 2023, value: "~8,000 customers" },
      { year: 2025, value: "11,000+ customers; 580 at $1M+ revenue" },
    ],
    revenueTimeline: [
      { year: 2024, value: "$3.25B product revenue (FY25)" },
      { year: 2025, value: "$4.72B product revenue (FY26, +29% YoY)" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~7,004" },
      { year: 2025, value: "~7,834" },
      { year: 2026, value: "~9,060" },
    ],
    milestones: [
      { date: "Sep 2020", event: "Largest software IPO ever ($3.4B raised); Buffett invested" },
      { date: "Nov 2025", event: "Snowflake Intelligence (conversational analytics) GA" },
      { date: "2025", event: "4,000+ accounts using Cortex AI weekly" },
    ],
    deepSources: [
      { label: "Cortex Analyst Docs", url: "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst" },
      { label: "Employees", url: "https://www.macrotrends.net/stocks/charts/SNOW/snowflake/number-of-employees" },
    ],
  },

  "Google BigQuery AI": {
    markets: {
      geos: ["Global"],
      verticals: ["Tech", "Financial Services", "Retail", "Healthcare"],
      target: "Enterprise (Google Cloud customers)",
    },
    revenueTimeline: [{ year: 2025, value: "Google Cloud $43.2B (BigQuery not broken out)" }],
    milestones: [
      { date: "2010", event: "BigQuery launched (first serverless cloud DW)" },
      { date: "Apr 2024", event: "Data Canvas with Gemini AI announced at Cloud Next '24" },
      { date: "2025", event: "Gemini in BigQuery features reached GA" },
    ],
    deepSources: [
      { label: "Data Canvas", url: "https://cloud.google.com/blog/products/data-analytics/get-to-know-bigquery-data-canvas" },
      { label: "Gemini GA", url: "https://cloud.google.com/blog/products/data-analytics/gemini-in-bigquery-features-are-now-ga" },
    ],
  },

  "AWS QuickSight": {
    markets: {
      geos: ["Global (AWS regions)"],
      verticals: ["Tech", "Financial Services", "Government", "Healthcare"],
      target: "Enterprise (AWS ecosystem)",
    },
    revenueTimeline: [{ year: 2024, value: "AWS $100B+ (QuickSight not broken out)" }],
    milestones: [
      { date: "Oct 2015", event: "QuickSight announced at AWS re:Invent" },
      { date: "Apr 2024", event: "Amazon Q in QuickSight reached GA (generative BI)" },
      { date: "Oct 2025", event: "Evolving to 'Amazon Quick Suite'" },
    ],
    deepSources: [
      { label: "2024 Review", url: "https://aws.amazon.com/blogs/business-intelligence/amazon-quicksight-2024-year-in-review/" },
      { label: "Quick Suite", url: "https://aws.amazon.com/blogs/business-intelligence/reimagine-business-intelligence-amazon-quicksight-evolves-to-amazon-quick-suite/" },
    ],
  },

  "Domo": {
    fundingRounds: [
      { date: "2011-2017", round: "Series A-D", amount: "$689M total", lead: "Benchmark, GGV, TPG, BlackRock", valuation: "$2B peak" },
      { date: "Jun 2018", round: "IPO", amount: "$193M raised", lead: "NASDAQ: DOMO" },
    ],
    keyInvestors: ["Benchmark (12.9%)", "BlackRock (10.8%)", "IVP (12.9%)", "GGV Capital", "TPG Growth", "Bezos Expeditions"],
    markets: {
      geos: ["Global (US primary, EMEA, APAC — 195 countries)"],
      verticals: ["Retail", "Financial Services", "Tech", "Insurance", "Media"],
      target: "Enterprise (40% of Fortune 50)",
    },
    clientTimeline: [
      { year: 2024, value: "2,400+ organizations" },
    ],
    clientsByVertical: [
      { vertical: "Retail", clients: ["Target", "eBay"] },
      { vertical: "Tech/Financial", clients: ["Adobe", "Cisco", "Mastercard", "Uber"] },
    ],
    revenueTimeline: [{ year: 2022, value: "$308M" }, { year: 2025, value: "$317M (flat growth)" }],
    employeeTimeline: [{ year: 2023, value: "~1,500" }, { year: 2025, value: "~888" }],
    milestones: [
      { date: "Jun 2018", event: "IPO on NASDAQ; $193M raised at $2B+ peak valuation" },
      { date: "2024", event: "Market cap declined to ~$175M; flat revenue" },
    ],
    deepSources: [{ label: "Revenue", url: "https://stockanalysis.com/stocks/domo/revenue/" }],
  },
};

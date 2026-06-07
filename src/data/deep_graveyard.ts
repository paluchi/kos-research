import type { DeepResearch } from "./competitors";

export const deepGraveyard: Record<string, DeepResearch> = {
  "Outerbase": {
    fundingRounds: [
      { date: "2022", round: "Pre-seed (YC)", amount: "$500K", lead: "Y Combinator", investors: ["TRAC", "Surface Ventures"] },
    ],
    keyInvestors: ["Y Combinator", "TRAC", "Surface Ventures"],
    markets: {
      geos: ["US"],
      verticals: ["Developer Tools", "Database Management"],
      target: "Developers and small teams",
    },
    revenueTimeline: [
      { year: 2024, value: "$440K ARR" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~10" },
    ],
    milestones: [
      { date: "2022", event: "Founded by Brayden Wilmoth & Brandon Strittmatter; graduated YC" },
      { date: "Apr 2025", event: "Acquired by Cloudflare for ~$1.3M valuation" },
      { date: "Oct 2025", event: "Cloud service shut down; OSS Outerbase Studio continues on GitHub" },
    ],
    deepSources: [
      { label: "Cloudflare Acquisition", url: "https://blog.cloudflare.com/cloudflare-acquires-outerbase-database-dx/" },
      { label: "GetLatka", url: "https://getlatka.com/companies/outerbase.com" },
    ],
  },

  "Seek AI": {
    fundingRounds: [
      { date: "2022", round: "Pre-seed", amount: "~$3M", lead: "Conviction Partners, Battery Ventures" },
      { date: "Jan 2023", round: "Seed", amount: "$7.5M", lead: "Conviction Partners, Battery Ventures", investors: ["Mustafa Suleyman", "Tristan Handy (dbt)", "Bob Muglia (ex-Snowflake CEO)", "NJP Ventures"] },
    ],
    keyInvestors: ["Battery Ventures", "Conviction Partners", "Mustafa Suleyman", "Tristan Handy"],
    markets: {
      geos: ["US (NYC HQ)"],
      verticals: ["Enterprise Data", "Financial Services"],
      target: "Enterprise",
    },
    milestones: [
      { date: "Sep 2021", event: "Founded by Sarah Nagy" },
      { date: "Jan 2023", event: "Raised $7.5M seed with notable AI angels" },
      { date: "Jun 2025", event: "Acquired by IBM; integrated into Watsonx AI Labs (NYC accelerator backed by $500M fund)" },
    ],
    deepSources: [
      { label: "TechCrunch Acquisition", url: "https://techcrunch.com/2025/06/02/ibm-acquires-data-analysis-startup-seek-ai-opens-ai-accelerator-in-nyc/" },
      { label: "Seed Announcement", url: "https://techcrunch.com/2023/01/11/seek-lands-7-5m-investment-for-ai-that-answers-domain-specific-questions/" },
    ],
  },

  "Rows.com": {
    fundingRounds: [
      { date: "2016", round: "Seed", amount: "Undisclosed", lead: "Cherry Ventures" },
      { date: "2018", round: "Series A", amount: "$8M", lead: "Accel", investors: ["Cherry Ventures"] },
      { date: "Feb 2021", round: "Series B", amount: "$16M", lead: "Lakestar", investors: ["Accel", "Cherry Ventures"] },
      { date: "May 2024", round: "Series C", amount: "EUR 8M (~$8.7M)", lead: "Indico Capital Partners", investors: ["Cherry Ventures", "Accel", "Lakestar", "Armilar Venture Partners"] },
    ],
    keyInvestors: ["Accel", "Cherry Ventures", "Lakestar", "Indico Capital Partners", "Armilar Venture Partners"],
    markets: {
      geos: ["Europe (Porto, Portugal HQ)", "US (primary market)", "Global"],
      verticals: ["Marketing", "eCommerce", "Freelancers", "SMB Operations"],
      target: "Freelancers to mid-size businesses",
    },
    clientTimeline: [
      { year: 2025, value: "2.2M+ users" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~40-50" },
    ],
    milestones: [
      { date: "2016", event: "Founded by Humberto Ayres Pereira & Torben Schulz" },
      { date: "2024", event: "Added AI analyst; 100+ native integrations (GA, Salesforce, HubSpot, Stripe, Shopify)" },
      { date: "Feb 2026", event: "Acquired by Superhuman; service sunsetting May 2026" },
    ],
    deepSources: [
      { label: "Series B Pitch Deck", url: "https://www.alexanderjarvis.com/rows-pitch-deck-to-raise-16m-series-b-round/" },
      { label: "Series C", url: "https://www.eu-startups.com/2024/05/berlin-based-rows-raises-e8-million-to-spread-ai-powered-spreadsheets-around-the-world/" },
      { label: "Superhuman Acquisition", url: "https://blog.superhuman.com/superhuman-to-acquire-rows/" },
    ],
  },

  "PopSQL": {
    fundingRounds: [
      { date: "Sep 2020", round: "Seed", amount: "$3.4M", lead: "Gradient Ventures (Google)", investors: ["FundersClub", "Y Combinator"] },
      { date: "Feb 2022", round: "Series A", amount: "$14M", lead: "Tiger Global", investors: ["Gradient Ventures", "Y Combinator", "FundersClub"] },
    ],
    keyInvestors: ["Tiger Global", "Gradient Ventures", "Y Combinator", "FundersClub"],
    markets: {
      geos: ["US (SF HQ)", "Global"],
      verticals: ["Tech/SaaS", "Real Estate", "Fintech"],
      target: "Data teams at SMB to mid-market",
    },
    clientTimeline: [
      { year: 2020, value: "200+" },
      { year: 2022, value: "2,000+" },
    ],
    clientsByVertical: [
      { vertical: "Tech", clients: ["Instacart", "Auth0", "Clearbit", "Udacity"] },
      { vertical: "Real Estate/Logistics", clients: ["Redfin", "Shipt", "Vroom"] },
      { vertical: "Fintech", clients: ["Ramp"] },
    ],
    revenueTimeline: [
      { year: 2023, value: "~$1.9M" },
    ],
    employeeTimeline: [
      { year: 2022, value: "~25" },
      { year: 2024, value: "~12" },
    ],
    milestones: [
      { date: "2017", event: "Founded by Rahil Sondhi as side project while at Instacart" },
      { date: "Feb 2022", event: "$14M Series A from Tiger Global" },
      { date: "Apr 2024", event: "Acquired by Timescale; continues as standalone SQL GUI" },
    ],
    deepSources: [
      { label: "Seed Round", url: "https://popsql.com/blog/seed-round" },
      { label: "Series A", url: "https://popsql.com/blog/series-a" },
      { label: "Timescale Acquisition", url: "https://popsql.com/blog/popsql-is-joining-timescale" },
    ],
  },

  "Hyperquery": {
    fundingRounds: [
      { date: "2021-2022", round: "Seed", amount: "$2.98M", lead: "Khosla Ventures", investors: ["SEMA Translink", "Operator Stack Fund", "Community Access Fund"] },
    ],
    keyInvestors: ["Khosla Ventures", "SEMA Translink Investment", "Hyperplane Venture Capital"],
    markets: {
      geos: ["US (SF)"],
      verticals: ["Data Teams", "SaaS"],
      target: "Data analysts and small data teams",
    },
    clientsByVertical: [
      { vertical: "Tech/SaaS", clients: ["Docplanner", "Output", "Zeeto"] },
    ],
    employeeTimeline: [
      { year: 2024, value: "~11" },
    ],
    milestones: [
      { date: "2021", event: "Founded; built AI-powered SQL notebook for data teams" },
      { date: "Jul 2024", event: "Acquired by Deepnote; clients migrated to Deepnote platform" },
    ],
    deepSources: [
      { label: "Acquisition", url: "https://www.businesswire.com/news/home/20240729061332/en/Deepnote-Acquires-Hyperquery-Enabling-Organizations-to-Democratize-AI-and-Data-Analytics" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/hyperquery" },
    ],
  },

  "Zing Data": {
    fundingRounds: [
      { date: "Jun 2022", round: "Seed", amount: "$2.4M", lead: "Kindred Ventures", investors: ["Correlation Ventures"] },
    ],
    keyInvestors: ["Kindred Ventures", "Correlation Ventures"],
    markets: {
      geos: ["US", "Asia"],
      verticals: ["Logistics", "Events Management", "Real Estate"],
      target: "Field teams and mobile-first users",
    },
    revenueTimeline: [
      { year: 2025, value: "$220K" },
    ],
    employeeTimeline: [
      { year: 2022, value: "3" },
      { year: 2025, value: "3" },
    ],
    milestones: [
      { date: "2021", event: "Founded; pioneered mobile-first BI analytics" },
      { date: "Jun 2022", event: "$2.4M seed from Kindred Ventures" },
      { date: "Dec 2025", event: "Sunsetting service on 12/21/2025 despite revenue growth" },
    ],
    deepSources: [
      { label: "TechCrunch Seed", url: "https://techcrunch.com/2022/06/29/with-2-4m-seed-zing-data-wants-to-put-data-analysis-in-the-palm-of-your-hand/" },
      { label: "GetLatka", url: "https://getlatka.com/companies/getzingdata.com" },
    ],
  },

  "DataGPT": {
    fundingRounds: [
      { date: "2021", round: "Seed", amount: "~$10M", lead: "Undisclosed" },
      { date: "Oct 2024", round: "Series B", amount: "$11.9M", lead: "Undisclosed" },
    ],
    keyInvestors: ["Undisclosed (total ~$22M raised)"],
    markets: {
      geos: ["US (Covina, CA)"],
      verticals: ["QSR/Food Service", "Streaming/Media"],
      target: "Enterprise ($10K-$30K 3-month pilots)",
    },
    clientsByVertical: [
      { vertical: "QSR", clients: ["Papa Johns"] },
      { vertical: "Streaming", clients: ["Plex"] },
    ],
    employeeTimeline: [
      { year: 2024, value: "~14" },
    ],
    milestones: [
      { date: "2021", event: "Founded by Arina Curtis, Darren Pegg, Sasha MacKinnon as Comparative Inc" },
      { date: "2023", event: "Built proprietary Lightning Cache Engine; claimed 100x faster than warehouses" },
      { date: "2024", event: "Killed $99/mo tier; pivoted to enterprise-only pricing" },
      { date: "Late 2025", event: "Shut down silently — 404 errors, team departed, no press release" },
    ],
    deepSources: [
      { label: "Shutdown Analysis", url: "https://www.blazesql.com/blog/datagpt-shutdown-alternatives" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/comparative" },
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
      { date: "Jul 2024", round: "Seed", amount: "EUR 4M (~$4.3M)", lead: "Connect Ventures", investors: ["Inventure", "Alliance VC", "Antler", "Greens"], valuation: "Undisclosed" },
    ],
    keyInvestors: ["Connect Ventures", "Inventure", "Alliance VC", "Antler", "Carl Pei (angel)"],
    markets: {
      geos: ["Sweden (Stockholm HQ)", "Nordics", "Europe"],
      verticals: ["SaaS/Tech", "Startups"],
      target: "Startups to mid-market (semantic layer-native)",
    },
    revenueTimeline: [
      { year: 2025, value: "$2.2M ARR" },
    ],
    milestones: [
      { date: "2022", event: "Founded in Stockholm; pre-seed from Inventure" },
      { date: "Jul 2024", event: "EUR 4M seed led by Connect Ventures" },
    ],
    deepSources: [
      { label: "Seed Round", url: "https://tech.eu/2024/07/03/swedish-analytics-startup-steep-raises-4m-seed/" },
      { label: "GetLatka", url: "https://getlatka.com/companies/steep.app" },
    ],
  },

  "Evidence.dev": {
    fundingRounds: [
      { date: "Sep 2023", round: "Seed", amount: "$2.1M", lead: "A.Capital", investors: ["SV Angel", "Y Combinator", "Tristan Handy (dbt)", "Joe Morrissey", "Tido Carriero"] },
    ],
    keyInvestors: ["A.Capital", "SV Angel", "Y Combinator", "Tristan Handy"],
    markets: {
      geos: ["Canada (Toronto HQ)", "US"],
      verticals: ["Data Engineering", "Developer Tools"],
      target: "Technical data teams (code-first analysts)",
    },
    employeeTimeline: [
      { year: 2025, value: "~6" },
    ],
    milestones: [
      { date: "2021", event: "Founded by Sean Hughes & Adam McAskill; graduated YC" },
      { date: "Sep 2023", event: "$2.1M seed; launched Evidence Cloud" },
      { date: "2024", event: "Named one of fastest-growing OSS startups by Runa Capital" },
    ],
    deepSources: [
      { label: "TechCrunch", url: "https://techcrunch.com/2023/09/13/evidence-business-intelligence-open-source-code/" },
      { label: "Seed Announcement", url: "https://evidence.dev/blog/fundraise-and-cloud" },
    ],
  },

  "NLSQL": {
    fundingRounds: [
      { date: "2020", round: "Grant", amount: "Undisclosed", lead: "German Federal Ministry (Healthcare BI)" },
    ],
    keyInvestors: ["Bootstrapped / grant-funded"],
    markets: {
      geos: ["Germany (Berlin HQ)", "Europe", "MENA"],
      verticals: ["Healthcare", "Enterprise (SAP ecosystem)"],
      target: "Enterprise front-line employees (MS Teams/Slack)",
    },
    milestones: [
      { date: "2018", event: "Founded; first cloud text-to-SQL API" },
      { date: "2020", event: "German Federal Ministry grant for Healthcare BI" },
      { date: "2022", event: "SAP Partner certification (SAP HANA); listed on SAP App Store" },
    ],
    deepSources: [
      { label: "Website", url: "https://nlsql.com/" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/nlsql" },
    ],
  },

  "Vanna AI": {
    fundingRounds: [
      { date: "2024", round: "Competition", amount: "$20K", lead: "Paddle AI Launchpad (winner)" },
    ],
    keyInvestors: ["Bootstrapped"],
    markets: {
      geos: ["US"],
      verticals: ["Data Engineering", "Developer Tools"],
      target: "Developers and data analysts (open-source self-serve)",
    },
    revenueTimeline: [
      { year: 2024, value: "~$100K" },
      { year: 2025, value: "$330K" },
    ],
    employeeTimeline: [
      { year: 2025, value: "3" },
    ],
    milestones: [
      { date: "2023", event: "Founded by Zain Hoda; open-source MIT license" },
      { date: "2024", event: "Won Paddle AI Launchpad ($20K); Google Cloud Ready - BigQuery designation" },
      { date: "Oct 2025", event: "Reached 20,000 GitHub stars" },
    ],
    deepSources: [
      { label: "GetLatka", url: "https://getlatka.com/companies/vanna.ai" },
      { label: "GitHub", url: "https://github.com/vanna-ai/vanna" },
    ],
  },
};

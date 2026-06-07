import type { DeepResearch } from "./competitors";

export const deepCloudNative: Record<string, DeepResearch> = {
  "Sigma Computing": {
    fundingRounds: [
      { date: "2014", round: "Series A", amount: "$8M", lead: "Sutter Hill Ventures" },
      { date: "2018", round: "Series B", amount: "$20M", lead: "Sutter Hill Ventures", investors: ["Altimeter Capital"] },
      { date: "Nov 2021", round: "Series C", amount: "$300-340M", lead: "D1 Capital Partners", investors: ["Snowflake Ventures", "XN", "Altimeter", "Sutter Hill"] },
      { date: "May 2024", round: "Series D", amount: "$200M", lead: "Spark Capital, Avenir Growth Capital", investors: ["NewView Capital", "Snowflake Ventures", "Sutter Hill", "D1", "XN", "Altimeter"], valuation: "$1.5B" },
      { date: "May 2026", round: "Series E", amount: "$80M", lead: "Princeville Capital", investors: ["Databricks Ventures", "ServiceNow Ventures", "Workday Ventures", "K5 Global", "Altimeter", "Avenir", "D1", "XN", "Spark", "Sutter Hill"], valuation: "$3B" },
    ],
    keyInvestors: ["Sutter Hill Ventures", "D1 Capital", "Spark Capital", "Avenir Growth", "Snowflake Ventures", "Altimeter", "Databricks Ventures", "ServiceNow Ventures"],
    markets: {
      geos: ["US (primary)", "EMEA (growing — Snowflake EMEA Partner 2026)"],
      verticals: ["Financial Services", "Food & Beverage", "Retail", "Broadcasting", "Tech/SaaS"],
      target: "Mid-market to Enterprise",
    },
    clientTimeline: [
      { year: 2024, value: "1,350+" },
      { year: 2025, value: "~1,800" },
      { year: 2026, value: "2,000+" },
    ],
    clientsByVertical: [
      { vertical: "Financial Services", clients: ["JPMorgan Chase", "Capital One"] },
      { vertical: "Tech/SaaS", clients: ["AMD", "Duolingo", "DoorDash", "Figma"] },
      { vertical: "Consumer/Retail", clients: ["Colgate-Palmolive", "Samsung", "Mindbody"] },
      { vertical: "Healthcare", clients: ["HealthStream"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "~$50M" },
      { year: 2025, value: "$100M" },
      { year: 2026, value: "$200M+" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~470" },
      { year: 2025, value: "~1,200" },
      { year: 2026, value: "~1,428" },
    ],
    milestones: [
      { date: "Jan 2025", event: "Reached $100M ARR milestone" },
      { date: "May 2026", event: "Doubled ARR to $200M+ in 12 months" },
      { date: "2025", event: "First-time Gartner MQ entrant (highest debut in 15 years)" },
    ],
    deepSources: [
      { label: "Series E", url: "https://www.sigmacomputing.com/resources/announcements/series-e" },
      { label: "$100M ARR", url: "https://www.sigmacomputing.com/resources/announcements/sigma-achieves-100m-arr-milestone-j-p-morgan-joins-list-of-equity-investors" },
      { label: "GetLatka", url: "https://getlatka.com/companies/sigmacomputing.com" },
    ],
  },

  "ThoughtSpot": {
    fundingRounds: [
      { date: "Feb 2014", round: "Series A", amount: "Undisclosed", lead: "Lightspeed Venture Partners" },
      { date: "Jun 2014", round: "Series B", amount: "Undisclosed", lead: "Khosla Ventures" },
      { date: "May 2016", round: "Series C", amount: "Undisclosed", lead: "General Catalyst" },
      { date: "2017-2018", round: "Series D", amount: "Undisclosed", lead: "Sapphire Ventures", investors: ["Capital One Ventures"] },
      { date: "Aug 2019", round: "Series E", amount: "$248M", lead: "Silver Lake Waterman", valuation: "$1.95B" },
      { date: "Nov 2021", round: "Series F", amount: "$100M", lead: "March Capital", investors: ["Lightspeed", "Snowflake Ventures", "Khosla", "Fidelity", "Capital One", "General Catalyst", "Sapphire", "GIC"] },
      { date: "Jul 2023", round: "Series F ext.", amount: "~$124M", lead: "March Capital", investors: ["Mode Analytics acquisition ($200M)"], valuation: "$4.2B" },
    ],
    keyInvestors: ["Lightspeed", "Khosla Ventures", "Silver Lake", "March Capital", "a16z", "General Catalyst", "Sapphire Ventures", "Snowflake Ventures", "GIC", "Fidelity"],
    markets: {
      geos: ["US", "EMEA", "APAC"],
      verticals: ["Financial Services", "Retail/Luxury", "Healthcare/Pharma", "Media", "Gaming", "Tech"],
      target: "Enterprise (25%+ of Fortune 100)",
    },
    clientTimeline: [
      { year: 2022, value: "~500" },
      { year: 2023, value: "1,000+" },
      { year: 2024, value: "1,200+" },
    ],
    clientsByVertical: [
      { vertical: "Financial Services", clients: ["Capital One", "JPMorgan Chase", "Nasdaq"] },
      { vertical: "Retail/Luxury", clients: ["Rolex", "Walmart", "Hilton"] },
      { vertical: "Tech", clients: ["Nvidia", "Lyft", "Klaviyo", "Vizio"] },
      { vertical: "Media/Telecom", clients: ["Comcast", "T-Mobile"] },
      { vertical: "Gaming", clients: ["Electronic Arts"] },
      { vertical: "Consumer", clients: ["Unilever", "Huel"] },
    ],
    revenueTimeline: [
      { year: 2023, value: "$210.6M" },
      { year: 2024, value: "$318.2M" },
    ],
    employeeTimeline: [
      { year: 2023, value: "~1,500" },
      { year: 2024, value: "~1,700" },
      { year: 2025, value: "~1,700" },
    ],
    milestones: [
      { date: "Jul 2023", event: "Acquired Mode Analytics for $200M" },
      { date: "2024", event: "Named Gartner MQ Leader for Analytics & BI" },
      { date: "2024", event: "Google Cloud Global Technology Partner of the Year (Data & Analytics)" },
    ],
    deepSources: [
      { label: "$4.2B Valuation", url: "https://www.thoughtspot.com/press-releases/thoughtspot-raises-new-funding-at-usd4-2b-valuation" },
      { label: "FY2024 Growth", url: "https://www.thoughtspot.com/press-releases/thoughtspot-experiences-exceptional-year-of-growth-with-industry-leading-ai-power" },
      { label: "Contrary Research", url: "https://research.contrary.com/company/thoughtspot" },
    ],
  },

  "Omni Analytics": {
    fundingRounds: [
      { date: "2022", round: "Seed", amount: "$9.4M", lead: "First Round Capital", investors: ["Redpoint", "GV", "Box Group", "100+ angels"] },
      { date: "Aug 2022", round: "Series A", amount: "$17.5M", lead: "Redpoint", investors: ["First Round", "GV"] },
      { date: "Mar 2024", round: "Extension", amount: "$20M", lead: "Theory Ventures" },
      { date: "Mar 2025", round: "Series B", amount: "$69M", lead: "ICONIQ Growth", investors: ["Theory Ventures", "First Round", "Redpoint", "GV", "Snowflake Ventures"], valuation: "$650M" },
      { date: "Apr 2026", round: "Series C", amount: "$120M", lead: "ICONIQ Growth", investors: ["Theory", "First Round", "Redpoint", "GV", "Databricks Ventures"], valuation: "$1.5B" },
    ],
    keyInvestors: ["ICONIQ Growth", "Theory Ventures", "First Round Capital", "Redpoint", "GV", "Snowflake Ventures", "Databricks Ventures"],
    markets: {
      geos: ["US (primary)", "Europe (Brevo — France)"],
      verticals: ["SaaS/Tech", "Marketing Automation", "AI Companies"],
      target: "Fast-scaling startups to Enterprise",
    },
    clientsByVertical: [
      { vertical: "Marketing/SaaS", clients: ["Brevo", "ActiveProspect", "Standard Metrics"] },
      { vertical: "AI/Tech", clients: ["Photoroom", "Synthesia", "Aviatrix"] },
    ],
    revenueTimeline: [
      { year: 2023, value: "~$3M" },
      { year: 2024, value: "~$10M" },
      { year: 2025, value: "~$30M" },
    ],
    milestones: [
      { date: "Aug 2022", event: "Founded by ex-Looker co-founders (Colin Zima was Looker Chief Analytics Officer)" },
      { date: "Oct 2025", event: "Acquired Explo (embedded analytics)" },
      { date: "Apr 2026", event: "Reached unicorn status at $1.5B valuation" },
    ],
    deepSources: [
      { label: "Series C", url: "https://omni.co/blog/press-release-omni-series-c-funding" },
      { label: "Fortune", url: "https://fortune.com/2026/04/23/exclusive-omni-raises-120-million-ai-iconiq-lookr-unicorn-semantic-layer/" },
      { label: "TechCrunch Series B", url: "https://techcrunch.com/2025/03/13/omni-is-designing-tools-to-help-companies-make-data-driven-decisions/" },
    ],
  },

  "Lightdash": {
    fundingRounds: [
      { date: "Oct 2022", round: "Seed", amount: "$8.4M", lead: "Y Combinator, Moonfire" },
      { date: "Oct 2024", round: "Series A", amount: "$11M", lead: "Accel", investors: ["Operator Partners", "Shopify Ventures", "Y Combinator", "Moonfire"] },
    ],
    keyInvestors: ["Accel", "Y Combinator", "Moonfire", "Shopify Ventures", "Operator Partners"],
    markets: {
      geos: ["UK/Europe (London HQ)", "US (SF co-founders)"],
      verticals: ["Media", "Transportation", "Tech/SaaS (dbt users)"],
      target: "SMB to Mid-market (developer-first)",
    },
    clientsByVertical: [
      { vertical: "Media", clients: ["JustWatch"] },
      { vertical: "Transportation", clients: ["Qargo"] },
      { vertical: "Tech", clients: ["Tatango", "Beauty Pie", "Hypebeast", "Morning Brew"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "$11M ARR" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~19" },
      { year: 2025, value: "~30" },
    ],
    milestones: [
      { date: "Oct 2024", event: "Launched AI Data Analyst alongside Series A" },
    ],
    deepSources: [
      { label: "TechCrunch Series A", url: "https://techcrunch.com/2024/10/08/open-source-bi-platform-lightdash-gets-accels-backing-to-bring-ai-to-business-intelligence/" },
      { label: "GetLatka", url: "https://getlatka.com/companies/lightdash.com" },
    ],
  },

  "Count.co": {
    fundingRounds: [
      { date: "Apr 2020", round: "Pre-seed", amount: "$2.4M", lead: "LocalGlobe", investors: ["Global Founders Capital"] },
      { date: "Oct 2022", round: "Seed", amount: "$3M", lead: "TheVentureCity", investors: ["LocalGlobe", "Rocket Internet"] },
    ],
    keyInvestors: ["LocalGlobe", "TheVentureCity", "Global Founders Capital", "Rocket Internet"],
    markets: {
      geos: ["UK/Europe (London HQ)", "International"],
      verticals: ["Tech/SaaS", "Data Teams"],
      target: "SMB to Mid-market",
    },
    clientsByVertical: [
      { vertical: "Consulting", clients: ["Accenture"] },
      { vertical: "Tech/SaaS", clients: ["Omnipresent", "Too Good To Go"] },
    ],
    employeeTimeline: [
      { year: 2025, value: "~29" },
    ],
    milestones: [
      { date: "2016", event: "Founded (pivoted to current canvas analytics product)" },
      { date: "Apr 2020", event: "Pre-seed from LocalGlobe" },
    ],
    deepSources: [
      { label: "Seed Announcement", url: "https://count.co/blog/count-announces-3m-seed-round" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/count" },
    ],
  },

  "Hex": {
    fundingRounds: [
      { date: "Jul 2020", round: "Seed", amount: "Undisclosed", lead: "BoxGroup" },
      { date: "Oct 2021", round: "Series A", amount: "$16M", lead: "Redpoint Ventures", investors: ["Amplify Partners", "Geometry", "Operator Collective", "XYZ Ventures"] },
      { date: "2021-2022", round: "Series B", amount: "$28M", lead: "Snowflake Ventures", investors: ["Redpoint"] },
      { date: "Mar 2023", round: "Series B-1", amount: "$52M", lead: "Andreessen Horowitz (a16z)" },
      { date: "May 2025", round: "Series C", amount: "$70M", lead: "Avra", investors: ["Snowflake Ventures", "Sequoia", "a16z", "Amplify", "BoxGroup", "Redpoint"], valuation: "$500M-$1B" },
    ],
    keyInvestors: ["a16z", "Sequoia", "Snowflake Ventures", "Redpoint", "Avra", "BoxGroup", "Amplify Partners"],
    markets: {
      geos: ["US (primary)", "Global"],
      verticals: ["Tech/SaaS", "Pharma", "Sports/Media", "Fintech"],
      target: "SMB moving to Enterprise",
    },
    clientTimeline: [
      { year: 2024, value: "1,500+" },
    ],
    clientsByVertical: [
      { vertical: "AI/Tech", clients: ["Anthropic", "Reddit", "Figma", "Notion", "Coinbase"] },
      { vertical: "Enterprise", clients: ["Cisco", "HubSpot", "Twilio"] },
      { vertical: "Sports/Media", clients: ["NBA", "StubHub", "Philadelphia Inquirer"] },
      { vertical: "Pharma", clients: ["Recursion Pharmaceuticals"] },
    ],
    revenueTimeline: [
      { year: 2023, value: "$9.4M" },
      { year: 2024, value: "$19.8M" },
    ],
    employeeTimeline: [
      { year: 2023, value: "~97" },
      { year: 2025, value: "~162" },
      { year: 2026, value: "~257" },
    ],
    milestones: [
      { date: "Apr 2025", event: "Acquired Hashboard (database BI)" },
      { date: "Mid-2025", event: "Launched Notebook Agent (powered by Claude Sonnet)" },
    ],
    deepSources: [
      { label: "Series C", url: "https://hex.tech/blog/series-c/" },
      { label: "Fortune", url: "https://fortune.com/2025/05/28/exclusive-hex-raises-a-70-million-series-c-to-double-down-on-data-in-the-ai-era/" },
      { label: "GetLatka", url: "https://getlatka.com/companies/hex" },
    ],
  },

  "Deepnote": {
    fundingRounds: [
      { date: "~2020", round: "Seed", amount: "$3.8M", lead: "Index Ventures", investors: ["Accel", "Y Combinator", "Credo Ventures"] },
      { date: "Jan 2022", round: "Series A", amount: "$20M", lead: "Index Ventures + Accel", investors: ["Coatue", "Tiger Global", "DIG Ventures"] },
    ],
    keyInvestors: ["Index Ventures", "Accel", "Y Combinator", "Coatue", "Tiger Global"],
    markets: {
      geos: ["US (SF HQ)", "Global (strong academic)"],
      verticals: ["Education/Academia", "Tech/SaaS", "Data Science"],
      target: "Individual practitioners to Mid-market",
    },
    clientsByVertical: [
      { vertical: "Education", clients: ["Harvard", "MIT", "Stanford"] },
      { vertical: "Fintech", clients: ["Ramp", "Gusto"] },
      { vertical: "Tech/SaaS", clients: ["Discord", "Webflow", "Motive", "SoundCloud"] },
    ],
    revenueTimeline: [
      { year: 2024, value: "~$3M" },
      { year: 2025, value: "$3.9M" },
    ],
    employeeTimeline: [
      { year: 2023, value: "~55" },
      { year: 2025, value: "~35" },
    ],
    milestones: [
      { date: "Jul 2024", event: "Acquired Hyperquery" },
      { date: "2025", event: "Went open source; named in Gartner Market Guide for Augmented Analytics" },
    ],
    deepSources: [
      { label: "TechCrunch Series A", url: "https://techcrunch.com/2022/01/31/deepnote-raises-20m-for-its-collaborative-data-science-notebooks/" },
      { label: "GetLatka", url: "https://getlatka.com/companies/deepnote.com" },
    ],
  },

  "Quadratic": {
    fundingRounds: [
      { date: "~2022", round: "Seed 1", amount: "~$5.7M", lead: "Betaworks", investors: ["Catapult Ventures", "Everywhere Ventures", "The Fund"] },
      { date: "Apr 2024", round: "Seed 2", amount: "$5.6M", lead: "GV (Google Ventures)", investors: ["Catapult Ventures", "Betaworks", "The Fund Rockies"] },
    ],
    keyInvestors: ["GV (Google Ventures)", "Betaworks", "Catapult Ventures", "Everywhere Ventures"],
    markets: {
      geos: ["US (Boulder, CO)"],
      verticals: ["Finance", "Data Analytics", "Developer Tools"],
      target: "Individual users to SMB data teams",
    },
    clientTimeline: [
      { year: 2024, value: "45,000+ users" },
    ],
    milestones: [
      { date: "Apr 2024", event: "45,000 users at Seed 2 raise" },
      { date: "2024", event: "Added Claude 3.7, GPT-4o AI support" },
    ],
    deepSources: [
      { label: "TechCrunch", url: "https://techcrunch.com/2024/04/02/quadratic-is-reimagining-the-spreadsheet-with-a-focus-on-data/" },
      { label: "Seed Blog", url: "https://www.quadratichq.com/blog/announcing-our-seed-round-funding-and-quadratic-teams" },
      { label: "GitHub", url: "https://github.com/quadratichq/quadratic" },
    ],
  },
};

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
      geos: ["US (primary, SF HQ)", "Global (consumer)"],
      verticals: ["Education/Academia", "Finance/Hedge Funds", "Hospitality", "Research"],
      target: "Consumer to SMB (prosumer data analysts)",
    },
    clientTimeline: [
      { year: 2024, value: "500K+ users" },
      { year: 2025, value: "2M+ users" },
    ],
    clientsByVertical: [
      { vertical: "Education", clients: ["Harvard Business School (required course)", "Rice University"] },
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
      { year: 2026, value: "~15" },
    ],
    milestones: [
      { date: "2022", event: "Founded by Rahul Sonwalkar; graduated YC S22 batch" },
      { date: "2024", event: "Reached $1M ARR with 5-person team" },
      { date: "2025", event: "Harvard Business School adopts Julius as required course tool (900+ students)" },
      { date: "2025", event: "Surpassed 2M users and 10M+ data visualizations created" },
      { date: "Jul 2025", event: "Raised $10M seed led by Bessemer Venture Partners" },
      { date: "Mar 2026", event: "874K monthly visits (+27% MoM), 53% organic search" },
    ],
    deepSources: [
      { label: "TechCrunch Seed", url: "https://techcrunch.com/2025/07/28/ai-data-analyst-startup-julius-nabs-10m-seed-round/" },
      { label: "Julius Funding Announcement", url: "https://julius.ai/articles/funding-announcement" },
      { label: "GetLatka", url: "https://getlatka.com/companies/julius.ai" },
      { label: "Sacra Profile", url: "https://sacra.com/c/julius/" },
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
      geos: ["North America (Montreal HQ)", "Global"],
      verticals: ["SaaS/Tech", "Startups", "Data Teams"],
      target: "SMB to Mid-market (non-technical business users)",
    },
    clientTimeline: [
      { year: 2024, value: "Not disclosed" },
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
    ],
    deepSources: [
      { label: "Seed Announcement", url: "https://www.basedash.com/blog/basedash-raises-4-4m-led-by-matrix" },
      { label: "GetLatka", url: "https://getlatka.com/companies/basedash.com" },
      { label: "YC Profile", url: "https://www.ycombinator.com/companies/basedash" },
      { label: "Tracxn", url: "https://tracxn.com/d/companies/basedash/___5oKx8UQJ4wRD20KgZzDuAu_bxSobduSziK3OxQtW-s" },
    ],
  },

  "BlazeSQL": {
    fundingRounds: [],
    keyInvestors: [],
    markets: {
      geos: ["Europe (Berlin HQ)", "Global"],
      verticals: ["Supply Chain", "SME Operations", "Data Teams"],
      target: "SME to Mid-market",
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
      { date: "2025", event: "Added Snowflake, BigQuery, Redshift connectors" },
    ],
    deepSources: [
      { label: "Indie Hackers", url: "https://www.indiehackers.com/post/breaking-1k-mrr-within-6-months-of-indie-hacking-6f6cfff21e" },
      { label: "Product Hunt", url: "https://www.producthunt.com/products/blazesql" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/blazesql" },
    ],
  },

  "AskYourDatabase": {
    fundingRounds: [],
    keyInvestors: [],
    markets: {
      geos: ["Asia (Hong Kong HQ)", "Global"],
      verticals: ["General-purpose (database querying)", "SMBs"],
      target: "Individual users to SMB",
    },
    revenueTimeline: [
      { year: 2024, value: "$100K ARR" },
    ],
    employeeTimeline: [
      { year: 2023, value: "1 (solo founder)" },
      { year: 2026, value: "1 (solo founder)" },
    ],
    milestones: [
      { date: "2023", event: "Founded in Hong Kong as self-funded project" },
      { date: "2024", event: "Reached $100K ARR as solo founder" },
      { date: "2025", event: "Added NoSQL (MongoDB) support alongside SQL databases" },
    ],
    deepSources: [
      { label: "GetLatka", url: "https://getlatka.com/companies/askyourdatabase" },
      { label: "Product", url: "https://www.askyourdatabase.com" },
    ],
  },

  "WrenAI": {
    fundingRounds: [],
    keyInvestors: [],
    markets: {
      geos: ["Asia (Taiwan HQ, Canner parent)", "Global (open-source community)"],
      verticals: ["Data Engineering", "Enterprise Analytics", "Developer Tools"],
      target: "Data teams and developers (self-hosted or cloud)",
    },
    clientTimeline: [
      { year: 2025, value: "10,000+ cloud users" },
    ],
    revenueTimeline: [
      { year: 2025, value: "$1.5M ARR" },
    ],
    employeeTimeline: [
      { year: 2024, value: "~8" },
      { year: 2026, value: "~14" },
    ],
    milestones: [
      { date: "2024", event: "Launched WrenAI open-source (Apache-2.0) under Canner" },
      { date: "2024", event: "Reached ~3,000 GitHub stars by year-end" },
      { date: "2025", event: "Grew to 13,000+ GitHub stars; 1,600+ Discord community members" },
      { date: "2025", event: "Reached $1.5M ARR and 10,000+ cloud users" },
      { date: "2025", event: "Apache DataFusion engine with 22+ data source integrations" },
      { date: "2026", event: "Surpassed 14,000+ GitHub stars; large enterprises in production" },
    ],
    deepSources: [
      { label: "GitHub", url: "https://github.com/Canner/WrenAI" },
      { label: "GetLatka", url: "https://getlatka.com/companies/getwren.ai" },
      { label: "2025 Year in Review", url: "https://www.getwren.ai/post/wren-ai-2025-year-in-review-from-open-source-to-agentic-bi-in-production" },
    ],
  },
};

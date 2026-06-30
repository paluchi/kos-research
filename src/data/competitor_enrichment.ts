import type { BusinessModel, GTM } from "./competitors";

interface Enrichment {
  founded: number;
  hq: string;
  businessModel: BusinessModel;
  gtm: GTM;
}

export const enrichment: Record<string, Enrichment> = {
  // ── Traditional BI ────────────────────────────
  "Microsoft Power BI":       { founded: 2013, hq: "Redmond, WA",        businessModel: "Platform",       gtm: "Hybrid" },
  "Tableau (Salesforce)":     { founded: 2003, hq: "Seattle, WA",        businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "Looker (Google Cloud)":    { founded: 2012, hq: "Mountain View, CA",   businessModel: "Platform",       gtm: "Sales-led" },
  "Qlik":                     { founded: 1993, hq: "King of Prussia, PA", businessModel: "Enterprise SaaS", gtm: "Hybrid" },
  "SAP Analytics Cloud":      { founded: 2017, hq: "Walldorf, Germany",  businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "IBM Cognos Analytics":     { founded: 1969, hq: "Armonk, NY",         businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "MicroStrategy (Strategy)": { founded: 1989, hq: "Tysons Corner, VA",  businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "Sisense":                  { founded: 2004, hq: "New York, NY",       businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "TIBCO Spotfire":           { founded: 1996, hq: "Göteborg, Sweden",   businessModel: "Enterprise SaaS", gtm: "Sales-led" },

  // ── Enterprise Data Platform ──────────────────
  "Databricks AI/BI (Genie)": { founded: 2013, hq: "San Francisco, CA",  businessModel: "Platform",       gtm: "Hybrid" },
  "Snowflake Cortex Analyst": { founded: 2012, hq: "Bozeman, MT",        businessModel: "Platform",       gtm: "Hybrid" },
  "Google BigQuery AI":       { founded: 2010, hq: "Mountain View, CA",  businessModel: "Platform",       gtm: "Hybrid" },
  "AWS QuickSight":           { founded: 2016, hq: "Seattle, WA",        businessModel: "Platform",       gtm: "Hybrid" },
  "Domo":                     { founded: 2010, hq: "American Fork, UT",  businessModel: "Enterprise SaaS", gtm: "Sales-led" },

  // ── Cloud-Native BI ───────────────────────────
  "Sigma Computing":          { founded: 2014, hq: "San Francisco, CA",  businessModel: "Enterprise SaaS", gtm: "Hybrid" },
  "ThoughtSpot":              { founded: 2012, hq: "Sunnyvale, CA",      businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "Omni Analytics":           { founded: 2022, hq: "San Francisco, CA",  businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "Lightdash":                { founded: 2021, hq: "London, UK",         businessModel: "Open Core",      gtm: "Hybrid" },
  "Count.co":                 { founded: 2020, hq: "London, UK",         businessModel: "SaaS",           gtm: "Product-led" },
  "Steep":                    { founded: 2021, hq: "Stockholm, Sweden",  businessModel: "SaaS",           gtm: "Hybrid" },
  "Evidence.dev":             { founded: 2021, hq: "Toronto, Canada",    businessModel: "Open Core",      gtm: "Community-led" },

  // ── Modern Analytics ──────────────────────────
  "Hex":                      { founded: 2019, hq: "San Francisco, CA",  businessModel: "SaaS",           gtm: "Product-led" },
  "Deepnote":                 { founded: 2019, hq: "Prague, Czech Republic", businessModel: "Freemium",    gtm: "Product-led" },
  "Quadratic":                { founded: 2022, hq: "Boulder, CO",        businessModel: "Freemium",       gtm: "Product-led" },

  // ── Embedded Analytics ────────────────────────
  "Luzmo":                    { founded: 2015, hq: "Leuven, Belgium",    businessModel: "SaaS",           gtm: "Hybrid" },
  "GoodData":                 { founded: 2007, hq: "San Francisco, CA",  businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "Reveal (Infragistics)":    { founded: 1989, hq: "Cranbury, NJ",       businessModel: "Enterprise SaaS", gtm: "Sales-led" },

  // ── AI Analytics Startups ─────────────────────
  "Julius AI":                { founded: 2022, hq: "San Francisco, CA",  businessModel: "Freemium",       gtm: "Product-led" },
  "Equals":                   { founded: 2021, hq: "San Francisco, CA",  businessModel: "SaaS",           gtm: "Product-led" },
  "TextQL":                   { founded: 2022, hq: "San Francisco, CA",  businessModel: "SaaS",           gtm: "Hybrid" },
  "MindsDB":                  { founded: 2017, hq: "Berkeley, CA",       businessModel: "Open Core",      gtm: "Community-led" },
  "Defog.ai":                 { founded: 2023, hq: "Singapore",          businessModel: "Open Core",      gtm: "Product-led" },
  "Basedash":                 { founded: 2020, hq: "Montreal, Canada",   businessModel: "SaaS",           gtm: "Product-led" },
  "BlazeSQL":                 { founded: 2023, hq: "Berlin, Germany",    businessModel: "SaaS",           gtm: "Product-led" },
  "Dot (GetDot.ai)":          { founded: 2021, hq: "Berlin, Germany",    businessModel: "SaaS",           gtm: "Product-led" },
  "Athena Intelligence":      { founded: 2022, hq: "New York, NY",       businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "Supersimple":              { founded: 2021, hq: "Tallinn, Estonia",   businessModel: "SaaS",           gtm: "Product-led" },
  "Zing Data":                { founded: 2021, hq: "San Francisco, CA",  businessModel: "Freemium",       gtm: "Product-led" },
  "NLSQL":                    { founded: 2018, hq: "London, UK",         businessModel: "SaaS",           gtm: "Hybrid" },
  "AI2SQL":                   { founded: 2022, hq: "Istanbul, Turkey",   businessModel: "SaaS",           gtm: "Product-led" },
  "AskYourDatabase":          { founded: 2023, hq: "Hong Kong",          businessModel: "SaaS",           gtm: "Product-led" },

  // ── Text-to-SQL / Open Source ─────────────────
  "WrenAI":                   { founded: 2024, hq: "New Taipei City, Taiwan", businessModel: "Open Core",  gtm: "Community-led" },
  "Vanna AI":                 { founded: 2023, hq: "Fairfield, CT",      businessModel: "Open Core",      gtm: "Community-led" },
  "Kanaries / RATH":          { founded: 2021, hq: "Hangzhou, China",    businessModel: "Open Core",      gtm: "Community-led" },

  // ── Open-Source BI ────────────────────────────
  "Metabase":                 { founded: 2014, hq: "San Francisco, CA",  businessModel: "Open Core",      gtm: "Community-led" },
  "Apache Superset / Preset": { founded: 2015, hq: "San Mateo, CA",      businessModel: "Open Core",      gtm: "Hybrid" },
  "Redash":                   { founded: 2013, hq: "Tel Aviv, Israel",   businessModel: "Open Core",      gtm: "Community-led" },
  "Grafana Labs":             { founded: 2014, hq: "New York, NY",       businessModel: "Open Core",      gtm: "Hybrid" },
  "DBeaver":                  { founded: 2010, hq: "Prague, Czechia",    businessModel: "Open Core",      gtm: "Product-led" },
  "Chat2DB":                  { founded: 2023, hq: "Hangzhou, China",    businessModel: "Open Core",      gtm: "Community-led" },

  // ── Data Governance ───────────────────────────
  "Collibra":                 { founded: 2008, hq: "New York / Brussels", businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "Alation":                  { founded: 2012, hq: "Redwood City, CA",   businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "Atlan":                    { founded: 2019, hq: "San Francisco, CA",  businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "Monte Carlo":              { founded: 2019, hq: "San Francisco, CA",  businessModel: "Enterprise SaaS", gtm: "Sales-led" },

  // ── Adjacent / Workflow ───────────────────────
  "Retool":                   { founded: 2017, hq: "San Francisco, CA",  businessModel: "SaaS",           gtm: "Hybrid" },
  "Trevor.io":                { founded: 2016, hq: "London, UK",         businessModel: "SaaS",           gtm: "Product-led" },
  "Cube.dev":                 { founded: 2019, hq: "San Francisco, CA",  businessModel: "Open Core",      gtm: "Hybrid" },

  // ── Graveyard ─────────────────────────────────
  "DataGPT":                  { founded: 2021, hq: "San Francisco, CA",  businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "Seek AI":                  { founded: 2021, hq: "New York, NY",       businessModel: "Enterprise SaaS", gtm: "Sales-led" },
  "Outerbase":                { founded: 2022, hq: "Pittsburgh, PA",     businessModel: "SaaS",           gtm: "Product-led" },
  "Rows.com":                 { founded: 2016, hq: "Porto, Portugal / Berlin, Germany", businessModel: "SaaS", gtm: "Product-led" },
  "Actiondesk":               { founded: 2019, hq: "Paris, France",      businessModel: "SaaS",           gtm: "Product-led" },
  "PopSQL":                   { founded: 2017, hq: "San Francisco, CA",  businessModel: "SaaS",           gtm: "Product-led" },
  "Hyperquery":               { founded: 2020, hq: "San Francisco, CA",  businessModel: "SaaS",           gtm: "Product-led" },
};

import type { Competitor } from "./competitors";

export const KOS_DIMS = [
  "LLM Chat", "SQL", "NoSQL", "Files/Docs", "Knowledge",
  "Dashboards", "Presentations", "API Export", "RBAC",
  "Web-based", "Easy Setup", "Affordable", "Self-serve",
];

export const DIM_DESCRIPTIONS: Record<string, string> = {
  "LLM Chat": "Conversational AI — ask questions in natural language, get answers with context",
  "SQL": "Users can write or generate SQL queries against relational databases",
  "NoSQL": "Users can query non-relational databases (MongoDB, DynamoDB, etc.)",
  "Files/Docs": "Drag-and-drop file analysis — upload CSV, Excel, PDF and explore data",
  "Knowledge": "Semantic/business context layer — metric definitions, relationships, institutional knowledge",
  "Dashboards": "Interactive visual dashboards with charts, filters, and drill-downs",
  "Presentations": "Generate presentation-ready slides from data and analysis",
  "API Export": "Programmatic access — REST API, SDKs, embeddable components, data export",
  "RBAC": "Role-based access control — user roles, permissions, row-level security",
  "Web-based": "Accessible via web browser — no desktop install required",
  "Easy Setup": "Quick onboarding — connect and start in minutes, minimal configuration",
  "Affordable": "Accessible pricing — free tiers, per-user plans under $50/mo, or open-source",
  "Self-serve": "Sign up and start without a sales call — product-led onboarding",
};

/** Get funding total in millions from structured FundingInfo */
export function getFundingM(c: Competitor): number {
  return c.funding.totalRaisedM ?? 0;
}

/** Get team headcount from structured TeamInfo */
export function getHeadcount(c: Competitor): number {
  return c.team.headcount ?? 0;
}

/* ── 1. Dimension heatmap: category × dimension ─────── */
export function dimHeatmapData(comps: Competitor[]) {
  const cats = [...new Set(comps.filter(c => c.status === "active").map(c => c.category))];
  const data: [number, number, number][] = [];
  for (let ci = 0; ci < cats.length; ci++) {
    const catComps = comps.filter(c => c.category === cats[ci] && c.status === "active");
    for (let di = 0; di < KOS_DIMS.length; di++) {
      const count = catComps.filter(c => c.dimensions.includes(KOS_DIMS[di])).length;
      const pct = catComps.length > 0 ? Math.round((count / catComps.length) * 100) : 0;
      data.push([di, ci, pct]);
    }
  }
  return { categories: cats, dimensions: KOS_DIMS, data };
}

/* ── 2. Funding bubble: X=dims, Y=funding, size=team ── */
export function fundingBubbleData(comps: Competitor[]) {
  return comps
    .filter(c => c.status === "active")
    .map(c => ({
      x: c.dimensions.length,
      y: getFundingM(c),
      z: Math.max(getHeadcount(c), 5),
      name: c.name,
      category: c.category,
      threat: c.threat,
    }))
    .filter(d => d.y > 0);
}

/* ── 3. Capital by category bar ─────────────────────── */
export function capitalByCategoryData(comps: Competitor[]) {
  const cats = [...new Set(comps.map(c => c.category))];
  return cats.map(cat => {
    const total = comps
      .filter(c => c.category === cat && c.status === "active")
      .reduce((s, c) => s + getFundingM(c), 0);
    return { category: cat, total };
  }).sort((a, b) => b.total - a.total);
}

/* ── 4. Dimension adoption bar ──────────────────────── */
export function dimAdoptionData(comps: Competitor[]) {
  const active = comps.filter(c => c.status === "active");
  return KOS_DIMS.map(dim => ({
    dim,
    count: active.filter(c => c.dimensions.includes(dim)).length,
    pct: Math.round((active.filter(c => c.dimensions.includes(dim)).length / active.length) * 100),
  })).sort((a, b) => b.count - a.count);
}

/* ── 5. Dimension co-occurrence matrix ──────────────── */
export function dimCooccurrenceData(comps: Competitor[]) {
  const active = comps.filter(c => c.status === "active");
  const matrix: number[][] = KOS_DIMS.map(() => KOS_DIMS.map(() => 0));
  for (const c of active) {
    for (let i = 0; i < KOS_DIMS.length; i++) {
      for (let j = 0; j < KOS_DIMS.length; j++) {
        if (c.dimensions.includes(KOS_DIMS[i]) && c.dimensions.includes(KOS_DIMS[j])) {
          matrix[i][j]++;
        }
      }
    }
  }
  const data: [number, number, number][] = [];
  for (let i = 0; i < KOS_DIMS.length; i++) {
    for (let j = i; j < KOS_DIMS.length; j++) {
      if (i !== j) data.push([i, j, matrix[i][j]]);
    }
  }
  return { dims: KOS_DIMS, data };
}

/* ── 6. White space radar: KOS vs top competitors ──── */
export function radarData(comps: Competitor[]) {
  const topNames = [
    "Microsoft Power BI", "Tableau (Salesforce)", "Databricks AI/BI (Genie)",
    "ThoughtSpot", "Metabase",
  ];
  const series = topNames.map(name => {
    const c = comps.find(x => x.name === name);
    if (!c) return { name, data: KOS_DIMS.map(() => 0) };
    return { name, data: KOS_DIMS.map(d => c.dimensions.includes(d) ? 1 : 0) };
  });
  // KOS has all 13
  series.unshift({ name: "KOS", data: KOS_DIMS.map(() => 1) });
  return { dims: KOS_DIMS, series };
}

/* ── 7. Status by category stacked bar ─────────────── */
export function statusByCategoryData(comps: Competitor[]) {
  const cats = [...new Set(comps.map(c => c.category))].filter(c => c !== "Dead / Acquired");
  const active = cats.map(cat => comps.filter(c => c.category === cat && c.status === "active").length);
  const dead = cats.map(cat => comps.filter(c => c.category === cat && c.status !== "active").length);
  return { categories: cats, active, dead };
}

/* ── 8. GTM × Business Model bubble ───────────────── */
export function gtmModelData(comps: Competitor[]) {
  const active = comps.filter(c => c.status === "active" && c.gtm && c.businessModel);
  const gtmLabels = ["Product-led", "Community-led", "Hybrid", "Sales-led"];
  const modelLabels = ["Freemium", "Open Core", "SaaS", "Enterprise SaaS", "Platform"];
  const grid: Record<string, number> = {};
  for (const c of active) {
    const key = `${c.gtm}|${c.businessModel}`;
    grid[key] = (grid[key] || 0) + 1;
  }
  const data: { x: number; y: number; z: number; names: string[] }[] = [];
  for (const [key, count] of Object.entries(grid)) {
    const [gtm, model] = key.split("|");
    const x = gtmLabels.indexOf(gtm);
    const y = modelLabels.indexOf(model);
    if (x >= 0 && y >= 0) {
      const names = active
        .filter(c => c.gtm === gtm && c.businessModel === model)
        .map(c => c.name);
      data.push({ x, y, z: count, names });
    }
  }
  return { gtmLabels, modelLabels, data };
}

/* ── 9. HQ Region distribution ──────────────────── */

function classifyRegion(hq?: string): string {
  if (!hq) return "Unknown";
  const lower = hq.toLowerCase();
  // US states
  if (/,\s*(ca|ny|wa|tx|ma|co|il|va|nc|ga|oh|fl|ut|or|md|pa|ct|az|mn|mo|nj|wi|tn|dc|sc)\s*$/i.test(hq)) {
    if (/,\s*(ca|wa|or)\s*$/i.test(hq)) return "US West Coast";
    if (/,\s*(ny|ma|ct|nj|pa|md|va|dc)\s*$/i.test(hq)) return "US East Coast";
    return "US Other";
  }
  if (lower.includes("uk") || lower.includes("england") || lower.includes("london")) return "UK";
  if (/germany|france|belgium|sweden|netherlands|europe|finland|austria|czech|switzerland|estonia|turkey|portugal|spain|italy|ireland|denmark|norway|poland|romania|hungary|greece|croatia|lithuania|latvia|luxembourg|slovenia|slovakia|bulgaria|malta|cyprus/i.test(lower)) return "Europe";
  if (lower.includes("israel") || lower.includes("tel aviv")) return "Israel";
  if (lower.includes("china") || lower.includes("taiwan") || lower.includes("japan") || lower.includes("india") || lower.includes("singapore") || lower.includes("hong kong") || lower.includes("korea")) return "Asia-Pacific";
  if (lower.includes("canada") || lower.includes("montreal") || lower.includes("toronto") || lower.includes("vancouver")) return "Canada";
  if (lower.includes("australia") || lower.includes("new zealand")) return "Asia-Pacific";
  return "Other";
}

export function hqRegionData(comps: Competitor[]) {
  const active = comps.filter(c => c.status === "active");
  const counts: Record<string, number> = {};
  const byRegion: Record<string, Competitor[]> = {};
  for (const c of active) {
    const region = classifyRegion(c.hq);
    counts[region] = (counts[region] || 0) + 1;
    (byRegion[region] ??= []).push(c);
  }
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return { regions: sorted.map(s => s[0]), counts: sorted.map(s => s[1]), byRegion };
}

/* ── 10. Target market segment distribution ─────── */

function classifyTarget(target?: string): string {
  if (!target) return "Unknown";
  const t = target.toLowerCase();
  if (t.includes("enterprise") && (t.includes("smb") || t.includes("mid"))) return "Full-spectrum";
  if (t.includes("enterprise")) return "Enterprise";
  if (t.includes("mid-market") || t.includes("mid market")) return "Mid-market";
  if (t.includes("smb") || t.includes("small")) return "SMB";
  if (t.includes("consumer") || t.includes("prosumer") || t.includes("individual")) return "Consumer / Prosumer";
  if (t.includes("developer") || t.includes("data team") || t.includes("engineer")) return "Developer / Data Teams";
  return "Other";
}

export function targetMarketData(comps: Competitor[]) {
  const active = comps.filter(c => c.status === "active");
  const counts: Record<string, number> = {};
  const bySegment: Record<string, Competitor[]> = {};
  for (const c of active) {
    const seg = classifyTarget(c.deep?.markets?.target);
    counts[seg] = (counts[seg] || 0) + 1;
    (bySegment[seg] ??= []).push(c);
  }
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return { segments: sorted.map(s => s[0]), counts: sorted.map(s => s[1]), bySegment };
}

/* ── 11. Vertical heatmap: category × industry ──── */

const TOP_VERTICALS = [
  "Financial Services", "Healthcare", "Retail", "Manufacturing",
  "Tech/SaaS", "Government", "Media", "Education",
  "Energy", "Consulting", "Telecom", "Logistics",
];

export function verticalHeatmapData(comps: Competitor[]) {
  const active = comps.filter(c => c.status === "active");
  const cats = [...new Set(active.map(c => c.category))];
  const data: [number, number, number][] = [];
  for (let ci = 0; ci < cats.length; ci++) {
    const catComps = active.filter(c => c.category === cats[ci]);
    for (let vi = 0; vi < TOP_VERTICALS.length; vi++) {
      const count = catComps.filter(c => {
        const verticals = c.deep?.markets?.verticals || [];
        return verticals.some(v => v.toLowerCase().includes(TOP_VERTICALS[vi].toLowerCase()));
      }).length;
      data.push([vi, ci, count]);
    }
  }
  return { categories: cats, verticals: TOP_VERTICALS, data };
}

/* ══════════════════════════════════════════════════════
   Dynamic Insight Generators
   ══════════════════════════════════════════════════════ */

const top = (arr: { name: string; val: number }[], n: number) =>
  [...arr].sort((a, b) => b.val - a.val).slice(0, n);
const bot = (arr: { name: string; val: number }[], n: number) =>
  [...arr].sort((a, b) => a.val - b.val).slice(0, n);
const fmt = (items: { name: string }[]) => items.map(i => i.name).join(", ");

/** 1. Dimension Coverage Heatmap */
export function heatmapInsight(comps: Competitor[]) {
  const hm = dimHeatmapData(comps);
  const { categories, dimensions, data } = hm;
  // Find dims that are 100% across most categories
  const dimAvg = dimensions.map((dim, di) => {
    const vals = categories.map((_, ci) => {
      const pt = data.find(d => d[0] === di && d[1] === ci);
      return pt ? pt[2] : 0;
    });
    return { name: dim, val: Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) };
  });
  const saturated = top(dimAvg, 3);
  const coldest = bot(dimAvg, 3);
  return `${fmt(saturated)} are the most saturated dimensions (avg ${saturated.map(s => s.val + "%").join(", ")} across categories). ${fmt(coldest)} are the coldest (avg ${coldest.map(s => s.val + "%").join(", ")}) — these are KOS's blue ocean moat.`;
}

/** 2. Funding vs Dimensions Bubble */
export function fundingBubbleInsight(comps: Competitor[]) {
  const bubbles = fundingBubbleData(comps);
  const highOverlap = bubbles.filter(b => b.x >= 8 && b.y >= 100);
  const topFunded = top(bubbles.map(b => ({ name: b.name, val: b.y })), 3);
  const maxDims = Math.max(...bubbles.map(b => b.x));
  return `${highOverlap.length} competitors have 8+ dimensions AND $100M+ funding (biggest threats: ${fmt(top(highOverlap.map(b => ({ name: b.name, val: b.y })), 3))}). Highest funded: ${fmt(topFunded)}. Max dimension overlap: ${maxDims}/13. KOS's 13-dim position is unoccupied.`;
}

/** 3. Capital by Category */
export function capitalInsight(comps: Competitor[]) {
  const cap = capitalByCategoryData(comps);
  const topCats = cap.slice(0, 3);
  const botCats = cap.slice(-3).reverse();
  const fmtVal = (v: number) => v >= 1000 ? `$${(v / 1000).toFixed(1)}B` : `$${Math.round(v)}M`;
  return `Most capital-dense: ${topCats.map(c => `${c.category} (${fmtVal(c.total)})`).join(", ")}. Least funded: ${botCats.map(c => `${c.category} (${fmtVal(c.total)})`).join(", ")}. Capital concentration signals red ocean intensity.`;
}

/** 4. Dimension Adoption Bar */
export function adoptionInsight(comps: Competitor[]) {
  const ad = dimAdoptionData(comps);
  const mostAdopted = ad.slice(0, 3);
  const leastAdopted = ad.slice(-3).reverse();
  return `${mostAdopted.map(d => `${d.dim} (${d.count})`).join(", ")} are near-universal. ${leastAdopted.map(d => `${d.dim} (${d.count})`).join(", ")} are the rarest — together they form KOS's defensible moat since no single competitor covers all three.`;
}

/** 5. Dimension Co-occurrence */
export function cooccurrenceInsight(comps: Competitor[]) {
  const { data } = dimCooccurrenceData(comps);
  const sorted = [...data].sort((a, b) => b[2] - a[2]);
  const topPairs = sorted.slice(0, 3).map(d => `${KOS_DIMS[d[0]]}+${KOS_DIMS[d[1]]} (${d[2]})`);
  const zeroPairs = sorted.filter(d => d[2] === 0);
  const rarePairs = sorted.filter(d => d[2] <= 2 && d[2] > 0).slice(-3).map(d => `${KOS_DIMS[d[0]]}+${KOS_DIMS[d[1]]} (${d[2]})`);
  return `Most bundled: ${topPairs.join(", ")}. ${zeroPairs.length > 0 ? `${zeroPairs.length} pair(s) have zero co-occurrence.` : ""} Rarest bundles: ${rarePairs.join(", ")} — KOS uniquely combines all 13 dimensions, a combination no competitor offers.`;
}

/** 6. Active by Category */
export function statusInsight(comps: Competitor[]) {
  const sd = statusByCategoryData(comps);
  const pairs = sd.categories.map((c, i) => ({ name: c, val: sd.active[i] }));
  const most = top(pairs, 2);
  const least = bot(pairs, 2);
  const totalActive = sd.active.reduce((a, b) => a + b, 0);
  return `${totalActive} active competitors across ${sd.categories.length} categories. Most crowded: ${most.map(m => `${m.name} (${m.val})`).join(", ")}. Least crowded: ${least.map(m => `${m.name} (${m.val})`).join(", ")} — potential entry points with lower competitive density.`;
}

/** 7. GTM × Business Model */
export function gtmInsight(comps: Competitor[]) {
  const gd = gtmModelData(comps);
  const sorted = [...gd.data].sort((a, b) => b.z - a.z);
  const topCells = sorted.slice(0, 3).map(d => `${gd.gtmLabels[d.x]} × ${gd.modelLabels[d.y]} (${d.z})`);
  const emptyCells = gd.gtmLabels.length * gd.modelLabels.length - gd.data.length;
  return `Most crowded positions: ${topCells.join(", ")}. ${emptyCells} strategic cells are empty (white space). KOS as a Product-led platform with enterprise features occupies a defensible position — especially with its unique full-stack 13-dimension coverage.`;
}

/** 8. HQ Region */
export function hqInsight(comps: Competitor[]) {
  const rd = hqRegionData(comps);
  const topRegions = rd.regions.slice(0, 3).map((r, i) => `${r} (${rd.counts[i]})`);
  const botRegions = rd.regions.slice(-2).map((r, i) => `${r} (${rd.counts[rd.counts.length - 2 + i]})`);
  return `Geographic concentration: ${topRegions.join(", ")} dominate. Underrepresented: ${botRegions.join(", ")} — potential partnership or expansion territory for KOS.`;
}

/** 9. Target Market */
export function targetInsight(comps: Competitor[]) {
  const td = targetMarketData(comps);
  const topSegs = td.segments.slice(0, 2).map((s, i) => `${s} (${td.counts[i]})`);
  const botSegs = td.segments.slice(-2).map((s, i) => `${s} (${td.counts[td.counts.length - 2 + i]})`);
  return `${topSegs.join(" and ")} dominate — most competitors chase the same buyers. Underserved: ${botSegs.join(", ")}. KOS's self-serve + affordable positioning can capture the underserved gaps.`;
}

/** 10. Vertical Heatmap */
export function verticalInsight(comps: Competitor[]) {
  const vd = verticalHeatmapData(comps);
  const vertTotals = vd.verticals.map((v, vi) => ({
    name: v,
    val: vd.data.filter(d => d[0] === vi).reduce((s, d) => s + d[2], 0),
  }));
  const topVerts = top(vertTotals, 3);
  const botVerts = bot(vertTotals, 3);
  return `Most targeted verticals: ${topVerts.map(v => `${v.name} (${v.val})`).join(", ")}. Least served: ${botVerts.map(v => `${v.name} (${v.val})`).join(", ")} — KOS's affordable, self-serve model could capture these underserved verticals.`;
}

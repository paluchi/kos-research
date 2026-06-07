import type { Competitor } from "./competitors";

export const KOS_DIMS = [
  "LLM Chat", "SQL", "NoSQL", "Files/Docs", "Knowledge",
  "Dashboards", "Presentations", "API Export", "RBAC",
  "Web-based", "Easy Setup", "Affordable", "Self-serve",
];

/** Parse funding string to millions */
export function parseFundingM(funding: string): number {
  if (/public|part of|n\/a|bootstrapped|self-funded|no known|not disclosed|won paddle/i.test(funding)) return 0;
  const matches = funding.match(/\$?([\d,.]+)\s*(B|M|K)/gi);
  if (!matches) return 0;
  let max = 0;
  for (const m of matches) {
    const numMatch = m.match(/([\d,.]+)\s*(B|M|K)/i);
    if (!numMatch) continue;
    const num = parseFloat(numMatch[1].replace(/,/g, ""));
    const unit = numMatch[2].toUpperCase();
    const val = unit === "B" ? num * 1000 : unit === "K" ? num / 1000 : num;
    if (val > max) max = val;
  }
  return max;
}

/** Parse team size string to a number */
export function parseTeamSize(team: string): number {
  const m = team.match(/([\d,]+)/);
  return m ? parseInt(m[1].replace(/,/g, ""), 10) : 0;
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
      y: parseFundingM(c.funding),
      z: Math.max(parseTeamSize(c.team), 5),
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
      .reduce((s, c) => s + parseFundingM(c.funding), 0);
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
  const cats = [...new Set(comps.map(c => c.category))];
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

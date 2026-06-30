import type { Competitor } from "./competitors";

/** Count how many competitors have a given dimension */
function dimCount(competitors: Competitor[], dim: string): number {
  return competitors.filter((c) => c.dimensions.includes(dim)).length;
}

/** Most common dimension across all competitors */
function topDimension(competitors: Competitor[]): string {
  const counts: Record<string, number> = {};
  for (const c of competitors) {
    for (const d of c.dimensions) {
      counts[d] = (counts[d] || 0) + 1;
    }
  }
  let top = "";
  let max = 0;
  for (const [dim, count] of Object.entries(counts)) {
    if (count > max) { max = count; top = dim; }
  }
  return top;
}

/** Dimension KOS has that fewest competitors match */
function rarestKosDimension(competitors: Competitor[]): { dim: string; count: number } {
  const kosDims = ["LLM Chat", "SQL", "NoSQL", "Files/Docs", "Knowledge", "Dashboards", "Presentations", "API Export", "RBAC", "Web-based", "Easy Setup", "Affordable", "Self-serve"];
  let rarest = { dim: "", count: Infinity };
  for (const dim of kosDims) {
    const count = dimCount(competitors, dim);
    if (count < rarest.count && count >= 0) {
      rarest = { dim, count };
    }
  }
  return rarest;
}

function formatFundingTotal(totalM: number): string {
  if (totalM >= 1000) return `$${(totalM / 1000).toFixed(1).replace(/\.0$/, "")}B+`;
  return `$${Math.round(totalM)}M+`;
}

export function computeStats(competitors: Competitor[]) {
  const active = competitors.filter((c) => c.status === "active");
  const dead = competitors.filter((c) => c.status !== "active");
  const t2 = competitors.filter((c) => c.threat <= 2);
  const t3 = competitors.filter((c) => c.threat === 3);

  // Combined funding (active, non-public only)
  const totalFundingM = active.reduce((sum, c) => sum + (c.funding.totalRaisedM ?? 0), 0);

  // Count unique categories
  const catSet = new Set(competitors.map((c) => c.category));

  // Avg dimensions per competitor (active only)
  const avgDims = active.length > 0
    ? (active.reduce((sum, c) => sum + c.dimensions.length, 0) / active.length).toFixed(1)
    : "0";

  // How many have each KOS dimension
  const withKnowledge = dimCount(active, "Knowledge");
  const withPresentations = dimCount(active, "Presentations");
  const withNoSQL = dimCount(active, "NoSQL");
  const withRBAC = dimCount(active, "RBAC");
  const withLLM = dimCount(active, "LLM Chat");

  const rarest = rarestKosDimension(active);
  const mostCommonDim = topDimension(active);

  return {
    total: competitors.length,
    activeCount: active.length,
    deadCount: dead.length,
    t2Count: t2.length,
    t3Count: t3.length,
    categories: catSet.size,
    totalFunding: formatFundingTotal(totalFundingM),
    avgDims,
    withKnowledge,
    withPresentations,
    withNoSQL,
    withRBAC,
    withLLM,
    rarestDim: rarest.dim,
    rarestDimCount: rarest.count,
    mostCommonDim,
  };
}

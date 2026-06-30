import type { Competitor } from "../../data/competitors";

export type FieldStatus = "pending" | "verified" | "flagged";

export interface FieldValidation {
  status: FieldStatus;
  correction?: string;
}

export interface CompetitorValidation {
  fields: Record<string, FieldValidation>;
  notes?: string;
}

export type ValidationStore = Record<string, CompetitorValidation>;

const STORAGE_KEY = "kos-validations";

export function loadValidations(): ValidationStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

export function saveValidations(store: ValidationStore) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function getFieldStatus(store: ValidationStore, compName: string, field: string): FieldValidation {
  return store[compName]?.fields?.[field] ?? { status: "pending" };
}

export function setFieldStatus(
  store: ValidationStore,
  compName: string,
  field: string,
  val: FieldValidation,
): ValidationStore {
  const next = { ...store };
  const existing = next[compName] ?? { fields: {} };
  next[compName] = { ...existing, fields: { ...existing.fields, [field]: val } };
  return next;
}

export function getCompNotes(store: ValidationStore, compName: string): string {
  return store[compName]?.notes ?? "";
}

export function setCompNotes(store: ValidationStore, compName: string, notes: string): ValidationStore {
  const next = { ...store };
  const existing = next[compName] ?? { fields: {} };
  next[compName] = { ...existing, notes: notes || undefined };
  return next;
}

/* ── Field extraction helpers ─────────────────── */

export interface FieldDef {
  key: string;
  label: string;
  value: string;
  group: string;
}

function fmtM(v: number): string {
  return v >= 1000 ? `$${(v / 1000).toFixed(1).replace(/\.0$/, "")}B` : `$${Math.round(v)}M`;
}

function fmtNum(n: number): string {
  return n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`
    : n >= 1_000 ? `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`
    : String(n);
}

export function extractFields(c: Competitor): FieldDef[] {
  const fields: FieldDef[] = [];
  const add = (group: string, key: string, label: string, value: string) =>
    fields.push({ key, label, value, group });

  // Core
  add("Core", "name", "Name", c.name);
  add("Core", "category", "Category", c.category);
  add("Core", "tier", "Tier", c.tier);
  add("Core", "status", "Status", c.status);
  add("Core", "threat", "Threat", `T${c.threat}`);
  add("Core", "dimensions", "Dimensions", c.dimensions.join(", "));
  add("Core", "product", "Product", c.product);

  // Funding
  add("Funding", "funding.totalRaisedM", "Total Raised ($M)", c.funding.totalRaisedM != null ? String(c.funding.totalRaisedM) : "N/A");
  add("Funding", "funding.isPublic", "Is Public", String(c.funding.isPublic));
  if (c.funding.isBootstrapped) add("Funding", "funding.isBootstrapped", "Bootstrapped", "Yes");
  if (c.funding.parentCompany) add("Funding", "funding.parentCompany", "Parent Company", c.funding.parentCompany);
  if (c.funding.notes) add("Funding", "funding.notes", "Funding Notes", c.funding.notes);

  // Valuation
  add("Valuation", "valuation.amountM", "Valuation ($M)", c.valuation.amountM != null ? fmtM(c.valuation.amountM) : "N/A");
  add("Valuation", "valuation.type", "Valuation Type", c.valuation.type);
  if (c.valuation.notes) add("Valuation", "valuation.notes", "Valuation Notes", c.valuation.notes);

  // Revenue
  add("Revenue", "revenue.annualM", "Annual Revenue ($M)", c.revenue.annualM != null ? String(c.revenue.annualM) : "N/A");
  add("Revenue", "revenue.isEstimated", "Is Estimated", String(c.revenue.isEstimated));
  if (c.revenue.arrM != null) add("Revenue", "revenue.arrM", "ARR ($M)", String(c.revenue.arrM));
  if (c.revenue.notes) add("Revenue", "revenue.notes", "Revenue Notes", c.revenue.notes);

  // Team
  add("Team", "team.headcount", "Headcount", c.team.headcount != null ? String(c.team.headcount) : "N/A");
  add("Team", "team.isApproximate", "Is Approximate", String(c.team.isApproximate));
  if (c.team.parentHeadcount) add("Team", "team.parentHeadcount", "Parent Headcount", fmtNum(c.team.parentHeadcount));
  if (c.team.notes) add("Team", "team.notes", "Team Notes", c.team.notes);

  // LinkedIn
  add("LinkedIn", "linkedin.followers", "Followers", c.linkedin.followers != null ? fmtNum(c.linkedin.followers) : "N/A");
  add("LinkedIn", "linkedin.isParentPage", "Is Parent Page", String(c.linkedin.isParentPage));

  // Customers
  add("Customers", "customers.notable", "Notable Clients", c.customers.notable.length > 0 ? c.customers.notable.join(", ") : "None listed");
  if (c.customers.totalCount) add("Customers", "customers.totalCount", "Total Count", `${fmtNum(c.customers.totalCount)} ${c.customers.countLabel || ""}`);
  if (c.customers.notes) add("Customers", "customers.notes", "Customer Notes", c.customers.notes);

  // Pricing
  add("Pricing", "pricing.plans", "Plans",
    c.pricing.plans.length > 0
      ? c.pricing.plans.map(p => {
          if (p.pricePerUserMo) return `${p.name}: $${p.pricePerUserMo}/user/mo`;
          if (p.priceFlatMo != null) return `${p.name}: $${p.priceFlatMo}/mo`;
          return p.name;
        }).join(" | ")
      : "None"
  );
  add("Pricing", "pricing.hasFreeTier", "Free Tier", String(c.pricing.hasFreeTier));
  add("Pricing", "pricing.hasEnterpriseTier", "Enterprise Tier", String(c.pricing.hasEnterpriseTier));
  if (c.pricing.startingPricePerUserMo) add("Pricing", "pricing.startingPricePerUserMo", "Starting $/user/mo", `$${c.pricing.startingPricePerUserMo}`);
  if (c.pricing.notes) add("Pricing", "pricing.notes", "Pricing Notes", c.pricing.notes);

  // Traffic
  add("Traffic", "traffic.monthlyVisits", "Monthly Visits", c.traffic.monthlyVisits ? fmtNum(c.traffic.monthlyVisits) : "N/A");
  if (c.traffic.marketSharePct) add("Traffic", "traffic.marketSharePct", "Market Share %", `${c.traffic.marketSharePct}%`);
  if (c.traffic.growthMoM) add("Traffic", "traffic.growthMoM", "MoM Growth", `${(c.traffic.growthMoM * 100).toFixed(0)}%`);
  if (c.traffic.organicPct) add("Traffic", "traffic.organicPct", "Organic %", `${c.traffic.organicPct}%`);
  if (c.traffic.notes) add("Traffic", "traffic.notes", "Traffic Notes", c.traffic.notes);

  // Weaknesses
  add("Weaknesses", "weaknesses", "Weaknesses", c.weaknesses.join(" | "));

  // Enrichment
  if (c.founded) add("Enrichment", "founded", "Founded", String(c.founded));
  if (c.hq) add("Enrichment", "hq", "HQ", c.hq);
  if (c.businessModel) add("Enrichment", "businessModel", "Business Model", c.businessModel);
  if (c.gtm) add("Enrichment", "gtm", "GTM", c.gtm);

  // Positioning
  const p = c.positioning;
  if (p) {
    if (p.usersPerOrg) add("Positioning", "positioning.usersPerOrg", "Users per Org", p.usersPerOrg);
    if (p.targetUsers?.length) {
      p.targetUsers.forEach((u, i) => {
        add("Positioning: Target Users", `positioning.targetUsers.${i}`, u.role, `[${u.technical}] ${u.description}`);
      });
    }
    if (p.excludes?.length) add("Positioning", "positioning.excludes", "Excludes", p.excludes.join(" | "));
    if (p.redOcean?.length) {
      p.redOcean.forEach((r, i) => {
        add("Positioning: Red Ocean", `positioning.redOcean.${i}`, `Same #${i + 1}`, r);
      });
    }
    if (p.blueOceanKos?.length) {
      p.blueOceanKos.forEach((b, i) => {
        add("Positioning: KOS Advantage", `positioning.blueOceanKos.${i}`, `KOS has #${i + 1}`, b);
      });
    }
    if (p.blueOceanThem?.length) {
      p.blueOceanThem.forEach((b, i) => {
        add("Positioning: Their Advantage", `positioning.blueOceanThem.${i}`, `They have #${i + 1}`, b);
      });
    }
  }

  // User Voices
  if (c.userVoices?.length) {
    c.userVoices.forEach((v, i) => {
      add("User Voices", `userVoices.${i}`, `[${v.sentiment}] ${v.source}`, v.quote);
    });
  }

  // Deep Research
  const d = c.deep;
  if (d) {
    if (d.markets?.geos?.length) add("Deep: Markets", "deep.markets.geos", "Geos", d.markets.geos.join(", "));
    if (d.markets?.verticals?.length) add("Deep: Markets", "deep.markets.verticals", "Verticals", d.markets.verticals.join(", "));
    if (d.markets?.target) add("Deep: Markets", "deep.markets.target", "Target", d.markets.target);
    if (d.markets?.notes) add("Deep: Markets", "deep.markets.notes", "Market Notes", d.markets.notes);

    if (d.keyInvestors?.length) add("Deep: Investors", "deep.keyInvestors", "Key Investors", d.keyInvestors.join(", "));

    if (d.fundingRounds?.length) {
      d.fundingRounds.forEach((r, i) => {
        add("Deep: Funding Rounds", `deep.fundingRounds.${i}`, `${r.round} (${r.date})`, `${r.amount}${r.lead ? ` — ${r.lead}` : ""}`);
      });
    }

    if (d.clientTimeline?.length) {
      d.clientTimeline.forEach(e => {
        add("Deep: Client Timeline", `deep.clientTimeline.${e.year}`, String(e.year), e.value ?? e.milestone ?? "");
      });
    }

    if (d.clientsByVertical?.length) {
      d.clientsByVertical.forEach(cv => {
        add("Deep: Clients by Vertical", `deep.clientsByVertical.${cv.vertical}`, cv.vertical, cv.clients.join(", "));
      });
    }

    if (d.revenueTimeline?.length) {
      d.revenueTimeline.forEach(e => {
        add("Deep: Revenue Timeline", `deep.revenueTimeline.${e.year}`, String(e.year), e.value ?? e.milestone ?? "");
      });
    }

    if (d.employeeTimeline?.length) {
      d.employeeTimeline.forEach(e => {
        add("Deep: Employee Timeline", `deep.employeeTimeline.${e.year}`, String(e.year), e.value ?? e.milestone ?? "");
      });
    }

    if (d.milestones?.length) {
      d.milestones.forEach((m, i) => {
        add("Deep: Milestones", `deep.milestones.${i}`, m.date, m.event);
      });
    }
  }

  return fields;
}

/* ── Stats ─────────────────────────────────────── */

export function computeValidationStats(store: ValidationStore, competitors: Competitor[]) {
  let totalFields = 0;
  let verified = 0;
  let flagged = 0;
  const perCompetitor: { name: string; total: number; verified: number; flagged: number; pending: number }[] = [];

  for (const c of competitors) {
    const fields = extractFields(c);
    const cv = store[c.name]?.fields ?? {};
    let cv_verified = 0, cv_flagged = 0;
    for (const f of fields) {
      totalFields++;
      const s = cv[f.key]?.status ?? "pending";
      if (s === "verified") { verified++; cv_verified++; }
      if (s === "flagged") { flagged++; cv_flagged++; }
    }
    perCompetitor.push({
      name: c.name,
      total: fields.length,
      verified: cv_verified,
      flagged: cv_flagged,
      pending: fields.length - cv_verified - cv_flagged,
    });
  }

  return { totalFields, verified, flagged, pending: totalFields - verified - flagged, perCompetitor };
}

export function exportValidations(store: ValidationStore) {
  const blob = new Blob([JSON.stringify(store, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `kos-validations-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

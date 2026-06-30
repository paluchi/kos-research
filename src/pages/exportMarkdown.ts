import type { Competitor } from "../data/competitors";
import { notesKey } from "./NotesTab";

/* Convert a stored note's HTML (contentEditable innerHTML) into Markdown.
   Notes may contain <div>/<br> line breaks, formatting tags, links, and
   base64 <img> data URIs — all preserved so nothing is lost on export. */
function htmlToMarkdown(html: string): string {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, "text/html");

  const walk = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent ?? "";
    if (node.nodeType !== Node.ELEMENT_NODE) return "";
    const el = node as HTMLElement;
    const inner = Array.from(el.childNodes).map(walk).join("");
    switch (el.tagName) {
      case "BR":
        return "\n";
      case "DIV":
      case "P":
        return inner + "\n";
      case "B":
      case "STRONG":
        return inner ? `**${inner}**` : "";
      case "I":
      case "EM":
        return inner ? `*${inner}*` : "";
      case "A": {
        const href = el.getAttribute("href") ?? "";
        return href ? `[${inner || href}](${href})` : inner;
      }
      case "IMG": {
        const src = el.getAttribute("src") ?? "";
        return src ? `\n![image](${src})\n` : "";
      }
      case "LI":
        return `- ${inner}\n`;
      case "UL":
      case "OL":
        return inner;
      default:
        return inner;
    }
  };

  return walk(doc.body)
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const has = (v: unknown): v is string | number =>
  v !== undefined && v !== null && v !== "";

function competitorToMarkdown(c: Competitor): string {
  const L: string[] = [];
  L.push(`## ${c.name}`);

  const meta = [
    `**Category:** ${c.category}`,
    `**Tier:** ${c.tier}`,
    `**Status:** ${c.status}`,
    `**Threat:** T${c.threat}`,
    has(c.founded) ? `**Founded:** ${c.founded}` : "",
    has(c.hq) ? `**HQ:** ${c.hq}` : "",
    has(c.businessModel) ? `**Model:** ${c.businessModel}` : "",
    has(c.gtm) ? `**GTM:** ${c.gtm}` : "",
  ].filter(Boolean);
  L.push(meta.join("  \n"));
  if (c.url) L.push(`**Website:** ${c.url}`);

  if (c.dimensions?.length) L.push(`**KOS dimensions:** ${c.dimensions.join(", ")}`);

  // Financials
  const fin: string[] = [];
  const f = c.funding;
  if (f) {
    const parts = [
      f.isPublic ? "Public" : null,
      f.isBootstrapped ? "Bootstrapped" : null,
      f.totalRaisedM != null ? `$${f.totalRaisedM}M raised` : null,
      f.parentCompany ? `Parent: ${f.parentCompany}` : null,
      f.notes || null,
    ].filter(Boolean);
    if (parts.length) fin.push(`- **Funding:** ${parts.join(" — ")}`);
  }
  if (c.valuation && (c.valuation.amountM != null || c.valuation.notes))
    fin.push(
      `- **Valuation:** ${c.valuation.amountM != null ? `$${c.valuation.amountM}M` : "—"} (${c.valuation.type})${c.valuation.notes ? ` — ${c.valuation.notes}` : ""}`,
    );
  if (c.revenue && (c.revenue.annualM != null || c.revenue.arrM != null || c.revenue.notes))
    fin.push(
      `- **Revenue:** ${c.revenue.annualM != null ? `$${c.revenue.annualM}M annual` : c.revenue.arrM != null ? `$${c.revenue.arrM}M ARR` : "—"}${c.revenue.isEstimated ? " (est.)" : ""}${c.revenue.notes ? ` — ${c.revenue.notes}` : ""}`,
    );
  if (c.team && (c.team.headcount != null || c.team.notes))
    fin.push(
      `- **Team:** ${c.team.headcount != null ? `${c.team.headcount}${c.team.isApproximate ? "~" : ""}` : "—"}${c.team.notes ? ` — ${c.team.notes}` : ""}`,
    );
  if (c.linkedin && c.linkedin.followers != null)
    fin.push(`- **LinkedIn:** ${c.linkedin.followers.toLocaleString()} followers${c.linkedin.isParentPage ? " (parent page)" : ""}`);
  if (c.traffic && c.traffic.monthlyVisits != null)
    fin.push(`- **Traffic:** ${c.traffic.monthlyVisits.toLocaleString()} monthly visits${c.traffic.source ? ` (${c.traffic.source})` : ""}`);
  if (fin.length) {
    L.push(`### Financials & metrics`);
    L.push(fin.join("\n"));
  }

  if (c.customers && (c.customers.notable?.length || c.customers.notes)) {
    L.push(`### Customers`);
    if (c.customers.notable?.length) L.push(c.customers.notable.join(", "));
    if (c.customers.countLabel) L.push(`_${c.customers.countLabel}_`);
    if (c.customers.notes) L.push(c.customers.notes);
  }

  if (c.product) {
    L.push(`### Product`);
    L.push(c.product);
  }

  if (c.pricing) {
    const p = c.pricing;
    const planLines = (p.plans ?? []).map((pl) => {
      const price =
        pl.pricePerUserMo != null
          ? `$${pl.pricePerUserMo}/user/mo`
          : pl.priceFlatMo != null
            ? `$${pl.priceFlatMo}/mo`
            : "—";
      return `- **${pl.name}:** ${price}${pl.notes ? ` — ${pl.notes}` : ""}`;
    });
    if (planLines.length || p.notes) {
      L.push(`### Pricing`);
      if (planLines.length) L.push(planLines.join("\n"));
      const flags = [
        p.hasFreeTier ? "free tier" : "",
        p.hasEnterpriseTier ? "enterprise tier" : "",
      ].filter(Boolean);
      if (flags.length) L.push(`_(${flags.join(", ")})_`);
      if (p.notes) L.push(p.notes);
    }
  }

  if (c.weaknesses?.length) {
    L.push(`### Weaknesses`);
    L.push(c.weaknesses.map((w) => `- ${w}`).join("\n"));
  }

  // Positioning
  const pos = c.positioning;
  if (pos) {
    const pl: string[] = [];
    if (pos.usersPerOrg) pl.push(`- **Users per org:** ${pos.usersPerOrg}`);
    if (pos.targetUsers?.length)
      pl.push(
        `- **Target users:**\n${pos.targetUsers.map((t) => `  - ${t.role}${t.technical ? ` (${t.technical})` : ""}: ${t.description}`).join("\n")}`,
      );
    if (pos.kosAdvantages?.length)
      pl.push(`- **KOS advantages:**\n${pos.kosAdvantages.map((a) => `  - ${a}`).join("\n")}`);
    if (pos.theirAdvantages?.length)
      pl.push(`- **Their advantages:**\n${pos.theirAdvantages.map((a) => `  - ${a}`).join("\n")}`);
    if (pos.blueOceanKos?.length)
      pl.push(`- **Blue ocean (KOS):**\n${pos.blueOceanKos.map((a) => `  - ${a}`).join("\n")}`);
    if (pl.length) {
      L.push(`### Positioning`);
      L.push(pl.join("\n"));
    }
  }

  if (c.userVoices?.length) {
    L.push(`### User voices`);
    L.push(
      c.userVoices
        .map(
          (v) =>
            `- _[${v.source}, ${v.sentiment}]_ "${v.quote}"${v.context ? ` — ${v.context}` : ""}${v.date ? ` (${v.date})` : ""}`,
        )
        .join("\n"),
    );
  }

  // Deep research
  const d = c.deep;
  if (d) {
    const dl: string[] = [];
    if (d.fundingRounds?.length)
      dl.push(
        `- **Funding rounds:**\n${d.fundingRounds.map((r) => `  - ${r.date} — ${r.round} — ${r.amount}${r.lead ? ` (lead: ${r.lead})` : ""}${r.valuation ? ` @ ${r.valuation}` : ""}`).join("\n")}`,
      );
    if (d.milestones?.length)
      dl.push(`- **Milestones:**\n${d.milestones.map((m) => `  - ${m.date} — ${m.event}`).join("\n")}`);
    if (d.markets?.target) dl.push(`- **Target market:** ${d.markets.target}`);
    if (d.markets?.geos?.length) dl.push(`- **Geos:** ${d.markets.geos.join(", ")}`);
    if (d.markets?.verticals?.length) dl.push(`- **Verticals:** ${d.markets.verticals.join(", ")}`);
    if (dl.length) {
      L.push(`### Deep research`);
      L.push(dl.join("\n"));
    }
  }

  if (c.sources?.length) {
    L.push(`### Sources`);
    L.push(c.sources.map((s) => `- [${s.label}](${s.url})`).join("\n"));
  }

  // Per-competitor notes from localStorage
  const noteHtml = localStorage.getItem(notesKey(c.name)) ?? "";
  const noteMd = htmlToMarkdown(noteHtml);
  if (noteMd) {
    L.push(`### Notes`);
    L.push(noteMd);
  }

  return L.join("\n\n");
}

export function buildCompetitorsMarkdown(
  competitors: Competitor[],
  categories: string[],
): string {
  const out: string[] = [];
  out.push(`# KOS Competitive Analysis`);
  out.push(
    `_Exported ${new Date().toISOString().slice(0, 10)} — ${competitors.length} competitors across ${categories.length} categories._`,
  );

  // Group by category in the declared order, then any leftovers.
  const ordered = [...categories, ...new Set(competitors.map((c) => c.category))].filter(
    (cat, i, arr) => arr.indexOf(cat) === i,
  );

  for (const cat of ordered) {
    const inCat = competitors.filter((c) => c.category === cat);
    if (!inCat.length) continue;
    out.push(`---`);
    out.push(`# ${cat} (${inCat.length})`);
    for (const c of inCat) out.push(competitorToMarkdown(c));
  }

  // Global strategy notes
  const strategy = htmlToMarkdown(localStorage.getItem("kos-strategy-notes") ?? "");
  if (strategy) {
    out.push(`---`);
    out.push(`# Strategy notes`);
    out.push(strategy);
  }

  return out.join("\n\n") + "\n";
}

export function downloadCompetitorsMarkdown(
  competitors: Competitor[],
  categories: string[],
): void {
  const md = buildCompetitorsMarkdown(competitors, categories);
  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `kos-competitive-analysis-${new Date().toISOString().slice(0, 10)}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

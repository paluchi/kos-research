/* Standalone generator: builds a self-contained, competitor-centric HTML report
   from the structured competitor data. Deliberately emits NO KOS-framed fields
   (dimensions, threat tiers, positioning/advantages, private notes) and scrubs
   any residual "KOS" mention before writing. Run: npx tsx gen-external-html.ts */
import { writeFileSync } from "node:fs";
import { competitors, categories } from "./src/data/competitors";
import { companyMoats } from "./src/data/competitor_moats";
import type { Competitor } from "./src/data/competitors";

const KOS_RE = /\bkos\b/i;
const hasKos = (s: unknown) => typeof s === "string" && KOS_RE.test(s);

const esc = (s: unknown): string =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const money = (m: number | null | undefined): string => {
  if (m == null) return "";
  if (Math.abs(m) >= 1000) return `$${(m / 1000).toFixed(m % 1000 === 0 ? 0 : 1)}B`;
  return `$${m}M`;
};

const statusColor: Record<string, string> = {
  active: "#16a34a",
  dead: "#dc2626",
  acquired: "#d97706",
  maintenance: "#6b7280",
};

/* Per-category context: what the segment is + how cohesive its members are,
   and where (if anywhere) the players build a defensible moat. */
const categoryMeta: Record<string, { blurb: string; moat: string }> = {
  "Traditional BI": {
    blurb:
      "The incumbent, on-prem-rooted enterprise BI suites that defined the category — governed dashboards and pixel-perfect reporting, now retrofitted with generative and agentic AI. Tightly bound: all sell IT-administered analytics to large enterprises off decades-old engines.",
    moat: "Deep but defensive — bundling and distribution (Power BI inside Microsoft 365, Tableau via Salesforce), multi-year contracts, certified-admin ecosystems, and switching costs measured in years of rebuilt reports. The lock-in is real even as product velocity slows.",
  },
  "Enterprise Data Platform": {
    blurb:
      "BI delivered as a feature of a larger warehouse or data platform rather than a standalone tool. The cohesion is gravitational: analytics exists here to keep data and compute spend inside the parent platform.",
    moat: "The strongest structural moat in the landscape — the data already lives in their warehouse, so the analytics layer inherits frictionless access and consumption-based billing. Pure platform lock-in; the catch is it only works if you are already on that cloud.",
  },
  "Cloud-Native BI": {
    blurb:
      "BI built warehouse-first for the modern stack — semantic layers, spreadsheet and search interfaces, dbt-native modeling, and BI-as-code. Moderately cohesive: shared architecture, very different UX bets.",
    moat: "Mostly product, UX, and semantic-layer depth rather than distribution. Moats are narrower and contestable — Sigma's spreadsheet, ThoughtSpot's search, Omni's modeling speed — defensible only while the experience stays ahead of the incumbents.",
  },
  "Modern Analytics": {
    blurb:
      "Notebook-and-spreadsheet hybrid workspaces where analysts blend SQL, Python, and AI on one collaborative canvas. Tightly themed around the analyst-as-builder persona.",
    moat: "Workflow stickiness and collaboration network effects — once a team's work lives in the workspace, leaving is costly. The bet is owning the analyst's daily surface, which holds only as long as the UX keeps leading.",
  },
  "Embedded Analytics": {
    blurb:
      "White-label BI that software vendors embed inside their own products rather than tools end-users open directly. Highly cohesive — all sell to product and engineering teams, not analysts.",
    moat: "Among the stickiest in the landscape: once analytics ships inside a customer's product, replacing it is a re-platforming project. The moat is integration depth plus multi-year OEM contracts — a narrow market with a durable hold.",
  },
  "AI Analytics Startup": {
    blurb:
      "The new wave of conversational and agentic 'ask-your-data' startups built natively on LLMs. Loosely cohesive — they share the natural-language-to-insight premise but range from thin chat wrappers to autonomous enterprise agents.",
    moat: "The weakest and most contested tier. Most ride third-party LLMs, so natural-language querying itself is no moat — it is already a checkbox feature for every incumbent. Real defensibility, where it exists, comes from proprietary semantic context and accuracy on messy schemas, not the chat box. This is the feeder pool for the graveyard.",
  },
  "Text-to-SQL / Open Source": {
    blurb:
      "Open-source frameworks that turn natural language into SQL, usually self-hosted or embedded by developers. Cohesive around the open-source text-to-SQL primitive.",
    moat: "Community adoption and developer mindshare rather than commercial lock-in — the code is free and forkable. The edge is top-of-funnel distribution via GitHub, monetized through cloud and enterprise tiers.",
  },
  "Open-Source BI": {
    blurb:
      "Free, self-hostable BI and query tools, several backed by commercial open-core companies. Cohesive around the open-source distribution model.",
    moat: "Distribution and community — millions of installs and huge GitHub footprints (Grafana, Metabase, Superset) plus the trust of free and inspectable code. A strong adoption flywheel; the pressure is on monetization, not reach.",
  },
  "Data Governance": {
    blurb:
      "Not BI itself — the catalog, lineage, metadata, and observability layer that makes data trustworthy enough to analyze. Cohesive around governing data rather than visualizing it.",
    moat: "Sticky as the system-of-record for metadata: once an enterprise catalogs its estate here, the tool becomes connective tissue across every other tool. The moat is integration breadth and becoming the context layer for AI — strongest in regulated industries.",
  },
  "Adjacent / Workflow": {
    blurb:
      "Tools that border BI without being BI — internal-tool builders, semantic layers, federated query, and no-code query builders. The least cohesive group, united only by 'touches data, is not a dashboard.'",
    moat: "Varies widely and is not shared: Retool's internal apps become load-bearing, Cube owns semantic-layer plumbing others depend on, MindsDB bets on federated AI access. Real moats, but each is category-specific.",
  },
  "Dead / Acquired": {
    blurb:
      "The graveyard — companies that shut down or were absorbed. Cohesive only as a cautionary cohort.",
    moat: "Defined by the absence of one. The common thread: thin differentiation (yet another NL-to-SQL or SQL editor), wrong form factor (mobile-only, spreadsheet paradigm), or being valued as an acqui-hire rather than a business. Where there was no moat beyond the model or the UI, the market commoditized it.",
  },
};

function chips(c: Competitor): string {
  const items = [
    c.founded ? `Founded ${c.founded}` : "",
    c.hq ? esc(c.hq) : "",
    c.businessModel ? esc(c.businessModel) : "",
    c.gtm ? esc(c.gtm) : "",
  ].filter(Boolean);
  return items.map((t) => `<span class="chip">${t}</span>`).join("");
}

function metrics(c: Competitor): string {
  const rows: [string, string][] = [];
  const f = c.funding;
  if (f) {
    const parts = [
      f.isPublic ? "Public" : "",
      f.isBootstrapped ? "Bootstrapped" : "",
      f.totalRaisedM != null ? `${money(f.totalRaisedM)} raised` : "",
      f.parentCompany ? `Parent: ${esc(f.parentCompany)}` : "",
    ].filter(Boolean);
    if (parts.length) rows.push(["Funding", parts.join(" · ") + (f.notes && !hasKos(f.notes) ? ` — ${esc(f.notes)}` : "")]);
  }
  if (c.valuation && c.valuation.amountM != null)
    rows.push(["Valuation", `${money(c.valuation.amountM)} (${esc(c.valuation.type)})`]);
  if (c.revenue && (c.revenue.annualM != null || c.revenue.arrM != null)) {
    const v = c.revenue.annualM != null ? `${money(c.revenue.annualM)} annual` : `${money(c.revenue.arrM!)} ARR`;
    rows.push(["Revenue", `${v}${c.revenue.isEstimated ? " (est.)" : ""}`]);
  }
  if (c.team && c.team.headcount != null)
    rows.push(["Team", `${c.team.headcount}${c.team.isApproximate ? "~" : ""} employees`]);
  if (c.linkedin && c.linkedin.followers != null)
    rows.push(["LinkedIn", `${c.linkedin.followers.toLocaleString()} followers`]);
  if (c.traffic && c.traffic.monthlyVisits != null)
    rows.push(["Traffic", `${c.traffic.monthlyVisits.toLocaleString()} visits/mo`]);
  if (!rows.length) return "";
  return `<div class="metrics">${rows
    .map(([k, v]) => `<div class="metric"><span class="mk">${k}</span><span class="mv">${v}</span></div>`)
    .join("")}</div>`;
}

function pricing(c: Competitor): string {
  const p = c.pricing;
  if (!p) return "";
  const plans = (p.plans ?? [])
    .filter((pl) => !hasKos(pl.name) && !hasKos(pl.notes))
    .map((pl) => {
      const price =
        pl.pricePerUserMo != null
          ? `$${pl.pricePerUserMo}/user/mo`
          : pl.priceFlatMo != null
            ? `$${pl.priceFlatMo}/mo`
            : "—";
      return `<li><b>${esc(pl.name)}</b>: ${esc(price)}${pl.notes ? ` — ${esc(pl.notes)}` : ""}</li>`;
    });
  if (!plans.length && !p.notes) return "";
  const flags = [p.hasFreeTier ? "Free tier" : "", p.hasEnterpriseTier ? "Enterprise tier" : ""].filter(Boolean);
  return `<div class="block"><h4>Pricing</h4>${plans.length ? `<ul>${plans.join("")}</ul>` : ""}${
    flags.length ? `<p class="muted">${flags.join(" · ")}</p>` : ""
  }${p.notes && !hasKos(p.notes) ? `<p>${esc(p.notes)}</p>` : ""}</div>`;
}

function listBlock(title: string, items: string[] | undefined): string {
  if (!items?.length) return "";
  const clean = items.filter((i) => !hasKos(i));
  if (!clean.length) return "";
  return `<div class="block"><h4>${title}</h4><ul>${clean.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`;
}

function customers(c: Competitor): string {
  const cu = c.customers;
  if (!cu) return "";
  const bits: string[] = [];
  if (cu.notable?.length) bits.push(`<p>${cu.notable.map(esc).join(", ")}</p>`);
  if (cu.countLabel) bits.push(`<p class="muted">${esc(cu.countLabel)}</p>`);
  if (cu.notes && !hasKos(cu.notes)) bits.push(`<p>${esc(cu.notes)}</p>`);
  if (!bits.length) return "";
  return `<div class="block"><h4>Customers</h4>${bits.join("")}</div>`;
}

function voices(c: Competitor): string {
  const vs = (c.userVoices ?? []).filter((v) => !hasKos(v.quote) && !hasKos(v.context));
  if (!vs.length) return "";
  const items = vs
    .slice(0, 6)
    .map(
      (v) =>
        `<blockquote class="voice ${esc(v.sentiment)}"><p>“${esc(v.quote)}”</p><cite>${esc(v.source)}${
          v.context ? ` — ${esc(v.context)}` : ""
        }${v.date ? ` (${esc(v.date)})` : ""}</cite></blockquote>`,
    )
    .join("");
  return `<div class="block"><h4>What users say</h4>${items}</div>`;
}

function deep(c: Competitor): string {
  const d = c.deep;
  if (!d) return "";
  const parts: string[] = [];
  if (d.markets?.target && !hasKos(d.markets.target))
    parts.push(`<p><b>Target market:</b> ${esc(d.markets.target)}</p>`);
  if (d.markets?.verticals?.length)
    parts.push(`<p><b>Verticals:</b> ${d.markets.verticals.map(esc).join(", ")}</p>`);
  if (d.markets?.geos?.length) parts.push(`<p><b>Geos:</b> ${d.markets.geos.map(esc).join(", ")}</p>`);
  if (d.milestones?.length) {
    const ms = d.milestones
      .filter((m) => !hasKos(m.event))
      .map((m) => `<li><span class="muted">${esc(m.date)}</span> — ${esc(m.event)}</li>`)
      .join("");
    if (ms) parts.push(`<div class="sub"><b>Milestones</b><ul>${ms}</ul></div>`);
  }
  if (d.fundingRounds?.length) {
    const fr = d.fundingRounds
      .map(
        (r) =>
          `<li><span class="muted">${esc(r.date)}</span> — ${esc(r.round)} · ${esc(r.amount)}${
            r.lead ? ` (lead: ${esc(r.lead)})` : ""
          }${r.valuation ? ` @ ${esc(r.valuation)}` : ""}</li>`,
      )
      .join("");
    parts.push(`<div class="sub"><b>Funding rounds</b><ul>${fr}</ul></div>`);
  }
  if (!parts.length) return "";
  return `<div class="block"><h4>Deep research</h4>${parts.join("")}</div>`;
}

function sources(c: Competitor): string {
  const all = [...(c.sources ?? []), ...((c.deep?.deepSources as { label: string; url: string }[]) ?? [])];
  if (!all.length) return "";
  const items = all
    .filter((s) => !hasKos(s.label))
    .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`)
    .join("");
  if (!items) return "";
  return `<div class="block sources"><h4>Sources</h4><div class="srclist">${items}</div></div>`;
}

function quickStat(c: Competitor): string {
  if (c.funding?.isPublic) return "Public";
  if (c.funding?.totalRaisedM != null) return `${money(c.funding.totalRaisedM)} raised`;
  if (c.funding?.isBootstrapped) return "Bootstrapped";
  if (c.revenue?.annualM != null) return `${money(c.revenue.annualM)} rev`;
  if (c.team?.headcount != null) return `${c.team.headcount}${c.team.isApproximate ? "~" : ""} staff`;
  return "";
}

function moat(c: Competitor): string {
  const m = companyMoats[c.name];
  if (!m || hasKos(m)) return "";
  return `<div class="block moat-block"><h4>Moat &amp; defensibility</h4><p>${esc(m)}</p></div>`;
}

function detailBody(c: Competitor): string {
  const product = c.product && !hasKos(c.product) ? `<div class="block"><h4>Product</h4><p>${esc(c.product)}</p></div>` : "";
  return `
    <div class="card-head">
      <div>
        <h3>${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.name)}</a>` : esc(c.name)}</h3>
        <div class="tier">${esc(c.tier)}</div>
      </div>
      <span class="status" style="background:${statusColor[c.status] ?? "#6b7280"}">${esc(c.status)}</span>
    </div>
    <div class="chips">${chips(c)}</div>
    ${metrics(c)}
    ${moat(c)}
    ${product}
    ${customers(c)}
    ${pricing(c)}
    ${listBlock("Weaknesses", c.weaknesses)}
    ${voices(c)}
    ${deep(c)}
    ${sources(c)}`;
}

function row(c: Competitor, idx: number): string {
  const id = `c${idx}`;
  const searchBlob = esc(`${c.name} ${c.tier} ${c.category} ${c.status}`.toLowerCase());
  const q = quickStat(c);
  const m = companyMoats[c.name];
  const moatLine =
    m && !hasKos(m)
      ? `<p class="row-moat"><span class="row-moat-tag">Moat</span>${esc(m)}</p>`
      : "";
  return `
  <li class="row" data-cat="${esc(c.category)}" data-status="${esc(c.status)}" data-search="${searchBlob}" data-id="${id}" tabindex="0" role="button" aria-label="Open ${esc(c.name)} details">
    <div class="row-top">
      <div class="row-main">
        <span class="row-name">${esc(c.name)}</span>
        <span class="row-tier">${esc(c.tier)}</span>
      </div>
      <div class="row-meta">
        <span class="row-cat">${esc(c.category)}</span>
        ${q ? `<span class="row-stat">${esc(q)}</span>` : ""}
        <span class="status sm" style="background:${statusColor[c.status] ?? "#6b7280"}">${esc(c.status)}</span>
        <span class="row-chevron">›</span>
      </div>
    </div>
    ${moatLine}
  </li>
  <template id="t-${id}">${detailBody(c)}</template>`;
}

function build(): string {
  const ordered = [...new Set([...categories, ...competitors.map((c) => c.category)])];
  const indexOf = new Map(competitors.map((c, i) => [c, i]));
  const sections = ordered
    .map((cat) => {
      const inCat = competitors.filter((c) => c.category === cat);
      if (!inCat.length) return "";
      const meta = categoryMeta[cat];
      const desc = meta ? `<div class="cat-desc"><p>${meta.blurb}</p></div>` : "";
      return `<section class="cat-section" data-cat="${esc(cat)}">
        <button class="cat-head" type="button" aria-expanded="true">
          <span class="chevron-toggle" aria-hidden="true">&#9662;</span>
          <h2>${esc(cat)} <span class="count">${inCat.length}</span></h2>
        </button>
        ${desc}
        <div class="cat-list-wrap">
          <ul class="list">${inCat.map((c) => row(c, indexOf.get(c)!)).join("")}</ul>
        </div>
      </section>`;
    })
    .join("\n");

  const catButtons = ["All", ...ordered.filter((cat) => competitors.some((c) => c.category === cat))]
    .map((cat) => `<button class="filter" data-filter="${esc(cat)}">${esc(cat)}</button>`)
    .join("");

  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Analytics &amp; BI — Competitive Landscape</title>
<style>
:root{--bg:#0b0e14;--panel:#141923;--panel2:#1b2230;--line:#27303f;--text:#e6e9ef;--muted:#8a93a6;--accent:#5b9dff;}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);font:15px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}
header.top{padding:32px 24px 16px;max-width:1280px;margin:0 auto}
header.top h1{margin:0 0 6px;font-size:26px;font-weight:700}
header.top p{margin:0;color:var(--muted)}
.toolbar{position:sticky;top:0;z-index:10;background:rgba(11,14,20,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line);padding:12px 24px}
.toolbar .inner{max-width:1280px;margin:0 auto;display:flex;gap:10px;flex-wrap:wrap;align-items:center}
#q{flex:1;min-width:220px;padding:8px 12px;border-radius:8px;border:1px solid var(--line);background:var(--panel);color:var(--text);font-size:14px}
.filters{display:flex;gap:6px;flex-wrap:wrap}
.filter{font-size:12px;padding:5px 10px;border-radius:999px;border:1px solid var(--line);background:transparent;color:var(--muted);cursor:pointer}
.filter:hover{color:var(--text);border-color:var(--accent)}
.filter.active{background:var(--accent);color:#06101f;border-color:var(--accent);font-weight:600}
.filter.alt{margin-left:auto;color:var(--text)}
main{max-width:1280px;margin:0 auto;padding:8px 24px 64px}
.cat-section{margin-top:28px}
.cat-head{display:flex;align-items:center;gap:10px;width:100%;background:none;border:none;border-bottom:1px solid var(--line);padding:0 0 8px;margin:0;cursor:pointer;color:var(--text);text-align:left;font:inherit}
.cat-head:hover h2{color:var(--accent)}
.cat-head h2{margin:0;font-size:18px;font-weight:700;display:flex;align-items:center;gap:8px}
.chevron-toggle{color:var(--muted);font-size:13px;line-height:1;transition:transform .15s;flex-shrink:0}
.cat-section.collapsed .chevron-toggle{transform:rotate(-90deg)}
.cat-section.collapsed .cat-list-wrap{display:none}
.cat-desc{margin:12px 0 0;padding:12px 14px;background:var(--panel);border:1px solid var(--line);border-left:3px solid var(--accent);border-radius:8px}
.cat-desc p{margin:0;color:var(--muted);font-size:13px;line-height:1.55}
.count{font-size:12px;color:var(--muted);background:var(--panel2);border-radius:999px;padding:2px 8px}
.list{list-style:none;margin:12px 0 0;padding:0;border:1px solid var(--line);border-radius:10px;overflow:hidden}
.row{display:flex;flex-direction:column;gap:8px;padding:12px 14px;cursor:pointer;border-top:1px solid var(--line);transition:background .12s}
.row:first-child{border-top:none}
.row:hover,.row:focus{background:var(--panel2);outline:none}
.row-top{display:flex;align-items:center;justify-content:space-between;gap:14px}
.row-moat{margin:0;color:var(--muted);font-size:12.5px;line-height:1.5}
.row-moat-tag{display:inline-block;font-size:9.5px;text-transform:uppercase;letter-spacing:.05em;font-weight:700;color:var(--accent);border:1px solid var(--accent);border-radius:5px;padding:1px 6px;margin-right:7px;vertical-align:1px}
.row-main{display:flex;flex-direction:column;min-width:0;flex:1}
.row-name{font-size:15px;font-weight:600}
.row-tier{color:var(--muted);font-size:12.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.row-meta{display:flex;align-items:center;gap:10px;flex-shrink:0}
.row-cat{font-size:11.5px;color:var(--muted);background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:2px 8px;white-space:nowrap}
.row-stat{font-size:12.5px;color:var(--text);white-space:nowrap;min-width:72px;text-align:right}
.row-chevron{color:var(--muted);font-size:20px;line-height:1}
@media(max-width:640px){.row-cat,.row-stat{display:none}}
.card{display:flex;flex-direction:column}
.card-head{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}
.card-head h3{margin:0;font-size:20px}
.tier{color:var(--muted);font-size:13px;margin-top:2px}
.status{font-size:10.5px;text-transform:uppercase;letter-spacing:.04em;color:#06101f;font-weight:700;padding:3px 8px;border-radius:999px;white-space:nowrap}
.status.sm{font-size:9.5px;padding:2px 7px}
.modal[hidden]{display:none}
.modal{position:fixed;inset:0;z-index:50;display:flex;align-items:flex-start;justify-content:center;padding:40px 16px;overflow-y:auto}
.modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(3px)}
.modal-box{position:relative;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:22px;max-width:760px;width:100%;box-shadow:0 24px 70px rgba(0,0,0,.5)}
.modal-close{position:absolute;top:12px;right:14px;background:var(--panel2);border:1px solid var(--line);color:var(--text);width:30px;height:30px;border-radius:8px;font-size:18px;line-height:1;cursor:pointer}
.modal-close:hover{border-color:var(--accent)}
.chips{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 4px}
.chip{font-size:11.5px;color:var(--muted);background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:2px 7px}
.metrics{display:grid;grid-template-columns:1fr;gap:4px;margin:10px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:10px 0}
.metric{display:flex;gap:8px;font-size:13px}
.mk{color:var(--muted);min-width:78px}
.mv{flex:1}
.block{margin-top:12px}
.block h4{margin:0 0 6px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:var(--accent)}
.block p{margin:4px 0}
.block ul{margin:4px 0;padding-left:18px}
.block li{margin:3px 0;font-size:13.5px}
.muted{color:var(--muted);font-size:12.5px}
.moat-block{margin-top:12px;padding:11px 13px;background:var(--panel2);border:1px solid var(--line);border-left:3px solid var(--accent);border-radius:8px}
.moat-block h4{margin-top:0}
.moat-block p{margin:0;font-size:13.5px;line-height:1.55}
.voice{margin:8px 0;padding:8px 12px;border-left:3px solid var(--line);background:var(--panel2);border-radius:0 8px 8px 0}
.voice p{margin:0 0 4px;font-size:13.5px;font-style:italic}
.voice cite{color:var(--muted);font-size:12px;font-style:normal}
.voice.positive{border-left-color:#16a34a}.voice.negative{border-left-color:#dc2626}.voice.mixed{border-left-color:#d97706}
.sub{margin-top:8px}.sub b{font-size:12.5px}
.sources .srclist{display:flex;flex-wrap:wrap;gap:6px}
.sources a{font-size:12px;background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:3px 8px}
.empty{color:var(--muted);text-align:center;padding:48px}
footer{max-width:1280px;margin:0 auto;padding:24px;color:var(--muted);font-size:12px;border-top:1px solid var(--line)}
</style></head>
<body>
<header class="top">
  <h1>Analytics &amp; BI — Competitive Landscape</h1>
  <p>Profiles of ${competitors.length} companies across ${ordered.filter((cat) => competitors.some((c) => c.category === cat)).length} categories — funding, revenue, product, pricing, customers, weaknesses, and user sentiment.</p>
</header>
<div class="toolbar"><div class="inner">
  <input id="q" type="search" placeholder="Search by name, category, or descriptor…">
  <div class="filters">${catButtons}</div>
  <button id="toggleAll" class="filter alt" type="button">Collapse all</button>
</div></div>
<main id="main">
${sections}
<div class="empty" id="empty" style="display:none">No companies match your search.</div>
</main>
<footer>Exported ${new Date().toISOString().slice(0, 10)}. Compiled from public sources; figures are best-effort estimates where noted.</footer>
<div class="modal" id="modal" hidden>
  <div class="modal-backdrop" data-close></div>
  <div class="modal-box card" role="dialog" aria-modal="true">
    <button class="modal-close" data-close aria-label="Close">×</button>
    <div class="modal-body" id="modalBody"></div>
  </div>
</div>
<script>
(function(){
  var q=document.getElementById('q'),filters=[].slice.call(document.querySelectorAll('.filter'));
  var rows=[].slice.call(document.querySelectorAll('.row')),sections=[].slice.call(document.querySelectorAll('.cat-section'));
  var active='All';
  filters[0]&&filters[0].classList.add('active');
  function apply(){
    var term=(q.value||'').trim().toLowerCase();
    rows.forEach(function(c){
      var okCat=active==='All'||c.getAttribute('data-cat')===active;
      var okTerm=!term||c.getAttribute('data-search').indexOf(term)>-1;
      c.style.display=okCat&&okTerm?'':'none';
    });
    var anyVisible=false;
    sections.forEach(function(s){
      var vis=[].slice.call(s.querySelectorAll('.row')).some(function(c){return c.style.display!=='none';});
      s.style.display=vis?'':'none';if(vis)anyVisible=true;
      if(vis&&term){s.classList.remove('collapsed');var hh=s.querySelector('.cat-head');if(hh)hh.setAttribute('aria-expanded','true');}
    });
    document.getElementById('empty').style.display=anyVisible?'none':'';
  }
  q.addEventListener('input',apply);
  filters.forEach(function(b){if(b.id==='toggleAll')return;b.addEventListener('click',function(){active=b.getAttribute('data-filter');filters.forEach(function(x){if(x.id!=='toggleAll')x.classList.remove('active')});b.classList.add('active');apply();});});

  var heads=[].slice.call(document.querySelectorAll('.cat-head'));
  heads.forEach(function(h){h.addEventListener('click',function(){
    var s=h.parentNode;var col=s.classList.toggle('collapsed');
    h.setAttribute('aria-expanded',col?'false':'true');
  });});
  var toggleAll=document.getElementById('toggleAll');
  toggleAll&&toggleAll.addEventListener('click',function(){
    var open=sections.filter(function(s){return s.style.display!=='none';});
    var anyOpen=open.some(function(s){return !s.classList.contains('collapsed');});
    open.forEach(function(s){
      s.classList.toggle('collapsed',anyOpen);
      var hh=s.querySelector('.cat-head');if(hh)hh.setAttribute('aria-expanded',anyOpen?'false':'true');
    });
    toggleAll.textContent=anyOpen?'Expand all':'Collapse all';
  });

  var modal=document.getElementById('modal'),body=document.getElementById('modalBody');
  function open(id){var t=document.getElementById('t-'+id);if(!t)return;body.innerHTML=t.innerHTML;modal.hidden=false;document.body.style.overflow='hidden';}
  function close(){modal.hidden=true;body.innerHTML='';document.body.style.overflow='';}
  rows.forEach(function(r){
    r.addEventListener('click',function(){open(r.getAttribute('data-id'));});
    r.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(r.getAttribute('data-id'));}});
  });
  modal.addEventListener('click',function(e){if(e.target.hasAttribute('data-close'))close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!modal.hidden)close();});
})();
</script>
</body></html>`;
}

const html = build();
const leaks = (html.match(/\bkos\b/gi) || []).length;
if (leaks > 0) {
  console.error(`WARNING: ${leaks} residual "KOS" mention(s) in output — aborting write.`);
  process.exit(1);
}
const out = "/Users/cl/Desktop/competitive-landscape.html";
writeFileSync(out, html);
console.log(`Wrote ${out} (${competitors.length} competitors, ${(html.length / 1024).toFixed(0)} KB, 0 KOS leaks)`);

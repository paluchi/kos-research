import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import MoreModule from "highcharts/highcharts-more.js";
import { competitors } from "../../data/competitors";
import {
  fundingBubbleData,
  capitalByCategoryData,
  radarData,
  statusByCategoryData,
  gtmModelData,
} from "../../data/insightData";
import { ChartSection } from "./ChartSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initMore = (MoreModule as any).default || MoreModule;
if (typeof initMore === "function") initMore(Highcharts);

/* ── 2. Funding vs Dimensions Bubble ─────────────── */

export function FundingBubble() {
  const raw = fundingBubbleData(competitors);
  const catColors: Record<string, string> = {
    "Traditional BI": "#ef4444",
    "Enterprise Data Platform": "#f97316",
    "Cloud-Native BI": "#6366f1",
    "Modern Analytics": "#8b5cf6",
    "Embedded Analytics": "#14b8a6",
    "AI Analytics Startup": "#22c55e",
    "Text-to-SQL / Open Source": "#06b6d4",
    "Open-Source BI": "#3b82f6",
    "Data Governance": "#f59e0b",
    "Adjacent / Workflow": "#ec4899",
  };
  const grouped = Object.entries(
    raw.reduce((acc, d) => {
      (acc[d.category] ??= []).push(d);
      return acc;
    }, {} as Record<string, typeof raw>)
  );

  const options: Highcharts.Options = {
    chart: { type: "bubble", height: 480, zooming: { type: "xy" } },
    title: { text: undefined },
    xAxis: { title: { text: "KOS Dimensions Matched" }, min: 0, max: 14, tickInterval: 1 },
    yAxis: { title: { text: "Total Funding ($M)" }, type: "logarithmic", min: 1 },
    tooltip: {
      useHTML: true,
      pointFormat: "<b>{point.name}</b><br/>Dims: {point.x} | Funding: ${point.y}M | Team: {point.z}",
    },
    plotOptions: { bubble: { minSize: 8, maxSize: 45, opacity: 0.7 } },
    series: grouped.map(([cat, points]) => ({
      type: "bubble" as const,
      name: cat,
      color: catColors[cat] || "#94a3b8",
      data: points.map(p => ({ x: p.x, y: p.y, z: p.z, name: p.name })),
    })),
    credits: { enabled: false },
  };

  return (
    <ChartSection
      title="2. Funding vs KOS Overlap — Where's the Money?"
      measures="Each bubble is an active competitor. X = number of KOS dimensions they match (0-13). Y = total funding raised (log scale). Bubble size = team headcount."
      howToRead="Top-right quadrant = heavily funded competitors with high KOS overlap (biggest threat). Bottom-left = underfunded with low overlap (ignore). Clusters of big bubbles = red ocean of capital."
      insight="The top-right is dominated by Traditional BI and Enterprise Platforms ($1B+ funding, 6-9 dims). AI startups cluster bottom-center (low funding, moderate dims). KOS's sweet spot: 13 dims, mid-market funding — nobody else occupies this coordinate."
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 3. Capital by Category ──────────────────────── */

export function CapitalByCategory() {
  const data = capitalByCategoryData(competitors);

  const options: Highcharts.Options = {
    chart: { type: "bar", height: 380 },
    title: { text: undefined },
    xAxis: { categories: data.map(d => d.category), labels: { style: { fontSize: "11px" } } },
    yAxis: { title: { text: "Combined Private Funding ($M)" }, type: "logarithmic", min: 1 },
    tooltip: {
      pointFormatter: function (this: Highcharts.Point): string {
        const v = this.y ?? 0;
        return v >= 1000 ? `<b>$${(v / 1000).toFixed(1)}B</b>` : `<b>$${Math.round(v)}M</b>`;
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          formatter: function (this: { y?: number | null }): string {
            const v = this.y ?? 0;
            return v >= 1000 ? `$${(v / 1000).toFixed(1)}B` : `$${Math.round(v)}M`;
          },
        },
        color: "#6366f1",
      },
    },
    series: [{ type: "bar", name: "Funding", data: data.map(d => d.total) }],
    legend: { enabled: false },
    credits: { enabled: false },
  };

  return (
    <ChartSection
      title="3. Capital Density by Category — Follow the Money"
      measures="Total combined private funding raised by all active competitors in each category. Public company parent valuations excluded — only VC/PE capital."
      howToRead="Tallest bars = categories where investors have poured the most capital (red oceans). Short bars = less competitive capital markets (blue ocean or niche)."
      insight="Data Governance ($1.2B+) and Cloud-Native BI ($1B+) are the most capital-dense. Text-to-SQL and Embedded Analytics are capital-light. AI Analytics has modest capital but high churn — money goes in, companies die."
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 6. White Space Radar ────────────────────────── */

export function WhiteSpaceRadar() {
  const { dims, series } = radarData(competitors);
  const radarColors = ["#22c55e", "#ef4444", "#f59e0b", "#6366f1", "#3b82f6", "#8b5cf6"];

  const options: Highcharts.Options = {
    chart: { polar: true, height: 500 },
    title: { text: undefined },
    pane: { size: "75%" },
    xAxis: {
      categories: dims,
      tickmarkPlacement: "on",
      lineWidth: 0,
      labels: { style: { fontSize: "10px" } },
    },
    yAxis: { gridLineInterpolation: "polygon", min: 0, max: 1, labels: { enabled: false } },
    tooltip: { shared: true },
    series: series.map((s, i) => ({
      type: "area" as const,
      name: s.name,
      data: s.data,
      pointPlacement: "on",
      color: radarColors[i % radarColors.length],
      fillOpacity: s.name === "KOS" ? 0.15 : 0.05,
      lineWidth: s.name === "KOS" ? 3 : 1.5,
    })),
    credits: { enabled: false },
  };

  return (
    <ChartSection
      title="6. White Space Radar — KOS vs Top 5 Competitors"
      measures="Each axis = one of the 13 KOS dimensions. 1 = has it, 0 = doesn't. KOS covers all 13. Overlaid: Power BI, Tableau, Databricks, ThoughtSpot, Metabase."
      howToRead="KOS's green polygon fills the entire radar. Competitors have visible gaps (missing dimensions). The gaps between KOS and competitors = defensible differentiation."
      insight="No competitor fills the full radar. Power BI and Tableau cover 8 dims but miss NoSQL, Knowledge, Presentations, Easy Setup. Metabase misses Knowledge, Presentations, NoSQL. KOS is the only product that completes the polygon."
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 7. Active vs Dead by Category ───────────────── */

export function StatusByCategory() {
  const { categories, active, dead } = statusByCategoryData(competitors);

  const options: Highcharts.Options = {
    chart: { type: "bar", height: 380 },
    title: { text: undefined },
    xAxis: { categories },
    yAxis: { title: { text: "Competitors" }, allowDecimals: false, stackLabels: { enabled: true } },
    plotOptions: { bar: { stacking: "normal", dataLabels: { enabled: true } } },
    series: [
      { type: "bar", name: "Active", data: active, color: "#22c55e" },
      { type: "bar", name: "Dead / Acquired", data: dead, color: "#ef4444" },
    ],
    credits: { enabled: false },
  };

  return (
    <ChartSection
      title="7. Market Survival — Active vs Dead by Category"
      measures="Number of active versus dead/acquired/maintenance competitors in each category. Higher death rate = higher market risk."
      howToRead="Categories with large red segments have high mortality — the market is validate-or-die. Categories with only green are mature and established."
      insight="AI Analytics and Dead/Acquired categories have the highest mortality. Traditional BI has zero deaths — incumbents survive. The graveyard is almost entirely AI startups that couldn't find PMF fast enough or ran out of runway."
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 8. GTM × Business Model ────────────────────── */

export function GTMModelBubble() {
  const { gtmLabels, modelLabels, data } = gtmModelData(competitors);

  const options: Highcharts.Options = {
    chart: { type: "bubble", height: 420 },
    title: { text: undefined },
    xAxis: { categories: gtmLabels, title: { text: "Go-to-Market Motion" }, min: -0.5, max: 3.5 },
    yAxis: { categories: modelLabels, title: { text: "Business Model" }, min: -0.5, max: 4.5 },
    tooltip: {
      useHTML: true,
      formatter: function (this: Highcharts.Point): string {
        const p = this as unknown as { point: { x: number; y: number; z: number; names: string[] } };
        return `<b>${gtmLabels[p.point.x]} × ${modelLabels[p.point.y]}</b><br/>${p.point.z} competitors<br/><i>${p.point.names.slice(0, 5).join(", ")}${p.point.names.length > 5 ? "..." : ""}</i>`;
      },
    },
    plotOptions: { bubble: { minSize: 15, maxSize: 55, color: "#6366f1", opacity: 0.7 } },
    series: [{
      type: "bubble",
      name: "Competitors",
      data: data.map(d => ({ x: d.x, y: d.y, z: d.z, names: d.names })),
    }],
    legend: { enabled: false },
    credits: { enabled: false },
  };

  return (
    <ChartSection
      title="8. GTM × Business Model — Strategic Positioning Map"
      measures="Maps every active competitor by their go-to-market motion (X) and business model (Y). Bubble size = number of competitors in that cell."
      howToRead="Large bubbles = crowded strategic positions (red ocean). Empty cells = strategic white space. KOS can position in uncrowded cells."
      insight="Product-led SaaS and Sales-led Enterprise SaaS are the most crowded cells. Community-led Open Core is dominated by infrastructure tools. KOS as a Product-led SaaS with enterprise features sits in a moderately occupied but defensible cell — especially with its unique full-stack coverage."
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

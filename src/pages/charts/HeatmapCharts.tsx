import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HeatmapModule from "highcharts/modules/heatmap";
import { competitors } from "../../data/competitors";
import { dimHeatmapData, dimCooccurrenceData, dimAdoptionData } from "../../data/insightData";
import { ChartSection } from "./ChartSection";

if (typeof HeatmapModule === "function") {
  HeatmapModule(Highcharts);
} else {
  (HeatmapModule as unknown as { default: typeof HeatmapModule }).default(Highcharts);
}

const COLORS = {
  accent: "#6366f1",
  red: "#ef4444",
  green: "#22c55e",
  amber: "#f59e0b",
  blue: "#3b82f6",
};

/* ── 1. Dimension Coverage Heatmap ───────────────── */

export function DimensionHeatmap() {
  const { categories, dimensions, data } = dimHeatmapData(competitors);

  const options: Highcharts.Options = {
    chart: { type: "heatmap", height: 420 },
    title: { text: undefined },
    xAxis: {
      categories: dimensions,
      labels: { style: { fontSize: "10px" }, rotation: -45 },
    },
    yAxis: {
      categories,
      labels: { style: { fontSize: "10px" } },
      title: { text: null },
      reversed: true,
    },
    colorAxis: {
      min: 0, max: 100,
      stops: [[0, "#f0f9ff"], [0.3, "#93c5fd"], [0.6, "#f59e0b"], [1, "#ef4444"]],
    },
    legend: { align: "right", layout: "vertical", verticalAlign: "middle" },
    tooltip: {
      formatter: function (this: Highcharts.Point): string {
        const p = this as unknown as { point: { x: number; y: number; value: number } };
        return `<b>${categories[p.point.y]}</b><br/>${dimensions[p.point.x]}: <b>${p.point.value}%</b> adoption`;
      },
    },
    series: [{
      type: "heatmap",
      data,
      borderWidth: 1,
      borderColor: "#fff",
      dataLabels: { enabled: true, format: "{point.value}%", style: { fontSize: "9px", textOutline: "none" } },
    }],
    credits: { enabled: false },
  };

  return (
    <ChartSection
      title="1. Dimension Coverage Heatmap — Red vs Blue Ocean Map"
      measures="Percentage of competitors in each category that offer each KOS dimension. Each cell = (competitors with feature / total in category) × 100."
      howToRead="Hot cells (red/amber) = saturated features everyone offers (red ocean). Cool cells (blue/white) = features nobody in that category provides (blue ocean opportunity)."
      insight="SQL + Dashboards + Web-based are table stakes across all categories (100% red). Presentations, NoSQL, and Knowledge are almost universally cold — these are KOS's blue ocean moat."
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 4. Dimension Adoption Bar ───────────────────── */

export function DimensionAdoptionBar() {
  const data = dimAdoptionData(competitors);

  const options: Highcharts.Options = {
    chart: { type: "bar", height: 400 },
    title: { text: undefined },
    xAxis: { categories: data.map(d => d.dim), labels: { style: { fontSize: "11px" } } },
    yAxis: { title: { text: "Active competitors" }, allowDecimals: false },
    tooltip: { pointFormat: "<b>{point.y}</b> competitors ({point.pct}%)" },
    plotOptions: {
      bar: {
        dataLabels: { enabled: true, format: "{y}" },
        colorByPoint: true,
        colors: data.map(d =>
          d.count <= 5 ? COLORS.green : d.count <= 15 ? COLORS.amber : COLORS.red
        ),
      },
    },
    series: [{
      type: "bar",
      name: "Competitors",
      data: data.map(d => ({ y: d.count, pct: d.pct })),
    }],
    legend: { enabled: false },
    credits: { enabled: false },
  };

  return (
    <ChartSection
      title="4. Dimension Adoption — Where's the Crowd?"
      measures="Number of active competitors that offer each of the 13 KOS dimensions. Green bars = rare features, red bars = commoditized features."
      howToRead="Short green bars at the bottom = blue ocean dimensions that very few competitors offer. Tall red bars at the top = table stakes everyone has."
      insight="SQL and Web-based are universal (45+ competitors). Presentations has ~1 competitor. Knowledge has ~5. NoSQL has ~7. These three dimensions together form KOS's defensible moat — no single competitor covers all three."
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 5. Dimension Co-occurrence Matrix ───────────── */

export function CooccurrenceMatrix() {
  const { dims, data } = dimCooccurrenceData(competitors);

  const options: Highcharts.Options = {
    chart: { type: "heatmap", height: 500 },
    title: { text: undefined },
    xAxis: { categories: dims, labels: { style: { fontSize: "9px" }, rotation: -45 } },
    yAxis: { categories: dims, labels: { style: { fontSize: "9px" } }, title: { text: null }, reversed: true },
    colorAxis: {
      min: 0,
      stops: [[0, "#f8fafc"], [0.3, "#bfdbfe"], [0.6, "#fbbf24"], [1, "#dc2626"]],
    },
    tooltip: {
      formatter: function (this: Highcharts.Point): string {
        const p = this as unknown as { point: { x: number; y: number; value: number } };
        return `<b>${dims[p.point.x]}</b> + <b>${dims[p.point.y]}</b><br/>Co-occur in <b>${p.point.value}</b> competitors`;
      },
    },
    series: [{
      type: "heatmap",
      data,
      borderWidth: 1,
      borderColor: "#fff",
      dataLabels: { enabled: true, format: "{point.value}", style: { fontSize: "8px", textOutline: "none" } },
    }],
    legend: { enabled: false },
    credits: { enabled: false },
  };

  return (
    <ChartSection
      title="5. Dimension Co-occurrence — Feature Bundling Patterns"
      measures="How many competitors offer each pair of KOS dimensions together. Higher number = more commonly bundled features."
      howToRead="Hot cells = features always bundled together (table stakes pairs). Cold/empty cells = feature combinations nobody offers. These are untapped product bundles."
      insight="SQL+Dashboards and SQL+Web-based are the most tightly bundled (30+). But Knowledge+Presentations, NoSQL+Presentations, and Knowledge+NoSQL are almost never paired — KOS bundles all three, a combination zero competitors offer."
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

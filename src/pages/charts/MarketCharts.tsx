import { useState, useRef, useMemo } from "react";
import Highcharts from "./hc";
import { HighchartsReact } from "highcharts-react-official";
import "./patchHighcharts";
import { competitors, type Competitor } from "../../data/competitors";
import {
  hqRegionData, targetMarketData, verticalHeatmapData,
  hqInsight, targetInsight, verticalInsight,
} from "../../data/insightData";
import { ChartSection } from "./ChartSection";
import { DrillDownPanel } from "./DrillDownPanel";

interface DrillState { label: string; items: Competitor[] }

const COLORS: Record<string, string> = {
  "US West Coast": "#6366f1", "US East Coast": "#8b5cf6", "US Other": "#a78bfa",
  "Europe": "#f59e0b", "UK": "#f97316", "Israel": "#22c55e",
  "Canada": "#14b8a6", "Asia-Pacific": "#ec4899", "Other": "#94a3b8", "Unknown": "#cbd5e1",
};

/* ── 8. HQ Region Distribution ──────────────────── */

const regionData = hqRegionData(competitors);

export function HQRegionBar({ onSelect }: { onSelect: (c: Competitor) => void }) {
  const [drill, setDrill] = useState<DrillState | null>(null);
  const drillRef = useRef(setDrill);
  drillRef.current = setDrill;

  const options = useMemo<Highcharts.Options>(() => ({
    chart: { type: "bar", height: 380 },
    title: { text: undefined },
    xAxis: { categories: regionData.regions, labels: { style: { fontSize: "11px" } } },
    yAxis: { title: { text: "Active competitors" }, allowDecimals: false },
    tooltip: { pointFormat: "<b>{point.y}</b> competitors<br/><i>Click to drill down</i>" },
    plotOptions: {
      series: {
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              const pt = this as Highcharts.Point;
              const region = regionData.regions[pt.x!];
              const items = regionData.byRegion[region] || [];
              drillRef.current({ label: `HQ: ${region}`, items });
            },
          },
        },
      },
      bar: {
        dataLabels: { enabled: true, format: "{y}" },
        colorByPoint: true,
        colors: regionData.regions.map(r => COLORS[r] || "#94a3b8"),
      },
    },
    series: [{ type: "bar", name: "Competitors", data: regionData.counts }],
    legend: { enabled: false },
    credits: { enabled: false },
  }), []);

  return (
    <ChartSection
      title="8. HQ Geography — Where Competitors Are Built"
      measures="Number of active competitors headquartered in each region. Derived from enrichment HQ data across all 64 competitors."
      howToRead="Tall bars = geographic clusters of competition. Short bars = regions with fewer competitors building similar products."
      insight={hqInsight(competitors)}
      drillDown={drill && <DrillDownPanel {...drill} onClose={() => setDrill(null)} onSelect={onSelect} />}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 9. Target Market Segments ──────────────────── */

const segmentData = targetMarketData(competitors);

const SEG_COLORS: Record<string, string> = {
  "Enterprise": "#ef4444", "Full-spectrum": "#f97316", "Mid-market": "#f59e0b",
  "SMB": "#22c55e", "Consumer / Prosumer": "#14b8a6",
  "Developer / Data Teams": "#6366f1", "Other": "#94a3b8", "Unknown": "#cbd5e1",
};

export function TargetMarketBar({ onSelect }: { onSelect: (c: Competitor) => void }) {
  const [drill, setDrill] = useState<DrillState | null>(null);
  const drillRef = useRef(setDrill);
  drillRef.current = setDrill;

  const options = useMemo<Highcharts.Options>(() => ({
    chart: { type: "bar", height: 380 },
    title: { text: undefined },
    xAxis: { categories: segmentData.segments, labels: { style: { fontSize: "11px" } } },
    yAxis: { title: { text: "Active competitors" }, allowDecimals: false },
    tooltip: { pointFormat: "<b>{point.y}</b> competitors<br/><i>Click to drill down</i>" },
    plotOptions: {
      series: {
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              const pt = this as Highcharts.Point;
              const seg = segmentData.segments[pt.x!];
              const items = segmentData.bySegment[seg] || [];
              drillRef.current({ label: `Target: ${seg}`, items });
            },
          },
        },
      },
      bar: {
        dataLabels: { enabled: true, format: "{y}" },
        colorByPoint: true,
        colors: segmentData.segments.map(s => SEG_COLORS[s] || "#94a3b8"),
      },
    },
    series: [{ type: "bar", name: "Competitors", data: segmentData.counts }],
    legend: { enabled: false },
    credits: { enabled: false },
  }), []);

  return (
    <ChartSection
      title="9. Target Market — Who Are They Selling To?"
      measures="Number of active competitors targeting each market segment. Derived from deep research target market descriptions."
      howToRead="Tall red bars = crowded segments where everyone competes. Short green bars = underserved segments with less competition."
      insight={targetInsight(competitors)}
      drillDown={drill && <DrillDownPanel {...drill} onClose={() => setDrill(null)} onSelect={onSelect} />}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 10. Vertical × Category Heatmap ────────────── */

const vertData = verticalHeatmapData(competitors);

export function VerticalHeatmap({ onSelect }: { onSelect: (c: Competitor) => void }) {
  const { categories, verticals, data } = vertData;
  const [drill, setDrill] = useState<DrillState | null>(null);
  const drillRef = useRef(setDrill);
  drillRef.current = setDrill;

  const allActive = competitors.filter(c => c.status === "active");

  const options = useMemo<Highcharts.Options>(() => ({
    chart: { type: "heatmap", height: 480 },
    title: { text: undefined },
    xAxis: { categories: verticals, labels: { style: { fontSize: "9px" }, rotation: -45 } },
    yAxis: { categories, labels: { style: { fontSize: "10px" } }, title: { text: undefined }, reversed: true },
    colorAxis: {
      min: 0,
      stops: [[0, "#f0f9ff"], [0.2, "#93c5fd"], [0.5, "#f59e0b"], [1, "#ef4444"]],
    },
    legend: { align: "right", layout: "vertical", verticalAlign: "middle" },
    tooltip: {
      formatter: function (): string {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const p = this as any;
        return `<b>${categories[p.y]}</b><br/>${verticals[p.x]}: <b>${p.value}</b> competitors<br/><i>Click to drill down</i>`;
      },
    },
    plotOptions: {
      heatmap: {
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              const pt = this as Highcharts.Point;
              const cat = categories[pt.y!];
              const vert = verticals[pt.x!];
              const items = allActive.filter(c =>
                c.category === cat &&
                (c.deep?.markets?.verticals || []).some(v => v.toLowerCase().includes(vert.toLowerCase()))
              );
              drillRef.current({ label: `${cat} → ${vert}`, items });
            },
          },
        },
      },
    },
    series: [{
      type: "heatmap", data, borderWidth: 1, borderColor: "#fff",
      dataLabels: { enabled: true, format: "{point.value}", style: { fontSize: "8px", textOutline: "none" } },
    }],
    credits: { enabled: false },
  }), [categories, verticals, data, allActive]);

  return (
    <ChartSection
      title="10. Industry Vertical Heatmap — Who Serves Which Industries?"
      measures="Number of competitors in each category that target each industry vertical. Data from deep research market profiles."
      howToRead="Hot cells = verticals heavily targeted by a category (red ocean). Cold/empty cells = verticals nobody in that category serves (opportunity for KOS)."
      insight={verticalInsight(competitors)}
      drillDown={drill && <DrillDownPanel {...drill} onClose={() => setDrill(null)} onSelect={onSelect} />}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

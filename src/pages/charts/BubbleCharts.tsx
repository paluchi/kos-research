import { useState, useRef, useMemo } from "react";
import Highcharts from "./hc";
import { HighchartsReact } from "highcharts-react-official";
import "./patchHighcharts";
import { competitors, type Competitor } from "../../data/competitors";
import {
  fundingBubbleData, capitalByCategoryData,
  statusByCategoryData, gtmModelData,
  fundingBubbleInsight, capitalInsight, statusInsight, gtmInsight,
} from "../../data/insightData";
import { ChartSection } from "./ChartSection";
import { DrillDownPanel } from "./DrillDownPanel";

interface DrillState { label: string; items: Competitor[] }
const allActive = competitors.filter(c => c.status === "active");

const catColors: Record<string, string> = {
  "Traditional BI": "#ef4444", "Enterprise Data Platform": "#f97316",
  "Cloud-Native BI": "#6366f1", "Modern Analytics": "#8b5cf6",
  "Embedded Analytics": "#14b8a6", "AI Analytics Startup": "#22c55e",
  "Text-to-SQL / Open Source": "#06b6d4", "Open-Source BI": "#3b82f6",
  "Data Governance": "#f59e0b", "Adjacent / Workflow": "#ec4899",
};

/* ── 2. Funding vs Dimensions Bubble ─────────────── */

const fundingRaw = fundingBubbleData(competitors);
const fundingGrouped = Object.entries(
  fundingRaw.reduce((acc, d) => { (acc[d.category] ??= []).push(d); return acc; }, {} as Record<string, typeof fundingRaw>)
);

export function FundingBubble({ onSelect }: { onSelect: (c: Competitor) => void }) {
  const selectRef = useRef(onSelect);
  selectRef.current = onSelect;

  const options = useMemo<Highcharts.Options>(() => ({
    chart: { type: "bubble", height: 480, zooming: { type: "xy" } },
    title: { text: undefined },
    xAxis: { title: { text: "KOS Dimensions Matched" }, min: 0, max: 14, tickInterval: 1 },
    yAxis: { title: { text: "Total Funding ($M)" }, type: "logarithmic", min: 1 },
    tooltip: {
      useHTML: true,
      pointFormat: "<b>{point.name}</b><br/>Dims: {point.x} | Funding: ${point.y}M | Team: {point.z}<br/><i>Click for details</i>",
    },
    plotOptions: {
      series: {
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const pt = this as any;
              const name = pt.name || pt.options?.name;
              const c = competitors.find(x => x.name === name);
              if (c) selectRef.current(c);
            },
          },
        },
      },
      bubble: { minSize: 8, maxSize: 45, opacity: 0.7 },
    },
    series: fundingGrouped.map(([cat, points]) => ({
      type: "bubble" as const, name: cat,
      color: catColors[cat] || "#94a3b8",
      data: points.map(p => ({ x: p.x, y: p.y, z: p.z, name: p.name })),
    })),
    credits: { enabled: false },
  }), []);

  return (
    <ChartSection
      title="2. Funding vs KOS Overlap — Where's the Money?"
      measures="Each bubble is an active competitor. X = number of KOS dimensions they match (0-13). Y = total funding raised (log scale). Bubble size = team headcount."
      howToRead="Top-right quadrant = heavily funded competitors with high KOS overlap (biggest threat). Bottom-left = underfunded with low overlap (ignore). Clusters of big bubbles = red ocean of capital."
      insight={fundingBubbleInsight(competitors)}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 3. Capital by Category ──────────────────────── */

const capitalData = capitalByCategoryData(competitors);

export function CapitalByCategory({ onSelect }: { onSelect: (c: Competitor) => void }) {
  const [drill, setDrill] = useState<DrillState | null>(null);
  const drillRef = useRef(setDrill);
  drillRef.current = setDrill;

  const options = useMemo<Highcharts.Options>(() => ({
    chart: { type: "bar", height: 380 },
    title: { text: undefined },
    xAxis: { categories: capitalData.map(d => d.category), labels: { style: { fontSize: "11px" } } },
    yAxis: { title: { text: "Combined Private Funding ($M)" }, type: "logarithmic", min: 1 },
    tooltip: {
      pointFormatter: function (this: Highcharts.Point): string {
        const v = this.y ?? 0;
        return (v >= 1000 ? `<b>$${(v / 1000).toFixed(1)}B</b>` : `<b>$${Math.round(v)}M</b>`) + "<br/><i>Click to drill down</i>";
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
      series: {
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              const pt = this as Highcharts.Point;
              const cat = capitalData[pt.x!].category;
              const items = allActive.filter(c => c.category === cat);
              drillRef.current({ label: cat, items });
            },
          },
        },
      },
    },
    series: [{
      type: "bar", name: "Funding",
      data: capitalData.map(d => d.total),
    }],
    legend: { enabled: false },
    credits: { enabled: false },
  }), []);

  return (
    <ChartSection
      title="3. Capital Density by Category — Follow the Money"
      measures="Total combined private funding raised by all active competitors in each category. Public company parent valuations excluded — only VC/PE capital."
      howToRead="Tallest bars = categories where investors have poured the most capital (red oceans). Short bars = less competitive capital markets (blue ocean or niche)."
      insight={capitalInsight(competitors)}
      drillDown={drill && <DrillDownPanel {...drill} onClose={() => setDrill(null)} onSelect={onSelect} />}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 6. Active by Category ─────────────────────── */

const statusData = statusByCategoryData(competitors);

export function StatusByCategory({ onSelect }: { onSelect: (c: Competitor) => void }) {
  const [drill, setDrill] = useState<DrillState | null>(null);
  const drillRef = useRef(setDrill);
  drillRef.current = setDrill;

  const options = useMemo<Highcharts.Options>(() => ({
    chart: { type: "bar", height: 380 },
    title: { text: undefined },
    xAxis: { categories: statusData.categories },
    yAxis: { title: { text: "Competitors" }, allowDecimals: false },
    plotOptions: {
      bar: { dataLabels: { enabled: true } },
      series: {
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              const pt = this as Highcharts.Point;
              const cat = statusData.categories[pt.x!];
              const items = competitors.filter(c => c.category === cat && c.status === "active");
              drillRef.current({ label: `${cat} — Active`, items });
            },
          },
        },
      },
    },
    series: [
      { type: "bar", name: "Active", data: statusData.active, color: "#22c55e" },
    ],
    credits: { enabled: false },
  }), []);

  return (
    <ChartSection
      title="6. Active Competitors by Category"
      measures="Number of active competitors in each category."
      howToRead="Taller bars = more crowded categories. Shorter bars = less competition."
      insight={statusInsight(competitors)}
      drillDown={drill && <DrillDownPanel {...drill} onClose={() => setDrill(null)} onSelect={onSelect} />}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 7. GTM × Business Model ────────────────────── */

const gtmData = gtmModelData(competitors);

export function GTMModelBubble({ onSelect }: { onSelect: (c: Competitor) => void }) {
  const [drill, setDrill] = useState<DrillState | null>(null);
  const drillRef = useRef(setDrill);
  drillRef.current = setDrill;

  const options = useMemo<Highcharts.Options>(() => ({
    chart: { type: "bubble", height: 420 },
    title: { text: undefined },
    xAxis: { categories: gtmData.gtmLabels, title: { text: "Go-to-Market Motion" }, min: -0.5, max: 3.5 },
    yAxis: { categories: gtmData.modelLabels, title: { text: "Business Model" }, min: -0.5, max: 4.5 },
    tooltip: {
      useHTML: true,
      formatter: function (): string {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const p = this as any;
        const names: string[] = p.point?.options?.names || [];
        return `<b>${gtmData.gtmLabels[p.x]} × ${gtmData.modelLabels[p.y]}</b><br/>${p.point?.z || 0} competitors<br/><i>${names.slice(0, 5).join(", ")}${names.length > 5 ? "..." : ""}</i><br/><i>Click to drill down</i>`;
      },
    },
    plotOptions: {
      bubble: { minSize: 15, maxSize: 55, color: "#6366f1", opacity: 0.7 },
      series: {
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const pt = this as any;
              const names: string[] = pt.options?.names || [];
              const items = competitors.filter(c => names.includes(c.name));
              const gtm = gtmData.gtmLabels[pt.x] || "?";
              const model = gtmData.modelLabels[pt.y] || "?";
              drillRef.current({ label: `${gtm} × ${model}`, items });
            },
          },
        },
      },
    },
    series: [{
      type: "bubble", name: "Competitors",
      data: gtmData.data.map(d => ({ x: d.x, y: d.y, z: d.z, names: d.names })),
    }],
    legend: { enabled: false },
    credits: { enabled: false },
  }), []);

  return (
    <ChartSection
      title="7. GTM × Business Model — Strategic Positioning Map"
      measures="Maps every active competitor by their go-to-market motion (X) and business model (Y). Bubble size = number of competitors in that cell."
      howToRead="Large bubbles = crowded strategic positions (red ocean). Empty cells = strategic white space. KOS can position in uncrowded cells."
      insight={gtmInsight(competitors)}
      drillDown={drill && <DrillDownPanel {...drill} onClose={() => setDrill(null)} onSelect={onSelect} />}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

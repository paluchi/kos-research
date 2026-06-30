import { useState, useRef, useMemo } from "react";
import Highcharts from "./hc";
import { HighchartsReact } from "highcharts-react-official";
import "./patchHighcharts";
import { competitors, type Competitor } from "../../data/competitors";
import {
  dimHeatmapData, dimCooccurrenceData, dimAdoptionData, DIM_DESCRIPTIONS,
  heatmapInsight, adoptionInsight, cooccurrenceInsight,
} from "../../data/insightData";
import { ChartSection } from "./ChartSection";
import { DrillDownPanel } from "./DrillDownPanel";

/* ── Floating tooltip singleton for axis labels ─── */
const dimTip = (() => {
  let el: HTMLDivElement | null = null;
  function getEl() {
    if (!el) {
      el = document.createElement("div");
      Object.assign(el.style, {
        position: "fixed", display: "none", pointerEvents: "none", zIndex: "99999",
        background: "#1e293b", color: "#fff", fontSize: "12px", lineHeight: "1.4",
        padding: "6px 10px", borderRadius: "6px", maxWidth: "300px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)", whiteSpace: "normal",
      });
      document.body.appendChild(el);
    }
    return el;
  }
  return {
    show(text: string, x: number, y: number) {
      const t = getEl();
      t.textContent = text;
      t.style.display = "block";
      t.style.left = `${x + 14}px`;
      t.style.top = `${y - 36}px`;
    },
    hide() { if (el) el.style.display = "none"; },
  };
})();

const COLORS = { green: "#22c55e", amber: "#f59e0b", red: "#ef4444" };
const allActive = competitors.filter(c => c.status === "active");

interface DrillState { label: string; items: Competitor[] }

/* ── 1. Dimension Coverage Heatmap ───────────────── */

const heatmapMeta = dimHeatmapData(competitors);

export function DimensionHeatmap({ onSelect }: { onSelect: (c: Competitor) => void }) {
  const { categories, dimensions, data } = heatmapMeta;
  const [drill, setDrill] = useState<DrillState | null>(null);
  const drillRef = useRef(setDrill);
  drillRef.current = setDrill;

  const options = useMemo<Highcharts.Options>(() => ({
    chart: {
      type: "heatmap",
      height: 420,
      events: {
        load: function () {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const axis = this.xAxis[0] as any;
          if (!axis.ticks) return;
          Object.values(axis.ticks).forEach((tick: unknown) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const t = tick as any;
            const labelEl = t.label?.element as SVGElement | HTMLElement | undefined;
            if (!labelEl) return;
            const dim = dimensions[t.pos] as string | undefined;
            if (!dim) return;
            const desc = DIM_DESCRIPTIONS[dim];
            if (!desc) return;
            labelEl.style.cursor = "help";
            labelEl.addEventListener("mouseenter", (e: Event) => {
              const me = e as MouseEvent;
              dimTip.show(desc, me.clientX, me.clientY);
            });
            labelEl.addEventListener("mousemove", (e: Event) => {
              const me = e as MouseEvent;
              dimTip.show(desc, me.clientX, me.clientY);
            });
            labelEl.addEventListener("mouseleave", () => dimTip.hide());
          });
        },
      },
    },
    title: { text: undefined },
    xAxis: {
      categories: dimensions,
      labels: {
        rotation: -45,
        style: { fontSize: "10px" },
      },
    },
    yAxis: { categories, labels: { style: { fontSize: "10px" } }, title: { text: undefined }, reversed: true },
    colorAxis: {
      min: 0, max: 100,
      stops: [[0, "#f0f9ff"], [0.3, "#93c5fd"], [0.6, "#f59e0b"], [1, "#ef4444"]],
    },
    legend: { align: "right", layout: "vertical", verticalAlign: "middle" },
    tooltip: {
      formatter: function (): string {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const p = this as any;
        return `<b>${categories[p.y]}</b><br/>${dimensions[p.x]}: <b>${p.value}%</b><br/><i>Click to drill down</i>`;
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
              const dim = dimensions[pt.x!];
              const items = allActive.filter(c => c.category === cat && c.dimensions.includes(dim));
              drillRef.current({ label: `${cat} → ${dim}`, items });
            },
          },
        },
      },
    },
    series: [{
      type: "heatmap", data, borderWidth: 1, borderColor: "#fff",
      dataLabels: { enabled: true, format: "{point.value}%", style: { fontSize: "9px", textOutline: "none" } },
    }],
    credits: { enabled: false },
  }), [categories, dimensions, data]);

  return (
    <ChartSection
      title="1. Dimension Coverage Heatmap — Red vs Blue Ocean Map"
      measures="Percentage of competitors in each category that offer each KOS dimension. Each cell = (competitors with feature / total in category) × 100."
      howToRead="Hot cells (red/amber) = saturated features everyone offers (red ocean). Cool cells (blue/white) = features nobody in that category provides (blue ocean opportunity)."
      insight={heatmapInsight(competitors)}
      drillDown={drill && <DrillDownPanel {...drill} onClose={() => setDrill(null)} onSelect={onSelect} />}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 4. Dimension Adoption Bar ───────────────────── */

const adoptionData = dimAdoptionData(competitors);

export function DimensionAdoptionBar({ onSelect }: { onSelect: (c: Competitor) => void }) {
  const [drill, setDrill] = useState<DrillState | null>(null);
  const drillRef = useRef(setDrill);
  drillRef.current = setDrill;

  const options = useMemo<Highcharts.Options>(() => ({
    chart: { type: "bar", height: 400 },
    title: { text: undefined },
    xAxis: {
      categories: adoptionData.map(d => d.dim),
      labels: {
        useHTML: true,
        style: { fontSize: "11px" },
        formatter: function (): string {
          const dim = this.value as string;
          const desc = DIM_DESCRIPTIONS[dim] || dim;
          return `<span title="${desc}" style="cursor:help">${dim}</span>`;
        },
      },
    },
    yAxis: { title: { text: "Active competitors" }, allowDecimals: false },
    tooltip: { pointFormat: "<b>{point.y}</b> competitors<br/><i>Click to drill down</i>" },
    plotOptions: {
      series: {
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              const pt = this as Highcharts.Point;
              const dim = adoptionData[pt.x!].dim;
              const items = allActive.filter(c => c.dimensions.includes(dim));
              drillRef.current({ label: `Competitors with "${dim}"`, items });
            },
          },
        },
      },
      bar: {
        dataLabels: { enabled: true, format: "{y}" },
        colorByPoint: true,
        colors: adoptionData.map(d => d.count <= 5 ? COLORS.green : d.count <= 15 ? COLORS.amber : COLORS.red),
      },
    },
    series: [{ type: "bar", name: "Competitors", data: adoptionData.map(d => ({ y: d.count, pct: d.pct })) }],
    legend: { enabled: false },
    credits: { enabled: false },
  }), []);

  return (
    <ChartSection
      title="4. Dimension Adoption — Where's the Crowd?"
      measures="Number of active competitors that offer each of the 13 KOS dimensions. Green bars = rare features, red bars = commoditized features."
      howToRead="Short green bars at the bottom = blue ocean dimensions that very few competitors offer. Tall red bars at the top = table stakes everyone has."
      insight={adoptionInsight(competitors)}
      drillDown={drill && <DrillDownPanel {...drill} onClose={() => setDrill(null)} onSelect={onSelect} />}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

/* ── 5. Dimension Co-occurrence Matrix ───────────── */

const coocData = dimCooccurrenceData(competitors);

export function CooccurrenceMatrix({ onSelect }: { onSelect: (c: Competitor) => void }) {
  const { dims, data } = coocData;
  const [drill, setDrill] = useState<DrillState | null>(null);
  const drillRef = useRef(setDrill);
  drillRef.current = setDrill;

  const options = useMemo<Highcharts.Options>(() => ({
    chart: { type: "heatmap", height: 500 },
    title: { text: undefined },
    xAxis: {
      categories: dims,
      labels: {
        useHTML: true,
        rotation: -45,
        style: { fontSize: "9px" },
        formatter: function (): string {
          const dim = this.value as string;
          const desc = DIM_DESCRIPTIONS[dim] || dim;
          return `<span title="${desc}" style="cursor:help">${dim}</span>`;
        },
      },
    },
    yAxis: {
      categories: dims,
      labels: {
        useHTML: true,
        style: { fontSize: "9px" },
        formatter: function (): string {
          const dim = this.value as string;
          const desc = DIM_DESCRIPTIONS[dim] || dim;
          return `<span title="${desc}" style="cursor:help">${dim}</span>`;
        },
      },
      title: { text: undefined },
      reversed: true,
    },
    colorAxis: {
      min: 0,
      stops: [[0, "#f8fafc"], [0.3, "#bfdbfe"], [0.6, "#fbbf24"], [1, "#dc2626"]],
    },
    tooltip: {
      formatter: function (): string {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const p = this as any;
        return `<b>${dims[p.x]}</b> + <b>${dims[p.y]}</b><br/>${p.value} competitors<br/><i>Click to drill down</i>`;
      },
    },
    plotOptions: {
      heatmap: {
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              const pt = this as Highcharts.Point;
              const dimA = dims[pt.x!];
              const dimB = dims[pt.y!];
              const items = allActive.filter(c => c.dimensions.includes(dimA) && c.dimensions.includes(dimB));
              drillRef.current({ label: `"${dimA}" + "${dimB}"`, items });
            },
          },
        },
      },
    },
    series: [{
      type: "heatmap", data, borderWidth: 1, borderColor: "#fff",
      dataLabels: { enabled: true, format: "{point.value}", style: { fontSize: "8px", textOutline: "none" } },
    }],
    legend: { enabled: false },
    credits: { enabled: false },
  }), [dims, data]);

  return (
    <ChartSection
      title="5. Dimension Co-occurrence — Feature Bundling Patterns"
      measures="How many competitors offer each pair of KOS dimensions together. Higher number = more commonly bundled features."
      howToRead="Hot cells = features always bundled together (table stakes pairs). Cold/empty cells = feature combinations nobody offers. These are untapped product bundles."
      insight={cooccurrenceInsight(competitors)}
      drillDown={drill && <DrillDownPanel {...drill} onClose={() => setDrill(null)} onSelect={onSelect} />}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartSection>
  );
}

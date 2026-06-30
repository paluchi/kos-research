import { useMemo, useRef } from "react";
import Highcharts from "./charts/hc";
import { HighchartsReact } from "highcharts-react-official";
import "./charts/patchHighcharts";
import type { CategoryGroup } from "./competitorGraph";

const PALETTE = [
  "#6366f1", "#ef4444", "#f97316", "#22c55e", "#06b6d4",
  "#8b5cf6", "#ec4899", "#f59e0b", "#14b8a6", "#3b82f6",
];

export function GraphBubble({
  groups,
  onSelect,
}: {
  groups: CategoryGroup[];
  onSelect?: (name: string) => void;
}) {
  const selectRef = useRef(onSelect);
  selectRef.current = onSelect;

  const options = useMemo<Highcharts.Options>(
    () => ({
      chart: { type: "packedbubble", height: 520, backgroundColor: "transparent" },
      title: { text: undefined },
      credits: { enabled: false },
      legend: { enabled: true },
      tooltip: {
        useHTML: true,
        headerFormat: "",
        pointFormat: "<b>{point.name}</b><br/><span style='font-size:11px'>{series.name}</span><br/><i style='font-size:10px'>Click to open</i>",
      },
      plotOptions: {
        packedbubble: {
          cursor: "pointer",
          point: {
            events: {
              click: function () {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const pt = this as any;
                const name = pt.name || pt.options?.name;
                if (name) selectRef.current?.(name);
              },
            },
          },
          minSize: "30%",
          maxSize: "120%",
          zMin: 0,
          zMax: 1,
          layoutAlgorithm: {
            splitSeries: true,
            gravitationalConstant: 0.02,
            seriesInteraction: false,
            dragBetweenSeries: false,
            parentNodeLimit: true,
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            style: { color: "#1f2937", textOutline: "none", fontWeight: "500", fontSize: "11px" },
          },
        },
      },
      series: groups.map((g, i) => ({
        type: "packedbubble" as const,
        name: g.category.name,
        color: PALETTE[i % PALETTE.length],
        data: g.members.map((name) => ({ name, value: 1 })),
      })),
    }),
    [groups],
  );

  const hasNodes = groups.some((g) => g.members.length > 0);
  if (!hasNodes) {
    return (
      <div className="flex items-center justify-center h-48 rounded-lg border border-dashed border-border text-sm text-text-muted">
        Assign competitors to categories (from each competitor’s Notes tab) to see the map.
      </div>
    );
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

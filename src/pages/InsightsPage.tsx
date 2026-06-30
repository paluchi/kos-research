import { useState } from "react";
import { DimensionHeatmap, DimensionAdoptionBar, CooccurrenceMatrix } from "./charts/HeatmapCharts";
import { FundingBubble, CapitalByCategory, StatusByCategory, GTMModelBubble } from "./charts/BubbleCharts";
import { HQRegionBar, TargetMarketBar, VerticalHeatmap } from "./charts/MarketCharts";
import { CompetitorModal } from "./CompetitorModal";
import type { Competitor } from "../data/competitors";

export function InsightsPage() {
  const [selected, setSelected] = useState<Competitor | null>(null);

  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-text mb-3">Blue Ocean / Red Ocean Analysis</h1>
        <p className="text-text-muted">
          10 strategic charts mapping competitive density, capital flows, feature saturation,
          market segments, geography, and white space across 64 competitors and 13 KOS dimensions.
          Click any data point to drill down.
        </p>
      </header>

      <DimensionHeatmap onSelect={setSelected} />
      <FundingBubble onSelect={setSelected} />
      <CapitalByCategory onSelect={setSelected} />
      <DimensionAdoptionBar onSelect={setSelected} />
      <CooccurrenceMatrix onSelect={setSelected} />
      <StatusByCategory onSelect={setSelected} />
      <GTMModelBubble onSelect={setSelected} />
      <HQRegionBar onSelect={setSelected} />
      <TargetMarketBar onSelect={setSelected} />
      <VerticalHeatmap onSelect={setSelected} />

      {selected && <CompetitorModal c={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

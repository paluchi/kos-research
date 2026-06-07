import { DimensionHeatmap, DimensionAdoptionBar, CooccurrenceMatrix } from "./charts/HeatmapCharts";
import { FundingBubble, CapitalByCategory, WhiteSpaceRadar, StatusByCategory, GTMModelBubble } from "./charts/BubbleCharts";

export function InsightsPage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-text mb-3">Blue Ocean / Red Ocean Analysis</h1>
        <p className="text-text-muted">
          8 strategic charts mapping competitive density, capital flows, feature saturation,
          and white space across 64 competitors and 13 KOS dimensions.
        </p>
      </header>

      <DimensionHeatmap />
      <FundingBubble />
      <CapitalByCategory />
      <DimensionAdoptionBar />
      <CooccurrenceMatrix />
      <WhiteSpaceRadar />
      <StatusByCategory />
      <GTMModelBubble />
    </>
  );
}

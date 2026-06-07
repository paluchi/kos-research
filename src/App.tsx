import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PitchPage } from "./pages/PitchPage";
import { MarketPage } from "./pages/MarketPage";
import { CompetitorsPage } from "./pages/CompetitorsPage";
import { PersonasPage } from "./pages/PersonasPage";
import { ObjectionsPage } from "./pages/ObjectionsPage";
import { PositioningPage } from "./pages/PositioningPage";
import { InsightsPage } from "./pages/InsightsPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/pitch" replace />} />
        <Route path="pitch" element={<PitchPage />} />
        <Route path="market" element={<MarketPage />} />
        <Route path="competitors" element={<CompetitorsPage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="personas" element={<PersonasPage />} />
        <Route path="objections" element={<ObjectionsPage />} />
        <Route path="positioning" element={<PositioningPage />} />
      </Route>
    </Routes>
  );
}

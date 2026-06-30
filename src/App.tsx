import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PitchPage } from "./pages/PitchPage";
import { MarketPage } from "./pages/MarketPage";
import { CompetitorsPage } from "./pages/CompetitorsPage";
import { GtmPage } from "./pages/GtmPage";
import { PositioningPage } from "./pages/PositioningPage";
import { InsightsPage } from "./pages/InsightsPage";
import { ValidationPage } from "./pages/validation/ValidationPage";
import { NotesPage } from "./pages/NotesPage";
import { SlidesPage } from "./pages/SlidesPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/pitch" replace />} />
        <Route path="pitch" element={<PitchPage />} />
        <Route path="positioning" element={<PositioningPage />} />
        <Route path="competitors" element={<CompetitorsPage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="market" element={<MarketPage />} />
        <Route path="gtm" element={<GtmPage />} />
        <Route path="validate" element={<ValidationPage />} />
        <Route path="validate/:slug" element={<ValidationPage />} />
        <Route path="notes" element={<NotesPage />} />
        <Route path="slides" element={<SlidesPage />} />
      </Route>
    </Routes>
  );
}

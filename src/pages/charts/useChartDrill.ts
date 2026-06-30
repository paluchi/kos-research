import { useState, useRef, useCallback } from "react";
import type { Competitor } from "../../data/competitors";

export interface DrillState {
  label: string;
  items: Competitor[];
}

/**
 * Returns a stable setDrill callback + current drill state.
 * The ref-based approach ensures Highcharts click handlers
 * always call the latest React setState, avoiding stale closures.
 */
export function useChartDrill() {
  const [drill, setDrill] = useState<DrillState | null>(null);
  const drillRef = useRef(setDrill);
  drillRef.current = setDrill;

  const openDrill = useCallback((label: string, items: Competitor[]) => {
    drillRef.current({ label, items });
  }, []);

  const closeDrill = useCallback(() => {
    drillRef.current(null);
  }, []);

  return { drill, openDrill, closeDrill };
}

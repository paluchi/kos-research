/**
 * Module-level bridge between Highcharts click handlers and React state.
 * Highcharts caches event handlers at chart init, so closures over React
 * state go stale. This module holds a mutable callback ref that React
 * keeps up-to-date via useEffect, and Highcharts handlers call into.
 */

import type { Competitor } from "../../data/competitors";

type DrillCallback = (label: string, items: Competitor[]) => void;
type SelectCallback = (c: Competitor) => void;

const callbacks: Record<string, DrillCallback> = {};
const selectors: Record<string, SelectCallback> = {};

export function registerDrill(id: string, cb: DrillCallback) {
  callbacks[id] = cb;
}

export function registerSelect(id: string, cb: SelectCallback) {
  selectors[id] = cb;
}

export function fireDrill(id: string, label: string, items: Competitor[]) {
  callbacks[id]?.(label, items);
}

export function fireSelect(id: string, c: Competitor) {
  selectors[id]?.(c);
}

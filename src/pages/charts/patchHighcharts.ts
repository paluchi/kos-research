/**
 * Highcharts caches point click events via `hasImportedEvents`.
 * After the first click, the handler closure goes stale in React.
 * This patch forces Highcharts to re-import events on every interaction.
 * See: https://github.com/highcharts/highcharts-react/issues/264
 */
import Highcharts from "./hc";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const proto = Highcharts.Point.prototype as any;
const orig = proto.importEvents;
proto.importEvents = function () {
  delete this.hasImportedEvents;
  orig.call(this);
};

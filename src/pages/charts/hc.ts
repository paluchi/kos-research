/**
 * Single Highcharts instance + module registration for the whole app.
 *
 * Import the ESM master sources (not the UMD `.js` bundles): they carry real
 * import edges to the core, so the bundler keeps the core evaluating before the
 * modules. The UMD `.js` files only read a `window._Highcharts` global with no
 * dependency edge — fine in unbundled dev, but the production bundle can run a
 * submodule factory before the core sets that global, crashing with
 * "Cannot read properties of undefined (reading 'Axis')".
 *
 * Every chart file must import Highcharts from HERE so there is exactly one
 * instance; mixing `from "highcharts"` would create a second instance that the
 * modules don't register against.
 */
import Highcharts from "highcharts/es-modules/masters/highcharts.src.js";
import "highcharts/es-modules/masters/highcharts-more.src.js";
import "highcharts/es-modules/masters/modules/heatmap.src.js";

export default Highcharts;

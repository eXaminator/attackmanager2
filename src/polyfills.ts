// Prefer CoreJS over the polyfills above
import 'core-js';
require('zone.js/dist/zone');

if ('production' === ENV) {
    // Production


} else {
    // Development

    Error.stackTraceLimit = Infinity;

    require('zone.js/dist/long-stack-trace-zone');

}

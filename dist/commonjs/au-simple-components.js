"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
function configure(config) {
    config.globalResources([
        './au-event-dispatcher',
        './au-simple-paginator'
    ]);
}
exports.configure = configure;
__export(require("./au-event-dispatcher"));
var au_simple_paginator_1 = require("./au-simple-paginator");
exports.AuSimplePaginator = au_simple_paginator_1.AuSimplePaginator;

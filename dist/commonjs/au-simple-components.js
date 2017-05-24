"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./au-event-dispatcher"));
var au_simple_paginator_1 = require("./au-simple-paginator");
exports.AuSimplePaginator = au_simple_paginator_1.AuSimplePaginator;
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./au-simple-paginator'),
        aurelia_framework_1.PLATFORM.moduleName('./au-event-dispatcher')
    ]);
}
exports.configure = configure;

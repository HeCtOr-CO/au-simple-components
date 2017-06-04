"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./block-element"));
__export(require("./data-service"));
__export(require("./event-dispatcher"));
__export(require("./event-notifier"));
__export(require("./notifier"));
__export(require("./paginable"));
__export(require("./simple-paginator"));
__export(require("./simple-chip-list"));
__export(require("./simple-list-filter"));
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./simple-paginator'),
        aurelia_framework_1.PLATFORM.moduleName('./simple-chip-list'),
        aurelia_framework_1.PLATFORM.moduleName('./simple-list-filter')
    ]);
}
exports.configure = configure;

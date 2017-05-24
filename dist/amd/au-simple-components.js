define(["require", "exports", "aurelia-framework", "./au-event-dispatcher", "./au-simple-paginator"], function (require, exports, aurelia_framework_1, au_event_dispatcher_1, au_simple_paginator_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(au_event_dispatcher_1);
    exports.AuSimplePaginator = au_simple_paginator_1.AuSimplePaginator;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./au-simple-paginator')
        ]);
    }
    exports.configure = configure;
});

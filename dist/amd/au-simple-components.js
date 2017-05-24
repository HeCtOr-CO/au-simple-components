define(["require", "exports", "./au-event-dispatcher", "./au-simple-paginator"], function (require, exports, au_event_dispatcher_1, au_simple_paginator_1) {
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
    __export(au_event_dispatcher_1);
    exports.AuSimplePaginator = au_simple_paginator_1.AuSimplePaginator;
});

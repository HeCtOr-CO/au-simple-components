define(["require", "exports", "aurelia-framework", "./block-element", "./block-element", "./data-service", "./event-dispatcher", "./event-notifier", "./notifier", "./paginable", "./simple-paginator", "./simple-chip-list", "./simple-list-filter"], function (require, exports, aurelia_framework_1, block_element_1, block_element_2, data_service_1, event_dispatcher_1, event_notifier_1, notifier_1, paginable_1, simple_paginator_1, simple_chip_list_1, simple_list_filter_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(block_element_2);
    __export(data_service_1);
    __export(event_dispatcher_1);
    __export(event_notifier_1);
    __export(notifier_1);
    __export(paginable_1);
    __export(simple_paginator_1);
    __export(simple_chip_list_1);
    __export(simple_list_filter_1);
    function configure(config) {
        block_element_1.BlockElement.configure();
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./simple-paginator'),
            aurelia_framework_1.PLATFORM.moduleName('./simple-chip-list'),
            aurelia_framework_1.PLATFORM.moduleName('./simple-list-filter')
        ]);
    }
    exports.configure = configure;
});

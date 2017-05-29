var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "./notifier"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, notifier_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventNotifier = (function () {
        function EventNotifier(eventAggregator, notifier) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.notifier = notifier;
            this.eventAggregator.subscribe('notification:success', function (response) { return _this.notifier.success(response); });
            this.eventAggregator.subscribe('notification:info', function (response) { return _this.notifier.info(response); });
            this.eventAggregator.subscribe('notification:warning', function (response) { return _this.notifier.warning(response); });
            this.eventAggregator.subscribe('notification:error', function (response) { return _this.notifier.error(response); });
        }
        return EventNotifier;
    }());
    EventNotifier = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, notifier_1.Notifier)
    ], EventNotifier);
    exports.EventNotifier = EventNotifier;
});

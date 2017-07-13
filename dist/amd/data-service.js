var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-event-aggregator"], function (require, exports, aurelia_dependency_injection_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = (function () {
        function DataService(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        DataService.prototype.publishServerError = function (methodName) {
            this.eventAggregator.publish('data-service:server-error', {
                service: this.constructor.name,
                methodName: methodName
            });
        };
        DataService.prototype.publishConnectionError = function (methodName) {
            this.eventAggregator.publish('data-service:connection-error', {
                service: this.constructor.name,
                methodName: methodName
            });
        };
        DataService.prototype.simpleJsonFilterToUri = function (value) {
            if (!value)
                return null;
            return Object.keys(value).map(function (key) {
                var currentValue = value[key];
                if (currentValue instanceof Array) {
                    return currentValue.map(function (v) { return "filter." + key + "=" + (v ? v : ''); }).join('&');
                }
                return "filter." + key + "=" + (value[key] ? value[key] : '');
            }).join('&');
        };
        return DataService;
    }());
    DataService = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_event_aggregator_1.EventAggregator)
    ], DataService);
    exports.DataService = DataService;
});

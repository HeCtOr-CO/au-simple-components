"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
require("./au-event-dispatcher");
var AuSimplePaginator = (function () {
    function AuSimplePaginator(element) {
        this.element = element;
    }
    AuSimplePaginator.prototype.first = function () {
        if (this.hasPrevious) {
            this.pageNumber = 1;
            this.paginate();
        }
    };
    AuSimplePaginator.prototype.previous = function () {
        if (this.hasPrevious) {
            this.pageNumber -= 1;
            this.paginate();
        }
    };
    AuSimplePaginator.prototype.next = function () {
        if (this.hasNext) {
            this.pageNumber += 1;
            this.paginate();
        }
    };
    AuSimplePaginator.prototype.last = function () {
        if (this.hasNext) {
            this.pageNumber = this.totalCount / this.pageSize;
            this.paginate();
        }
    };
    AuSimplePaginator.prototype.paginate = function () {
        this.element.dispatch('paginate', this.pageNumber);
    };
    Object.defineProperty(AuSimplePaginator.prototype, "hasPrevious", {
        get: function () {
            return this.pageNumber > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuSimplePaginator.prototype, "hasNext", {
        get: function () {
            return this.pageNumber < this.totalCount / this.pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuSimplePaginator.prototype, "status", {
        get: function () {
            if (!this.totalCount || this.totalCount == 0 || !this.pageSize || this.pageSize == 0)
                return "Sin resultados";
            var start = (this.pageNumber - 1) * this.pageSize + 1;
            var count = this.pageNumber * this.pageSize;
            count = count > this.totalCount ? this.totalCount : count;
            return start + " - " + count + " de " + this.totalCount;
        },
        enumerable: true,
        configurable: true
    });
    return AuSimplePaginator;
}());
__decorate([
    aurelia_framework_1.bindable
], AuSimplePaginator.prototype, "totalCount", void 0);
__decorate([
    aurelia_framework_1.bindable
], AuSimplePaginator.prototype, "pageNumber", void 0);
__decorate([
    aurelia_framework_1.bindable
], AuSimplePaginator.prototype, "pageSize", void 0);
__decorate([
    aurelia_framework_1.computedFrom('pageNumber')
], AuSimplePaginator.prototype, "hasPrevious", null);
__decorate([
    aurelia_framework_1.computedFrom('pageNumber', 'totalCount', 'pageSize')
], AuSimplePaginator.prototype, "hasNext", null);
__decorate([
    aurelia_framework_1.computedFrom('pageNumber', 'totalCount', 'pageSize')
], AuSimplePaginator.prototype, "status", null);
AuSimplePaginator = __decorate([
    aurelia_framework_1.inject(Element)
], AuSimplePaginator);
exports.AuSimplePaginator = AuSimplePaginator;

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "./event-dispatcher"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SimplePaginator = (function () {
        function SimplePaginator(element) {
            this.element = element;
        }
        SimplePaginator.prototype.first = function () {
            if (this.hasPrevious) {
                this.pageNumber = 1;
                this.paginate();
            }
        };
        SimplePaginator.prototype.previous = function () {
            if (this.hasPrevious) {
                this.pageNumber -= 1;
                this.paginate();
            }
        };
        SimplePaginator.prototype.next = function () {
            if (this.hasNext) {
                this.pageNumber += 1;
                this.paginate();
            }
        };
        SimplePaginator.prototype.last = function () {
            if (this.hasNext) {
                this.pageNumber = this.totalCount / this.pageSize;
                this.paginate();
            }
        };
        SimplePaginator.prototype.paginate = function () {
            this.element.dispatch('paginate', this.pageNumber);
        };
        Object.defineProperty(SimplePaginator.prototype, "hasPrevious", {
            get: function () {
                return this.pageNumber > 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimplePaginator.prototype, "hasNext", {
            get: function () {
                return this.pageNumber < this.totalCount / this.pageSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimplePaginator.prototype, "status", {
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
        return SimplePaginator;
    }());
    __decorate([
        aurelia_framework_1.bindable
    ], SimplePaginator.prototype, "totalCount", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], SimplePaginator.prototype, "pageNumber", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], SimplePaginator.prototype, "pageSize", void 0);
    __decorate([
        aurelia_framework_1.computedFrom('pageNumber')
    ], SimplePaginator.prototype, "hasPrevious", null);
    __decorate([
        aurelia_framework_1.computedFrom('pageNumber', 'totalCount', 'pageSize')
    ], SimplePaginator.prototype, "hasNext", null);
    __decorate([
        aurelia_framework_1.computedFrom('pageNumber', 'totalCount', 'pageSize')
    ], SimplePaginator.prototype, "status", null);
    SimplePaginator = __decorate([
        aurelia_framework_1.inject(Element)
    ], SimplePaginator);
    exports.SimplePaginator = SimplePaginator;
});

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
require("./block-element");
var Paginable = (function () {
    function Paginable(dataService) {
        this.dataService = dataService;
        this.model = [];
        this.filter = {};
        this.sort = { property: 'id', direction: 'asc' };
        this.pageNumber = 1;
        this.pageSize = 10;
        this.totalCount = 0;
    }
    Paginable.prototype.loadData = function () {
        var _this = this;
        this.dataContainer.block();
        return this.dataService.list(this.filter, this.sort, { number: this.pageNumber, size: this.pageSize })
            .then(function (response) {
            _this.model = response.data;
            _this.totalCount = response.meta.totalCount;
            _this.dataContainer.unblock();
        }, function () { return _this.dataContainer.unblock(); });
    };
    Paginable.prototype.resetPagination = function () {
        this.pageNumber = 1;
        this.totalCount = 0;
    };
    Paginable.prototype.goToPage = function (number) {
        this.pageNumber = number;
        this.loadData();
    };
    Paginable.prototype.sortBy = function (propertyName) {
        return {
            property: propertyName,
            viewModel: this
        };
    };
    Paginable.prototype.sortChanged = function (newValue, oldValue) {
        if (!oldValue)
            return;
        this.loadData();
    };
    return Paginable;
}());
__decorate([
    aurelia_framework_1.observable
], Paginable.prototype, "sort", void 0);
exports.Paginable = Paginable;

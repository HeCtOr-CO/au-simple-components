var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SimpleListFilter = (function () {
        function SimpleListFilter(element) {
            this.element = element;
            this.filters = [];
            this.isExpanded = true;
        }
        SimpleListFilter.prototype.getFilterItems = function (criteria) {
            return this.filters.filter(criteria);
        };
        SimpleListFilter.prototype.expandCollapse = function () {
            this.isExpanded = !this.isExpanded;
            this.resetBodyHeight();
        };
        SimpleListFilter.prototype.collapse = function () {
            if (!this.isExpanded)
                return;
            this.isExpanded = false;
            this.resetBodyHeight();
        };
        SimpleListFilter.prototype.expand = function () {
            if (this.isExpanded)
                return;
            this.isExpanded = true;
            this.resetBodyHeight();
        };
        SimpleListFilter.prototype.resetBodyHeight = function () {
            if (!this.isExpanded) {
                this.filterBodyElement.style.height = '0';
            }
            else {
                this.filterBodyElement.style.height = this.calcBodyElementHeight() + "px";
            }
        };
        SimpleListFilter.prototype.toggleItems = function (criteria, notify) {
            if (notify === void 0) { notify = true; }
            var filteredItems = this.filters.filter(criteria);
            filteredItems.forEach(function (item) { return item.toggle(false); });
            if (notify)
                this.onFiltering(filteredItems);
        };
        SimpleListFilter.prototype.toggleAll = function (notify) {
            if (notify === void 0) { notify = true; }
            var checkedItems = this.filters.filter(function (f) { return f.isChecked; });
            if (checkedItems.length > 0) {
                checkedItems.forEach(function (i) { return i.toggle(false); });
                if (notify)
                    this.onFiltering(checkedItems);
            }
            else {
                this.filters.forEach(function (i) { return i.toggle(false); });
                if (notify)
                    this.onFiltering(this.filters);
            }
        };
        SimpleListFilter.prototype.onFiltering = function (filterItems) {
            this.element.dispatch('filtering', filterItems);
        };
        SimpleListFilter.prototype.calcBodyElementHeight = function () {
            var itemHeight = 25;
            var selectUnselectLabelHeight = 35;
            var spaceAtBottom = 5;
            return this.items && this.items.length
                ? this.items.length > 10
                    ? itemHeight * 10 + selectUnselectLabelHeight + spaceAtBottom
                    : this.items.length * itemHeight + selectUnselectLabelHeight + spaceAtBottom
                : 0;
        };
        SimpleListFilter.prototype.bindItems = function () {
            var _this = this;
            this.filters = [];
            if (this.items && this.items.length) {
                this.items.forEach(function (i) {
                    _this.filters.push(new FilterItem(_this, i.text, (i.count && i.count > -1) ? i.count : -1, i.data));
                });
            }
            var newHeight = this.calcBodyElementHeight();
            this.filterOptionsElement.style.height = newHeight - 25 + "px";
            if (!this.isExpanded)
                this.expandCollapse();
            else
                this.resetBodyHeight();
        };
        SimpleListFilter.prototype.bind = function () {
            this.bindItems();
        };
        SimpleListFilter.prototype.itemsChanged = function () {
            this.bindItems();
        };
        return SimpleListFilter;
    }());
    __decorate([
        aurelia_framework_1.bindable
    ], SimpleListFilter.prototype, "filterTitle", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], SimpleListFilter.prototype, "items", void 0);
    SimpleListFilter = __decorate([
        aurelia_framework_1.inject(Element)
    ], SimpleListFilter);
    exports.SimpleListFilter = SimpleListFilter;
    var FilterItem = (function () {
        function FilterItem(parent, text, count, data) {
            if (count === void 0) { count = -1; }
            if (data === void 0) { data = null; }
            this.parent = parent;
            this.text = text;
            this.count = count;
            this.data = data;
            this._isChecked = false;
        }
        Object.defineProperty(FilterItem.prototype, "isChecked", {
            get: function () {
                return this._isChecked;
            },
            enumerable: true,
            configurable: true
        });
        FilterItem.prototype.toggle = function (notify) {
            if (notify === void 0) { notify = true; }
            this._isChecked = !this._isChecked;
            if (notify) {
                this.parent.onFiltering([this]);
            }
        };
        return FilterItem;
    }());
    __decorate([
        aurelia_framework_1.computedFrom('_isChecked')
    ], FilterItem.prototype, "isChecked", null);
    exports.FilterItem = FilterItem;
});

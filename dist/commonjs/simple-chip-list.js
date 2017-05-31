"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var SimpleChipList = (function () {
    function SimpleChipList(element) {
        this.element = element;
        this.chips = [];
    }
    SimpleChipList.prototype.addChip = function (chipOrChips, notify) {
        var _this = this;
        if (notify === void 0) { notify = true; }
        if (chipOrChips instanceof Chip) {
            this.chips.push(chipOrChips);
            if (notify) {
                this.element.dispatch('added', [chipOrChips]);
            }
        }
        else if (chipOrChips instanceof Array) {
            chipOrChips.forEach(function (chip) { return _this.chips.push(chip); });
            if (notify) {
                this.element.dispatch('added', chipOrChips);
            }
        }
    };
    SimpleChipList.prototype.removeChip = function (chipOrCriteria, notify) {
        var _this = this;
        if (notify === void 0) { notify = true; }
        if (chipOrCriteria instanceof Chip) {
            var index = this.chips.indexOf(chipOrCriteria);
            if (index < 0)
                return;
            var removedChips = this.chips.splice(index, 1);
            if (notify) {
                this.element.dispatch('removed', removedChips);
            }
        }
        else if (chipOrCriteria instanceof Function) {
            var chips = this.chips.filter(chipOrCriteria);
            chips.forEach(function (chip) { return _this.removeChip(chip, false); });
            if (notify) {
                this.element.dispatch('removed', chips);
            }
        }
    };
    SimpleChipList.prototype.getChips = function (criteria) {
        return this.chips.filter(criteria);
    };
    SimpleChipList.prototype.clearAll = function (notify) {
        if (notify === void 0) { notify = true; }
        var chips = this.chips;
        this.chips = [];
        if (notify) {
            this.element.dispatch('removed', chips);
        }
    };
    return SimpleChipList;
}());
SimpleChipList = __decorate([
    aurelia_framework_1.inject(Element)
], SimpleChipList);
exports.SimpleChipList = SimpleChipList;
var Chip = (function () {
    function Chip(text, data) {
        if (data === void 0) { data = null; }
        this.text = text;
        this.data = data;
        this.highlighted = false;
    }
    Chip.prototype.highlight = function () {
        var _this = this;
        this.highlighted = true;
        setTimeout(function () {
            _this.highlighted = false;
        }, 500);
    };
    return Chip;
}());
exports.Chip = Chip;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simpleJsonFilterToUri(value) {
    if (!value)
        return null;
    return Object.keys(value).map(function (key) {
        var currentValue = value[key];
        if (currentValue instanceof Array) {
            return currentValue.map(function (v) { return "filter." + key + "=" + (v ? v : ''); }).join('&');
        }
        return "filter." + key + "=" + ((value[key] === null || value[key] === undefined) ? '' : value[key]);
    }).join('&');
}
exports.simpleJsonFilterToUri = simpleJsonFilterToUri;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventDispatcher = (function () {
    function EventDispatcher() {
        Element.prototype.dispatch = EventDispatcher.dispatchEvent;
    }
    EventDispatcher.dispatchEvent = function () {
        var element = this;
        var eventName = arguments[0];
        var eventDetail = arguments[1];
        var customEvent;
        if (window.CustomEvent) {
            customEvent = new CustomEvent(eventName, {
                detail: eventDetail,
                bubbles: true
            });
        }
        else {
            customEvent = document.createEvent('CustomEvent');
            customEvent.initCustomEvent(eventName, true, true, {
                detail: eventDetail
            });
        }
        element.dispatchEvent(customEvent);
    };
    return EventDispatcher;
}());
exports.EventDispatcher = EventDispatcher;
var eventDispatcher;
eventDispatcher = new EventDispatcher();

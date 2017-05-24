define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuEventDispatcher = (function () {
        function AuEventDispatcher() {
            Element.prototype.dispatch = AuEventDispatcher.dispatchEvent;
        }
        AuEventDispatcher.dispatchEvent = function () {
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
        return AuEventDispatcher;
    }());
    exports.AuEventDispatcher = AuEventDispatcher;
    var eventDispatcher;
    eventDispatcher = new AuEventDispatcher();
});

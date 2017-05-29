define(["require", "exports", "toastr"], function (require, exports, toastr) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Notifier = (function () {
        function Notifier() {
            toastr.options.closeButton = true;
        }
        Notifier.prototype.success = function (message) {
            toastr.success(message);
        };
        Notifier.prototype.info = function (message) {
            toastr.info(message);
        };
        Notifier.prototype.warning = function (message) {
            toastr.warning(message);
        };
        Notifier.prototype.error = function (message) {
            toastr.error(message);
        };
        return Notifier;
    }());
    exports.Notifier = Notifier;
});

define(["require", "exports", "jquery", "block-ui"], function (require, exports, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlockElement = (function () {
        function BlockElement() {
            this.configure();
            Element.prototype.block = BlockElement.block;
            Element.prototype.unblock = BlockElement.unblock;
        }
        BlockElement.prototype.configure = function () {
            // $.blockUI.defaults.message = '<i class="fa fa-spin fa-2x fa-spinner"></i>';
            $.blockUI.defaults.message = '';
            $.blockUI.defaults.css.border = 'none';
            $.blockUI.defaults.css.backgroundColor = 'transparent';
            $.blockUI.defaults.overlayCSS.backgroundColor = '#fff';
        };
        BlockElement.block = function () {
            var element = this;
            if (element._blocked)
                return;
            element._blocked = true;
            $(element).block();
        };
        BlockElement.unblock = function () {
            var element = this;
            element._blocked = false;
            $(element).unblock();
        };
        return BlockElement;
    }());
    exports.BlockElement = BlockElement;
    var blockui;
    blockui = new BlockElement();
});

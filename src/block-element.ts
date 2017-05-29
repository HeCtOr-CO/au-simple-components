import 'block-ui';
import * as $ from 'jquery';

declare global {
  interface Element {
    block(): void;
    unblock(): void;
  }
}

export class BlockElement {

  constructor() {
    this.configure();
    (<any>Element.prototype).block = BlockElement.block;
    (<any>Element.prototype).unblock = BlockElement.unblock;
  }

  configure() {
    // $.blockUI.defaults.message = '<i class="fa fa-spin fa-2x fa-spinner"></i>';
    $.blockUI.defaults.message = '';
    $.blockUI.defaults.css.border = 'none';
    $.blockUI.defaults.css.backgroundColor = 'transparent';
    $.blockUI.defaults.overlayCSS.backgroundColor = '#fff';
  }

  private static block() {
    var element: Element = <any>this;
    if ((<any>element)._blocked) return;
    (<any>element)._blocked = true;
    $(element).block();
  }

  private static unblock() {
    var element: Element = <any>this;
    (<any>element)._blocked = false;
    $(element).unblock();
  }

}

let blockui: BlockElement;
blockui = new BlockElement();
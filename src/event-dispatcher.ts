declare global {
  interface Element {
    dispatch(name: string, data: any): void;
  }
}

export class EventDispatcher {
  constructor() {
    (<any>Element.prototype).dispatch = EventDispatcher.dispatchEvent;
  }

  private static dispatchEvent() {
    var element: HTMLElement = <any>this;
    var eventName = arguments[0];
    var eventDetail = arguments[1];
    var customEvent: CustomEvent;
    if ((<any>window).CustomEvent) {
      customEvent = new CustomEvent(eventName, {
        detail: eventDetail,
        bubbles: true
      })
    } else {
      customEvent = document.createEvent('CustomEvent');
      customEvent.initCustomEvent(eventName, true, true, {
        detail: eventDetail
      });
    }
    element.dispatchEvent(customEvent);
  }

}

let eventDispatcher: EventDispatcher;
eventDispatcher = new EventDispatcher();
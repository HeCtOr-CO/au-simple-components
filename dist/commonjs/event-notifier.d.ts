import { EventAggregator } from 'aurelia-event-aggregator';
import { Notifier } from './notifier';
export declare class EventNotifier {
    private eventAggregator;
    private notifier;
    constructor(eventAggregator: EventAggregator, notifier: Notifier);
}

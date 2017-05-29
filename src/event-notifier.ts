import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Notifier } from './notifier';

@inject(EventAggregator, Notifier)
export class EventNotifier {
  constructor(private eventAggregator: EventAggregator, private notifier: Notifier) {
    this.eventAggregator.subscribe('notification:success', (response: any) => this.notifier.success(response));
    this.eventAggregator.subscribe('notification:info', (response: any) => this.notifier.info(response));
    this.eventAggregator.subscribe('notification:warning', (response: any) => this.notifier.warning(response));
    this.eventAggregator.subscribe('notification:error', (response: any) => this.notifier.error(response));
  }
}
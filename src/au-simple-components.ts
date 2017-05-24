import { FrameworkConfiguration } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources(
    [
      './au-event-dispatcher',
      './au-simple-paginator'
    ]);
}

export * from './au-event-dispatcher';
export { AuSimplePaginator } from './au-simple-paginator';
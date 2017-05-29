import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export * from './block-element';
export * from './data-service';
export * from './event-dispatcher';
export * from './event-notifier';
export * from './notifier';
export * from './paginable';
export * from './simple-paginator';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([
    PLATFORM.moduleName('./simple-paginator')
  ]);
}
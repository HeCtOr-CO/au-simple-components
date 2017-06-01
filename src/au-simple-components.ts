import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export * from './block-element';
export * from './data-service';
export * from './event-dispatcher';
export * from './event-notifier';
export * from './notifier';
export * from './paginable';
export * from './simple-paginator';
export * from './simple-chip-list';
export * from './simple-list-filter';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([
    PLATFORM.moduleName('./simple-paginator'),
    PLATFORM.moduleName('./simple-chip-list'),
    PLATFORM.moduleName('./simple-list-filter')
  ]);
}
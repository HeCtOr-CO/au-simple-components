import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export * from './event-dispatcher';
export * from './simple-paginator';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([
    PLATFORM.moduleName('./simple-paginator')
  ]);
}
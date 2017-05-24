import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export * from './au-event-dispatcher';
export { AuSimplePaginator } from './au-simple-paginator';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([
    PLATFORM.moduleName('./au-simple-paginator')
  ]);
}
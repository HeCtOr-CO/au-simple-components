import { inject } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';

export interface IResult<TModel> {
  data: TModel;
  meta?: any;
  included?: any;
}

export interface IDataService<TModel> {
  get(id: any): Promise<IResult<TModel>>;

  list(filter: any, sort: any, page: { number: number, size: number }): Promise<IResult<Array<TModel>>>;

  create(model: TModel): Promise<IResult<TModel>>;

  update(model: TModel): Promise<boolean>;
}

@inject(EventAggregator)
export abstract class DataService<TModel> implements IDataService<TModel> {

  constructor(protected eventAggregator: EventAggregator) {

  }

  abstract get(id: any): Promise<IResult<TModel>>;

  abstract list(filter: any, sort: any, page: { number: number, size: number }): Promise<IResult<Array<TModel>>>;

  abstract create(model: TModel): Promise<IResult<TModel>>;

  abstract update(model: TModel): Promise<boolean>;

  publishServerError(methodName: string) {
    this.eventAggregator.publish('data-service:server-error', {
      service: this.constructor.name,
      methodName: methodName
    });
  }

  publishConnectionError(methodName: string) {
    this.eventAggregator.publish('data-service:connection-error', {
      service: this.constructor.name,
      methodName: methodName
    });
  }

  simpleJsonFilterToUri(value: any) {
    if (!value) return null;
    return Object.keys(value).map(key => {
      var currentValue = value[key];
      if(currentValue instanceof Array) {
        return (<Array<any>>currentValue).map(v => `filter.${key}=${v ? v : ''}`).join('&');
      }
      return `filter.${key}=${value[key] ? value[key] : ''}`
    }).join('&');
  }
}
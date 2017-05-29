import { EventAggregator } from 'aurelia-event-aggregator';
export interface IResult<TModel> {
    data: TModel;
    meta?: any;
    included?: any;
}
export interface IDataService<TModel> {
    get(id: any): Promise<IResult<TModel>>;
    list(filter: any, sort: any, page: {
        number: number;
        size: number;
    }): Promise<IResult<Array<TModel>>>;
    create(model: TModel): Promise<IResult<TModel>>;
    update(id: any, model: any): Promise<boolean>;
}
export declare abstract class DataService<TModel> implements IDataService<TModel> {
    protected eventAggregator: EventAggregator;
    constructor(eventAggregator: EventAggregator);
    abstract get(id: any): Promise<IResult<TModel>>;
    abstract list(filter: any, sort: any, page: {
        number: number;
        size: number;
    }): Promise<IResult<Array<TModel>>>;
    abstract create(model: TModel): Promise<IResult<TModel>>;
    abstract update(id: any, model: any): Promise<boolean>;
    publishServerError(methodName: string): void;
    publishConnectionError(methodName: string): void;
    simpleJsonFilterToUri(value: any): string;
}

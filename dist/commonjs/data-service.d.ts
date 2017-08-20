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
    update(model: TModel): Promise<boolean>;
}
export declare function simpleJsonFilterToUri(value: any): string;

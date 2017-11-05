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

export function simpleJsonFilterToUri(value: any) {
  if (!value) return null;
  return Object.keys(value).map(key => {
    var currentValue = value[key];
    if (currentValue instanceof Array) {
      return (<Array<any>>currentValue).map(v => `filter.${key}=${v ? v : ''}`).join('&');
    }
    return `filter.${key}=${(value[key] === null || value[key] === undefined) ? '' : value[key]}`
  }).join('&');
}
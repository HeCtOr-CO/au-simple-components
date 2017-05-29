import { IDataService } from './data-service';
import './block-element';
export interface ISortable {
    sort: any;
}
export declare class Paginable<TModel> {
    dataService: IDataService<TModel>;
    model: Array<TModel>;
    dataContainer: HTMLElement;
    filter: any;
    sort: any;
    pageNumber: number;
    pageSize: number;
    totalCount: number;
    constructor(dataService: IDataService<TModel>);
    loadData(): void;
    resetPagination(): void;
    goToPage(number: number): void;
    sortBy(propertyName: string): any;
    sortChanged(newValue: any, oldValue: any): void;
}

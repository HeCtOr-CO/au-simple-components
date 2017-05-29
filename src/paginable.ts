import { observable } from 'aurelia-framework';
import { IDataService } from './data-service';
import './block-element';

export interface ISortable {
  sort: any;
}

export class Paginable<TModel> {
  dataService: IDataService<TModel>;

  model: Array<TModel>;

  dataContainer: HTMLElement;

  filter: any;
  @observable sort: any;
  pageNumber: number;
  pageSize: number;
  totalCount: number;

  constructor(dataService: IDataService<TModel>) {
    this.dataService = dataService;

    this.model = [];

    this.filter = {};
    this.sort = { property: 'id', direction: 'asc' };
    this.pageNumber = 1;
    this.pageSize = 10;
    this.totalCount = 0;
  }

  loadData() {
    this.dataContainer.block();
    this.dataService.list(this.filter, this.sort, { number: this.pageNumber, size: this.pageSize })
      .then(response => {
        this.model = response.data;
        this.totalCount = response.meta.totalCount;
        this.dataContainer.unblock();
      }, () => this.dataContainer.unblock());
  }

  resetPagination() {
    this.pageNumber = 1;
    this.totalCount = 0;
  }

  goToPage(number: number) {
    this.pageNumber = number;
    this.loadData();
  }

  sortBy(propertyName: string): any {
    return {
      property: propertyName,
      viewModel: this
    }
  }

  sortChanged(newValue: any, oldValue: any) {
    if (!oldValue) return;
    this.loadData();
  }

}
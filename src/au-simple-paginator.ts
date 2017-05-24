import { inject, bindable, computedFrom } from 'aurelia-framework';
import './au-event-dispatcher';

@inject(Element)
export class AuSimplePaginator {
  @bindable totalCount: number;
  @bindable pageNumber: number;
  @bindable pageSize: number;

  constructor(private element: HTMLElement) {

  }

  first() {
    if (this.hasPrevious) {
      this.pageNumber = 1;
      this.paginate();
    }
  }

  previous() {
    if (this.hasPrevious) {
      this.pageNumber -= 1;
      this.paginate();
    }
  }

  next() {
    if (this.hasNext) {
      this.pageNumber += 1;
      this.paginate();
    }
  }

  last() {
    if (this.hasNext) {
      this.pageNumber = this.totalCount / this.pageSize;
      this.paginate();
    }
  }

  private paginate() {
    this.element.dispatch('paginate', this.pageNumber);
  }

  @computedFrom('pageNumber')
  get hasPrevious() {
    return this.pageNumber > 1;
  }

  @computedFrom('pageNumber', 'totalCount', 'pageSize')
  get hasNext() {
    return this.pageNumber < this.totalCount / this.pageSize;
  }

  @computedFrom('pageNumber', 'totalCount', 'pageSize')
  get status() {
    if (!this.totalCount || this.totalCount == 0 || !this.pageSize || this.pageSize == 0) return "Sin resultados";
    var start = (this.pageNumber - 1) * this.pageSize + 1;
    var count = this.pageNumber * this.pageSize;
    count = count > this.totalCount ? this.totalCount : count;
    return `${start} - ${count} de ${this.totalCount}`;
  }
}
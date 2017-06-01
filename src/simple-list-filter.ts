import { inject, bindable, computedFrom } from 'aurelia-framework';

@inject(Element)
export class SimpleListFilter {
  private filters: Array<FilterItem>;

  @bindable title: string;
  @bindable isCollapsed: boolean;
  @bindable items: Array<any>;

  private filterBodyElement: HTMLElement;
  private filterOptionsElement: HTMLElement;

  constructor(private element: Element) {
    this.filters = [];
    this.isCollapsed = false;
  }

  getFilterItems(criteria: ((i: FilterItem) => void)) {
    return this.filters.filter(criteria);
  }

  collapseUncollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.resetBodyHeight();
  }

  private resetBodyHeight() {
    if (this.isCollapsed) {
      this.filterBodyElement.style.height = '0';
    } else {
      this.filterBodyElement.style.height = `${this.calcBodyElementHeight()}px`;
    }
  }

  toggleItems(criteria: ((i: FilterItem) => void), notify: boolean = true) {
    var filteredItems = this.filters.filter(criteria);
    filteredItems.forEach(item => item.toggle(false));
    if (notify)
      this.onFiltering(filteredItems);
  }

  toggleAll(notify: boolean = true) {
    var checkedItems = this.filters.filter(f => f.isChecked);
    if (checkedItems.length > 0) {
      checkedItems.forEach(i => i.toggle(false));
      if (notify)
        this.onFiltering(checkedItems);
    } else {
      this.filters.forEach(i => i.toggle(false));
      if (notify)
        this.onFiltering(this.filters);
    }
  }

  onFiltering(filterItems: Array<any>) {
    this.element.dispatch('filtering', filterItems);
  }

  private calcBodyElementHeight() {
    var itemHeight: number = 25;
    var selectUnselectLabelHeight: number = 25;
    return this.items && this.items.length
      ? this.items.length > 10
        ? itemHeight * 10 + selectUnselectLabelHeight
        : this.items.length * itemHeight + selectUnselectLabelHeight
      : 0;
  }

  private bindItems() {
    this.filters = [];
    if (this.items && this.items.length) {
      this.items.forEach(i => {
        this.filters.push(new FilterItem(this, i.text, (i.count && i.count > -1) ? i.count : -1, i.data));
      });
    }
    var newHeight = this.calcBodyElementHeight();
    this.filterOptionsElement.style.height = `${newHeight - 25}px`;
    if (this.isCollapsed)
      this.collapseUncollapse();
    else
      this.resetBodyHeight();
  }

  bind() {
    this.bindItems();
  }

  itemsChanged() {
    this.bindItems();
  }
}

export class FilterItem {
  private _isChecked: boolean;

  constructor(private parent: SimpleListFilter, public text: string, public count: number = -1, public data: any = null) {
    this._isChecked = false;
  }

  @computedFrom('_isChecked')
  get isChecked() {
    return this._isChecked;
  }

  toggle(notify: boolean = true) {
    this._isChecked = !this._isChecked;
    if (notify) {
      this.parent.onFiltering([this]);
    }
  }

}
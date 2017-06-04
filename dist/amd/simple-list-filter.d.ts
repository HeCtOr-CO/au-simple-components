export declare class SimpleListFilter {
    private element;
    private filters;
    filterTitle: string;
    isCollapsed: boolean;
    items: Array<any>;
    private filterBodyElement;
    private filterOptionsElement;
    constructor(element: Element);
    getFilterItems(criteria: ((i: FilterItem) => void)): FilterItem[];
    collapseUncollapse(): void;
    private resetBodyHeight();
    toggleItems(criteria: ((i: FilterItem) => void), notify?: boolean): void;
    toggleAll(notify?: boolean): void;
    onFiltering(filterItems: Array<any>): void;
    private calcBodyElementHeight();
    private bindItems();
    bind(): void;
    itemsChanged(): void;
}
export declare class FilterItem {
    private parent;
    text: string;
    count: number;
    data: any;
    private _isChecked;
    constructor(parent: SimpleListFilter, text: string, count?: number, data?: any);
    readonly isChecked: boolean;
    toggle(notify?: boolean): void;
}

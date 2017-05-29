import './event-dispatcher';
export declare class SimplePaginator {
    private element;
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    constructor(element: HTMLElement);
    first(): void;
    previous(): void;
    next(): void;
    last(): void;
    private paginate();
    readonly hasPrevious: boolean;
    readonly hasNext: boolean;
    readonly status: string;
}

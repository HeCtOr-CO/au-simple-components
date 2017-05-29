declare global  {
    interface Element {
        dispatch(name: string, data: any): void;
    }
}
export declare class EventDispatcher {
    constructor();
    private static dispatchEvent();
}
export {};

declare global  {
    interface Element {
        dispatch(name: string, data: any): void;
    }
}
export declare class AuEventDispatcher {
    constructor();
    private static dispatchEvent();
}
export {};

import 'block-ui';
declare global  {
    interface Element {
        block(): void;
        unblock(): void;
    }
}
export declare class BlockElement {
    constructor();
    configure(): void;
    private static block();
    private static unblock();
}

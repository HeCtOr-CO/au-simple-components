import 'block-ui';
declare global  {
    interface Element {
        block(): void;
        unblock(): void;
    }
}
export declare class BlockElement {
    static configure(): void;
    private static block();
    private static unblock();
}

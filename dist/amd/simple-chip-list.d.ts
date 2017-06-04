export declare class SimpleChipList {
    private element;
    private chips;
    items: Array<any>;
    constructor(element: Element);
    addChip(chipOrChips: Chip | Array<Chip>, notify?: boolean): void;
    removeChip(chipOrCriteria: Chip | ((c: Chip) => void), notify?: boolean): void;
    getChips(criteria: ((c: Chip) => void)): Chip[];
    clearAll(notify?: boolean): void;
    bindItems(): void;
    bind(): void;
    itemsChanged(): void;
}
export declare class Chip {
    text: string;
    data: any;
    private highlighted;
    constructor(text: string, data?: any);
    highlight(): void;
}

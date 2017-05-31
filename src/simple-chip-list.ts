import { inject } from 'aurelia-framework';

@inject(Element)
export class SimpleChipList {
  private chips: Array<Chip>;

  constructor(private element: Element) {
    this.chips = [];
  }

  addChip(chipOrChips: Chip | Array<Chip>, notify: boolean = true) {
    if (chipOrChips instanceof Chip) {
      this.chips.push(chipOrChips);
      if (notify) {
        this.element.dispatch('added', [chipOrChips]);
      }
    } else if (chipOrChips instanceof Array) {
      chipOrChips.forEach(chip => this.chips.push(chip));
      if (notify) {
        this.element.dispatch('added', chipOrChips);
      }
    }
  }

  removeChip(chipOrCriteria: Chip | ((c: Chip) => void), notify: boolean = true) {
    if (chipOrCriteria instanceof Chip) {
      var index = this.chips.indexOf(chipOrCriteria);
      if (index < 0) return;
      var removedChips = this.chips.splice(index, 1);
      if (notify) {
        this.element.dispatch('removed', removedChips);
      }
    }
    else if (chipOrCriteria instanceof Function) {
      var chips = this.chips.filter(chipOrCriteria);
      chips.forEach(chip => this.removeChip(chip, false));
      if (notify) {
        this.element.dispatch('removed', chips);
      }
    }
  }

  getChips(criteria: ((c: Chip) => void)) {
    return this.chips.filter(criteria);
  }

  clearAll(notify: boolean = true) {
    var chips = this.chips;
    this.chips = [];
    if (notify) {
      this.element.dispatch('removed', chips);
    }
  }

}

export class Chip {
  private highlighted: boolean;

  constructor(public text: string, public data: any = null) {
    this.highlighted = false;
  }

  highlight() {
    this.highlighted = true;
    setTimeout(() => {
      this.highlighted = false;
    }, 500);
  }

}
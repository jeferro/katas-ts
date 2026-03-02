import {Item} from "./Item";

export class AgedBrie extends Item {

  constructor(sellIn: number,
              quality: number) {
    super('Aged Brie', sellIn, quality);
  }

  update(): void {
    this.sellIn = this.sellIn - 1

    if (this.quality < 50) {
      const qualityDiff = this.sellIn < 0 ? 2 : 1

      this.quality += qualityDiff
    }
  }

}
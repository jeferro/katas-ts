import {Item} from "./Item";

export class AgedBrie extends Item {

  constructor(sellIn: number,
              quality: number) {
    super(sellIn, quality);
  }

  update(): void {
    this.decrementSellIn();

    const qualityDiff = this.hasSellInPassed() ? 2 : 1

    this.incrementQuality(qualityDiff);
  }
}
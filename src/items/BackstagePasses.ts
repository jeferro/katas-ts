import {Item} from "./Item";

export class BackstagePasses extends Item {

  constructor(sellIn: number,
              quality: number) {
    super(sellIn, quality);
  }

  update(): void {
    this.decrementSellIn()

    if (this.hasSellInPassed()) {
      this.removeQuality();
      return;
    }

    const qualityDiff = this.sellIn < 7 ? 3 : 2

    this.incrementQuality(qualityDiff)
  }
}
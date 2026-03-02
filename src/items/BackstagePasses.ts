import {Item} from "./Item";

export class BackstagePasses extends Item {

  constructor(sellIn: number,
              quality: number) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
  }

  update(): void {

    if (this.quality < 50) {

      this.quality = this.quality + 1

      if (this.quality < 50) {

        const qualityDiff = this.sellIn < 6 ? 2 : 1

        this.quality = this.quality + qualityDiff

      }
    }

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      this.quality = 0
    }
  }
}
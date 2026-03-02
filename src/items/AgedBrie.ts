import {Item} from "./Item";

export class AgedBrie extends Item {

  constructor(sellIn: number,
              quality: number) {
    super('Aged Brie', sellIn, quality);
  }

  update(): void {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }

    this.sellIn = this.sellIn - 1

    if (this.sellIn < 0 && this.quality < 50) {
      this.quality = this.quality + 1
    }
  }

}
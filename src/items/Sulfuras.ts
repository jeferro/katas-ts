import {Item} from "./Item";

export class Sulfuras extends Item {

  constructor(public name: string,
              public sellIn: number,
              public quality: number) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality);
  }

  update(): void {
    if (this.name === 'Sulfuras, Hand of Ragnaros') {
      return;
    }

    if (this.quality < 50) {

      this.quality = this.quality + 1

      if (this.name == 'Backstage passes to a TAFKAL80ETC concert'
          && this.quality < 50) {

        const qualityDiff = this.sellIn < 6 ? 2 : 1

        this.quality = this.quality + qualityDiff

      }
    }

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      if (this.name == 'Aged Brie') {
        if (this.quality < 50) {
          this.quality = this.quality + 1
        }
      } else if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.quality = 0
      }
    }
  }
}
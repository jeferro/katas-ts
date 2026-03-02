export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
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

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      this.items[i].update()
    }

    return this.items;
  }
}

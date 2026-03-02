export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        continue;
      }

      if (this.items[i].quality < 50) {

        this.items[i].quality = this.items[i].quality + 1

        if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'
            && this.items[i].quality < 50) {

          const qualityDiff = this.items[i].sellIn < 6 ? 2 : 1

          this.items[i].quality = this.items[i].quality + qualityDiff

        }
      }

      this.items[i].sellIn = this.items[i].sellIn - 1;

      if (this.items[i].sellIn < 0) {
        if (this.items[i].name == 'Aged Brie') {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        } else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          this.items[i].quality = 0
        }
      }
    }

    return this.items;
  }
}

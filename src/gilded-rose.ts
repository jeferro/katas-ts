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
      let item = this.items[i];

      this.updateQualityOfItem(item);
    }

    return this.items;
  }

  private updateQualityOfItem(item: Item) {
    if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        if (item.quality > 0) {
          item.quality = item.quality - 1
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1

        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {

          if (item.quality < 50) {
            if (item.sellIn < 11) {
              item.quality = item.quality + 1
            }
            if (item.sellIn < 6) {
              item.quality = item.quality + 1
            }
          }
        }
      }
    }

    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }

    if (item.sellIn < 0) {
      if (item.name == 'Aged Brie') {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        item.quality = 0
      } else if (item.name != 'Sulfuras, Hand of Ragnaros') {
        if (item.quality > 0) {
          item.quality = item.quality - 1
        }
      }
    }
  }
}

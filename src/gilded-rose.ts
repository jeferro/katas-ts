export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  public updateQualityOfItem(name: string = this.name) {
    switch (name){
      case 'Aged Brie':
        this.updateQuality('Aged Brie')
        break
      case 'Sulfuras, Hand of Ragnaros':
        this.updateQuality('Sulfuras, Hand of Ragnaros')
        break
      case 'Backstage passes to a TAFKAL80ETC concert':
        this.updateQuality('Backstage passes to a TAFKAL80ETC concert')
        break
      default:
        this.updateQuality(name)
    }
  }

  private updateQuality(name: string) {
    if (name != 'Aged Brie' && name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (name != 'Sulfuras, Hand of Ragnaros') {
        if (this.quality > 0) {
          this.quality = this.quality - 1
        }
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1

        if (name == 'Backstage passes to a TAFKAL80ETC concert') {

          if (this.quality < 50) {
            if (this.sellIn < 11) {
              this.quality = this.quality + 1
            }
            if (this.sellIn < 6) {
              this.quality = this.quality + 1
            }
          }
        }
      }
    }

    if (name != 'Sulfuras, Hand of Ragnaros') {
      this.sellIn = this.sellIn - 1;
    }

    if (this.sellIn < 0) {
      if (name == 'Aged Brie') {
        if (this.quality < 50) {
          this.quality = this.quality + 1
        }
      } else if (name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.quality = 0
      } else if (name != 'Sulfuras, Hand of Ragnaros') {
        if (this.quality > 0) {
          this.quality = this.quality - 1
        }
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
      let item = this.items[i];

      item.updateQualityOfItem();
    }

    return this.items;
  }
}

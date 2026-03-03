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
    switch (name) {
      case 'Aged Brie':
        this.updateQualityOfAgedBrie()
        break
      case 'Sulfuras, Hand of Ragnaros':
        this.updateQualitySulfuras()
        break
      case 'Backstage passes to a TAFKAL80ETC concert':
        this.updateQualityOfBackstagePasses()
        break
      default:
        this.updateQualityOther(name)
    }
  }

  private updateQualityOfAgedBrie() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0 && this.quality < 50) {
      this.quality = this.quality + 1

    }
  }

  private updateQualityOfBackstagePasses() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }

    if (this.quality < 50) {
      if (this.sellIn < 11) {
        this.quality = this.quality + 1
      }
      if (this.sellIn < 6) {
        this.quality = this.quality + 1
      }
    }

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      this.quality = 0
    }
  }

  private updateQualitySulfuras() {

  }

  private updateQualityOther(name: string) {
    if (this.quality > 0) {
      this.quality = this.quality - 1
    }

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      if (this.quality > 0) {
        this.quality = this.quality - 1
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

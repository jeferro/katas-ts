export class Item {

  constructor(public name: string,
              public sellIn: number,
              public quality: number) {
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
    this.decrementSellIn();

    this.incrementQuality()

    if (this.hasSellInPassed()) {
      this.incrementQuality();
    }
  }

  private updateQualityOfBackstagePasses() {
    this.decrementSellIn()

    if (this.hasSellInPassed()) {
      this.quality = 0
      return
    }

    this.incrementQuality()

    if (this.sellIn < 11) {
      this.incrementQuality()
    }

    if (this.sellIn < 6) {
      this.incrementQuality()
    }
  }

  private updateQualitySulfuras() {

  }

  private updateQualityOther(name: string) {
    if (this.quality > 0) {
      this.quality = this.quality - 1
    }

    this.sellIn = this.sellIn - 1;

    if (this.hasSellInPassed()) {
      if (this.quality > 0) {
        this.quality = this.quality - 1
      }

    }
  }

  private hasSellInPassed() {
    return this.sellIn < 0;
  }

  private decrementSellIn() {
    this.sellIn = this.sellIn - 1;
  }

  private incrementQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }
  }
}

export class GildedRose {
  constructor(public items: Array<Item> = []) {

  }

  updateQuality() {
    this.items.forEach(item => item.updateQualityOfItem())

    return this.items;
  }
}

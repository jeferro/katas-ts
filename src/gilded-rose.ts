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
        this.updateQualityOther()
    }
  }

  private updateQualityOfAgedBrie() {
    this.decrementSellIn();

    if (this.hasSellInPassed()) {
      this.incrementQuality(2)
    }
    else{
      this.incrementQuality(1)
    }
  }

  private updateQualityOfBackstagePasses() {
    this.decrementSellIn()

    if (this.hasSellInPassed()) {
      this.quality = 0
      return
    }

    this.incrementQuality(1)

    if (this.sellIn < 11) {
      this.incrementQuality(1)
    }

    if (this.sellIn < 6) {
      this.incrementQuality(1)
    }
  }

  private updateQualitySulfuras() {

  }

  private updateQualityOther() {
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

  private incrementQuality(increment: number) {
    if (this.quality < 50) {
      this.quality = this.quality + increment
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

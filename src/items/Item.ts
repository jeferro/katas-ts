export abstract class Item {

  protected constructor(public sellIn: number,
                        public quality: number) {
  }

  abstract update(): void;

  protected incrementQuality(qualityDiff: number) {
    this.quality += qualityDiff

    if(qualityDiff > 50){
      this.quality = 50
    }
  }

  protected removeQuality() {
    this.quality = 0
  }

  protected decrementSellIn() {
    this.sellIn = this.sellIn - 1
  }

  protected hasSellInPassed() {
    return this.sellIn < 0;
  }
}

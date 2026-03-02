export abstract class Item {

  protected constructor(public name: string,
                        public sellIn: number,
                        public quality: number) {
  }

  static create(name: string, sellIn: number, quality: number): Item {
    if(name === 'Sulfuras, Hand of Ragnaros'){
      return new Sulfuras(name, sellIn, quality)
    }
    else if(name === 'Aged Brie'){
      return new AgedBrie(name, sellIn, quality)
    }
    else if(name === 'Backstage passes to a TAFKAL80ETC concert'){
      return new BackstagePasses(name, sellIn, quality)
    }
    else {
      throw new Error(`Unknown name ${name}`)
    }
  }

  abstract update(): void;
}

class AgedBrie extends Item {

  constructor(public name: string,
              public sellIn: number,
              public quality: number) {
    super('Aged Brie', sellIn, quality);
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

class BackstagePasses extends Item {

  constructor(public name: string,
              public sellIn: number,
              public quality: number) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
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

class Sulfuras extends Item {

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

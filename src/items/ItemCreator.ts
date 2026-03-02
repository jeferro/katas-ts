import {Sulfuras} from "./Sulfuras";
import {AgedBrie} from "./AgedBrie";
import {BackstagePasses} from "./BackstagePasses";
import {Item} from "./Item";

export class ItemCreator {

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
}
import { describe, expect } from 'vitest'
import {GildedRose} from "./gilded-rose";
import {Item} from "./items/Item";
import {Sulfuras} from "./items/Sulfuras";
import {AgedBrie} from "./items/AgedBrie";
import {BackstagePasses} from "./items/BackstagePasses";

function cartesianProduct<T extends any[][]>(...arrays: T): any[][] {
    return arrays.reduce(
        (acc, curr) => acc.flatMap(combo => curr.map(item => [...combo, item])),
        [[]]
    );
}

function createItem(name: string, sellIn: number, quality: number): Item {
  if(name === 'Sulfuras, Hand of Ragnaros'){
    return new Sulfuras(sellIn, quality)
  }
  else if(name === 'Aged Brie'){
    return new AgedBrie(sellIn, quality)
  }
  else if(name === 'Backstage passes to a TAFKAL80ETC concert'){
    return new BackstagePasses(sellIn, quality)
  }
  else {
    throw new Error(`Unknown name ${name}`)
  }
}

describe('Gilded Rose', () => {

    const names = ['Sulfuras, Hand of Ragnaros', 'Aged Brie', 'Backstage passes to a TAFKAL80ETC concert'];
    const sellIns = [-1, 1, 5, 10]
    const qualities = [1, 5, 10]

    const cases = cartesianProduct(names, sellIns, qualities)

    test.each(cases)(
        'golden test: name:%s sellIn:%s quality:%s',
        (name: string, sellIn: number, quality) => {
            const items = [
                createItem(name, sellIn, quality),
            ]
            const gildedRose = new GildedRose(items)

            const result = gildedRose.updateQuality()

            expect(result).toMatchSnapshot()
        }
    )
})

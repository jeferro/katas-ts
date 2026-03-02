import { describe, expect } from 'vitest'
import {GildedRose} from "./gilded-rose";
import {ItemCreator} from "./items/ItemCreator";

function cartesianProduct<T extends any[][]>(...arrays: T): any[][] {
    return arrays.reduce(
        (acc, curr) => acc.flatMap(combo => curr.map(item => [...combo, item])),
        [[]]
    );
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
                ItemCreator.create(name, sellIn, quality),
            ]
            const gildedRose = new GildedRose(items)

            const result = gildedRose.updateQuality()

            expect(result).toMatchSnapshot()
        }
    )
})

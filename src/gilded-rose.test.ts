import { describe, it, expect } from 'vitest'
import {GildedRose, Item} from "./gilded-rose"

describe('Gilded Rose', () => {

    it('The Quality of an item is never more than 50', () => {
        const items = [
            new Item('Aged Brie', 10, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50),
            new Item('Sulfuras, Hand of Ragnaros', 10, 50)
        ]

        const gildedRose = new GildedRose(items)
        gildedRose.updateQuality()

        expect(items[0].quality).toBe(50)
        expect(items[1].quality).toBe(50)
        expect(items[2].quality).toBe(50)
    })

    it('Backstage passes Quality increases by 2 when there are 10 days or less', () => {
        const items = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
        ]

        const gildedRose = new GildedRose(items)
        gildedRose.updateQuality()

        expect(items[0].quality).toBe(22)
    })
})

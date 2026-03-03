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

    it('Aged Brie Quality degrades twice as fast once the sell by date has passed', () => {
        const items = [
            new Item('Aged Brie', 0, 20)
        ]

        const gildedRose = new GildedRose(items)
        gildedRose.updateQuality()

        expect(items[0].quality).toBe(22)
    })

    it('Backstage passes Quality increases by 2 when there are 10 days or less', () => {
        const items = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
        ]

        const gildedRose = new GildedRose(items)
        gildedRose.updateQuality()

        expect(items[0].quality).toBe(22)
    })

    it('Backstage passes Quality increases by 3 when there are 5 days or less', () => {
        const items = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
        ]

        const gildedRose = new GildedRose(items)
        gildedRose.updateQuality()

        expect(items[0].quality).toBe(23)
    })

    it('Backstage passes Quality set zero once the sell by date has passed', () => {
        const items = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20),
        ]

        const gildedRose = new GildedRose(items)
        gildedRose.updateQuality()

        expect(items[0].quality).toBe(0)
    })

    it('Backstage passes Quality drops to 0 after the concert', () => {
        const items = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20),
        ]

        const gildedRose = new GildedRose(items)
        gildedRose.updateQuality()

        expect(items[0].quality).toBe(0)
    })


    it('Sulfuras never has to be sold or decreases in Quality', () => {
        const items = [
            new Item('Sulfuras, Hand of Ragnaros', 12, 20),
        ]

        const gildedRose = new GildedRose(items)
        gildedRose.updateQuality()

        expect(items[0].sellIn).toBe(12)
        expect(items[0].quality).toBe(20)
    })
})

import { describe, it, expect } from 'vitest'
import {GildedRose} from "./gilded-rose";

describe('Gilded Rose', () => {

    it('should create object', () => {
        const gildedRose = new GildedRose()

        expect(gildedRose).not.toBeUndefined()
    })
})

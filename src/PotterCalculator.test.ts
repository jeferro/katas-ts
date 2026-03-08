import { describe, it, expect } from 'vitest'
import {PotterCalculator} from "./PotterCalculator";

describe('PotterCalculator', () => {

    const potterCalculator = new PotterCalculator()

    it('should calculate basic price', () => {
        expect(potterCalculator.calculate([])).toBe(0)
        expect(potterCalculator.calculate([0])).toBe(8)
        expect(potterCalculator.calculate([1])).toBe(8)
        expect(potterCalculator.calculate([2])).toBe(8)
        expect(potterCalculator.calculate([3])).toBe(8)
        expect(potterCalculator.calculate([4])).toBe(8)
        expect(potterCalculator.calculate([0, 0, 0])).toBe(8 * 3)
    })

    it('should calculate simple discount', () => {
        expect(potterCalculator.calculate([0, 1])).toBe(8 * 2 * 0.95)
        expect(potterCalculator.calculate([0, 1, 2])).toBe(8 * 3 * 0.9)
        expect(potterCalculator.calculate([0, 1, 2, 3])).toBe(8 * 4 * 0.8)
        expect(potterCalculator.calculate([0, 1, 2, 3, 4])).toBe(8 * 5 * 0.75)
    })

    it('should calculate several discount', () => {
        expect(potterCalculator.calculate([0, 0, 1])).toBe(8 + (8 * 2 * 0.95))
        expect(potterCalculator.calculate([0, 0, 1, 1])).toBe(2 * (8 * 2 * 0.95))
        expect(potterCalculator.calculate([0, 0, 1, 2, 2, 3])).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95))
        expect(potterCalculator.calculate([0, 1, 1, 2, 3, 4])).toBe(8 + (8 * 5 * 0.75))
    })
})

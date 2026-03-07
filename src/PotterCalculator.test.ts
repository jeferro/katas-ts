import { describe, it, expect } from 'vitest'
import {PotterCalculator} from "./PotterCalculator";

describe('PotterCalculator', () => {

    const potterCalculator = new PotterCalculator()

    it('should calculate basics', () => {
        expect(potterCalculator.calculate([])).toBe(0)
        expect(potterCalculator.calculate([1])).toBe(8)
        expect(potterCalculator.calculate([2])).toBe(8)
        expect(potterCalculator.calculate([3])).toBe(8)
        expect(potterCalculator.calculate([4])).toBe(8)
        expect(potterCalculator.calculate([5])).toBe(8)
        expect(potterCalculator.calculate([1, 1, 1])).toBe(8 * 3)
    })
})

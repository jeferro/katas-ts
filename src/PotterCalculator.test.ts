import { describe, it, expect } from 'vitest'
import {PotterCalculator} from "./PotterCalculator";

describe('PotterCalculator', () => {

    it('should create instance', () => {
        const potterCalculator = new PotterCalculator()

        expect(potterCalculator).not.toBeUndefined()
    })
})

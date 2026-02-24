import { describe, it, expect } from 'vitest'
import StringCalculator from "./StringCalculator";

describe('String Calculator', () => {

    it('should return zero when string is empty', () => {
        const calculator = new StringCalculator()

        const result = calculator.add("")

        expect(result).toBe(0)
    })
})

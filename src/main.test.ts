import { describe, it, expect } from 'vitest'
import StringCalculator from "./StringCalculator";

describe('String Calculator', () => {

    it('should return zero when string is empty', () => {
        const calculator = new StringCalculator()

        const result = calculator.add("")

        expect(result).toBe(0)
    })

    it('should return value when there is a unique number in string', () => {
        const calculator = new StringCalculator()

        const result = calculator.add("1")

        expect(result).toBe(1)
    })
})

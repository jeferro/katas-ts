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

    it('should return sum of two numbers', () => {
        const calculator = new StringCalculator()

        const result = calculator.add("1,2")

        expect(result).toBe(3)
    })

    it('should return sum of all numbers', () => {
        const calculator = new StringCalculator()

        const result = calculator.add("1,2,3")

        expect(result).toBe(6)
    })

    it('should return sum of all numbers in different lines', () => {
        const calculator = new StringCalculator()

        const result = calculator.add("1\\n2,3")

        expect(result).toBe(6)
    })

    it('should return sum of all numbers using delimiter', () => {
        const calculator = new StringCalculator()

        const result = calculator.add("//;\n1;2")

        expect(result).toBe(3)
    })

    it('should fail when there is a negative value', () => {
        const calculator = new StringCalculator()

        expect(() => calculator.add("-1,-2,3")).toThrow('There are negative values: -1,-2')
    })
})

import { describe, it, expect } from 'vitest'
import {Contract} from "./Contract";

describe('Contract', () => {

    const testDate = new Date(2025, 5, 1)

    it('each employee has 24 yearly vacation by default', () => {
        const contract = new Contract("Marco Gil", new Date(2024, 0, 1))

        expect(contract.vacation(testDate)).toBe(24)
    })
})

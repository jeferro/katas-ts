import { describe, it, expect } from 'vitest'
import {Contract} from "./Contract";
import {SpecialContract} from "./SpecialContract";

describe('Contract', () => {

    const testDate = new Date(2025, 5, 1)

    it('each employee has 24 yearly vacations by default', () => {
        const contract = new Contract("Marco Gil", new Date(2024, 7, 1))

        expect(contract.vacations(testDate)).toBe(24)
    })

    it('special contract overrides yearly vacations', () => {
        const contract = new SpecialContract("Marco Sanchez", new Date(2024, 0, 1), 26)

        expect(contract.vacations(testDate)).toBe(26)
    })

    it('double yearly vacations by worked month', () => {
        const contract = new Contract("Juan Perez", new Date(2025, 0, 1))

        expect(contract.vacations(testDate)).toBe(12)
    })

    it('add one vacational by year in enterprise', () => {
        const contract = new Contract("Laura Martinez", new Date(2019, 0, 1))

        expect(contract.vacations(testDate)).toBe(30)
    })
})

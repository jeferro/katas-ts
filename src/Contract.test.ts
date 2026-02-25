import { describe, it, expect } from 'vitest'
import {Contract} from "./Contract";
import {SpecialContract} from "./SpecialContract";

describe('Contract', () => {

    const testDate = new Date(2025, 5, 1)

    it('each employee has 24 yearly vacations by default', () => {
        let startDate = new Date(2024, 7, 1)
        let birthDate = new Date(2001, 0, 26)

        const contract = new Contract("Marco Gil", startDate, birthDate)

        expect(contract.vacations(testDate)).toBe(24)
    })

    it('special contract overrides yearly vacations', () => {
        let startDate = new Date(2024, 0, 1)
        let birthDate = new Date(1999, 6, 12)

        const contract = new SpecialContract("Marco Sanchez", startDate, 26)

        expect(contract.vacations(testDate)).toBe(26)
    })

    it('double yearly vacations by worked month', () => {
        let startDate = new Date(2025, 0, 1)
        let birthDate = new Date(1997, 11, 30)

        const contract = new Contract("Juan Perez", startDate, birthDate)

        expect(contract.vacations(testDate)).toBe(12)
    })

    it('add one vacational by year in enterprise', () => {
        let startDate = new Date(2019, 0, 1)
        let birthDate = new Date(1989, 5, 9)

        const contract = new Contract("Laura Martinez", startDate, birthDate)

        expect(contract.vacations(testDate)).toBe(30)
    })

    it('add one vacational by 5 year in enterprise to employees who are 40 years old or more', () => {
        let startDate = new Date(2014, 0, 1)
        let birthDate = new Date(1966, 0, 26)

        const contract = new Contract("Ana Gonzalez", startDate, birthDate)

        expect(contract.vacations(testDate)).toBe(32)
    })
})

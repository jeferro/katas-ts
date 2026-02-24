import { describe, it, expect } from 'vitest'
import {Dni} from "./dni";

describe('DNI', () => {

    it('should create dni', () => {
        const dni = new Dni("04560732Q")

        expect(dni).not.toBeUndefined()
    })

    it('should fail because length is less than 9 characters', () => {
        expect(() => new Dni("0456073Q")).toThrow()
    })

    it('should fail because length is less than 9 characters', () => {
        expect(() => new Dni("045607322Q")).toThrow()
    })
})

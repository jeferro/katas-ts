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

    it('should fail because there is a character in first positions', () => {
        expect(() => new Dni("A4560732Q")).toThrow()
    })

    it('should fail because last position is a number', () => {
        expect(() => new Dni("045607321")).toThrow()
    })

    it('should fail because letter is U', () => {
        expect(() => new Dni("04560732U")).toThrow()
    })

    it('should fail because letter is I', () => {
        expect(() => new Dni("04560732I")).toThrow()
    })

    it('should fail because letter is O', () => {
        expect(() => new Dni("04560732O")).toThrow()
    })

    it('should fail because letter is Ñ', () => {
        expect(() => new Dni("04560732Ñ")).toThrow()
    })
})

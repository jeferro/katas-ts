import { describe, it, expect } from 'vitest'
import {Cupcake} from "./Cupcake";
import {Cookie} from "./Cookie";

describe('Cupcake', () => {

    it('should return name "Cupcake"', () => {
        const cupcake = new Cupcake()

        expect(cupcake.name).toBe('Cupcake')
    })

    it('should return name "Cookie"', () => {
        const cookie = new Cookie()

        expect(cookie.name).toBe('Cookie')
    })
})

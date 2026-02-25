import { describe, it, expect } from 'vitest'
import {Cupcake} from "./Cupcake";

describe('Cupcake', () => {

    it('should return name "Cupcake"', () => {
        const cupcake = new Cupcake()

        expect(cupcake.name).toBe('Cupcake')
    })
})

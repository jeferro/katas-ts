import { describe, it, expect } from 'vitest'
import {Cupcake} from "./Cupcake";

describe('Cupcake', () => {

    it('should create object', () => {
        const cupcake = new Cupcake()

        expect(cupcake).not.toBeUndefined()
    })
})

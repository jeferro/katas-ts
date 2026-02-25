import { describe, it, expect } from 'vitest'
import {Cupcake} from "./Cupcake"
import {Chocolate} from "./toppings/Chocolate"
import {Decimal} from "decimal.js"

describe('Cupcake', () => {

    it('should return name "Cupcake"', () => {
        const cake = new Cupcake()

        expect(cake.name).toBe('Cupcake')
    })

    it('should return name "Cupcake with chocolate"', () => {
        const cupcake = new Cupcake()
        const cake = new Chocolate(cupcake)

        expect(cake.name).toBe('Cupcake with chocolate')
    })

    it('should has price 1', () => {
        const cake = new Cupcake()

        expect(cake.price).toStrictEqual(Decimal(1))
    })
})

import { describe, it, expect } from 'vitest'
import {Decimal} from "decimal.js"
import {Package} from "./Package"
import {Cupcake} from "../Cupcake"
import {Cookie} from "../Cookie";

describe('Package', () => {

    it('should discount 10% in the price of Cupcake', () => {
        const cupcake = new Cupcake()

        const pack = new Package([cupcake])

        expect(pack.price).toStrictEqual(Decimal("0.9"))
    })

    it('should discount 10% in the price of Cupcake and Cookie', () => {
        const cupcake = new Cupcake()
        const cookie = new Cookie()

        const pack = new Package([cupcake, cookie])

        expect(pack.price).toStrictEqual(Decimal("2.7"))
    })

    it('should discount 10% in the price of 2 Cupcake and Cookie', () => {
        const cupcake1 = new Cupcake()
        const cupcake2 = new Cupcake()
        const cookie = new Cookie()

        const pack = new Package([cupcake1, cupcake2, cookie])

        expect(pack.price).toStrictEqual(Decimal("3.6"))
    })

    it('should discount 10% in the price of 2 Cupcake and Cookie', () => {
        const cupcake1 = new Cupcake()
        const cupcake2 = new Cupcake()

        const packInside = new Package([cupcake1, cupcake2])
        const cookie = new Cookie()

        const pack = new Package([packInside, cookie])

        expect(pack.price).toStrictEqual(Decimal("3.42"))
    })
})

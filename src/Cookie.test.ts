import { describe, it, expect } from 'vitest'
import {Cookie} from "./Cookie"
import {Chocolate} from "./toppings/Chocolate"
import {Peanuts} from "./toppings/Peanuts"
import {Decimal} from "decimal.js";

describe('Cookie', () => {

    it('should return name "Cookie"', () => {
        const cake = new Cookie()

        expect(cake.name).toBe('Cookie')
    })

    it('should return name "Cookie with chocolate"', () => {
        const cookie = new Cookie()
        const cake = new Chocolate(cookie)

        expect(cake.name).toBe('Cookie with chocolate')
    })

    it('should return name "Cookie with chocolate with peanuts"', () => {
        const cookie = new Cookie()
        const chocolate = new Chocolate(cookie)
        const cake = new Peanuts(chocolate)

        expect(cake.name).toBe('Cookie with chocolate with peanuts')
    })

    it('should return name "Cookie with peanuts with chocolate"', () => {
        const cookie = new Cookie()
        const peanuts = new Peanuts(cookie)
        const cake = new Chocolate(peanuts)

        expect(cake.name).toBe('Cookie with peanuts with chocolate')
    })

    it('should has price 2', () => {
        const cake = new Cookie()

        expect(cake.price).toStrictEqual(Decimal(2))
    })
})

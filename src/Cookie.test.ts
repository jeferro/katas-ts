import { describe, it, expect } from 'vitest'
import {Cookie} from "./Cookie"
import {Chocolate} from "./toppings/Chocolate"

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
})

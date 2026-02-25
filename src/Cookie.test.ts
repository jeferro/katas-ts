import { describe, it, expect } from 'vitest'
import {Cookie} from "./Cookie"

describe('Cookie', () => {

    it('should return name "Cookie"', () => {
        const cake = new Cookie()

        expect(cake.name).toBe('Cookie')
    })
})

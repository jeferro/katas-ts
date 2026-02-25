import { describe, it, expect } from 'vitest'
import {Cookie} from "./Cookie"

describe('Cookie', () => {

    it('should return name "Cookie"', () => {
        const cookie = new Cookie()

        expect(cookie.name).toBe('Cookie')
    })
})

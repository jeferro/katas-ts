import { describe, it, expect } from 'vitest'
import {Bowling} from "./Bowling";

describe('Bowling', () => {

    it('should pass', () => {
        const bowling = new Bowling()

        expect(bowling).not.toBeUndefined()
    })
})

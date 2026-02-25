import { describe, it, expect } from 'vitest'
import {BowlingPlayer} from "./BowlingPlayer";

describe('Bowling', () => {

    it('should pass', () => {
        const bowlingPlayer = new BowlingPlayer()

        expect(bowlingPlayer).not.toBeUndefined()
    })
})

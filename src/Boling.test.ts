import { describe, it, expect } from 'vitest'
import {BowlingPlayer} from "./BowlingPlayer";

describe('Bowling', () => {

    it('should score 2 attempts', () => {
        const bowlingPlayer = new BowlingPlayer()
        bowlingPlayer.score(1, 8)

        expect(bowlingPlayer).not.toBeUndefined()
    })
})

import {describe, it, expect} from 'vitest'
import {BowlingPlayer} from "./BowlingPlayer";

describe('Bowling', () => {

    it('should score 2 attempts', () => {
        const bowlingPlayer = new BowlingPlayer()
        bowlingPlayer.score(1, 8)

        expect(bowlingPlayer.getTotalScore()).toBe(9)
    })

    it('should fail when attempt 1 is negative', () => {
        const bowlingPlayer = new BowlingPlayer()

        expect(() => bowlingPlayer.score(-1, 0)).toThrowError()
    })

    it('should fail when attempt 2 is negative', () => {
        const bowlingPlayer = new BowlingPlayer()

        expect(() => bowlingPlayer.score(2, -2)).toThrowError()
    })

    it('should fail when sum of attempts is greater than 10', () => {
        const bowlingPlayer = new BowlingPlayer()

        expect(() => bowlingPlayer.score(2, 9)).toThrowError()
    })
})

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

    it('should add attempt 1 of current frame when previous frame was a spare', () => {
        const bowlingPlayer = new BowlingPlayer()
        bowlingPlayer.score(1, 9)
        bowlingPlayer.score(2, 6)

        expect(bowlingPlayer.getTotalScore()).toBe(20)
    })

    it('should add all attempts of current frame when previous frame was a strike', () => {
        const bowlingPlayer = new BowlingPlayer()
        bowlingPlayer.score(10, 0)
        bowlingPlayer.score(2, 6)

        expect(bowlingPlayer.getTotalScore()).toBe(26)
    })

    it('should allow only 10 frames', () => {
        const bowlingPlayer = new BowlingPlayer()
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)

        expect(() => bowlingPlayer.score(1, 1)).toThrowError()
    })

    it('should extra score when previous frame was a spare', () => {
        const bowlingPlayer = new BowlingPlayer()

        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 1)
        bowlingPlayer.score(1, 9)

        bowlingPlayer.score(1, 0)

        expect(bowlingPlayer.getTotalScore()).toBe(29)
    })
})

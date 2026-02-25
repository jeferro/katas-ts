import { describe, it, expect } from 'vitest'
import {ScoreKeeper} from "./ScoreKeeper";

describe('ScoreKeeper', () => {

    it('should start at zero-zero value', () => {
        const scoreKeeper = new ScoreKeeper()

        expect(scoreKeeper.getScore()).toBe("000:000")
    })

    it('should increase 1 to team A', () => {
        const scoreKeeper = new ScoreKeeper()
        scoreKeeper.scoreTeamA1()

        expect(scoreKeeper.getScore()).toBe("001:000")
    })
})

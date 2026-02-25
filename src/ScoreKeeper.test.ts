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

    it('should increase 2 to team A', () => {
        const scoreKeeper = new ScoreKeeper()
        scoreKeeper.scoreTeamA2()

        expect(scoreKeeper.getScore()).toBe("002:000")
    })

    it('should increase 3 to team A', () => {
        const scoreKeeper = new ScoreKeeper()
        scoreKeeper.scoreTeamA3()

        expect(scoreKeeper.getScore()).toBe("003:000")
    })

    it('should increase 1 to team B', () => {
        const scoreKeeper = new ScoreKeeper()
        scoreKeeper.scoreTeamB1()

        expect(scoreKeeper.getScore()).toBe("000:001")
    })

    it('should increase 2 to team B', () => {
        const scoreKeeper = new ScoreKeeper()
        scoreKeeper.scoreTeamB2()

        expect(scoreKeeper.getScore()).toBe("000:002")
    })

    it('should increase 3 to team B', () => {
        const scoreKeeper = new ScoreKeeper()
        scoreKeeper.scoreTeamB3()

        expect(scoreKeeper.getScore()).toBe("000:003")
    })
})

import { describe, it, expect } from 'vitest'
import {ScoreKeeper} from "./ScoreKeeper";

describe('Example Test', () => {

    it('should create objects of class ScoreKeeper', () => {
        const scoreKeeper = new ScoreKeeper()

        expect(scoreKeeper).not.toBeUndefined()
    })
})

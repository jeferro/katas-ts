import {TennisGame} from './TennisGame'

export class TennisGame1 implements TennisGame {
    private m_score1: number = 0
    private m_score2: number = 0

    constructor(private readonly player1Name: string,
                private readonly player2Name: string) {
    }

    wonPoint(playerName: string): void {
        if (playerName === 'player1')
            this.m_score1 += 1
        else
            this.m_score2 += 1
    }

    getScore(): string {
        if (this.playersAreTied()) {
            if (this.m_score1 >= 3) {
                return 'Deuce'
            }

            return `${this.mapScoreToDescription(this.m_score1)}-All`
        }

        if (this.somePlayerHasMore3Points()) {
            const scoreDifAbs = Math.abs(this.m_score1 - this.m_score2)
            const playerNameToShow = this.m_score1 > this.m_score2 ? 'player1' : 'player2'

            return scoreDifAbs === 1 ? `Advantage ${playerNameToShow}` : `Win for ${playerNameToShow}`
        }

        return `${this.mapScoreToDescription(this.m_score1)}-${this.mapScoreToDescription(this.m_score2)}`
    }

    private somePlayerHasMore3Points() {
        return this.m_score1 > 3 || this.m_score2 > 3
    }

    private playersAreTied() {
        return this.m_score1 === this.m_score2
    }

    private mapScoreToDescription(tempScore: number) {
        switch (tempScore) {
            case 0:
                return 'Love'
            case 1:
                return 'Fifteen'
            case 2:
                return 'Thirty'
            case 3:
                return 'Forty'
            default:
                throw new Error(`Unrecognized score: ${tempScore}`)
        }
    }
}

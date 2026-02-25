import {TennisGame} from './TennisGame';

export class TennisGame2 implements TennisGame {
    p1Points: number = 0;
    p2Points: number = 0;


    constructor(private readonly player1Name: string,
                private readonly player2Name: string) {
    }

    wonPoint(player: string): void {
        if (player === this.player1Name)
            this.p1Points++;
        else
            this.p2Points++;
    }

    getScore(): string {
        if (this.isInFirst4Points()) {
            return this.showMessageOfFirst4Points();
        }

        const diffAbs = Math.abs(this.p1Points - this.p2Points)
        const mostPointPlayer = this.p1Points >= this.p2Points ? this.player1Name : this.player2Name

        switch (diffAbs) {
            case 0:
                return 'Deuce'
            case 1:
                return `Advantage ${mostPointPlayer}`
            default:
                return `Win for ${mostPointPlayer}`
        }
    }

    private isInFirst4Points() {
        return this.p1Points <= 3 && this.p2Points <= 3
    }

    private showMessageOfFirst4Points(): string {
        if (this.p1Points !== this.p2Points) {
            return `${this.mapScoreToText(this.p1Points)}-${this.mapScoreToText(this.p2Points)}`
        }

        return this.p1Points < 3
            ? `${this.mapScoreToText(this.p1Points)}-All`
            : `Deuce`

    }

    private mapScoreToText(score: number): string {
        if (score === 0)
            return 'Love'

        if (score === 1)
            return 'Fifteen'

        if (score === 2)
            return 'Thirty'

        if (score === 3)
            return 'Forty'

        else
            throw new Error(`Unknown score: ${score}`)
    }
}

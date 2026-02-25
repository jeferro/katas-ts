import {TennisGame} from './TennisGame';

export class TennisGame2 implements TennisGame {
    p1Points: number = 0;
    p2Points: number = 0;

    private player1Name: string;
    private player2Name: string;

    constructor(player1Name: string, player2Name: string) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    wonPoint(player: string): void {
        if (player === 'player1')
            this.p1Points++;
        else
            this.p2Points++;
    }

    getScore(): string {
        if (this.isInFirst4Points()) {
            return this.showMessageOfFirst4Points();
        }

        const diffAbs = Math.abs(this.p1Points - this.p2Points)
        const mostPointPlayer = this.p1Points >= this.p2Points ? 'player1' : 'player2'

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

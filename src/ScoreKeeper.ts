export class ScoreKeeper {

    private scoreTeamA = 0
    private scoreTeamB = 0

    scoreTeamA1() {
        this.scoreTeamA += 1
    }

    scoreTeamA2() {
        this.scoreTeamA += 2
    }

    scoreTeamA3() {
        this.scoreTeamA += 3
    }
    scoreTeamB1() {
        this.scoreTeamB += 1
    }

    scoreTeamB2() {
        this.scoreTeamB += 2
    }

    scoreTeamB3() {
        this.scoreTeamB += 3
    }

    getScore(): string {
        const scoreTeamAStr = this.scoreTeamA.toString().padStart(3, '0')
        const scoreTeamBStr = this.scoreTeamB.toString().padStart(3, '0')

        return `${scoreTeamAStr}:${scoreTeamBStr}`
    }
}
export class ScoreKeeper {

    private scoreTeamA = 0
    private scoreTeamB = 0

    scoreTeamA1() {
        this.scoreTeamA += 1
    }

    getScore(): string {
        const scoreTeamAStr = this.scoreTeamA.toString().padStart(3, '0')
        const scoreTeamBStr = this.scoreTeamB.toString().padStart(3, '0')

        return `${scoreTeamAStr}:${scoreTeamBStr}`
    }
}
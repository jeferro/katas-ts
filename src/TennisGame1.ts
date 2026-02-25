import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.m_score1 += 1;
    else
      this.m_score2 += 1;
  }

  getScore(): string {
    if (this.playersAreTied()) {
      if(this.m_score1 < 3){
        return `${this.mapScoreToDescription(this.m_score1)}-All`
      }

        return 'Deuce'
    }

    if (this.somePlayerHasMore3Points()) {
      const scoreDif = Math.abs(this.m_score1 - this.m_score2)
      const playerName = this.m_score1 > this.m_score2 ? 'player1' : 'player2'

      return scoreDif === 1 ? `Advantage ${playerName}` : `Win for ${playerName}`
    }

    return `${this.mapScoreToDescription(this.m_score1)}-${this.mapScoreToDescription(this.m_score2)}`;
  }

  private somePlayerHasMore3Points() {
    return this.m_score1 >= 4 || this.m_score2 >= 4;
  }

  private playersAreTied() {
    return this.m_score1 === this.m_score2;
  }

  private mapScoreToDescription(tempScore: number) {
    switch (tempScore) {
      case 0:
        return 'Love';
      case 1:
        return 'Fifteen';
      case 2:
        return 'Thirty';
      case 3:
        return 'Forty';
      default:
        throw new Error(`Unrecognized score: ${tempScore}`);
    }
  }
}

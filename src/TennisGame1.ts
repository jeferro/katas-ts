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
    let score: string = '';

    if (this.playersAreTied()) {
      if(this.m_score1 < 3){
        score = `${this.mapScoreToDescription(this.m_score1)}-All`
      }
      else{
        score = 'Deuce'
      }
    }

    else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      const minusResult: number = this.m_score1 - this.m_score2;
      if (minusResult === 1) score = 'Advantage player1';
      else if (minusResult === -1) score = 'Advantage player2';
      else if (minusResult >= 2) score = 'Win for player1';
      else score = 'Win for player2';
    }
    else {
      score = `${this.mapScoreToDescription(this.m_score1)}-${this.mapScoreToDescription(this.m_score2)}`;
    }
    return score;
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

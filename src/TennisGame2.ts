import { TennisGame } from './TennisGame';

export class TennisGame2 implements TennisGame {
  p1Points: number = 0;
  p2Points: number = 0;

  p1Res: string = '';
  p2Res: string = '';

  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  getScore(): string {
    let score: string = '';
    if (this.p1Points === this.p2Points && this.p1Points < 4) {
      if (this.p1Points === 0)
        score = 'Love';
      if (this.p1Points === 1)
        score = 'Fifteen';
      if (this.p1Points === 2)
        score = 'Thirty';
      score += '-All';
    }
    if (this.p1Points === this.p2Points && this.p1Points >= 3)
      score = 'Deuce';

    if (this.p1Points > 0 && this.p2Points === 0) {
      if (this.p1Points === 1)
        this.p1Res = 'Fifteen';
      if (this.p1Points === 2)
        this.p1Res = 'Thirty';
      if (this.p1Points === 3)
        this.p1Res = 'Forty';

      this.p2Res = 'Love';
      score = this.p1Res + '-' + this.p2Res;
    }
    if (this.p2Points > 0 && this.p1Points === 0) {
      if (this.p2Points === 1)
        this.p2Res = 'Fifteen';
      if (this.p2Points === 2)
        this.p2Res = 'Thirty';
      if (this.p2Points === 3)
        this.p2Res = 'Forty';

      this.p1Res = 'Love';
      score = this.p1Res + '-' + this.p2Res;
    }

    if (this.p1Points > this.p2Points && this.p1Points < 4) {
      if (this.p1Points === 2)
        this.p1Res = 'Thirty';
      if (this.p1Points === 3)
        this.p1Res = 'Forty';
      if (this.p2Points === 1)
        this.p2Res = 'Fifteen';
      if (this.p2Points === 2)
        this.p2Res = 'Thirty';
      score = this.p1Res + '-' + this.p2Res;
    }
    if (this.p2Points > this.p1Points && this.p2Points < 4) {
      if (this.p2Points === 2)
        this.p2Res = 'Thirty';
      if (this.p2Points === 3)
        this.p2Res = 'Forty';
      if (this.p1Points === 1)
        this.p1Res = 'Fifteen';
      if (this.p1Points === 2)
        this.p1Res = 'Thirty';
      score = this.p1Res + '-' + this.p2Res;
    }

    if (this.p1Points > this.p2Points && this.p2Points >= 3) {
      score = 'Advantage player1';
    }

    if (this.p2Points > this.p1Points && this.p1Points >= 3) {
      score = 'Advantage player2';
    }

    if (this.p1Points >= 4 && this.p2Points >= 0 && (this.p1Points - this.p2Points) >= 2) {
      score = 'Win for player1';
    }
    if (this.p2Points >= 4 && this.p1Points >= 0 && (this.p2Points - this.p1Points) >= 2) {
      score = 'Win for player2';
    }
    return score;
  }

  P1Score(): void {
    this.p1Points++;
  }

  P2Score(): void {
    this.p2Points++;
  }

  wonPoint(player: string): void {
    if (player === 'player1')
      this.P1Score();
    else
      this.P2Score();
  }
}

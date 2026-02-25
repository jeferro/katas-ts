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

  getScore(): string {
    let p1Text = '';
    let p2Text = '';
    let score: string = '';

    if (this.p1Points >= 4 && (this.p1Points - this.p2Points) >= 2) {
      return 'Win for player1';
    }

    if (this.p2Points >= 4 && (this.p2Points - this.p1Points) >= 2) {
      return 'Win for player2';
    }

    if (this.p1Points === this.p2Points && this.p1Points < 3) {
      return `${this.mapScoreToText(this.p1Points)}-All`
    }

    if (this.p1Points === this.p2Points && this.p1Points >= 3) {
      return 'Deuce';
    }

    if (this.p1Points > 0 && this.p2Points === 0) {
      p1Text = this.mapScoreToText(this.p1Points)
      p2Text = 'Love';
      score = p1Text + '-' + p2Text;
    }

    if (this.p2Points > 0 && this.p1Points === 0) {
      p1Text = 'Love';
      p2Text = this.mapScoreToText(this.p2Points)
      score = p1Text + '-' + p2Text;
    }

    if (this.p1Points > this.p2Points && this.p1Points < 4) {
      p1Text = this.mapScoreToText(this.p1Points)
      p2Text = this.mapScoreToText(this.p2Points)
      score = p1Text + '-' + p2Text;
    }
    if (this.p2Points > this.p1Points && this.p2Points < 4) {
      p1Text = this.mapScoreToText(this.p1Points)
      p2Text = this.mapScoreToText(this.p2Points)
      score = p1Text + '-' + p2Text;
    }

    if (this.p1Points > this.p2Points && this.p2Points >= 3) {
      score = 'Advantage player1';
    }

    if (this.p2Points > this.p1Points && this.p1Points >= 3) {
      score = 'Advantage player2';
    }

    return score;
  }

  private mapScoreToText(score: number): string {
    if (score === 0)
      return 'Love'

    if (score=== 1)
      return 'Fifteen'

    if (score === 2)
      return 'Thirty'

    if (score === 3)
      return 'Forty'

    else
      return ''
  }

  wonPoint(player: string): void {
    if (player === 'player1')
      this.p1Points++;
    else
      this.p2Points++;
  }
}

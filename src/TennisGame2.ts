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
        p1Text = 'Fifteen';
      if (this.p1Points === 2)
        p1Text = 'Thirty';
      if (this.p1Points === 3)
        p1Text = 'Forty';

      p2Text = 'Love';
      score = p1Text + '-' + p2Text;
    }
    if (this.p2Points > 0 && this.p1Points === 0) {
      if (this.p2Points === 1)
        p2Text = 'Fifteen';
      if (this.p2Points === 2)
        p2Text = 'Thirty';
      if (this.p2Points === 3)
        p2Text = 'Forty';

      p1Text = 'Love';
      score = p1Text + '-' + p2Text;
    }

    if (this.p1Points > this.p2Points && this.p1Points < 4) {
      if (this.p1Points === 2)
        p1Text = 'Thirty';
      if (this.p1Points === 3)
        p1Text = 'Forty';
      if (this.p2Points === 1)
        p2Text = 'Fifteen';
      if (this.p2Points === 2)
        p2Text = 'Thirty';
      score = p1Text + '-' + p2Text;
    }
    if (this.p2Points > this.p1Points && this.p2Points < 4) {
      if (this.p2Points === 2)
        p2Text = 'Thirty';
      if (this.p2Points === 3)
        p2Text = 'Forty';
      if (this.p1Points === 1)
        p1Text = 'Fifteen';
      if (this.p1Points === 2)
        p1Text = 'Thirty';
      score = p1Text + '-' + p2Text;
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
  wonPoint(player: string): void {
    if (player === 'player1')
      this.p1Points++;
    else
      this.p2Points++;
  }
}

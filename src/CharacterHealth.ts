import {Character} from "./Character";

export class CharacterHealth {

  constructor(private _health: number,
              private _maxHealth: number) {

  }

  static create(health: number, maxHealth: number): CharacterHealth {
    return new CharacterHealth(health, maxHealth)
  }

  public setMaxHealth(value: number) {
    this._maxHealth = value
  }

  public decrease(value: number) {
    this._health -= value

    if (this._health < 0) {
      this._health = 0
    }
  }

  public increase(value: number): number {
    if (this.isDead) {
      throw new Error('Health is already dead')
    }

    const realIncrease = this.calculateRealIncrease(value, this._maxHealth)

    this._health += realIncrease

    return realIncrease
  }

  private calculateRealIncrease(increase: number, maxHealth: number) {
    return this._health + increase > this._maxHealth
        ? this._maxHealth - this._health
        : increase;
  }

  public get value(): number {
    return this._health
  }

  public get isAlive() {
    return this._health > 0
  }

  public get isDead() {
    return !this.isAlive
  }
}
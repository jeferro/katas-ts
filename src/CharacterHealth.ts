
export class CharacterHealth {

  constructor(private _value: number,
              private _maxHealth: number) {

  }

  static create(health: number, maxHealth: number): CharacterHealth {
    return new CharacterHealth(health, maxHealth)
  }

  public setMaxHealth(value: number) {
    this._maxHealth = value
  }

  public decrease(value: number) {
    this._value -= value

    if (this._value < 0) {
      this._value = 0
    }
  }

  public increase(increase: number): number {
    if (this.isDead) {
      throw new Error('Health is already dead')
    }

    const realIncrease = this._value + increase > this._maxHealth
        ? this._maxHealth - this._value
        : increase

    this._value += realIncrease

    return realIncrease
  }

  public get value(): number {
    return this._value
  }

  public get isAlive() {
    return this._value > 0
  }

  public get isDead() {
    return !this.isAlive
  }
}
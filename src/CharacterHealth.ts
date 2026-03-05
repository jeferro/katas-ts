
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

  public decrease(damage: number) {
    this.ensureIsAlive()

    const realDamage = this._value - damage < 0
        ? this._value
        : damage

    this._value -= realDamage
  }

  public increase(increase: number): number {
    this.ensureIsAlive()

    const realIncrease = this._value + increase > this._maxHealth
        ? this._maxHealth - this._value
        : increase

    this._value += realIncrease

    return realIncrease
  }

  private ensureIsAlive() {
    if (this.isDead) {
      throw new Error('Health is already dead')
    }
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
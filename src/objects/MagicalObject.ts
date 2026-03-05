export class MagicalObject {

  private readonly _maxHealth: number

  constructor(private _health: number) {
    this._maxHealth = _health
  }

  public get isDestroyed(): boolean {
    return this._health === 0
  }

  consume(realIncrease: number) {
    if(this._health < realIncrease) {
      this._health = 0
      return
    }

    this._health -= realIncrease
  }

  public get health() {
    return this._health
  }
}

export class HealingMagicalObject extends MagicalObject {

  static create(health: number): MagicalObject {
    return new MagicalObject(health);
  }
}
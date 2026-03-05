export abstract class MagicalObject {

  private readonly _maxHealth: number

  constructor(protected _health: number) {
    this._maxHealth = _health
  }

  public get isDestroyed(): boolean {
    return this._health === 0
  }

  public get health() {
    return this._health
  }
}


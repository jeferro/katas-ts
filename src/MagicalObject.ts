export class MagicalObject {

  private readonly _maxHealth: number

  constructor(private _health: number) {
    this._maxHealth = _health
  }

  static create(health: number): MagicalObject {
    return new MagicalObject(health);
  }

  public get isDestroyed(): boolean {
    return this._health === 0
  }

  public get health() {
    return this._health
  }
}
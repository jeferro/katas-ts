
export class Character {

  constructor(private _health: number,
              private _level: number) {
  }

  static create(): Character {
    return new Character(1000, 1)
  }

  damage(damage: number) {
    this._health -= damage

    if(this._health < 0) {
      this._health = 0
    }
  }

  addHealth(value: number) {
    if(this.isDead){
      throw new Error('Health is already dead')
    }

    this._health += value
  }

  public get health(): number {
    return this._health
  }

  public get level(): number {
    return this._level
  }

  public get isAlive() {
    return this._health > 0
  }

  public get isDead() {
    return !this.isAlive
  }
}

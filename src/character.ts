
export class Character {
  private _health: number = 1000

  static create(): Character {
    return new Character()
  }

  damage(damage: number) {
    this._health -= damage

    if(this._health < 0) {
      this._health = 0
    }
  }

  addHealth(value: number) {
    this._health += value
  }

  public get health(): number {
    return this._health
  }

  public get isAlive() {
    return this._health > 0
  }

  public get isDead() {
    return !this.isAlive
  }
}

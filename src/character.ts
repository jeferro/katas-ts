
export class Character {
  readonly health: number = 1000

  static create(): Character {
    return new Character()
  }

  public get isAlive() {
    return this.health > 0
  }

  public get isDead() {
    return !this.isAlive
  }
}

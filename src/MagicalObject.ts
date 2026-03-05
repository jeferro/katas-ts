export class MagicalObject {

  constructor(public readonly health: number) {
  }

  static create(health: number): MagicalObject {
    return new MagicalObject(health);
  }

  public get isDestroyed(): boolean {
    return this.health === 0
  }
}
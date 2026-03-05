
export class MagicalObject {

  constructor(public readonly health: number) {
  }

  static create(health: number) : MagicalObject {
    return new MagicalObject(health);
  }
}
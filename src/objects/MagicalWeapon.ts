import {MagicalObject} from "./MagicalObject"

export class MagicalWeapon extends MagicalObject {

  constructor(public readonly damage: number,
              health: number) {
    super(health);
  }

  static create(damage: number, health: number): MagicalWeapon {
    return new MagicalWeapon(damage, health)
  }

  markAsUsed() {
    this._health -= 1
  }
}
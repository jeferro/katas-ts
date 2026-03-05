import {MagicalObject} from "./MagicalObject";

export class HealingMagicalObject extends MagicalObject {

  static create(health: number): HealingMagicalObject {
    return new HealingMagicalObject(health);
  }

  consume(realIncrease: number) {
    if (this._health < realIncrease) {
      this._health = 0
      return
    }

    this._health -= realIncrease
  }
}
import {Faction} from "./Faction";

export class Character {

  constructor(private _health: number,
              private _level: number,
              private _factionId: number | undefined) {
  }

  static create(): Character {
    return new Character(1000, 1, undefined)
  }

  damage(attacker: Character, damage: number) {
    const newDamage = attacker.level < 5
        ? damage * 0.5
        : damage * 1.5;

    this._health -= newDamage

    if (this._health < 0) {
      this._health = 0
    }
  }

  addHealth(value: number) {
    if (this.isDead) {
      throw new Error('Health is already dead')
    }

    this._health += value

    if (this._health > 1000 && this._level < 6) {
      this._health = 1000
      return
    }

    if (this._health > 1500) {
      this._health = 1500
      return
    }
  }

  setLevel(level: number) {
    this._level = level
  }

  join(faction: Faction) {
    this._factionId = faction.id
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

  public get level(): number {
    return this._level
  }

  public get factionId() {
    return this._factionId
  }
}

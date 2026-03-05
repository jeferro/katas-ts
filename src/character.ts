import {Faction} from "./Faction";

export class Character {

  constructor(private _health: number,
              private _level: number,
              private _factionIds: Set<number>) {
  }

  static create(): Character {
    const factions = new Set<number>();

    return new Character(1000, 1, factions)
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
    this._factionIds.add(faction.id)
  }

  leave(faction: Faction) {
    this._factionIds.delete(faction.id)
  }

  belongsTo(faction: Faction) : boolean {
    return this._factionIds.has(faction.id)
  }

  public get belongsToSomeFactory(): boolean {
    return this._factionIds.size > 0
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
}

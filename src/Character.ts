import {Faction} from "./Faction"
import {CharacterHealth} from "./CharacterHealth";
import {HealingMagicalObject} from "./objects/HealingMagicalObject";
import {MagicalWeapon} from "./objects/MagicalWeapon";

export class Character {

  constructor(private _health: CharacterHealth,
              private _level: number,
              private _factionIds: Set<number>) {
  }

  static create(): Character {
    const factions = new Set<number>()
    const health = CharacterHealth.create(1000, 1000)

    return new Character(health,1, factions)
  }

  damageFromAttacker(attacker: Character, damage: number) {
    if (attacker.isAllies(this)) {
      throw new Error("Attacker is allies");
    }

    const newDamage = attacker.level < 5
        ? damage * 0.5
        : damage * 1.5;

    this._health.decrease(newDamage);
  }

  damageUsingMagicalWeapon(magicalWeapon: MagicalWeapon) {
    this._health.decrease(magicalWeapon.damage)

    magicalWeapon.markAsUsed()
  }

  healthHimself(value: number) {
    this._health.increase(value)
  }

  healthFromAllies(other: Character, value: number) {
    if (other.isNotAllies(this)) {
      throw new Error("Other character should belongs to same faction to health me");
    }

    this._health.increase(value)
  }

  healthFromMagicalObject(healingMagicalObject: HealingMagicalObject) {
    const realIncrease = this._health.increase(healingMagicalObject.health)

    healingMagicalObject.consume(realIncrease)
  }

  setLevel(level: number) {
    this._level = level

    this._health.setMaxHealth(this._level < 6 ? 1000 : 1500)
  }

  join(faction: Faction) {
    this._factionIds.add(faction.id)
  }

  leave(faction: Faction) {
    this._factionIds.delete(faction.id)
  }

  belongsTo(factionId: number): boolean {
    return this._factionIds.has(factionId)
  }

  public get belongsToSomeFactory(): boolean {
    return this._factionIds.size > 0
  }

  private isAllies(other: Character): boolean {
    for (const factoryId of this._factionIds) {
      if (other.belongsTo(factoryId)) {
        return true
      }
    }

    return false
  }

  private isNotAllies(other: Character): boolean {
    return !this.isAllies(other)
  }

  public get health(): number {
    return this._health.value
  }

  public get isAlive(): boolean {
    return this._health.isAlive
  }

  public get isDead(): boolean {
    return this._health.isDead
  }

  public get level(): number {
    return this._level
  }
}

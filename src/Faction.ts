import {Character} from "./character";

export class Faction {
  constructor(public readonly id: number,
              public readonly name: string) {

  }

  static create(id: number, name: string): Faction {
    return new Faction(id, name)
  }
}
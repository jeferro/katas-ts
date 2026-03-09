export class Play {
  constructor(public name: string, public type: string) {}

  static create(name: string, type: string) : Play {
    return new Play(name, type)
  }
}

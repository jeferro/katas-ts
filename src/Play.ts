export class Play {
  constructor(public name: string, public type: string) {}

  static create(name: string, type: string) : Play {
    switch (type) {
      case "comedy":
        return new ComedyPlay(name, type)
      case "tragedy":
        return new TragedyPlay(name, type)
      default:
        throw new Error("Unknown type " + type)
    }
  }
}

class ComedyPlay extends Play {
}

class TragedyPlay extends Play {
}


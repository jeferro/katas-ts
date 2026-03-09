export class Play {
  constructor(public name: string, public type: string) {}

  static create(name: string, type: string) : Play {
    switch (type) {
      case "comedy":
        return new ComedyPlay(name)
      case "tragedy":
        return new TragedyPlay(name)
      default:
        throw new Error("Unknown type " + type)
    }
  }
}

class ComedyPlay extends Play {

  constructor(name: string) {
    super(name, "comedy")
  }
}

class TragedyPlay extends Play {

  constructor(name: string) {
    super(name, "tragedy")
  }
}


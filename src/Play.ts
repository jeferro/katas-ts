export abstract class Play {
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

  abstract calculateAmount(audience: number): number;
}

class ComedyPlay extends Play {

  constructor(name: string) {
    super(name, "comedy")
  }

  calculateAmount(audience: number): number {
    let thisAmount = 0;

    thisAmount = 30000;
    if (audience > 20) {
      thisAmount += 10000 + 500 * (audience - 20);
    }
    thisAmount += 300 * audience;

    return thisAmount;
  }
}

class TragedyPlay extends Play {

  constructor(name: string) {
    super(name, "tragedy")
  }

  calculateAmount(audience: number): number {
    let thisAmount = 0;

    thisAmount = 40000;
    if (audience > 30) {
      thisAmount += 1000 * (audience - 30);
    }

    return thisAmount;
  }
}


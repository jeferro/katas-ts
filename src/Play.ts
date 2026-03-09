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

  static calculateAmount(type: string, audience: number) {
    let thisAmount = 0;
    switch (type) {
      case "tragedy":
        thisAmount = 40000;
        if (audience > 30) {
          thisAmount += 1000 * (audience - 30);
        }
        break;

      case "comedy":
        thisAmount = 30000;
        if (audience > 20) {
          thisAmount += 10000 + 500 * (audience - 20);
        }
        thisAmount += 300 * audience;
        break;

      default:
        throw new Error(`unknown type: ${type}`);
    }
    return thisAmount;
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


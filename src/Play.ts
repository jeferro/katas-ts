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

  abstract calculateAmount(audience: number): number

  abstract calculateCredits(audience: number): number
}

class ComedyPlay extends Play {

  constructor(name: string) {
    super(name, "comedy")
  }

  calculateAmount(audience: number): number {
    let amount = 30000

    if (audience > 20) {
      amount += 10000 + 500 * (audience - 20)
    }

    return amount + (300 * audience)
  }

  calculateCredits(audience: number): number {
    return Math.max(audience - 30, 0) + Math.floor(audience / 5)
  }
}

class TragedyPlay extends Play {

  constructor(name: string) {
    super(name, "tragedy")
  }

  calculateAmount(audience: number): number {
    let amount = 40000

    if (audience > 30) {
      amount += 1000 * (audience - 30)
    }

    return amount;
  }

  calculateCredits(audience: number): number {
    return Math.max(audience - 30, 0)
  }
}


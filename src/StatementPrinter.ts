import { Invoice } from "./Invoice";
import { Play } from "./Play";
import { Performance } from "./Performance";

export class StatementPrinter {
  print(invoice: Invoice, plays: Record<string, Play>): string {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\r\n\r\n`;
    const format = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format;

    for (const perf of invoice.performances) {
      const play = plays[perf.playID];
      let type = play.type;
      let audience = perf.audience;

      let thisAmount = this.calculateAmount(type, audience);

      volumeCredits += Math.max(audience - 30, 0);
      if (type === "comedy") {
        volumeCredits += Math.floor(audience / 5);
      }

      result += `${play.name}: ${format(thisAmount / 100)} (${audience} seats)\r\n`;
      totalAmount += thisAmount;
    }

    result += `\r\nAmount owed is ${format(totalAmount / 100)}\r\n`;
    result += `You earned ${volumeCredits} credits\r\n\r\n`;
    return result;
  }

  calculateAmount(type: string, audience: number) {
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

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

      let thisAmount = play.calculateAmount(audience);

      let credits = play.calculateCredits(audience, type);

      volumeCredits += credits

      result += `${play.name}: ${format(thisAmount / 100)} (${audience} seats)\r\n`;
      totalAmount += thisAmount;
    }

    result += `\r\nAmount owed is ${format(totalAmount / 100)}\r\n`;
    result += `You earned ${volumeCredits} credits\r\n\r\n`;
    return result;
  }
}

import {Invoice} from "./Invoice";
import {Play} from "./Play";
import {PlayResult} from "./PlayResult";

export class StatementPrinter {

  private readonly format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  print(invoice: Invoice, plays: Record<string, Play>): string {
    let results : PlayResult[] = []

    for (const perf of invoice.performances) {
      const play = plays[perf.playID]

      const playResult = new PlayResult(play, perf.audience)
      results.push(playResult)
    }

    let totalAmount = 0
    let volumeCredits = 0

    for (const result of results) {
      totalAmount += result.amount
      volumeCredits += result.credits
    }

    let resultNew = `Statement for ${invoice.customer}\r\n\r\n`;

    results.forEach((result) => {
      resultNew += `${result.play.name}: ${this.format(result.amount / 100)} (${result.audience} seats)\r\n`;
    })

    resultNew += `\r\nAmount owed is ${this.format(totalAmount / 100)}\r\n`;
    resultNew += `You earned ${volumeCredits} credits\r\n\r\n`;

    return resultNew;
  }
}


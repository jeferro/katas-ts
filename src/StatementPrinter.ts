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
    let results = this.calculateResults(invoice, plays);

    const totalAmount = results.reduce(
        (acc, result) => (acc + result.amount),
        0
    )

    const totalCredits = results.reduce(
        (acc, result) => (acc + result.credits),
        0
    )

    return this.printText(invoice, results, totalAmount, totalCredits);
  }

  private calculateResults(invoice: Invoice, plays: Record<string, Play>) {
    let results: PlayResult[] = []

    for (const perf of invoice.performances) {
      const play = plays[perf.playID]

      const playResult = new PlayResult(play, perf.audience)
      results.push(playResult)
    }
    return results;
  }

  private printText(invoice: Invoice, results: PlayResult[], totalAmount: number, totalCredits: number) {
    let resultNew = `Statement for ${invoice.customer}\r\n\r\n`;

    results.forEach((result) => {
      resultNew += `${result.play.name}: ${this.format(result.amount / 100)} (${result.audience} seats)\r\n`;
    })

    resultNew += `\r\nAmount owed is ${this.format(totalAmount / 100)}\r\n`;
    resultNew += `You earned ${totalCredits} credits\r\n\r\n`;

    return resultNew;
  }
}


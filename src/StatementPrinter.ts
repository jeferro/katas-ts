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
    let invoiceResult = this.calculateInvoiceResult(invoice, plays);

    return this.printTextInvoice(invoice, invoiceResult);
  }

  private calculateInvoiceResult(invoice: Invoice, plays: Record<string, Play>): InvoiceResult {
    let playResults = this.calculatePlayResults(invoice, plays);

    const totalAmount = playResults.reduce(
        (acc, result) => (acc + result.amount),
        0
    )

    const totalCredits = playResults.reduce(
        (acc, result) => (acc + result.credits),
        0
    )
    return new InvoiceResult(playResults, totalAmount, totalCredits)
  }

  private calculatePlayResults(invoice: Invoice, plays: Record<string, Play>) {
    let results: PlayResult[] = []

    for (const perf of invoice.performances) {
      const play = plays[perf.playID]

      const playResult = new PlayResult(play, perf.audience)
      results.push(playResult)
    }
    return results;
  }

  private printTextInvoice(invoice: Invoice, result: InvoiceResult) {
    let resultText = `Statement for ${invoice.customer}\r\n\r\n`;

    result.playResults.forEach((result) => {
      resultText += `${result.play.name}: ${this.format(result.amount / 100)} (${result.audience} seats)\r\n`;
    })

    resultText += `\r\nAmount owed is ${this.format(result.totalAmount / 100)}\r\n`;
    resultText += `You earned ${result.totalCredits} credits\r\n\r\n`;

    return resultText;
  }
}

export class InvoiceResult {

  constructor(public readonly playResults: PlayResult[],
              public readonly totalAmount: number,
              public readonly totalCredits: number) {

  }

}


import { Invoice } from "./Invoice";
import { Play } from "./Play";
import { Performance } from "./Performance";

export class StatementPrinter {

  private readonly format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  print(invoice: Invoice, plays: Record<string, Play>): string {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\r\n\r\n`;
    let results : PlayResult[] = [];

    for (const perf of invoice.performances) {
      const play = plays[perf.playID];
      let audience = perf.audience;

      const playResult = new PlayResult(play, audience);
      results.push(playResult)

      let thisAmount = play.calculateAmount(audience);
      totalAmount += thisAmount;

      let credits = play.calculateCredits(audience);
      volumeCredits += credits

      result += `${play.name}: ${this.format(thisAmount / 100)} (${audience} seats)\r\n`;
    }

    result += `\r\nAmount owed is ${this.format(totalAmount / 100)}\r\n`;
    result += `You earned ${volumeCredits} credits\r\n\r\n`;

    return result;
  }
}

class PlayResult {
  constructor(public readonly play: Play,
              public readonly audience: number) {
  }

  public get amount(): number {
    return this.play.calculateAmount(this.audience)
  }

  public get credits(): number {
    return this.play.calculateCredits(this.audience)
  }
}

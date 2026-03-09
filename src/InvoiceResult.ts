import {PlayResult} from "./PlayResult";

export class InvoiceResult {

  constructor(public readonly playResults: PlayResult[],
              public readonly totalAmount: number,
              public readonly totalCredits: number) {

  }

}
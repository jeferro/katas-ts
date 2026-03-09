import {describe, expect, it} from 'vitest'
import {StatementPrinter} from "./StatementPrinter"
import {Invoice} from "./Invoice"
import {Performance} from "./Performance"
import {Play} from "./Play"


describe('StatementPrinter', () => {

  const plays = {
    "hamlet": new Play("Hamlet", "tragedy")
  }

  const invoices = [
    new Invoice("customer-test-1", [new Performance("hamlet", 100)])
  ]

  const statementPrinter = new StatementPrinter()

  it.each(invoices)('should pass invoice to customer: $customer', (invoice) => {
    const result = statementPrinter.print(invoice, plays)

    expect(result).toMatchSnapshot()
  })
})

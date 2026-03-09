import {describe, expect, it} from 'vitest'
import {StatementPrinter} from "./StatementPrinter"
import {Invoice} from "./Invoice"
import {Performance} from "./Performance"
import {Play} from "./Play"


describe('StatementPrinter', () => {

  const plays = {
    "hamlet": new Play("Hamlet", "tragedy"),
    "earnest": new Play("The Importance of Being Earnest", "comedy"),
    "salesman": new Play("Death of a Salesman", "drama")
  }

  const invoices = [
    new Invoice("customer-test-1", [new Performance("hamlet", 100)]),
    new Invoice("customer-test-2", [new Performance("hamlet", 30)]),
    new Invoice("customer-test-3", [new Performance("earnest", 100)]),
    new Invoice("customer-test-4", [new Performance("earnest", 20)])
  ]

  const statementPrinter = new StatementPrinter()

  it.each(invoices)('should pass invoice to customer: $customer', (invoice) => {
    const result = statementPrinter.print(invoice, plays)

    expect(result).toMatchSnapshot()
  })

  it('should fail when type is unknown', () => {
    const invoice = new Invoice("customer-fail-type", [new Performance("salesman", 100)])

    expect(() => statementPrinter.print(invoice, plays)).toThrowError()
  })
})

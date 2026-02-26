import {Statement} from "./Statement"

export class Account {
    private _balance = 0
    private _statements: Statement[] = []

    deposit(amount: number) {
        this.ensureAmountIsPositive(amount)

        this._balance += amount

        const statement = Statement.createDeposit(amount, this._balance)
        this._statements.push(statement)
    }

    withdraw(amount: number) {
        this.ensureAmountIsPositive(amount)

        if (this._balance < amount) {
            throw new Error(`Account value (${this._balance}) is less than amount (${amount})`)
        }

        this._balance -= amount

        const statement = Statement.createWithdraw(amount, this._balance)
        this._statements.push(statement)
    }

    printStatement() {
        console.log('DATE | AMOUNT | BALANCE')

        this._statements.reverse()
            .forEach((statement) => {
                const dayStr = statement.date.getDate().toString().padStart(2, '0')
                const month = statement.date.getMonth() + 1
                const monthStr = month.toString().padStart(2, '0')
                const yearStr = statement.date.getFullYear()
                const dateStr = `${dayStr}/${monthStr}/${yearStr}`

                const amountStr = statement.amount.toFixed(2)
                const balanceStr = statement.balance.toFixed(2)

                const line = `${dateStr} | ${amountStr} | ${balanceStr}`
                console.log(line)
            })
    }

    private ensureAmountIsPositive(amount: number) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than 0')
        }
    }

    public get balance(): number {
        return this._balance
    }

    public get statements(): Statement[] {
        return this._statements;
    }
}
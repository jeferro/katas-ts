import {Statement} from "./Statement";
import {TimeService} from "./utils/TimeService";

export class Account {
    private _balance = 0
    private _statements: Statement[] = []

    deposit(amount: number) {
        this.ensureAmountIsPositive(amount)

        this._balance += amount

        const now = TimeService.now()

        const statement = Statement.createDeposit(now, amount, this._balance)
        this._statements.push(statement)
    }

    withdraw(amount: number) {
        this.ensureAmountIsPositive(amount)

        if(this._balance < amount) {
            throw new Error(`Account value (${this._balance}) is less than amount (${amount})`)
        }

        this._balance -= amount

        const now = TimeService.now()

        const statement = Statement.createWithdraw(now, amount, this._balance)
        this._statements.push(statement)
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
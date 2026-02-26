import {Statement} from "./Statement";
import {TimeService} from "./utils/TimeService";

export class Account {
    private _total = 0
    private _statements: Statement[] = []

    public get total(): number {
        return this._total
    }

    deposit(amount: number) {
        this.ensureAmountIsPositive(amount)

        this._total += amount

        const now = TimeService.now()

        const statement = Statement.createDeposit(now, amount, this._total)
        this._statements.push(statement)
    }

    withdraw(amount: number) {
        this.ensureAmountIsPositive(amount)

        if(this._total < amount) {
            throw new Error(`Account value (${this._total}) is less than amount (${amount})`)
        }

        this._total -= amount

        const now = TimeService.now()

        const statement = Statement.createWithdraw(now, amount, this._total)
        this._statements.push(statement)
    }

    private ensureAmountIsPositive(amount: number) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than 0')
        }
    }

    get statements(): Statement[] {
        return this._statements;
    }
}
import {TimeService} from "./utils/TimeService";

export class Statement {

    constructor(public readonly _date: Date,
                public readonly amount: number,
                public readonly balance: number,
                public readonly deposit: boolean) {
    }

    static createDeposit(amount: number, balance: number): Statement {
        const now = TimeService.now()

        return new Statement(now, amount, balance, true)
    }

    static createWithdraw(amount: number, balance: number) {
        const now = TimeService.now()

        return new Statement(now, amount, balance, false)
    }

    public get date() : string {
        let dayStr = this._date.getDate().toString().padStart(2, '0')

        let month = this._date.getMonth() + 1
        let monthStr = month.toString().padStart(2, '0')

        let yearStr = this._date.getFullYear()

        return `${dayStr}/${monthStr}/${yearStr}`
    }
}
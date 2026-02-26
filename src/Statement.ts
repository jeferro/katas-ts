import {TimeService} from "./utils/TimeService";

export class Statement {

    constructor(public readonly date: Date,
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
}
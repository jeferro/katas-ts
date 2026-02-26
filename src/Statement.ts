
export class Statement {

    constructor(public readonly date: string,
                public readonly amount: number,
                public readonly balance: number,
                public readonly deposit: boolean) {
    }

    static createDeposit(date: string, amount: number, balance: number): Statement {
        return new Statement(date, amount, balance, true)
    }
}

export class Statement {

    constructor(public readonly amount: number,
                public readonly balance: number,
                public readonly deposit: boolean) {
    }

    static createDeposit(amount: number, balance: number): Statement {
        return new Statement(amount, balance, true)
    }
}
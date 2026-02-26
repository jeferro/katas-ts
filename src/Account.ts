export class Account {
    private _total = 0

    public get total(): number {
        return this._total
    }

    deposit(amount: number) {
        this.ensureAmountIsPositive(amount)

        this._total += amount
    }

    withdraw(amount: number) {
        this.ensureAmountIsPositive(amount)

        if(this._total < amount) {
            throw new Error(`Account value (${this._total}) is less than amount (${amount})`)
        }

        this._total -= amount
    }

    private ensureAmountIsPositive(amount: number) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than 0')
        }
    }
}
export class Account {
    private _value = 0

    public get value(): number {
        return this._value
    }

    deposit(amount: number) {
        if(amount <= 0) {
            throw new Error('Deposit amount must be greater than 0')
        }

        this._value += amount
    }

    withdraw(amount: number) {
        this._value -= amount
    }
}
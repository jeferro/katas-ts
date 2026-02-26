export class Account {
    private _value = 0

    public get value(): number {
        return this._value
    }

    deposit(amount: number) {
        this._value += amount
    }

    withdraw(amount: number) {
        this._value -= amount
    }
}
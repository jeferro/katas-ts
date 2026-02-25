import {Dessert} from "../Dessert";
import {Decimal} from "decimal.js";

export class Topping extends Dessert {

    constructor(private readonly _dessert: Dessert) {
        super()
    }

    public get name(): string {
        return `${this._dessert.name}`
    }

    public get price(): Decimal {
        return this._dessert.price
    }

}
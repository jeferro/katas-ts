import {Dessert} from "../Dessert";
import {Topping} from "./Topping";
import {Decimal} from "decimal.js";

export class Peanuts extends Topping {

    constructor(dessert: Dessert) {
        super(dessert)
    }

    public get name(): string {
        return `${super.name} with peanuts`
    }

    public get price(): Decimal {
        const price = Decimal("0.2")

        return super.price.add(price)
    }

}
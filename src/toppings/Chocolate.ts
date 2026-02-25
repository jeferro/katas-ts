import {Dessert} from "../Dessert";
import {Topping} from "./Topping";
import {Decimal} from "decimal.js";

export class Chocolate extends Topping {

    constructor(dessert: Dessert) {
        super(dessert)
    }

    public get name(): string {
        return `${super.name} with chocolate`
    }

    public get price(): Decimal {
        const price = Decimal("0.1")

        return super.price.add(price)
    }

}
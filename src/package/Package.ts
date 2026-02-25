import {Dessert} from "../Dessert"
import {Decimal} from "decimal.js"

export class Package extends Dessert {

    constructor(private children: Dessert[]) {
        super();
    }

    public get name(): string {
        return `Package`
    }

    public get price(): Decimal {
        const total = this.children
            .map(child => child.price)
            .reduce((acc, cur) => acc.add(cur), Decimal("0"))

        return total.mul(Decimal("0.9"))
    }



}
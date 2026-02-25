import {Decimal} from "decimal.js";
import {Dessert} from "./Dessert";

export class Cookie extends Dessert {
    public get name(): string {
        return 'Cookie'
    }

    public get price(): Decimal {
        return Decimal(2)
    }

}
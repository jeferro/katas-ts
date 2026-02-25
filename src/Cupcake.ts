import {Dessert} from "./Dessert";
import {Decimal} from "decimal.js";

export class Cupcake extends Dessert {

    public get name(): string {
        return 'Cupcake'
    }

    public get price(): Decimal {
        return Decimal(1)
    }
}
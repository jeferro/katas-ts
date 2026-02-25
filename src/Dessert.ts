import {Decimal} from "decimal.js";

export abstract class Dessert {

    public abstract get name(): string

    public abstract get price(): Decimal
}
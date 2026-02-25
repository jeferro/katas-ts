import {Dessert} from "../Dessert";

export class Topping extends Dessert {

    constructor(private readonly _dessert: Dessert) {
        super()
    }

    public get name(): string {
        return `${this._dessert.name}`
    }

}
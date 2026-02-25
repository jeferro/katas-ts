import {Dessert} from "../Dessert";
import {Topping} from "./Topping";

export class Peanuts extends Topping {

    constructor(dessert: Dessert) {
        super(dessert)
    }

    public get name(): string {
        return `${super.name} with peanuts`
    }

}
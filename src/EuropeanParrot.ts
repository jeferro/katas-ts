import {Parrot} from "./Parrot";

export class EuropeanParrot extends Parrot {
    constructor() {
        super();
    }

    public getSpeed(): number {
        return this.BASE_SPEED;
    }

    public getCry(): String {
        return "Sqoork!";
    }
}
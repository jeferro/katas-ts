import {Parrot} from "./Parrot";

export class EuropeanParrot extends Parrot {
    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    public getSpeed(): number {
        return this.BASE_SPEED;
    }

    public getCry(): String {
        return "Sqoork!";
    }
}
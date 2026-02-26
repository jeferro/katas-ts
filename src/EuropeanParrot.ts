import {Parrot, ParrotTypes} from "./Parrot";

export class EuropeanParrot extends Parrot {
    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    public getSpeed(): number {
        return this.getBaseSpeed();
    }

    public getCry(): String {
        return "Sqoork!";
    }
}
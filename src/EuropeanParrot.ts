import {Parrot, ParrotTypes} from "./Parrot";

export class EuropeanParrot extends Parrot {
    protected readonly parrotType = ParrotTypes.EUROPEAN

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
import {Parrot} from "./Parrot";

export class AfricanParrot extends Parrot {
    private readonly LOCAL_FACTOR = 9;

    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    public getSpeed(): number {
        return Math.max(0, this.getBaseSpeed() - this.LOCAL_FACTOR * this.numberOfCoconuts);
    }

    public getCry(): String {
        return "Sqaark!";
    }
}
import {Parrot} from "./Parrot";

export class AfricanParrot extends Parrot {
    private readonly LOCAL_FACTOR = 9;

    constructor(numberOfCoconuts: number) {
        super(numberOfCoconuts);
    }

    public getSpeed(): number {
        return Math.max(0, this.BASE_SPEED - this.LOCAL_FACTOR * this.numberOfCoconuts);
    }

    public getCry(): String {
        return "Sqaark!";
    }
}
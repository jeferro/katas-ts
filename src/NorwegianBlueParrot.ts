import {Parrot, ParrotTypes} from "./Parrot";

export class NorwegianBlueParrot extends Parrot {
    protected readonly parrotType = ParrotTypes.NORWEGIAN_BLUE

    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    public getSpeed(): number {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }

    public getCry(): String {
        return this.voltage > 0 ? "Bzzzzzz" : "...";
    }
}
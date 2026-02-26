import {Parrot, ParrotTypes} from "./Parrot";

export class NorwegianBlueParrot extends Parrot {
    protected parrotType = ParrotTypes.NORWEGIAN_BLUE

    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    public getSpeed(): number {
        switch (this.parrotType) {
            case ParrotTypes.EUROPEAN:
                return this.getBaseSpeed();
            case ParrotTypes.AFRICAN:
                return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
            case ParrotTypes.NORWEGIAN_BLUE:
                return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
        }
        throw new Error("Should be unreachable");
    }

    public getCry(): String {
        switch (this.parrotType) {
            case ParrotTypes.EUROPEAN:
                return "Sqoork!";
            case ParrotTypes.AFRICAN:
                return "Sqaark!";
            case ParrotTypes.NORWEGIAN_BLUE:
                return this.voltage > 0 ? "Bzzzzzz" : "...";
        }
        throw new Error("Should be unreachable");
    }
}
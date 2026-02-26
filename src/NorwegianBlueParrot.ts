import {Parrot} from "./Parrot";

export class NorwegianBlueParrot extends Parrot {
    protected voltage: number

    protected isNailed: boolean

    constructor(voltage: number, isNailed: boolean) {
        super();

        this.voltage = voltage
        this.isNailed = isNailed
    }

    public getSpeed(): number {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }

    public getCry(): String {
        return this.voltage > 0 ? "Bzzzzzz" : "...";
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(24, voltage * this.BASE_SPEED);
    }
}
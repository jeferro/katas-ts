import {Parrot, ParrotTypes} from "./Parrot";

export class EuropeanParrot extends Parrot {
    constructor(parrotType: ParrotTypes, numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(ParrotTypes.EUROPEAN, numberOfCoconuts, voltage, isNailed);
    }
}
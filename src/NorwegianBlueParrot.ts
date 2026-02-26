import {Parrot, ParrotTypes} from "./Parrot";

export class NorwegianBlueParrot extends Parrot {
    constructor(parrotType: ParrotTypes, numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(ParrotTypes.NORWEGIAN_BLUE, numberOfCoconuts, voltage, isNailed);
    }
}
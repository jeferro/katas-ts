import {Parrot, ParrotTypes} from "./Parrot";

export class AfricanParrot extends Parrot {
    constructor(parrotType: ParrotTypes, numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(ParrotTypes.AFRICAN, numberOfCoconuts, voltage, isNailed);
    }
}
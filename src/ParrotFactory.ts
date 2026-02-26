import {Parrot, ParrotTypes} from "./Parrot";
import {AfricanParrot} from "./AfricanParrot";
import {NorwegianBlueParrot} from "./NorwegianBlueParrot";
import {EuropeanParrot} from "./EuropeanParrot";

export abstract class ParrotFactory {

    public static create(parrotType: ParrotTypes,
                         numberOfCoconuts: number,
                         voltage: number,
                         isNailed: boolean): Parrot {
        switch(parrotType) {
            case ParrotTypes.AFRICAN:
                return new AfricanParrot(parrotType, numberOfCoconuts, voltage, isNailed)
            case ParrotTypes.NORWEGIAN_BLUE:
                return new NorwegianBlueParrot(parrotType, numberOfCoconuts, voltage, isNailed)
            case ParrotTypes.EUROPEAN:
                return new EuropeanParrot(parrotType, numberOfCoconuts, voltage, isNailed)
        }

    }
}
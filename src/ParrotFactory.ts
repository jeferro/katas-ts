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
                return new AfricanParrot( numberOfCoconuts)
            case ParrotTypes.NORWEGIAN_BLUE:
                return new NorwegianBlueParrot( numberOfCoconuts, voltage, isNailed)
            case ParrotTypes.EUROPEAN:
                return new EuropeanParrot(numberOfCoconuts)
        }

    }
}
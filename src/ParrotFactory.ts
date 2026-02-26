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
                return new NorwegianBlueParrot( voltage, isNailed)
            case ParrotTypes.EUROPEAN:
                return new EuropeanParrot()
        }

    }

    public static createAfrican(parrotType: ParrotTypes,
                                numberOfCoconuts: number,
                                voltage: number,
                                isNailed: boolean): Parrot {
        return new AfricanParrot( numberOfCoconuts)
    }

    public static createNorwegianBlue(parrotType: ParrotTypes,
                                      numberOfCoconuts: number,
                                      voltage: number,
                                      isNailed: boolean): Parrot {
        return new NorwegianBlueParrot( voltage, isNailed)
    }

    public static createEuropean(parrotType: ParrotTypes,
                                      numberOfCoconuts: number,
                                      voltage: number,
                                      isNailed: boolean): Parrot {
        return new EuropeanParrot()
    }
}
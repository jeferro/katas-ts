import {Parrot} from "./Parrot";
import {AfricanParrot} from "./AfricanParrot";
import {NorwegianBlueParrot} from "./NorwegianBlueParrot";
import {EuropeanParrot} from "./EuropeanParrot";

export abstract class ParrotFactory {
    public static createAfrican(numberOfCoconuts: number): Parrot {
        return new AfricanParrot( numberOfCoconuts)
    }

    public static createNorwegianBlue(voltage: number,
                                      isNailed: boolean): Parrot {
        return new NorwegianBlueParrot( voltage, isNailed)
    }

    public static createEuropean(): Parrot {
        return new EuropeanParrot()
    }
}
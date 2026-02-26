
export enum ParrotTypes {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE,
}

export abstract class Parrot {
    constructor(protected numberOfCoconuts: number,
                protected voltage: number,
                protected isNailed: boolean) {
    }

    protected getBaseSpeed(): number {
        return 12;
    }

}



export enum ParrotTypes {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE,
}

export abstract class Parrot {
    protected readonly BASE_SPEED = 12;

    constructor(protected numberOfCoconuts: number) {
    }
}


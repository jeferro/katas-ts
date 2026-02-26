
export enum ParrotTypes {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE,
}

export abstract class Parrot {
    protected readonly BASE_SPEED = 12;

    public abstract getSpeed(): number

    public abstract getCry(): String
}


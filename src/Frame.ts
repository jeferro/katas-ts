export class Frame {
    private static readonly MAX_PINS = 10

    private bonus = 0

    constructor(private readonly attempt1: number,
                private readonly attempt2: number) {
    }

    static create(attempt1: number, attempt2: number): Frame {
        if(attempt1 < 0) {
            throw new Error(`Attempt 1 can not be negative`)
        }

        if(attempt2 < 0) {
            throw new Error(`Attempt 2 can not be negative`)
        }

        if (attempt1 + attempt2 > Frame.MAX_PINS) {
            throw new Error(`The sum of attempts ${attempt1} and ${attempt2} `
                + `is greater than ${Frame.MAX_PINS}`)
        }

        return new Frame(attempt1, attempt2)
    }

    getTotalScore() {
        return this.attempt1 + this.attempt2 + this.bonus
    }

    public get isSpare() : boolean {
        return this.attempt1 + this.attempt2 === Frame.MAX_PINS
    }

    scoreSpare(attempt1: number) {
        if(!this.isSpare) {
            throw new Error(`Frame is not a spare`)
        }

        this.bonus = attempt1
    }
}

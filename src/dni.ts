export class Dni {
    private static readonly PATTERN = /^\d{8}[a-zA-Z]$/

    private static readonly INVALID_LETTERS = ["U", "I", "O", "Ñ"]

    private static readonly LETTERS = [
        'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
        'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'
    ];

    private readonly code: number

    private readonly letter: string

    constructor(value: string) {
        if (!Dni.PATTERN.test(value)) {
            throw new Error(`DNI ${value} has a wrong format`)
        }

        const codeStr = value.slice(0, 8)
        this.code = Number(codeStr)

        this.letter = value.slice(-1)

        if (Dni.INVALID_LETTERS.includes(this.letter)) {
            throw new Error(`DNI ${value} has an invalid letter: ${Dni.INVALID_LETTERS}`)
        }

        const expectedLetter = Dni.LETTERS[this.code % 23];

        if(expectedLetter !== this.letter) {
            throw new Error(`DNI ${value} has an invalid letter, expected ${expectedLetter}`)
        }
    }

    equals(other: any): boolean {
        if (!(other instanceof Dni)) {
            return false
        }

        return this.code === other.code
            && this.letter === other.letter;
    }

    toString(): string {
        return `${this.code}${this.letter}`
    }
}

export class Dni {
    private static readonly PATTERN = /^(\d{8})([A-Z])$/

    private static readonly INVALID_LETTERS = ["U", "I", "O", "Ñ"]

    private static readonly LETTERS = [
        'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
        'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'
    ];

    private readonly code: number

    private readonly letter: string

    constructor(value: string) {
        const cleanValue = value.trim().toUpperCase()
        const match = cleanValue.match(Dni.PATTERN)

        if (!match) {
            throw new Error(`DNI ${value} has a wrong format`)
        }

        this.code = parseInt(match[1], 10)
        this.letter = match[2]

        if (Dni.INVALID_LETTERS.includes(this.letter)) {
            throw new Error(`DNI ${value} has an invalid letter: ${Dni.INVALID_LETTERS}`)
        }

        const expectedLetter = Dni.LETTERS[this.code % 23];

        if(expectedLetter !== this.letter) {
            throw new Error(`DNI ${value} has an wrong letter, expected ${expectedLetter}`)
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

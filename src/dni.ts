export class Dni {
    static PATTERN = /^\d{8}[a-zA-Z]$/

    static INVALID_LETTERS = ["U", "I", "O", "Ñ"]

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

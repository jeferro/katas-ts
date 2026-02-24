export class Dni {
    static PATTERN = /^\d{8}[a-zA-Z]$/

    static INVALID_LETTERS = ["U", "I", "O", "Ñ"]

    private code: number

    private letter: string

    constructor(value: string) {
        if(value.length != 9) {
            throw new Error("DNI " + value + " has a wrong length")
        }

        if(!Dni.PATTERN.test(value)) {
            throw new Error("DNI " + value + " has a wrong format")
        }

        const codeStr = value.slice(0, 8)
        this.code = Number(codeStr)

        this.letter = value.slice(-1)

        if(Dni.INVALID_LETTERS.includes(this.letter)) {
            throw new Error("DNI " + value + " has an invalid letter: " + Dni.INVALID_LETTERS)
        }
    }
}

export class Dni {
    static PATTERN = /^\d{8}[a-zA-Z]$/;

    constructor(private value: string) {
        if(value.length != 9) {
            throw new Error("DNI " + value + " has a wrong length");
        }

        if(!Dni.PATTERN.test(value)) {
            throw new Error("DNI " + value + " has a wrong format");
        }
    }
}

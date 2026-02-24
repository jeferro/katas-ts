export class Dni {
    constructor(private value: String) {
        if(value.length != 9) {
            throw new Error("DNI " + value + " has a wrong length");
        }
    }
}

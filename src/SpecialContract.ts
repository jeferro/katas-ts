import {Contract} from "./Contract";

export class SpecialContract extends Contract {

    constructor(name: string,
                startDate: Date,
                private readonly _vacations: number) {
        super(name, startDate)
    }

    vacations(testDate: Date) {
        return this._vacations
    }
}
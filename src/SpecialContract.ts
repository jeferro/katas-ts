import {Contract} from "./Contract";

export class SpecialContract extends Contract {

    constructor(name: string,
                startDate: Date,
                birthDay: Date,
                private readonly _vacations: number) {
        super(name, startDate, birthDay)
    }

    vacations(testDate: Date) {
        return this._vacations
    }
}
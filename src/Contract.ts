import {DateUtils} from "./DateUtils";

export class Contract {

    constructor(private readonly name: string,
                private readonly startDate: Date,
                private readonly birthDate: Date) {
    }

    vacations(testDate: Date) {
        if(this.startDate.getFullYear() == testDate.getFullYear()){
            return (testDate.getMonth() + 1) * 2
        }

        return 24 + DateUtils.numYearBetween(testDate, this.startDate)
    }
}

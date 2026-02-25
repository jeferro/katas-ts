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

        const age = DateUtils.numYearBetween(testDate, this.birthDate)
        const numYearInEnterprise = DateUtils.numYearBetween(testDate, this.startDate)

        const plusFirstRangeYears = numYearInEnterprise >= 6 ? 6 : numYearInEnterprise
        let plusOtherRangeYears = 0

        if(age >= 40){
            plusOtherRangeYears = Math.trunc(numYearInEnterprise / 5)
        }

        return 24 + plusFirstRangeYears + plusOtherRangeYears
    }
}

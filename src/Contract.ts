import {DateUtils} from "./DateUtils";

export class Contract {

    constructor(private readonly name: string,
                private readonly startDate: Date,
                private readonly birthDay: Date) {
    }

    vacations(testDate: Date) {
        if(this.startDate.getFullYear() == testDate.getFullYear()){
            return (testDate.getMonth() + 1) * 2
        }

        const age = DateUtils.numYearBetween(testDate, this.birthDay)
        const numYearInEnterprise = DateUtils.numYearBetween(testDate, this.startDate)

        const plusFirstRangeYears = numYearInEnterprise >= 6 ? 6 : numYearInEnterprise
        let plusOtherRangeYears = 0

        if(age >= 40){
            plusOtherRangeYears = Math.trunc(numYearInEnterprise / 5)
        }

        return 24 + plusFirstRangeYears + plusOtherRangeYears
    }
}

export class Contract {

    constructor(private readonly name: string,
                private readonly startDate: Date,
                private readonly birthDate: Date) {
    }

    vacations(testDate: Date) {
        if(this.startDate.getFullYear() == testDate.getFullYear()){
            return (testDate.getMonth() + 1) * 2
        }

        return 24 + this.numOfYearsInEnterprise(testDate)
    }

    private numOfYearsInEnterprise(testDate: Date) {
        let years = testDate.getFullYear() - this.startDate.getFullYear()
        const months = testDate.getMonth() - this.startDate.getMonth()

        if (months < 0
            || (months === 0 && testDate.getDate() < this.startDate.getDate())) {
            years--;
        }

        return years;
    }
}
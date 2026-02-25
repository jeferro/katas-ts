export class Contract {

    constructor(private readonly name: string,
                private readonly startDate: Date) {
    }

    vacations(testDate: Date) {
        if(this.startDate.getFullYear() < testDate.getFullYear()){
            return 24
        }

        return (testDate.getMonth() + 1) * 2
    }
}
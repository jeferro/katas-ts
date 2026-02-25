export class Contract {

    constructor(private readonly name: string,
                private readonly startDate: Date) {
    }

    vacations(testDate: Date) {
        return 24
    }
}
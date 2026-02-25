export class Contract {

    constructor(private readonly name: string,
                private readonly startDate: Date) {
    }

    vacation(testDate: Date) {
        return 24
    }
}
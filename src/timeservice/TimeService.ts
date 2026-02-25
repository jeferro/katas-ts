export abstract class TimeService {
    abstract now(): Date

    lastDayOfPastYear(): Date {
        const now = this.now()

        return new Date(now.getFullYear(), 0, 0)
    }
}
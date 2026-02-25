
export abstract class DateUtils {

    public static numYearBetween(testDate: Date, startDate: Date) {
        let years = testDate.getFullYear() - startDate.getFullYear()
        const months = testDate.getMonth() - startDate.getMonth()

        if (months < 0
            || (months === 0 && testDate.getDate() < startDate.getDate())) {
            years--;
        }

        return years;
    }
}
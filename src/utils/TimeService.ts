export abstract class TimeService {

    static now(): string {
        const now = new Date()

        let dayStr = now.getDate().toString().padStart(2, '0')

        let month = now.getMonth() + 1
        let monthStr = month.toString().padStart(2, '0')

        return `${dayStr}/${monthStr}/${now.getFullYear()}`
    }
}
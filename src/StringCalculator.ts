export default class StringCalculator {

    add(numbers: string): number {
        if(numbers === undefined || numbers === "") {
            return 0
        }

        return parseInt(numbers, 10)
    }
}
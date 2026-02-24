export default class StringCalculator {

    add(numbers: string): number {
        if(numbers === undefined || numbers === "") {
            return 0
        }

        const values = numbers.split(",")

        const firstValue = StringCalculator.mapValue(values, 0)
        const secondValue = StringCalculator.mapValue(values, 1)

        return firstValue + secondValue
    }

    private static mapValue(values: string[], index: number) : number {
        if(values.length < index + 1) {
            return 0
        }

        return parseInt(values[index], 10)
    }
}
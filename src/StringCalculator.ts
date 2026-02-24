export default class StringCalculator {

    add(numbers: string): number {
        if (numbers === undefined || numbers === "") {
            return 0
        }

        return numbers.replace("\\n", ",")
            .split(",")
            .map(valueStr => parseInt(valueStr, 10))
            .reduce((a, b) => a + b);
    }
}
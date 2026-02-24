export default class StringCalculator {

    private static readonly INPUT_REGEX = /^(?:\/\/(\[?.+?\]?)(?:\n|\\n))?([\s\S]*)$/

    private static readonly DELIMITER_REGEX = /\[(.+?)\]/g

    add(input: string): number {
        if (input === undefined || input === "") {
            return 0
        }

        const match = input.match(StringCalculator.INPUT_REGEX)

        if (!match) {
            throw new Error(`Wrong string of numbers: ${input}`)
        }

        const delimiters = this.mapDelimiters(match[1]);

        const numbers = this.mapNumbers(match[2], delimiters)

        const negativeNumbers = numbers.filter(value => value < 0);

        if (negativeNumbers.length > 0) {
            throw new Error(`There are negative values: ${negativeNumbers.join(",")}`)
        }

        return numbers.filter(number => number <= 1000).reduce((a, b) => a + b);
    }

    private mapDelimiters(delimitersStr: string) {
        if(!delimitersStr) {
            return [","]
        }

        if(!delimitersStr.includes("[")){
            return [delimitersStr]
        }

        const delimiters: string[] = []
        let math

        while ((math = StringCalculator.DELIMITER_REGEX.exec(delimitersStr)) !== null) {
            delimiters.push(math[1])
        }

        return delimiters;
    }

    private mapNumbers(numbers: string, delimiters: string[]) : number[] {
        const defaultDelimiter = ","

        let cleanNumbers = numbers.replace("\\n", defaultDelimiter)

        delimiters.forEach(delimiter => {
            cleanNumbers = cleanNumbers.replaceAll(delimiter, defaultDelimiter)
        })

        return cleanNumbers.split(defaultDelimiter)
            .map(valueStr => parseInt(valueStr, 10))
    }
}
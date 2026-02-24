export default class StringCalculator {

    private static readonly DELIMITER_PATTER = /^(?:\/\/(.)\n)?([\s\S]*)$/;

    add(input: string): number {
        if (input === undefined || input === "") {
            return 0
        }

        const match = input.match(StringCalculator.DELIMITER_PATTER)

        if(!match){
            throw new Error(`Wrong string of numbers: ${input}`)
        }

        const delimiter = match[1] || ","
        const numbers = match[2]

        return numbers.replace("\\n", delimiter)
            .split(delimiter)
            .map(valueStr => parseInt(valueStr, 10))
            .reduce((a, b) => a + b);
    }
}
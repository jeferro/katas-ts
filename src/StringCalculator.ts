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
        const numbersStr = match[2]

        const numbers = numbersStr.replace("\\n", delimiter)
            .split(delimiter)
            .map(valueStr => parseInt(valueStr, 10));

        const negativeNumbers = numbers.filter(value => value < 0);

        if(negativeNumbers.length > 0){
            throw new Error(`There are negative values: ${negativeNumbers.join(",")}`)
        }


        return numbers.reduce((a, b) => a + b);
    }
}
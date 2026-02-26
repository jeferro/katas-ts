import {ImportUserScript} from "./ImportUserScript";
import {ConsoleLogger} from "./logger/ConsoleLogger";


main()

async function main() {
    const logger = new ConsoleLogger()
    const script = new ImportUserScript(logger)

    await script.execute()
}
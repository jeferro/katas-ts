import { describe, it, expect } from 'vitest'
import {ImportUserScript} from "./ImportUserScript"
import {Logger} from "./logger/Logger";
import {mock} from "vitest-mock-extended";

describe('ImportUserScript', () => {

    const consoleLogger = mock<Logger>()
    const script = new ImportUserScript(consoleLogger)

    it('should import users', async ()=> {
        await script.execute()

        const logs = consoleLogger.log.mock.calls.map(data => data[0])

        expect(logs).toMatchSnapshot()
    })
})

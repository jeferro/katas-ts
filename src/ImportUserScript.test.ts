import { describe, it, expect, vi } from 'vitest'
import {ImportUserScript} from "./ImportUserScript"
import {ConsoleLogger} from "./logger/ConsoleLogger";

describe('ImportUserScript', () => {

    it('should import users', async ()=> {
        const script = new ImportUserScript()

        const logSpy = vi.spyOn(ConsoleLogger.prototype, 'log')

        await script.execute()

        const logs = logSpy.mock.calls.map(data => data[0])

        expect(logs).toMatchSnapshot()
    })
})

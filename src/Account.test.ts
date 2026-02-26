import { describe, it, expect } from 'vitest'
import {Account} from "./Account"

describe('Account', () => {

    it('should create instance', () => {
        const account = new Account()

        expect(account).not.toBeUndefined()
    })
})

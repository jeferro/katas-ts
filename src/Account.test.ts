import { describe, it, expect } from 'vitest'
import {Account} from "./Account"

describe('Account', () => {

    it('should has value zero after creation', () => {
        const account = new Account()

        expect(account.value).toBe(0)
    })
})

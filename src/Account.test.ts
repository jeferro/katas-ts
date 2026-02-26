import { describe, it, expect } from 'vitest'
import {Account} from "./Account"

describe('Account', () => {

    it('should has value zero after creation', () => {
        const account = new Account()

        expect(account.value).toBe(0)
    })

    it('should fail when deposit a zero value', () => {
        const account = new Account()

        expect(() => account.deposit(0)).toThrowError()
    })

    it('should fail when deposit a negative value', () => {
        const account = new Account()

        expect(() => account.deposit(-1)).toThrowError()
    })

    it('should deposit amount', () => {
        const account = new Account()
        account.deposit(100)
        account.deposit(30)

        expect(account.value).toBe(130)
    })

    it('should withdraw amount', () => {
        const account = new Account()
        account.deposit(100)
        account.deposit(10)
        account.withdraw(25)
        account.withdraw(5)

        expect(account.value).toBe(80)
    })
})

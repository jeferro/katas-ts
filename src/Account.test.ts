import {describe, it, expect, vi} from 'vitest'
import {Account} from "./Account"
import {TimeService} from "./utils/TimeService";

describe('Account', () => {

    it('should has value zero after creation', () => {
        const account = new Account()

        expect(account.balance).toBe(0)
    })

    it('should deposit amount', () => {
        const account = new Account()
        account.deposit(100)
        account.deposit(30)

        expect(account.balance).toBe(130)
    })

    it('should fail when deposit a zero value', () => {
        const account = new Account()

        expect(() => account.deposit(0)).toThrowError()
    })

    it('should fail when deposit a negative value', () => {
        const account = new Account()

        expect(() => account.deposit(-1)).toThrowError()
    })

    it('should withdraw amount', () => {
        const account = new Account()
        account.deposit(100)
        account.deposit(10)
        account.withdraw(25)
        account.withdraw(5)

        expect(account.balance).toBe(80)
    })

    it('should fail when withdraw a zero value', () => {
        const account = new Account()

        expect(() => account.withdraw(0)).toThrowError()
    })

    it('should fail when withdraw a negative value', () => {
        const account = new Account()

        expect(() => account.withdraw(-1)).toThrowError()
    })

    it('should fail when user try to withdraw amount and account has zero value', () => {
        const account = new Account()

        expect(() => account.withdraw(50)).toThrowError()
    })

    it('should fail when user withdraws amount greater than account value', () => {
        const account = new Account()
        account.deposit(25)

        expect(() => account.withdraw(50)).toThrowError()
    })

    it('should add statement after deposit', () => {
        const account = new Account()

        const mockedDate = new Date(2012, 0, 24)
        vi.spyOn(TimeService, 'now').mockReturnValue(mockedDate)

        account.deposit(25)

        expect(account.statements.length).toBe(1)

        expect(account.statements[0].date).toBe(mockedDate)
        expect(account.statements[0].amount).toBe(25)
        expect(account.statements[0].balance).toBe(25)
    })


    it('should add statement after withdraw', () => {
        const account = new Account()

        const mockedDate = new Date(2012, 0, 23)
        vi.spyOn(TimeService, 'now').mockReturnValue(mockedDate)

        account.deposit(25)
        account.withdraw(10)

        expect(account.statements.length).toBe(2)

        expect(account.statements[1].date).toBe(mockedDate)
        expect(account.statements[1].amount).toBe(10)
        expect(account.statements[1].balance).toBe(15)
    })

    it('should pass acceptance test', () => {
        const account = new Account()

        const consoleLogSpy = vi.spyOn(console, 'log')

        const mockedDate1 = new Date(2012, 0, 20)
        vi.spyOn(TimeService, 'now').mockReturnValue(mockedDate1)

        account.deposit(1000)

        const mockedDate2 = new Date(2012, 0, 23)
        vi.spyOn(TimeService, 'now').mockReturnValue(mockedDate2)

        account.deposit(2000)

        const mockedDate3 = new Date(2012, 0, 24)
        vi.spyOn(TimeService, 'now').mockReturnValue(mockedDate3)

        account.withdraw(500)

        account.printStatement()

        expect(consoleLogSpy.mock.calls[0][0]).toBe('DATE | AMOUNT | BALANCE')
        expect(consoleLogSpy.mock.calls[1][0]).toBe('24/01/2012 | 500.00 | 2500.00')
        expect(consoleLogSpy.mock.calls[2][0]).toBe('23/01/2012 | 2000.00 | 3000.00')
        expect(consoleLogSpy.mock.calls[3][0]).toBe('20/01/2012 | 1000.00 | 1000.00')
    })
})

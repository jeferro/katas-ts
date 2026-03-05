import { describe, it, expect } from 'vitest'

import {Character} from "./character"


describe('Character.create', () => {

    it('should create starting health at 1000 and level 1', () => {
        const character = Character.create()

        expect(character.health).toBe(1000)
        expect(character.level).toBe(1)
        expect(character.isAlive).toBeTruthy()
        expect(character.isDead).toBeFalsy()
    })
})



describe('Character.damage', () => {

    it('should damage character in 100', () => {
        const character = Character.create()
        character.damage(100)

        expect(character.health).toBe(900)
    })

    it('should set health to 0 when damage is greater than health', () => {
        const character = Character.create()
        character.damage(2000)

        expect(character.health).toBe(0)
        expect(character.isAlive).toBeFalsy()
        expect(character.isDead).toBeTruthy()
    })
})



describe('Character.health', () => {
    it('should health themselves', () => {
        const character = Character.create()
        character.damage(100)
        character.addHealth(50)

        expect(character.health).toBe(950)
    })

    it('should have a health above 1000 when they reach level 6', () => {
        const character = Character.create()
        character.setLevel(6)
        character.addHealth(100)

        expect(character.health).toBe(1100)
    })

    it('should have maximum of 1500 health when character has level 6', () => {
        const character = Character.create()
        character.setLevel(6)
        character.addHealth(1000)

        expect(character.health).toBe(1500)
    })

    it('not should health themselves when character is dead', () => {
        const character = Character.create()
        character.damage(1000)

        expect(() => character.addHealth(100)).toThrowError()
    })


})

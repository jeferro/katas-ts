import { describe, it, expect } from 'vitest'

import {Character} from "./character"

describe('Character', () => {

    it('should create starting health at 1000 and alive', () => {
        const character = Character.create()

        expect(character.health).toBe(1000)
        expect(character.isAlive).toBeTruthy()
        expect(character.isDead).toBeFalsy()
    })

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

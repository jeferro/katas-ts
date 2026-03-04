import { describe, it, expect } from 'vitest'

import {Character} from "./character"

describe('Character', () => {

    it('should create starting health at 1000 and alive', () => {
        const character = Character.create()

        expect(character.health).toBe(1000)
        expect(character.isAlive).toBeTruthy()
        expect(character.isDead).toBeFalsy()
    })


})

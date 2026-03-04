import { describe, it, expect } from 'vitest'

import {Character} from "./character"

describe('Character', () => {

    it('should create instance', () => {
        const character = new Character()

        expect(character).not.toBeUndefined()
    })
})

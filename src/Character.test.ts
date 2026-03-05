import { describe, it, expect } from 'vitest'

import {Character} from "./Character"
import {Faction} from "./Faction";

import {HealingMagicalObject} from "./objects/HealingMagicalObject";


const gildedOrderFaction = Faction.create(1, "Gilded Order")
const alabasterCathedralFaction = Faction.create(2, "Alabaster Cathedral")
const ironTavernFaction = Faction.create(3, "Iron Tavern")


describe('Character.create', () => {

    it('should create starting health at 1000 and level 1', () => {
        const character = Character.create()

        expect(character.health).toBe(1000)
        expect(character.level).toBe(1)
        expect(character.belongsToSomeFactory).toBeFalsy()
        expect(character.isAlive).toBeTruthy()
        expect(character.isDead).toBeFalsy()
    })
})



describe('Character.join', () => {

    it('should join to faction', () => {
        const character = Character.create()

        character.join(gildedOrderFaction)
        character.join(alabasterCathedralFaction)

        expect(character.belongsTo(gildedOrderFaction.id)).toBeTruthy()
        expect(character.belongsTo(alabasterCathedralFaction.id)).toBeTruthy()
        expect(character.belongsTo(ironTavernFaction.id)).toBeFalsy()
    })
})



describe('Character.leave', () => {

    it('should leave faction', () => {

        const character = Character.create()

        character.join(gildedOrderFaction)
        character.join(alabasterCathedralFaction)

        character.leave(gildedOrderFaction)

        expect(character.belongsTo(gildedOrderFaction.id)).toBeFalsy()
        expect(character.belongsTo(alabasterCathedralFaction.id)).toBeTruthy()
        expect(character.belongsTo(ironTavernFaction.id)).toBeFalsy()
    })
})



describe('Character.damage', () => {

    it('should damage character (reducing by 50% because attacker level is less than 5)', () => {
        const attacker = Character.create()

        const character = Character.create()
        character.damage(attacker, 100)

        expect(character.health).toBe(950)
    })

    it('should damage character (increased by 50% because attacker level is equals to 5)', () => {
        const attacker = Character.create()
        attacker.setLevel(5)

        const character = Character.create()
        character.damage(attacker, 100)

        expect(character.health).toBe(850)
    })

    it('should damage character (increased by 50% because attacker level is greater than 5)', () => {
        const attacker = Character.create()
        attacker.setLevel(6)

        const character = Character.create()
        character.damage(attacker, 100)

        expect(character.health).toBe(850)
    })

    it('should set health to 0 when damage is greater than health', () => {
        const attacker = Character.create()

        const character = Character.create()
        character.damage(attacker, 2000)

        expect(character.health).toBe(0)
        expect(character.isAlive).toBeFalsy()
        expect(character.isDead).toBeTruthy()
    })


    it('allies not should damage', () => {
        const attacker = Character.create()
        attacker.join(gildedOrderFaction)

        const character = Character.create()
        character.join(gildedOrderFaction)

        expect(() => character.damage(attacker, 2000)).toThrowError()
    })
})



describe('Character.healthHimself', () => {

    it('should health himself', () => {
        const attacker = Character.create()

        const character = Character.create()
        character.damage(attacker, 200)
        character.healthHimself(50)

        expect(character.health).toBe(950)
    })

    it('should have a health above 1000 when they reach level 6', () => {
        const character = Character.create()
        character.setLevel(6)
        character.healthHimself(100)

        expect(character.health).toBe(1100)
    })

    it('should have maximum of 1500 health when character has level 6', () => {
        const character = Character.create()
        character.setLevel(6)
        character.healthHimself(1000)

        expect(character.health).toBe(1500)
    })

    it('not should health himself when character is dead', () => {
        const attacker = Character.create()

        const character = Character.create()
        character.damage(attacker, 2000)

        expect(() => character.healthHimself(100)).toThrowError()
    })

})



describe('Character.healthFromAllies', () => {

    it('allies should health character', () => {
        const allies = Character.create()
        allies.join(gildedOrderFaction)

        const character = Character.create()
        character.join(gildedOrderFaction)
        character.setLevel(6)

        character.healthFromAllies(allies, 100)

        expect(character.health).toBe(1100)
    })

    it('non-allies should not health character', () => {
        const notAllies = Character.create()
        notAllies.join(ironTavernFaction)

        const character = Character.create()
        character.join(gildedOrderFaction)

        expect(() => character.healthFromAllies(notAllies, 100)).toThrowError()
    })

})



describe('Character.healthFromMagicalObject', () => {

    it('magical object should health character', () => {
        const magicalObject = HealingMagicalObject.create(300)

        const character = Character.create()
        character.setLevel(6)

        character.healthFromMagicalObject(magicalObject)

        expect(character.health).toBe(1300)
    })

})

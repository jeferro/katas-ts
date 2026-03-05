import { describe, it, expect } from 'vitest'
import {HealingMagicalObject,} from "./MagicalObject";


describe('MagicalObject.create', () => {

  it('Should create an object', () => {
    const magicalObject = HealingMagicalObject.create(1000)

    expect(magicalObject.health).toBe(1000)
  })

  it('Should is destroyed when health is zero', () => {
    const magicalObject = HealingMagicalObject.create(0)

    expect(magicalObject.isDestroyed).toBe(true)
  })

})



describe('MagicalObject.decreaseHealth', () => {

  it('Should has zero health when decrease value is greater than health', () => {
    const magicalObject = HealingMagicalObject.create(100)
    magicalObject.consume(200)

    expect(magicalObject.health).toBe(0)
  })
})
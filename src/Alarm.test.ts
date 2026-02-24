import {describe, it, expect} from 'vitest'

import Alarm from './Alarm'
import RandomSensor from "./RandomSensor";
import StubSensor from "./StubSensor";

describe('Tire Pressure Alarm', () => {

    it('should be off by default', () => {
        const sensor = new RandomSensor()
        const alarm = new Alarm(sensor)

        expect(alarm.isOn()).toBeFalsy()
    })

    it('should fail when pressure is less than 17', () => {
        const sensor = new StubSensor(16)
        const alarm = new Alarm(sensor)

        alarm.check()

        expect(alarm.isOn()).toBeTruthy()
    })
})
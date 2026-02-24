import Sensor from './Sensor'

const LOW_PRESSURE_THRESHOLD = 17
const HIGH_PRESSURE_THRESHOLD = 21

export default class Alarm {
    private alarmOn = false

    constructor(private sensor: Sensor) {
    }

    check(): void {
        const psiPressureValue = this.sensor.popNextPressurePsiValue()

        if (psiPressureValue < LOW_PRESSURE_THRESHOLD || psiPressureValue > HIGH_PRESSURE_THRESHOLD) {
            this.alarmOn = true
        }
    }

    isOn(): boolean {
        return this.alarmOn
    }
}
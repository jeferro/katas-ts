import Sensor from "./Sensor";

export default class StubSensor implements Sensor {

    constructor(private value: number) {}

    public popNextPressurePsiValue(): number {
        return this.value
    }
}
import Sensor from "./Sensor";

const offset = 16;

export default class RandomSensor implements Sensor {

    public popNextPressurePsiValue(): number {
        return offset + this.samplePressure()
    }

    private samplePressure(): number {
        // placeholder implementation that simulates a real sensor in a real tire
        return 6 * Math.random() * Math.random()
    }
}
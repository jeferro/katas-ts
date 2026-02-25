import {TimeService} from "./TimeService";

export class DateTimeService extends TimeService {

    now(): Date {
        return new Date()
    }

}
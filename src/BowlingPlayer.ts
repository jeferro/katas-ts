import {Frame} from "./Frame";

export class BowlingPlayer {
    private _currentFrame = 0

    private _frames: Frame[] = []

    score(attempt1: number, attempt2: number) {
        this._frames[this._currentFrame] = Frame.create(attempt1, attempt2)

        if(this._frames.length > 1
            && this._frames[this._currentFrame - 1].isSpare) {
            this._frames[this._currentFrame - 1].scoreSpare(attempt1)
        }

        this._currentFrame += 1
    }

    getTotalScore(): number {
        return this._frames.map(frame => frame.getTotalScore())
            .reduce((a, b) => a + b, 0)
    }
}

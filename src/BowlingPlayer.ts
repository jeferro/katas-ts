import {Frame} from "./Frame";

export class BowlingPlayer {
    private static readonly MAX_FRAMES = 10

    private _currentFrame = 0

    private _frames: Frame[] = []

    score(attempt1: number, attempt2: number) {
        if(this._frames.length == BowlingPlayer.MAX_FRAMES) {
            throw new Error(`Denied score because there are 10 frames yet`)
        }

        this._frames[this._currentFrame] = Frame.create(attempt1, attempt2)

        const previousFrame = this._currentFrame > 0 ?
            this._frames[this._currentFrame - 1]
            : undefined

        if(previousFrame && previousFrame.isSpare){
            previousFrame.scoreSpare(attempt1)
        }

        if(previousFrame && previousFrame.isStrike){
            previousFrame.scoreStrike(attempt1, attempt2)
        }

        this._currentFrame += 1
    }

    getTotalScore(): number {
        return this._frames.map(frame => frame.getTotalScore())
            .reduce((a, b) => a + b, 0)
    }
}

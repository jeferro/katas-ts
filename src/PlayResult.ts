import {Play} from "./Play";

export class PlayResult {
  constructor(public readonly play: Play,
              public readonly audience: number) {
  }

  public get amount(): number {
    return this.play.calculateAmount(this.audience)
  }

  public get credits(): number {
    return this.play.calculateCredits(this.audience)
  }
}
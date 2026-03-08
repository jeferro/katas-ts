import {Coordinate} from "./Coordinate";

export class Cell {
  public readonly coordinate: Coordinate

  public readonly value: string

  private _marked: boolean

  constructor(coordinate: Coordinate,
              value: string,
              marked: boolean) {
    this.coordinate = coordinate
    this.value = value
    this._marked = marked
  }

  static create(coordinate: Coordinate, value: string): Cell {
    return new Cell(coordinate, value, false)
  }

  mark() {
    this._marked = true
  }

  public get marked(): boolean {
    return this._marked
  }
}
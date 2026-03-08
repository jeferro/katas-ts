import {Coordinate} from "./Coordinate";

export class Cell {
  public readonly coordinate: Coordinate | undefined

  private _value: string | undefined

  private _marked: boolean

  constructor(coordinate: Coordinate | undefined,
              value: string | undefined,
              marked: boolean) {
    this.coordinate = coordinate
    this._value = value
    this._marked = marked
  }

  /**
   * @deprecated
   */
  static createEmpty(): Cell {
    return new Cell(undefined, undefined, false)
  }

  static create(coordinate: Coordinate, value: string): Cell {
    return new Cell(coordinate, value, false)
  }

  setValue(value: string) {
    this._value = value
  }

  mark() {
    this._marked = true
  }

  public get marked(): boolean {
    return this._marked
  }

  public get value(): string | undefined {
    return this._value
  }

  public get hasValue() : boolean {
    return this._value !== undefined
  }

  public get hasNotValue(): boolean {
    return !this.hasValue
  }
}
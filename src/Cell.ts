export class Cell {
  private _value: string | undefined

  private _marked: boolean

  constructor(value: string | undefined,
              marked: boolean) {
    this._value = value
    this._marked = marked
  }

  /**
   * @deprecated
   */
  static createEmpty(): Cell {
    return new Cell(undefined, false)
  }

  static create(value: string): Cell {
    return new Cell(value, false)
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
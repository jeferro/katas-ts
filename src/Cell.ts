export class Cell {
  private _value: string | undefined;

  private _marked: boolean;

  constructor(value: string | undefined,
              marked: boolean) {
    this._value = value
    this._marked = marked
  }

  static createEmpty(): Cell {
    return new Cell(undefined, false)
  }

  public get value(): string | undefined {
    return this._value
  }

  public get marked(): boolean {
    return this._marked
  }

  setValue(value: string) {
    this._value = value
  }

  mark() {
    this._marked = true
  }
}
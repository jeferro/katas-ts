export class Coordinate {
  public readonly x: number;

  public readonly y: number;

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  static create(x: number, y: number): Coordinate {
    return new Coordinate(x, y)
  }

  toKey(): string {
    return `${this.x}:${this.y}`
  }
}
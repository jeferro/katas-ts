import {Cell} from "./Cell";
import {Coordinate} from "./Coordinate";

export class BingoBoard {

  private readonly cells: Map<string, Cell> = new Map()

  private readonly numCells: number

  constructor(width: number, height: number) {
    this.numCells = width * height
  }

  defineCell(x: number, y: number, value: string): void {
    const coordinate = Coordinate.create(x, y)

    this.ensureCellIsEmpty(x, y);

    this.ensureValueIsNotUsed(value);

    this.cells.set(coordinate.toKey(), Cell.create(coordinate, value))
  }

  markCell(x: number, y: number): void {
    const coordinate = Coordinate.create(x, y)

    this.ensureCellsAreInitialized()

    this.cells.get(coordinate.toKey())!.mark()
  }

  isMarked(x: number, y: number): boolean {
    const coordinate = Coordinate.create(x, y)

    return this.cells.get(coordinate.toKey())!.marked
  }

  isInitialized(): boolean {
    return this.cells.size === this.numCells
  }

  private ensureCellIsEmpty(x: number, y: number) {
    const coordinate = Coordinate.create(x, y)

    if(this.cells.has(coordinate.toKey())) {
      throw new Error("cell already defined")
    }
  }

  private ensureValueIsNotUsed(value: string) {
    this.cells.forEach( cell => {
      if(cell.value === value) {
        throw new Error(`${value} already present at ${cell.coordinate!.x},${cell.coordinate!.y}`);
      }
    });
  }

  private ensureCellsAreInitialized() {
    if (!this.isInitialized()) {
      throw new Error("board not initialized");
    }
  }
}

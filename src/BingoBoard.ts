import {Cell} from "./Cell";
import {Coordinate} from "./Coordinate";

export class BingoBoard {

  /**
   * @deprecated
   * @private
   */
  private readonly board: Cell[][];

  private readonly cells: Map<string, Cell> = new Map()

  private readonly numCells: number

  constructor(width: number, height: number) {
    this.numCells = width * height

    this.board = Array.from({ length: width }, () =>
        Array.from({ length: height }, () => Cell.createEmpty())
    );
  }

  defineCell(x: number, y: number, value: string): void {
    const coordinate = Coordinate.create(x, y)

    this.ensureCellIsEmpty(x, y);

    this.ensureValueIsNotUsed(value);

    this.board[x][y].setValue(value)
    this.cells.set(coordinate.toKey(), Cell.create(coordinate, value))
  }

  markCell(x: number, y: number): void {
    const coordinate = Coordinate.create(x, y)

    this.ensureCellsAreInitialized()

    this.board[x][y].mark()
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

    if(!this.cells.has(coordinate.toKey())) {
      return
    }

    if (this.cells.get(coordinate.toKey())!.hasValue) {
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

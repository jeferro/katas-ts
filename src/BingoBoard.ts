import {Cell} from "./Cell";
import {Coordinate} from "./Coordinate";

export class BingoBoard {

  /**
   * @deprecated
   * @private
   */
  private readonly board: Cell[][];

  private readonly cells: Map<string, Cell> = new Map();

  constructor(width: number, height: number) {
    this.board = Array.from({ length: width }, () =>
        Array.from({ length: height }, () => Cell.createEmpty())
    );
  }

  defineCell(x: number, y: number, value: string): void {
    const coordinate = Coordinate.create(x, y)

    this.ensureCellIsEmpty(x, y);

    this.ensureValueIsNotUsed(value);

    this.board[x][y].setValue(value)
    this.cells.set(coordinate.toKey(), Cell.create(value))
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
    for (const row of this.board) {
      for (const cell of row) {
        if (cell.hasNotValue) {
          return false;
        }
      }
    }
    return true;
  }

  private ensureCellIsEmpty(x: number, y: number) {
    if (this.board[x][y].hasValue) {
      throw new Error("cell already defined");
    }
  }

  private ensureValueIsNotUsed(value: string) {
    for (let x = 0; x < this.board.length; x++) {
      for (let y = 0; y < this.board[x].length; y++) {
        if (value === this.board[x][y].value) {
          throw new Error(`${value} already present at ${x},${y}`);
        }
      }
    }
  }

  private ensureCellsAreInitialized() {
    if (!this.isInitialized()) {
      throw new Error("board not initialized");
    }
  }
}

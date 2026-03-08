import {Cell} from "./Cell";

export class BingoBoard {
  /**
   * @deprecated
   * @private
   */
  private readonly cells: (string | null)[][];

  /**
   * @deprecated
   * @private
   */
  private readonly marked: boolean[][];

  private readonly board: Cell[][];

  constructor(width: number, height: number) {
    this.cells = Array.from({ length: width }, () =>
      Array.from({ length: height }, () => null)
    );
    this.marked = Array.from({ length: width }, () =>
      Array.from({ length: height }, () => false)
    );

    this.board = Array.from({ length: width }, (_, x) =>
        Array.from({ length: height }, (_, y) => Cell.createEmpty())
    );
  }

  defineCell(x: number, y: number, value: string): void {
    this.ensureCellIsEmpty(x, y);

    this.ensureValueIsNotUsed(value);

    this.cells[x][y] = value;
    this.board[x][y].setValue(value)
  }

  markCell(x: number, y: number): void {
    this.ensureCellsAreInitialized()

    this.marked[x][y] = true;
    this.board[x][y].mark()
  }

  isMarked(x: number, y: number): boolean {
    return this.marked[x][y];
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

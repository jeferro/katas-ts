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
    for (const row of this.cells) {
      for (const col of row) {
        if (col === null) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * @deprecated
   * @param x
   * @param y
   * @private
   */
  private ensureCellIsEmpty(x: number, y: number) {
    if (this.board[x][y].hasValue) {
      throw new Error("cell already defined");
    }
  }

  /**
   * @deprecated
   * @param value
   * @private
   */
  private ensureValueIsNotUsed(value: string) {
    for (let c = 0; c < this.cells.length; c++) {
      for (let r = 0; r < this.cells[c].length; r++) {
        if (value === this.cells[c][r]) {
          throw new Error(`${value} already present at ${c},${r}`);
        }
      }
    }
  }

  /**
   * @deprecated
   * @private
   */
  private ensureCellsAreInitialized() {
    if (!this.isInitialized()) {
      throw new Error("board not initialized");
    }
  }
}

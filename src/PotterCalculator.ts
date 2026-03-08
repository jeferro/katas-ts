
export class PotterCalculator {

  private readonly PRICE_BOOK = 8;

  calculate(books: number[]): number {
    if(books.length === 0) {
      return 0
    }

    if(books.length === 1) {
      return this.PRICE_BOOK
    }

    const numberByBooks = this.calculateNumberByBooks(books)

    let totalPrice = 0
    let sizePack: number

    do {
      sizePack = 0

      for(let i = 0; i < numberByBooks.length; i++) {
        if(numberByBooks[i] === 0) {
          continue
        }

        numberByBooks[i] = numberByBooks[i] - 1

        sizePack++
      }

      let discount = this.calculateDiscount(sizePack)

      totalPrice += (sizePack * this.PRICE_BOOK) * discount
    } while (sizePack !== 0)

    return totalPrice
  }

  private calculateDiscount(sizePack: number) {
    if(sizePack === 0 || sizePack === 1) {
      return 1
    }

    if(sizePack === 2) {
      return 0.95
    }

    if(sizePack === 3) {
      return 0.9
    }

    if(sizePack === 4) {
      return 0.8
    }

    return 0.75
  }

  private calculateNumberByBooks(books: number[]): number[] {
    let numberByBooks = [0, 0, 0, 0, 0]

    books.forEach(book => numberByBooks[book]++)

    return numberByBooks
  }
}

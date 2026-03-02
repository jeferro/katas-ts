export abstract class Item {

  protected constructor(public name: string,
                        public sellIn: number,
                        public quality: number) {
  }

  abstract update(): void;
}

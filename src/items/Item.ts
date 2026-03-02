export abstract class Item {

  constructor(public sellIn: number,
              public quality: number) {
  }

  abstract update(): void;
}

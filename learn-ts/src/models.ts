

export type ItemId = number;

export interface Item {
  id: ItemId;
}

export abstract class Fruit implements Item {
  id = NaN;

  constructor(public readonly name: string) {}

  abstract eat(): void;
}

export class Apple extends Fruit {
  constructor() {
    super('apple');
  }

  eat() {
    console.log('wash');
    console.log('bite into it');
  }
}

export class Orange extends Fruit {
  constructor() {
    super('orange');
  }

  eat() {
    console.log('peel');
    console.log('pull apart');
    console.log('place into mouth');
  }
}
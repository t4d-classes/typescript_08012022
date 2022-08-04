/* eslint-disable prefer-const */
/* eslint @typescript-eslint/no-inferrable-types: "off" */

import { Item, ItemId, Fruit, Apple, Orange } from './models';

export function echo(input: string | number) {
  return input;
}


class List<T extends Item> {

  constructor(private items: T[] = []) {}

  [Symbol.iterator](): Iterator<T> {
    let counter = 0;

    return {
      next: () => {
        return {
          done: counter >= this.items.length,
          value: this.items[counter++],
        };
      },
    };
  }  

  append(item: T) {
    this.items = [
      ...this.items,
      {
        ...item,
        id: Math.max(...this.items.map((item) => item.id), 0) + 1,
      },
    ];
  }

  replace(item: T) {
    const itemIndex = this.items.findIndex((item) => item.id === item.id);
    const newItems = [...this.items];
    newItems[itemIndex] = item;
    this.items = newItems;
  }

  remove(itemId: ItemId) {
    this.items = this.items.filter((item) => item.id === itemId);
  }  

}


const fruits = new List<Fruit>();

fruits.append(new Apple());
fruits.append(new Orange());

for (const fruit of fruits) {
  console.log(fruit);
}
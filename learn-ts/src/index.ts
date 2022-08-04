/* eslint-disable prefer-const */
/* eslint @typescript-eslint/no-inferrable-types: "off" */

import { Item, ItemId, Fruit, Apple, Orange } from './models';

export function echo(input: string | number) {
  return input;
}


type ItemIterator<S> = () => Iterator<S>;
type AppendItem<S> = (item: Omit<S, 'id'>) => void
type ReplaceItem<S> = (item: S) => void;
type RemoveItem = (item: ItemId) => void;


type CreateList = <T extends Item>(
  initialItems?: T[],
) => {
  [Symbol.iterator]: ItemIterator<T>;
  append: AppendItem<T>;
  replace: ReplaceItem<T>;
  remove: RemoveItem;
};

const createList: CreateList = <T extends Item>(initialItems: T[] = []) => {
  let items = initialItems;

  return {
    [Symbol.iterator]: () => {
      let counter = 0;
      return {
        next: () => {
          return {
            done: counter >= items.length,
            value: items[counter++],
          };
        },
      };
    },
    append: (item) => {
      items = [
        ...items,
        {
          ...item,
          id: Math.max(...items.map((item) => item.id), 0) + 1,
        } as T,
      ];
    },
    replace: (item) => {
      const itemIndex = items.findIndex((item) => item.id === item.id);
      const newItems = [...items];
      newItems[itemIndex] = item;
      items = newItems;
    },
    remove: (itemId) => {
      items = items.filter((item) => item.id === itemId);
    },
  } as {
    [Symbol.iterator]: ItemIterator<T>;
    append: AppendItem<T>;
    replace: ReplaceItem<T>;
    remove: RemoveItem;
  };
};

const fruits = createList<Fruit>();

fruits.append(new Apple());
fruits.append(new Orange());

for (const fruit of fruits) {
  console.log(fruit);
}

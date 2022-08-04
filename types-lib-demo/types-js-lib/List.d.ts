declare module "js-lib" {
  type ItemId = number;

  interface Item {
    id: ItemId;
  }

  class List<T extends Item> implements Iterable<T> {
    private items: T[];
    constructor(items?: T[]);
    [Symbol.iterator](): Iterator<T>;
    append(item: T): void;
    replace(item: T): void;
    remove(itemId: ItemId): void;
  }
}
export const doIt = (msg) => {
  console.log("do it: ", msg);
};

export class List {
  constructor(items = []) {
    this.items = items;
  }

  [Symbol.iterator]() {
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

  append(item) {
    this.items = [
      ...this.items,
      {
        ...item,
        id: Math.max(...this.items.map((item) => item.id), 0) + 1,
      },
    ];
  }

  replace(item) {
    const itemIndex = this.items.findIndex((item) => item.id === item.id);
    const newItems = [...this.items];
    newItems[itemIndex] = item;
    this.items = newItems;
  }

  remove(itemId) {
    this.items = this.items.filter((item) => item.id === itemId);
  }
}

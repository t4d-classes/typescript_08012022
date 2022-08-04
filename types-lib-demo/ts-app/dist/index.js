import { doIt, List } from 'js-lib';
doIt("message");
export class Fruit {
    constructor(name) {
        this.name = name;
        this.id = NaN;
    }
}
export class Apple extends Fruit {
    constructor() {
        super("apple");
    }
    eat() {
        console.log("wash");
        console.log("bite into it");
    }
}
export class Orange extends Fruit {
    constructor() {
        super("orange");
    }
    eat() {
        console.log("peel");
        console.log("pull apart");
        console.log("place into mouth");
    }
}
const fruits = new List();
fruits.append(new Apple());
fruits.append(new Orange());
for (const fruit of fruits) {
    console.log(fruit);
}
fruits.remove(1);

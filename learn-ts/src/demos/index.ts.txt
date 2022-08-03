/* eslint @typescript-eslint/no-inferrable-types: "off" */

export function echo(input: string | number) {
  return input;
}

const age: number = 1;

console.log(age);

// type alias is a typescript thing
type Person = { firstName: string, lastName: string };

interface Person3 {
  firstName: string;
  lastName: string;
}

// classes are JavaScript thing that TypeScript understands and build upon
class Person2 {
  firstName!: string;
  lastName!: string;
}




const person: Person = {
  firstName: 'Bob',
  lastName: 'Smith',
};

const person2: Person2 = person;
const person3: Person3 = person;

console.log(person);
console.log(person2);
console.log(person3);

const p2: Person2 = person;

const p3 = new Person2();

console.log(typeof p2 === typeof p3);
console.log(p2 instanceof Person2); // false
console.log(p3 instanceof Person2); // true



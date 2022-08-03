# Programming with TypeScript

## Three Paradigms

"Uncle" Bob Martin frequently mentions three programming language paradigms
that shape how software is written today. These three paradigms are:

- Structured Programming
- Object-Oriented Programming
- Functional Programming

As Uncle Bob describes, each of these paradigms limits the programmer in some
way to help them write better code. This idea of taking something away or
voluntarily imposing some kind of limitation to write better code is really
what TypeScript does in general through its strong typing. TypeScript limits
the use of dynamic typing and type-coercion to enforce type-safe programming
at compile-time.

In a sense computers are infinitely flexible, which allows for infinitely
flexible programs. These infinitely flexible programs can be hard to understand
and maintain. So by using the following coding techniques (limitations) we
agree to limit how we write code to make those programs easier to understand
and maintain.

## Structured Programming

Structured programming focuses on not using the `goto` statement. JavaScript
does not provide support for `goto` statements; therefore, it is a
structured programming language by design. The flow of control at runtime is
controlled by sequence, selection and iteration. Blocks of code can be
organized into functions that are called and return control back to where
they were called in the sequence. Using statements such as `if` selection is
performed, and using statements such as `for` and `while` iteration is
performed.

```javascript
function sumEvenNumbers(nums) {

  let sum = 0;

  // iteration
  for (let i = 0; i < nums.length; i++) {

    // selection
    if (nums[i] % 2 === 0) {
      sum += nums[i];
    }
  }

  return sum;

}

// sequence
const someNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSum = sumEvenNumbers(someNums); // controlled call and return
console.log(evenSum);
```

Structured programming organizes the runtime flow of the program and
prevents uncontrolled changes to the flow of control.

Does TypeScript impact the structured nature of JavaScript programming? No,
it does not. Why? Because TypeScript adds type-checking to JavaScript, it
does not modify the runtime behavior of JavaScript, because all TypeScript
runs as JavaScript.

```typescript
function sumEvenNumbers(nums: number[]): number {

  let sum: number = 0;

  // iteration
  for (let i: number = 0; i < nums.length; i++) {

    // selection
    if (nums[i] % 2 === 0) {
      sum += nums[i];
    }
  }

  return sum;

}

// sequence
const someNums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSum: number = sumEvenNumbers(someNums); // controlled call and return
console.log(evenSum);
```

The code above is a TypeScript version of the earlier code. The only
difference is the addition of type information.

## Object-Oriented Programming

Depending upon who is asked, the definition of object-oriented programming can
vary. Some people describe object-oriented programming as a way to connect
code to data in objects. Some like Uncle Bob, emphasize the polymorphic
aspect of it. Polymorphism is nothing more than a pattern to manage function
pointers enabling alternative implementations for the same function call.

### Polymorphism

JavaScript supports polymorphism through prototype inheritance. Within
JavaScript, prototype inheritance is generally configured through classes.
Polymorphism is not supported by a compile-time structure, but is supported
dynamically at runtime on the heap through function object pointers. For
JavaScript, polymorphism is very much a runtime mechanism. It really has
nothing to do with a development-time type structure.

Consider the following JavaScript code below:

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
```

TypeScript adds very little to the above code. Because the polymorphic
behavior is controlled at runtime, it is primarily a JavaScript. Here is a
TypeScript version of the same code.

```typescript
class Person {

  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
```

### Inheritance

Another aspect of object-oriented programming is inheritance. Technically,
the above example if doing inheritance behind the scenes, but from the
source code inheritance is not obvious. To show a more clear example of
inheritance (which is really adding a grand child in addition to the parent
and child that already existed), consider the following JavaScript code:

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, jobTitle) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }

  recordInfo() {
    return this.jobTitle + " " + super.fullName();
  }
}
```

In this code, the `Employee` class extends the `Person` class. This is
JavaScript and the inheritance mechanism is completely heap-based and
configured at runtime. TypeScript adds nothing to this inheritance structure.

### Encapsulation

Another important quality of object-oriented programming is encapsulation.
Up until recently, JavaScript only-supported public properties for all
objects. However, in ES2022, private class properties were added. In the
code below, the `#` prefix properties are private.

```javascript
class Person {
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  set firstName(value) {
    this.#firstName = value;
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(value) {
    this.#lastName = value;
  }

  fullName() {
    return this.#firstName + " " + this.#lastName;
  }
}
```

Long before this recent addition of private properties to JavaScript classes,
TypeScript provided access modifiers to enforce encapsulation at
development-time only. The above code could be implemented in TypeScript as
follows.

```javascript
class Person {

  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get firstName() {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public fullName() {
    return this._firstName + " " + this._lastName;
  }
}
```

TypeScript provides `public`, `protected`, and `private` access modifiers.
By default, all properties are public. Protected limits access to the
immediate class and derived classes. Private limits access to the immediate
class only. These access modifiers are only applied at development time, the
resulting JavaScript code is still all public. The only runtime enforcement
of private members is through the new JavaScript `#` prefixed properties,
not TypeScript.

### Objects - Data Structure

JavaScript makes extensive use objects. Unlike other languages, JavaScript
does not require the definition of classes to create objects. Instead,
objects can be created out of thin air using object literal syntax.

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(person.firstName); // outputs 'John'
```

While this is referred to as an object in JavaScript, it is really nothing
more than a collection of key-value pairs (sometimes referred to as a bag of
key-value pairs). In this case, none of the values are function objects, so
really it is just a data structure if considered within terms of classical
object-oriented programming similar to a `struct` in languages like C++.

Even though it was not created with a class, a type definition can be
constructed and applied. First, the person object will have an inferred type
based upon the object created. if the following code was added, there would
be a type error, because `age` is not a property of the person object.

```typescript
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

person.age = 30; // error
```

Yes, the above code would be valid JavaScript, but would not be valid
TypeScript. This is one of the ways that TypeScript helps to enforce strong
typing in the code base, but preventing extra properties from being added or
referenced on objects.

So the `person` variable does have an inferred type following the rule of
first-use. Is it possible tp explicitly define the type of the object? Yes,
it is.

```typescript
type Person = {
  firstName: string;
  lastName: string;
};

const person: Person = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(person.firstName); // outputs 'John'
```

Using a type alias named `Person`, the type can defined and then applied to
the declaration of the variable.

What about function properties? Well functions in JavaScript are objects
with a code implementation. Another term for this is callable objects.
JavaScript is a functional language. In functional languages, functions are
first-class citizens and there is a blur between code and data.

## Functional Programming

What about function properties? Well functions in JavaScript are objects
with a code implementation. Another term for this is callable objects.
JavaScript is a functional language. In functional languages, functions are
first-class citizens and there is a blur between code and data.

Similar to object-oriented programming, functional programming has several
aspects to it. When many programmers think of functiional programming, they
envision creating functions independent of classes and view functions as the
primary build blocks of a program. This can definitely be true, and many
JavaScript developers avoid the use of classes and achieve many of the goals
of classical object-oriented programming through functions and modules.

While building applications with only functions is a good topic to discuss
that is not the focus. The focus here is the use of immutable programming.
Another important aspect of functional programming is not mutating variables.

Prior to ES2015 (ES6), all variables were declared with the `var` keyword
and were mutable.

```javascript
var x = 2;

x = 3;
```

In ES2015, the `const` keyword was added to JavaScript. The variable creates
a runtime constant. Remember, JavaScript really has no concept of any kind
of development-time type declarations. When a variable is declared with the
`const` keyword, it cannot be changed after initialization.

```javascript
const x = 2;

x = 3; // throws an error
```

In terms of plain variables, the `const` keyword handles immutability just
fine. Also, JavaScript enables the immutability of object properties through
property descriptors.

```javascript
const constants = {};

Object.defineProperty(constants, 'pi', {
  value: 3.14,
  writable: false,
  enumerable: true,
  configurable: false,
});

constants.pi = 2; // throws an error
```

Where does TypeScipt come in? Well TypeScript can enforce immutability at
development-time. From the `const` keyword variable immutability can be
enforced when type checking at development-time. For object properties the
`ReadOnly` utility class can be used.

```typescript
type Contants = {
  pi: number;
};

const constants: Readonly<Contants> = {
  pi: 3.14,
};

constants.pi = 2; // throws an error
```

This same code could be written as a class with `readonly` properties as well.

```typescript
class Constants {
  public readonly pi = 3.14;
}

const constants = new Constants();

constants.pi = 2; // throws an error
```

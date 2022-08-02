# Programming with TypeScript

## Nominal Typing

Most strongly-typed programming languages use nominal typing. Types are
named and a variable declared with type cannot be used with another type.
For example, look at the following code.

```csharp
class Car {
  public string VIN { get; set; }
}

class Truck {
  public string VIN { get; set; }
}

let vehicle = new Car();

vehicle = new Truck();
```

The last line with throw a compile-time type error because the variable
`vehicle` is of type `Car` and cannot be assigned a value of type `Truck`.
Notice, the data structure of both the `Car` and `Truck` classes are the
same, but their names are different. When the name of the type, not the
structure of the type is what differentiates the types, it is called nominal
typing.

## Structural Typing

Structural typing, as its name implies, is the opposite of nominal typing.
The name of the type does not matter, but the structure of the type does.

```typescript
class Car {
    public VIN: string;
}

class Truck {
    public VIN: string;
}

let vehicle = new Car();

vehicle = new Truck();
```

In TypeScript, the above code will work just fine. Why? Because the `Car`
type and the `Truck` type have the same structure.

## Why Structural Typing?

First, TypeScript code ultimately runs as JavaScript code. Depending upon
the configuration, TypeScript either compiles to JavaScript or TypeScript
type decorations are removed and the code is processed by another transpiler
such as Babel. In either case, TypeScript is only enforced at compile time,
none of the TypeScript-specific type informational is passed through to the
JavaScript.

So this means that TypeScript elements such as type aliases, interfaces, and
such have no JavaScript equivalents. So to use nominal typing would make
less sense since the names of my of the type definitions would not carry
into the JavaScript code. Remember, the goal is to make JavaScript type-safe
and structural typing does that well.

Another reason is the use of JSON to send and receive data to data services
such as REST APIs. When JSON is deserialized into JavaScript objects those
objects commonly used as is. The objects have a structure but were not
created with some kind of nominal type such as a class.

```typescript

const {colors} = JSON.parse(`
  { "colors": [
    {"name": "red", "hex": "#f00"},
    {"name": "green", "hex": "#0f0"},
    {"name": "blue", "hex": "#00f"}
  ] }
`) as { colors: { name: string, hex: string }[] };

class Color {
    public name: string;
    public hex: string;

    constructor(name: string, hex: string) {
        this.name = name;
        this.hex = hex;
    }
}

function printColor(color: Color) {
    console.log(color.name);
    console.log(color.hex);
}

colors.forEach(color => printColor(color));
```

Notice the `Color` class is not the same nominal type as the anonymous type
uses to cast the results of the JSON parsing. But, the color objects parsed
from the JSON can be passed into the `printColor` function.

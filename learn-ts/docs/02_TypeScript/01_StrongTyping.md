# Programming with TypeScript

## Strong Typing

### JavaScript

JavaScript is a dynamically typed language. While JavaScript does have types,
the types are not enforced at compile time; rather, they are inferred at
runtime.

```javascript
let message = "Hello, World!";

console.log(typeof message); // outputs "string"
```

Message has a type of `string` because a string value was assigned to it. If
no value had been assigned, the type would have been `undefined`.

```javascript
let message;

console.log(typeof message); // outputs "undefined"
```

Also, if another value is assigned to `message`, then the type will change.

```javascript
let message = "Hello, World!";

console.log(typeof message); // outputs "string"

message = 42;

console.log(typeof message); // outputs "number"
```

### TypeScript

First, TypeScript is a super-set of JavaScript. All JavaScript is valid
TypeScript. Essentially, TypeScript adds strong-typing to JavaScript.
Strong-typing makes JavaScript type safe through techniques such as static
typing. Static typing can implicit or explicit, but the type of a variable
is determined at compile-time not at runtime.

```typescript
let message = "Hello, World!";

console.log(typeof message); // outputs "string"

message = 42; // compile error: Type '42' is not assignable to type 'string'.
```

The variable `message` is a `string` because a string value was assigned to
it. To explicitly declare the variable to be a string, the following
TypeScript code can be added to the JavaScript (notice no JavaScript code
was changed).

```typescript
let message: string = "Hello, World!";

console.log(typeof message); // outputs "string"
```

While the above is valid TypeScript, the explicit setting of a type is
generally discouraged when it can be trivially inferred. Code linters
such as ESLint can be configured to report this unnecessary explicit type
declaration as an error.

TypeScript is used enhance the code with enough type declarations to type
check the code at compile-time. Type definitions are not added just for the
sake of adding type definitions.

### Proactive Typing

Many times developers operate off the principle of "does it work". If it
works that is the definition of "success" and they keep rolling on to the
next task. Well, JavaScript "works" so if the goal is merely to get the code
to work then TypeScript (in a sense) is not needed.

When programmers first experience TypeScript they are eager to benefit from
the strong-typing features, but then get discouraged when they have
JavaScript code that works, but is failing TypeScript's compile-time
checking. Consider the code from above. The code will run in JavaScript, but
fails in TypeScript.

```typescript
let message = "Hello, World!";

console.log(typeof message); // outputs "string"

message = 42;

console.log(typeof message); // outputs "number"
```

The TypeScript compiler gives the following error:

```bash
TS2322: Type 'number' is not assignable to type 'string'.
```

Now the programmer must make a decision about how to specify the type of the
variable `message`. Should the variable be a `string`, `number`, or some
combination? Or should the programmer just use the `any` type as a
TypeScript escape hatch?

```typescript
let message: any = "Hello, World!";

console.log(typeof message); // outputs "string"

message = 42;

console.log(typeof message); // outputs "number"
```

The result? No errors! The programmer can move on to the next task!

Really? Is the `any` type the best choice? Sure, it works, but it defeats
the entire point of TypeScript! If dynamic typing is desired, then abandon
TypeScript all together and use JavaScript.

Remember, the programmer is choosing to use TypeScript to make the code more
robust and type-safe. So the programmer needs to change their frame of mind
from "does it work" to is this programmed as type-safe as possible taking
into account the appropriate needs of the application.

How can this be made more type-safe? In case, a union type could be used.

```typescript
let message: string | number = "Hello, World!";

console.log(typeof message); // outputs "string"

message = 42;

console.log(typeof message); // outputs "number"
```

This allows the `message` variable to be either a `string` or a `number`. If
a boolean value was assigned, type checking would fail.

```typescript
message = true;
```

### Types and Expressions

What about variables and their types within expressions?

JavaScript is famous for its type coercion. For example, the following
expressions make little sense but work just in JavaScript.

```javascript
[] + {} // is the string '[object Object]'
null + undefined // is NaN
```

Other expressions are more reasonable, but still only work because of type
coercion.

```javascript
'1' + 1 // is the string '11'
```

The expression `'1' + 1` does not work in more strongly-typed languages such
as C#, Java, or Python. Also, it does not work in TypeScript.

```typescript
'1' + String(1) // to get a string result
```

or

```typescript
Number('1') + 1 // to get a number result
```

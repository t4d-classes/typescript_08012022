# Lab 4 Instructions

1. Upgrade the `index.ts` file to use the `any` type to do the absolute minimal
   amount of typing necessary to build and run the application. To build and
   run the application, review the `package.json` file to determine what
   commands to
   use to run and build the program.

2. Is the minimal amount of typing enough? Probably not. Without using type
   aliases (or similar mechanisms such as interfaces or classes), try adding
   some inline type definitions:

```typescript
const printPerson = (person: object) => {
  console.log(`${person.name} is ${person.age} years old.`);
}
```

This is what is meant by an inline type definition: `(person: object)`. Or
to make the inline type a little more specific:

```typescript
const printPerson = (person: { name: string, age: number }) => {
  console.log(`${person.name} is ${person.age} years old.`);
}
```

The inline type definition was enhanced to be `(person: { name: string, age:
number
})`.

Try making these kinds of little enhancements to the `index.ts` file. Does it
help? Do more things start failing type checking? Could you see how
frustration would increase? We have working JavaScript and even working
TypeScript code, but we are trying to make is leverage the power of type
checking, and we are adding code that breaks code!

5. Let's do this the right way, with type aliases (in this case). Create a new
   file named `models.ts`. In the new file, define type aliases
   to reflect the type structure of the code as presented. Make the types as
   reasonably restrictive as possible. Apply the new types to the code in
   the `index.ts` file.

6. Build and run the application. Does it work? Make any needed changes to
   get the code running.

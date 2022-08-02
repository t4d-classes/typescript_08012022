# Lab 2 Instructions

1. Create a function that receives an object with the following properties:

- id: number
- make: string
- model: string
- year: number
- color: string
- price: number
- hasTowHitch: boolean

The function should return a string with the following format. Replace the `
{placeholder}` with the value from object passed in.

```text
ID: {id}, Make: {make}, Model: {model}, Year: {year}, Color: {color}, Price: {price}, Has Tow Hitch: {hasTowHitch}
```

2. The function parameter type declaration can be constructed three ways (as
   described in class). Construct a type definition using each approach and
   verify that it works. Why can this type declaration be created three
   different ways? Which way do you prefer for this code?

3. Write a unit test to verify the output. For the assertion, explore `toBe`
   and `toEqual` in the Jest framework. Do they both work? Why or why not?

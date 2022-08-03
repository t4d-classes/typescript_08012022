# Lab 3 Instructions

1. Copy the Tiny CLI code
   from [Node.js Readline documentation](https://nodejs.org/api/readline.html#example-tiny-cli)
   into a file named `index.js`.

2. Update the `tsconfig.json` file in the `lab_03` folder to enable
   JavaScript. DO NOT MODIFY the main `tsconfig.json` file in the `learn-ts`
   folder.

```text
/* JavaScript Support */
"allowJs": true,
```

3. Open a terminal window, change into the `lab_03` folder. Run the
   following command to build the `index.js` file.

```bash
npm run build
```

Did it build? Review the outputted file. Compare it to the source file.

4. Run the build `index.js` file in the `dist` folder with the following
   command.

```bash
npm start
```

5. Turn off JavaScript in the `tsconfig.json` file. Run the build
   again. What happened?

6. Rename the `index.js` file to `index.ts` and update the local
   `tsconfig.json` file.

Change:

```text
"include": [
 "index.js"
],
```

to

```text
"include": [
 "index.ts"
],
```

7. Run the build again, did it build? What failed?

8. Enable explicit any in the Lab 03 `tsconfig.json` file. Does it build?
   Run the `index.js` file in the `build` folder.

9. Disable explicit any and add types as need to the `index.ts` file.
   Run the build again. Review the outputted file. Compare it to the source
   file.

10. Run the program to ensure it works.

11. Reflect on how plain JavaScript was incrementally upgraded to TypeScript.

Following the lab, the instructor will demonstrate how to enable source maps
and debug the node project with the TypeScript code.

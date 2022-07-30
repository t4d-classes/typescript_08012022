# Introduction to TypeScript

## Project Setup Instructions

### Part 2 - Code Quality Tools


1. Install the following packages.

```bash
npm install -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

2. If you are using VS Code, install the following extensions for VS Code.

- esbenp.prettier-vscode
- dbaeumer.vscode-eslint

Note: WebStorm supports ESLint and Prettier without additional extensions.

3. Create a new file named `.prettierrc.json` and add the following content to it.

```json
{
  "arrowParens": "always",
  "bracketSameLine": true,
  "bracketSpacing": false,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "always",
  "quoteProps": "consistent",
  "requirePragma": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false,
  "vueIndentScriptAndStyle": false
}
```

4. Create a new file named `.eslintrc.json` and add the following content to it.

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "env": {
    "browser": true,
    "es2022": true,
    "node": true
  }
}
```

5. Review the `index.test.js` file. Are there any linting errors? Save the file, is it reformatted? Here is the original code again in case you need to reset it to see the errors and formatting changes.

```bash
import { echo } from 'index';

describe("Given a function echo", () => {

  describe("When the input text is Hello World", () => {

    const inputText: string = "Hello World";

    test("Then I expect it to return Hello World", () => {
      const result = echo(inputText);
      expect(result).toBe(inputText);
    });

  });

});
```


# Introduction to TypeScript

## Project Setup Instructions

### Part 3 - Web Application Setup

1. Install the following node packages.

```bash
npm install -D webpack webpack-cli webpack-dev-server ts-loader html-webpack-plugin fork-ts-checker-webpack-plugin@6 babel-loader core-js http-server
```

2. Create a new file named `webpack.config.js`

```javascript
/* eslint @typescript-eslint/no-var-requires: "off" */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: {
    index: './src/index.ts',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].bundle-[fullhash:6].js',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                    useBuiltIns: 'usage',
                    corejs: '3.24.1',
                  },
                ],
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/!(*.test).{ts,js}',
      },
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
  ],
};
```

3. Create a new folder named `public`. Add a file named `index.html` to the `public` folder. Add the following content to the `index.html` file.

```html
<!DOCTYPE html>

<html lang="en">

<head>
  <title>Introduction to TypeScript</title>
  <link rel="icon" href="data:,">
</head>

<body>

<h1>Introduction to TypeScript</h1>

</body>

</html>
```

4. Update the `scripts` section of the `package.json` file:

```json
"scripts": {
  "test": "jest",
  "dev": "webpack serve",
  "build": "webpack",
  "start": "http-server dist"
},
```

4. To build the project, run the following command:

```bash
npm run build
```

The build will complete if the code passes ESLint and it can be build by TypeScript.

5. To serve the built files with a web server, run the following command:

```bash
npm start
```

Open a web browser and navigate to `http://127.0.0.1:8080`.

6. To run the application in development with live reload, run the following command:

```bash
npm run dev
```

Open a web browser and navigate to `http://127.0.0.1:9000`.
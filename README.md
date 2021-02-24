# React app with IE11

## Intro

```shell
// install modules
yarn
// build app for production
yarn build
// launch development server
yarn start
```

## Aim

study for babel setting for IE11 support.

If you want to compare bundle size with not IE11 support one, please check out `not-support-ie11` branch.

IE supported JavaScript application tend to be large size.

This is not good for web performance.

## Point

(if you know better practice, please comment!)

loader setting at `webpack.config.js` .

Loaders are executed in order of `ts-loader`, `babel-loader` .

[https://webpack.js.org/concepts/loaders/#configuration](https://webpack.js.org/concepts/loaders/#configuration)

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }],
      },
    ],
  }
};
```

babel setting at  `.babelrc.json` .

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "targets": {
          "ie": 11
        },
        "corejs": 3,
        "debug": true
      }
    ]
  ]
}
```

Import polyfill libs at endpoint, `src/index.tsx` .

```ts
// for polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";
```

**Tips** 

You could know `core-js/stable` is large size library with this  VS Code Extensions.

[Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
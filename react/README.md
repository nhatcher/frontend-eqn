Simple React App with esbuild && typescript

> npm -y init

> npm -i -D esbuild typescript

> npm -i react react-dom

> npm -i -D @types/react @types/react-node

> npx tsc --init --rootDir src --jsx react

> npm i @emotion/styled @emotion/react

```
"scripts": {
    "build": "esbuild src/app.tsx --bundle --minify --sourcemap --outfile=public/bundle.js"
  },
```
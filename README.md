# kepler.gl v2.5.5

```
npm i
npm start
```

## How to add kepler.gl to create-react-app

Follow this link [https://redux.js.org/introduction/getting-started](https://redux.js.org/introduction/getting-started) to run below code to initialize create-react-app with Redux.

```
npx create-react-app kepler.gl-examples --template redux
```

Then eject the project, so we could modify the webpack config.

```
npm run eject
```

Follow this commit [https://github.com/xx7y7xx/kepler.gl-examples/commit/66eea3f0634e97e6d42b4666c22257abe4db6b47](https://github.com/xx7y7xx/kepler.gl-examples/commit/66eea3f0634e97e6d42b4666c22257abe4db6b47) to modify webpack config and add kepler.gl to App component.
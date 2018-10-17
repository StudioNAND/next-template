# Next.js Template

This repo is meant to be the template to start a new frontend project @StudioNAND. It is based on this article on [Next.js](https://github.com/zeit/next.js/). The project uses [material-ui](https://material-ui.com/) and [jss](http://cssinjs.org/) by default because its awesome ;)

- [Project structure](#project-structure)
- [Getting started](#getting-started)
  - [Server side rendering](#server-side-rendering)
  - [Adding more pages](#adding-more-pages)
  - [Environment variables](#environment-variables)
- [ESlint and Prettier](#eslint-and-prettier)
  - [ESLint pre-commit hook](#eslint-pre-commit-hook)
- [Material-UI and JSS](#material-ui-and-jss)

___________

## Project structure

- `/server/index`: the custom next.js server
- `/server/routes`: the routes configuration
- `/server/constants`: variables used for the server
- `/pages`: All main entry points of the application
- `/components`: All components that define the application
- `/utils`: All utility functions
- `/stores`: All stores that hold the state of the application


## Getting started

- `npm start`: start application in development mode
- `npm run dist`: build production app
- `npm run serve`: serve production app

By default the server will start on `0.0.0.0:8000`. You can change the port by defining `HOSTNAME` and `PORT` inside the `.env` file in your root directory.

```
HOSTNAME=0.0.0.0
PORT=8001
```

### Server Side Rendering
The whole setup makes use of server-side-rendering. This means that any library that depends on the `window` will result in an internal error. In order to avoid any problem caused by modules that depend on the window you can use the `src/utils/async.js` decorator.

The `async` decorator accepts `Promises` that will be propagated as props to the wrapped component when they are resolved.

```JavaScript
@async(
  () =>
    new Promise(resolve => {
      resolve({
        MyAsyncComponent: require('../components/MyAsyncComponent').default,
      });
    }),
)
class Index extends React.Component {
```

Since `async` will only start resolving the promises on `onComponentDidMount` they wont be resolved on the server. This means that `MyAsyncComponent` will be `null` on the initial render. Make sure that you check for this case.

```JavaScript
render() {
  const { MyAsyncComponent } = this.props;
  return (
    <div>
      {MyAsyncComponent && <MyAsyncComponent />}
    </div>
  );
}
```

### Adding more pages

The template uses a [custom server and routing](https://github.com/zeit/next.js/#custom-server-and-routing) by default. This gives us more flexibility in terms of how we design our entry points of the application.
When a new page is created in `/pages` the equivalent route needs to be created in `/server/routes.js`.

##### Note: We are still not 100% happy with this setup and probably can optimize this. If you have an idea please open an issue for discussing a new approach on custom routing

### Environment variables

If you want to make use of `process.env` variables e.g. for adding tokens or secrets to your application, just create a `.env` file inside the root directory. The `.env` file will be loaded via `dotenv` module inside the `server/index.js` and all variables will be bundled into the production build via `webpack.EnvironmentPlugin`.

## ESLint and Prettier

This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). We are using the [@studionand/eslint-config](https://www.npmjs.com/package/@studionand/eslint-config) which is configured with [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) in order to run checks for prettier-formatting via eslint. You can find the prettier configuration as `prettier.config.js` file inside the `@studionand/eslint-config` module.

Using `eslint-plugin-prettier` over prettier CLI has the advantage that errors are properly printed to the console. When running `npm run eslint:fix` it will also fix all prettier formatting rules.

- `npm run eslint` for running eslint
- `npm run eslint:fix` for running eslint and fix if possible
- `npm run prettier` for running prettier separately
- `npm run prettier:fix` for running prettier separately and write changes to the files
- `npm run format` for running 1. `npm run prettier` 2. `npm run eslint`

##### Note: It is possible that we still have conflicting rules between the `eslint` and `prettier`, because we are not using `eslint-config-prettier` yet. Please open an issue if you experience any problems with the linting configuration.

### ESLint pre-commit hook

Currently we are using the `pre-commit` module in order to run the `npm run eslint` command before each `git commit`. This means you can only commit properly linted and prettified code. Since modified files would not be added to the stage automatically upon pre-commit hook, files are not modified in the pre-commit hook. Please use `npm run eslint:fix` in order to overwrite files with automatic fixes.

##### Note: The `pre-commit` feature is considered an experimental feature. If you experience it as annoying it can be removed. Please write an issue if you want to further discuss this.

## Material-UI and JSS

The project uses [material-ui](https://material-ui.com/) and [jss](http://cssinjs.org/) by default.
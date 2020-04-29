# Next.js Template

This repo is meant to be the template to start a new frontend project @StudioNAND. It is based on this article on [Next.js](https://github.com/zeit/next.js/). The project uses [material-ui](https://material-ui.com/) and [jss](http://cssinjs.org/) by default because its awesome ;)

- [Project structure](#project-structure)
- [Getting started](#getting-started)
  - [Environment variables](#environment-variables)
  - [Working with linked modules](#working-with-linked-modules)
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

You must create a `.npmrc` file to access the @studionand github registry.

```
registry=https://npm.pkg.github.com/studionand
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

> [how to create github token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

- `npm start`: start application in development mode
- `npm run dist`: build production app
- `npm run serve`: serve production app

By default the server will start on `0.0.0.0:80`. You can change the port by defining `HOSTNAME` and `PORT` inside the `.env` file in your root directory.

```
HOSTNAME=0.0.0.0
PORT=80
```

### Environment variables

If you want to make use of `process.env` variables e.g. for adding tokens or secrets to your application, just create a `.env` file inside the root directory. The `.env` file will be loaded via `dotenv` module inside the `server/constants.js` and all variables will be bundled into the production build via next-js.


## ESLint and Prettier

This project uses [ESLint](https://eslint.org/). We are using the [@studionand/eslint-config](https://www.npmjs.com/package/@studionand/eslint-config) which is configured with [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) in order to run checks for prettier-formatting via eslint. You can find the prettier configuration as `prettier.config.js` file inside the `@studionand/eslint-config` module.

Using `eslint-plugin-prettier` over prettier CLI has the advantage that errors are properly printed to the console. When running `npm run eslint:fix` it will also fix all prettier formatting rules.

- `npm run eslint` for running eslint
- `npm run eslint:fix` for running eslint and fix if possible

##### Note: It is possible that we still have conflicting rules between the `eslint` and `prettier`, because we are not using `eslint-config-prettier` yet. Please open an issue if you experience any problems with the linting configuration.

## Material-UI and JSS

The project uses [material-ui](https://material-ui.com/) and [jss](http://cssinjs.org/) by default.
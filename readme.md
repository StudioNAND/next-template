# Next.js Template

To setup a new project based on this template, just run:

`npx degit StudioNAND/next-template your_project_name`

- [Project structure](#project-structure)
- [Getting started](#getting-started)
  - [Environment variables](#environment-variables)
- [ESlint and Prettier](#eslint-and-prettier)
- [Material-UI and JSS](#material-ui-and-jss)

___________

## Project structure

- `src/server/index`: the custom next.js server
- `src/pages`: All main entry points of the application
- `src/components`: All components that define the application
- `src/utils`: All utility functions
- `src/stores`: All stores that hold the state of the application
- `src/.env`: Default environment variables [(read more)](https://nextjs.org/docs/basic-features/environment-variables#default-environment-variables)

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

By default the server will start on `0.0.0.0:80`. `PORT` and `HOSTNAME` are defined as default [environment variables](#environment-variables).

### Environment variables

Next.js now comes with its own solution for environment variables: [see here](https://nextjs.org/docs/basic-features/environment-variables)


## ESLint and Prettier

This project uses [ESLint](https://eslint.org/). We are using the [@studionand/eslint-config](https://github.com/StudioNAND/core-js/tree/master/packages/eslint-config) which is configured with [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) in order to run checks for prettier-formatting via eslint. You can find the prettier configuration as `prettier.config.js` file inside the `@studionand/eslint-config` module.

Using `eslint-plugin-prettier` over prettier CLI has the advantage that errors are properly printed to the console. When running `npm run eslint:fix` it will also fix all prettier formatting rules.

- `npm run eslint` for running eslint
- `npm run eslint:fix` for running eslint and fix if possible

##### Note: It is possible that we still have conflicting rules between the `eslint` and `prettier`, because we are not using `eslint-config-prettier` yet. Please open an issue if you experience any problems with the linting configuration.

## Material-UI and JSS

The project uses [material-ui](https://material-ui.com/) and [jss](http://cssinjs.org/) by default.
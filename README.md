# Serverless Starter App [![Build Status](https://api.travis-ci.org/comicrelief/serverless-starter-app.svg?branch=master)](https://travis-ci.org/comicrelief/serverless-starter-app)
An ES6 starter application that can be used as a base for serverless projects hosted on AWS.

## Installation

```bash
yarn global add serverless
yarn install
```

## Local Development

For local development you can simulate lambda and an API endpoint locally using
the following command.

```bash
yarn offline
```

This repository uses JavaScript import aliases with Webpack. If you are using VS Code, the `jsconfig.json` file should handle the autocompletion for you. If you are using WebStorm, you can refer to [this stackoverflow thread](https://stackoverflow.com/questions/34943631/path-aliases-for-imports-in-webstorm).

## Debugging (VS Code)

This repo includes a pre-configured template for the VS Code NodeJS Debugger. It can be found at `.templates/vscode/launch.json`.

To get started with debugging, copy the file to `.vscode/launch.json`, or copy its contents to your existing `.vscode/launch.json` file.

Now you can press `CTRL+SHIFT+D` (Windows/Linux) or `SHIFT+CMD+D` (Mac) to open the `Run` tab and execute the `Debug: Serverless Offline` configuration.

The configuration will spawn a `yarn offline` process, so you can configure your execution directly from `package.json`. It will also add `SLS_DEBUG=*` for more extensive logs and `WEBPACK_MODE=development` to produce source maps.

For more information on debugging on VS Code, see:
https://code.visualstudio.com/docs/editor/debugging


## Testing

Tests are located in the `tests` folder an can be invoked by running `yarn test`. These tests will invoke the defined
actions in a wrapper, where the response can then be tested.

## Further Reading
- [Babel](http://babeljs.io/)
    - Provides ES6 javascript compilation.
- [ESLint](https://eslint.org/)
    - Provides linting to ensure coding standards are adhered to.
- [Facebook Flow](https://flow.org/)
    - Provides static type checking.
- [Serverless Framework](https://serverless.com/)
    - The framework that the project is built on.

## License

The Serverless Starter App is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

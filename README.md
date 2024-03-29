# Serverless Starter App [![Build Status](https://github.com/comicrelief/serverless-starter-app/workflows/main/badge.svg?branch=master)](https://github.com/comicrelief/serverless-starter-app/actions/workflows/main.yml?query=branch%3Amaster)

A TypeScript starter application that can be used as a base for serverless projects hosted on AWS.

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

## Starting New Serverless Project

1. Clone the repo into a new folder describing your new serverless project

    ```bash
    git clone https://github.com/comicrelief/serverless-starter-app.git serverless-new-app
    ```

2. Change the remote url for the new project

    ```bash
    git remote set-url origin https://github.com/comicrelief/serverless-new-app.git
    ```

3. Edit these values in `package.json`
   - name
   - description
   - author
   - license
   - repository
   - concourse:deploy-pipeline

4. Edit this value in `serverless.yml`
   - service

## Debugging (VS Code)

This repo includes a pre-configured template for the VS Code NodeJS Debugger. It can be found at `.templates/vscode/launch.json`.

To get started with debugging, copy the file to `.vscode/launch.json`, or copy its contents to your existing `.vscode/launch.json` file.

Now you can press `CTRL+SHIFT+D` (Windows/Linux) or `SHIFT+CMD+D` (Mac) to open the `Run` tab and execute the `Debug: Serverless Offline` configuration.

The configuration will spawn a `yarn offline` process, so you can configure your execution directly from `package.json`. It will also add `SLS_DEBUG=*` for more extensive logs.

For more information on debugging on VS Code, see:
<https://code.visualstudio.com/docs/editor/debugging>

## Testing

Tests are located in the `tests` folder an can be invoked by running `yarn test`. These tests will invoke the defined
actions in a wrapper, where the response can then be tested.

## Further Reading

- [TypeScript](https://www.typescriptlang.org/)
  - JavaScript super-set which provides static type checking and inference.
- [ESLint](https://eslint.org/)
  - Provides linting to ensure coding standards are adhered to.
- [Serverless Framework](https://serverless.com/)
  - The framework that the project is built on.

## License

The Serverless Starter App is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

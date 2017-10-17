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
serverless offline start
```

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

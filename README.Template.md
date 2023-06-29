# Project Name [![Build Status](https://github.com/comicrelief/serverless-starter-app/workflows/main/badge.svg?branch=master)](https://github.com/comicrelief/serverless-starter-app/actions/workflows/main.yml?query=branch%3Amaster)

Prompt: _Add project description_

## Local Development

### Getting Started

Install project dependencies using:

`yarn | npm | other`

You should install serverless if you haven't already.

```bash
yarn global add serverless
```

To set up your local environment, you'll need to decrypt the environment values in concourse/private.yml. The easiest way to do this is by running git keybase unlock. Then copy .env.example to .env and fill in the blanks as directed in the comments.

Once you've created your .env file you can simulate Lambda and API Gateway locally using the following command.

```bash
sls offline start
```

Prompt: _Does this service need LocalStack for local SQS or other offline services?_

### Testing

Unit tests are run using package scripts e.g. `yarn test:unit` (_or NPM if this repo uses that_) Prompt: _Do they require any special setup?_ _Do they access any external services?_

Feature tests on the other hand require a deployment of this service (or the local simulation) and will make HTTP requests to it. In order to run them, you need to set up your local environment:

- ensure your .env file is set up as described above
- prompt: _any special requirements - e.g. VPN access to databases?_

You can then run the feature tests using a package script like `yarn test:feat`.

### Offline Testing

To run against serverless-offline, which is the recommended way to test, follow these steps:

configure STAGING_BASE_URL=http://localhost:3001/ in your .env file

open a separate terminal and set valid AWS credentials – get them from AWS SSO for the [_AWS Account for this service_] account

```bash
start yarn offline --stage staging
```

## Deployment

Deployments are run automatically by Concourse when new commits are pushed to master. You can check the pipeline status [here](https://ci.services.comicrelief.com/this-service).

The pipeline config is in the `concourse` directory. Any changes need to be deployed to Concourse manually. Follow these steps:

1. Make your changes in the bootstrap repo, open a pull request and request review.

2. Once approved and **before merging**, apply the changes to Concourse:

    i. Set up the target: e.g. `yarn fly:login` (only needs to be done once)

    ii. Update the pipeline: e.g. `yarn fly:set-pipeline`

3. Check that the changes work as expected. If there are problems, you can push fixes to your PR branch and retry.

4. Merge your PR.

Pull requests are tested using Github actions, which will run code style and unit tests against the PR. Github actions are defined in the `.github` folder under `workflows`

Prompt: _Does this service have a trigger for a CI deploy into a PR environment?_

### Environments

Prompt: _What environments does this service use? Production, Staging and Sandbox?_

Domains for this service are:

- [example1](example.example) (Production)
- [example2](example.example) (Staging)
- [example3](example.example) (Sandbox)

### Queues

Prompt: _If the service uses queues, describe and address here_

## API Documentation

- API documentation is generated at the same time as deploy, it is generated using [APIDoc](http://apidocjs.com/). It is
 deployed to [this-service-apidocs.s3-website-eu-west-1.amazonaws.com](http://[this-service]-apidocs.s3-website-eu-west-1.amazonaws.com/).
- [Sample requests](https://www.getpostman.com/collections/709902c58d5c498ab9fc) - to run with [Postman](https://www.getpostman.com/), targetting staging.

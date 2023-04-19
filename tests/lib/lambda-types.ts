/* @flow */

export type AmazonCognitoIdentity = {
  cognitoIdentityId: string,
  cognitoIdentityPoolId: string,
};

export type AWSMobileSDKClient = {
  installationId: string,
  appTitle: string,
  appVersionName: string,
  appVersionCode: string,
  appPackageName: string,
};

// eslint-disable-next-line unicorn/prevent-abbreviations
export type AWSMobileSDKClientEnv = {
  platformVersion: string, platform: string,
  make: any,
  model: any,
  locale: string,
};

export type AWSMobileSDKClientContext = {
  client: AWSMobileSDKClient,
  Custom: any,
  env: AWSMobileSDKClientEnv,
};

export type LambdaContext = {
  succeed: (result: any) => void,
  fail: (error: Error) => void,
  done: (error: Error, result: any) => void,
  getRemainingTimeInMillis: () => number,
  functionName: string,
  functionVersion: string,
  invokedFunctionArn: string,
  memoryLimitInMB: string,
  awsRequestId: string,
  logGroupName: string,
  logStreamName: string,
  identity?: AmazonCognitoIdentity,
  clientContext?: AWSMobileSDKClientContext,
  callbackWaitsForEmptyEventLoop: boolean,
};

/* @flow */

import type { LambdaContext } from './lambda-types';

export const getContext = () => {
  const noop = () => ({});

  return {
    succeed: noop,
    fail: noop,
    done: noop,
    getRemainingTimeInMillis: () => Infinity,
    functionName: 'fakeLambda',
    functionVersion: '0',
    invokedFunctionArn: 'arn:aws:lambda:fake-region:fake-acc:function:fakeLambda',
    memoryLimitInMB: Infinity,
    awsRequestId: 'fakeRequest',
    logGroupName: 'fakeGroup',
    logStreamName: 'fakeStream',
    identity: null,
    clientContext: null,
  };
};

export function lambdaPromisifier(lambda: (options: any, context: LambdaContext) => void): (options: any) => Promise<any> {
  return (options: any) => new Promise((resolve, reject) => lambda(options, {
    ...getContext(),
    succeed: resolve,
    fail: reject,
    done: (error, result) => (error ? reject(error) : resolve(result)),
  }));
}

/* @flow */

import type { LambdaContext } from '@/tests/lib/lambda-types';

const noop = () => {};

export const getContext = () => {
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

export function lambdaPromisifier(lambda: (event: object, context: LambdaContext) => Promise<any>): (event: object) => Promise<any> {
  return (event: object) => lambda(event, getContext());
}

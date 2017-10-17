/* @flow */

export const success = 'success';

export const failure = 'failure';

/**
 * Return a response
 * @param status
 * @param response
 * @return {{status: string, response: Object}}
 */
export default (status: string, response: object): object => {
  return {
    status,
    response,
  };
};

/* @flow */

const responseHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',       // Required for CORS support to work
  'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
};

/**
 * Return a response.
 * @param response
 * @param code
 * @return {{statusCode: number, headers: {}, body}}
 */
export default (response: object, code: number): object => {
  return {
    statusCode: code,
    headers: responseHeaders,
    body: JSON.stringify(response),
  };
};

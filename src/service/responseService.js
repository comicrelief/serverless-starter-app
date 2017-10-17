export const success = 'success';

export const failure = 'failure';

/**
 * Return a response.
 * @param status
 * @param response
 * @return {{status: *, response: *}}
 */
export default (status, response) => {
  return {
    status,
    response,
  };
};

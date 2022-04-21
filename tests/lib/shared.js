/**
 * Gets a RequestService mock
 *
 * @param {object} payload
 * @returns
 */
export const getRequest = (payload = {}) => ({
  getAll: () => payload,
  validateAgainstConstraints: () => true,
  get: (key) => payload[key],
});

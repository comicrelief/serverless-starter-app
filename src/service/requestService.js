/* @flow */

/**
 * RequestService class
 */
class RequestService {

  /**
   * RequestService constructor
   * @param event
   */
  constructor(event) {
    this.event = event;
  }

  /**
   * Get a parameter from the request.
   * @param param
   * @param ifNull
   * @return {*}
   */
  get(param: string, ifNull = null) {
    return this.event.queryStringParameters !== null && typeof this.event.queryStringParameters[param] !== 'undefined'
      ? this.event.queryStringParameters[param] : ifNull;
  }
}

module.exports = RequestService;

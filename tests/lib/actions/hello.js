import axios from 'axios';

/**
 *
 */
export default class HelloAction {
  /**
   * hello
   *
   * @returns {Promise<any>}
   */
  static hello() {
    return axios({
      method: 'GET',
      headers: { 'Origin': '*' },
      url: `${process.env.BASE_URL}/hello`,
      responseType: 'json',
    })
      .then((response) => response);
  }
}

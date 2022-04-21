import axios from 'axios';

export default class HelloAction {
  /**
   * hello
   * @return {Promise<any>}
   */
  static hello() {
    return axios({
      method: 'GET',
      url: `${process.env.STAGING_BASE_URL}/hello`,
      responseType: 'json',
    })
      .then((response) => response);
  }
}
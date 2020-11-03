import * as axios from 'axios';

export default class DataProcessorAxios {

  async getWebData() {
    console.log('Getting data');
    let response = await this.getContent('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    return response;
  }

  async getTestData() {
    return { Field: 'test-data'};
  }

  async getContent(url) {
    try {
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      return { url: response.data.url, explanation: response.data.explanation };
    } catch (error) {
      return error;
    }
  }
}
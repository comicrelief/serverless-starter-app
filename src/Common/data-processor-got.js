import * as got from 'got';

export default class DataProcessorGot {

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
      const response = await got(url, { JSON: true });
      return JSON.parse(response.body);
    } catch (error) {
      console.log('Caught error in DataProcessorGot');
      // console.log(error.options);
      console.log('Here is the RequestError:');
      //console.log(JSON.parse(error).RequestError);
      console.log('Here is the full Error object');
      console.log(error);
      throw error;
    }
  }
}
import * as got from 'got';
import { HttpsProxyAgent } from 'hpagent';
import * as https from 'https';
import * as http from 'http';

const urlToOptions = require('got/dist/source/utils/url-to-options').default;
const instance = got.extend({
  request: (url, options, callback) => {
    if(url.protocol === 'https') {
      return https.request({...options, ...urlToOptions(url)}, callback);
    }
    return http.request({...options, ...urlToOptions(url)}, callback);
  }
});

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
      const response = await instance(url, { 
        // agent: {
        //   https: new HttpsProxyAgent({
        //     keepAlive: true,
        //     keepAliveMsecs: 1000,
        //     maxSockets: 256,
        //     maxFreeSocket: 256,
        //     scheduling: 'lifo',
        //     proxy: 'http://ipv4.86.161.174.79.webdefence.global.blackspider.com:8080'
        //   })
        // },
        JSON: true,
        // followRedirect: false,
      });
      return JSON.parse(response.body);
    } catch (error) {
      console.log('Caught error in DataProcessorGot');
      console.log(error.options);
      console.log('Here is the RequestError:');
      console.log(error.RequestError);
      console.log('Here is the full Error object');
      console.log(error);
      throw error;
    }
  }
}
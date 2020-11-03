import * as https from 'https';

export default class DataProcessor {

  async getWebData() {
    console.log('Getting data');
    let response = await this.getContent('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    return response;
  }

  async getTestData() {
    return { Field: 'test-data'};
  }

  async getContent(url) {
    return new Promise((resolve, reject) => {
      const request = https.get(url, (response) => {
        if(response.statusCode < 200 || response.statusCode > 299) {
          reject(new Error('Failed'));
        }
        const body = [];
        response.on('data', (chunk) => body.push(chunk));
        response.on('end', ()=> resolve(body.join('')));
      });
      request.on('error', (err) => reject(err));
    })
  }
}
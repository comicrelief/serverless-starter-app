import HelloAction from '../../src/Action/Hello.action';

import ServerlessMochaPlugin from 'serverless-mocha-plugin';
import { lambdaPromisifier } from "../lib/lambda-promisifier.js"

const expect = ServerlessMochaPlugin.chai.expect;
const promisifiedAction = lambdaPromisifier(HelloAction);

// Test definitions.
describe('HelloAction', () => {

  // Before running the tests, subscribe the rabbit mq listener to the queue.
  before((done) => {
    done();
  });

  it('Should expect the response to return a successful status', () => {
    return promisifiedAction({queryStringParameters : {}}).then((response) => {
      expect(response.statusCode).to.eql(200);
    });
  });

  it('Should return CORS headers', () => {
    return promisifiedAction({queryStringParameters : {}}).then((response) => {
      const headers = response.headers;
      expect(headers['Content-Type']).to.eql('application/json');
      expect(headers['Access-Control-Allow-Origin']).to.eql('*');
      expect(headers['Access-Control-Allow-Credentials']).to.eql(true);
    });
  });

  it('Should expect the response to return a response of hello', () => {
    return promisifiedAction({queryStringParameters : {}}).then((response) => {
      const body = JSON.parse(response.body);
      expect(body.data.response).to.eql('Hello');
    });
  });

});

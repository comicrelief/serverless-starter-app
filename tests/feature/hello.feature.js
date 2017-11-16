import HelloAction from '../../src/action/hello.action';

import ServerlessMochaPlugin from 'serverless-mocha-plugin';
import {lambdaPromisifier} from "../lib/lambda-promisifier.js"

import { success } from "../../src/service/responseService";

const expect = ServerlessMochaPlugin.chai.expect;
const promisifiedAction = lambdaPromisifier(HelloAction);

// Test definitions.
describe('HelloAction', () => {

  // Before running the tests, subscribe the rabbit mq listener to the queue.
  before((done) => {
    done();
  });

  it('Should expect the response to return a successful status', () => {
    return promisifiedAction({queryStringParameters : {}}).then((response, data, test) => {
      expect(response.status).to.eql(success);
    });
  });

  it('Should return CORS headers', () => {
    return promisifiedAction({queryStringParameters : {}}).then((response, data, test) => {
      const headers = response.headers;
      expect(headers['Content-Type']).to.eql('application/json');
      expect(headers['Access-Control-Allow-Origin']).to.eql('*');
      expect(headers['Access-Control-Allow-Credentials']).to.eql(true);
    });
  });

  it('Should expect the response to return a response of hello', () => {
    return promisifiedAction({queryStringParameters : {}}).then((response, data, test) => {
      const body = JSON.parse(response.body);
      expect(body.test).to.eql('Hello');
    });
  });

  it('Should expect the response to return a customised response when a name is set using the query parameters', () => {
    return promisifiedAction({queryStringParameters : { name: 'Adam' }}).then((response, data, test) => {
      const body = JSON.parse(response.body);
      expect(body.test).to.eql('Hello Adam');
    });
  });

});

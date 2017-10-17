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
    return promisifiedAction().then((response, data, test) => {
      expect(response.status).to.eql(success);
    });
  });

  it('Should expect the response to return a response of hello', () => {
    return promisifiedAction().then((response, data, test) => {
      expect(response.response.test).to.eql('hello');
    });
  });

});

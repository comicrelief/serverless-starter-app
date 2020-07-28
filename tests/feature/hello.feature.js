
import ServerlessMochaPlugin from 'serverless-mocha-plugin';
import { lambdaPromisifier } from '../lib/lambda-promisifier';
import HelloAction from '../../src/Action/Hello.action';

const { chai: { expect } } = ServerlessMochaPlugin;
const promisifiedAction = lambdaPromisifier(HelloAction);

// Test definitions.
describe('HelloAction', () => {
  it('Should expect the response to return a successful status', async () => {
    const response = await promisifiedAction({ queryStringParameters: {} });
    expect(response.statusCode).to.eql(200);
  });

  it('Should return CORS headers', async () => {
    const { headers } = await promisifiedAction({ queryStringParameters: {} });
    expect(headers['Content-Type']).to.eql('application/json');
    expect(headers['Access-Control-Allow-Origin']).to.eql('*');
    expect(headers['Access-Control-Allow-Credentials']).to.eql(true);
  });

  it('Should expect the response to return a response of hello', async () => {
    const response = await promisifiedAction({ queryStringParameters: {} });
    const body = JSON.parse(response.body);
    expect(body.data.response).to.eql('Hello');
  });
});

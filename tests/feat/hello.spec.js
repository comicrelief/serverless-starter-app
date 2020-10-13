import { lambdaPromisifier } from '@/tests/lib/lambda-promisifier';
import HelloAction from '@/src/Action/Hello.action';

const promisifiedAction = lambdaPromisifier(HelloAction);

// Test definitions.
describe('feat.Hello', function () {
  it('Should expect the response to return a successful status', async () => {
    const response = await promisifiedAction({ queryStringParameters: {} });
    expect(response.statusCode).toEqual(200);
  });

  it('Should return CORS headers', async () => {
    const { headers } = await promisifiedAction({ queryStringParameters: {} });
    expect(headers['Content-Type']).toEqual('application/json');
    expect(headers['Access-Control-Allow-Origin']).toEqual('*');
    expect(headers['Access-Control-Allow-Credentials']).toEqual(true);
  });

  it('Should expect the response to return a response of hello', async () => {
    const response = await promisifiedAction({ queryStringParameters: {} });
    const body = JSON.parse(response.body);
    expect(body.data.response).toEqual('Hello');
  });
});

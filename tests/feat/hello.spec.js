import { lambdaPromisifier } from '@/tests/lib/lambda-promisifier';
import HelloAction from '@/src/Action/Hello.action';

const promisifiedAction = lambdaPromisifier(HelloAction);

// Test definitions.
describe('feat.Hello', () => {
  const event = { queryStringParameters: {} };

  it('should return a successful status', async () => {
    const response = await promisifiedAction(event);
    expect(response.statusCode).toEqual(200);
  });

  it('should return CORS headers', async () => {
    const { headers } = await promisifiedAction(event);
    expect(headers['Content-Type']).toEqual('application/json');
    expect(headers['Access-Control-Allow-Origin']).toEqual('*');
    expect(headers['Access-Control-Allow-Credentials']).toEqual(true);
  });

  it('should respond with "Hello"', async () => {
    const response = await promisifiedAction(event);
    const body = JSON.parse(response.body);
    expect(body.data.response).toEqual('Hello');
  });
});

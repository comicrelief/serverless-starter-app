import HelloAction from '@/src/Action/Hello.action';
import { getRequest } from '../lib/shared';

// Test definitions.
describe('feat.Hello', () => {
  it('should return a successful status', async () => {
    const request = getRequest();
    const response = await HelloAction({}, request);
    expect(response.statusCode).toEqual(200);
  });

  it('should return CORS headers', async () => {
    const request = getRequest();
    const { headers } = await HelloAction({}, request);
    expect(headers['Content-Type']).toEqual('application/json');
    expect(headers['Access-Control-Allow-Origin']).toEqual('*');
    expect(headers['Access-Control-Allow-Credentials']).toEqual(true);
  });

  it('should respond with "Hello"', async () => {
    const request = getRequest();
    const response = await HelloAction({}, request);
    const body = JSON.parse(response.body);
    expect(body.data.response).toEqual('Hello');
  });
});

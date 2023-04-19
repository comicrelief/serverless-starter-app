import HelloAction from '../lib/actions/hello';

// Test definitions.
describe('feat.Hello', () => {
  it('should return a successful status', async () => {
    const response = await HelloAction.hello();
    expect(response.status).toEqual(200);
  });

  it('should return CORS headers', async () => {
    const { headers } = await HelloAction.hello();
    expect(headers['content-type']).toEqual('application/json; charset=utf-8');
    expect(headers['access-control-allow-origin']).toEqual('*');
    expect(headers['access-control-allow-credentials']).toEqual("true");
  });

  it('should respond with "Hello"', async () => {
    const { data } = await HelloAction.hello();
    expect(data.data.response).toEqual('Hello');
  });
});

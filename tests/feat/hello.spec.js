import HelloAction from '../lib/actions/hello';

// Test definitions.
describe('feat.Hello', () => {
  it('should return a successful status', async () => {
    const response = await HelloAction.hello();
    expect(response.status).toEqual(200);
  });

  it('should return CORS headers', async () => {
    const { headers } = await HelloAction.hello();
    const lowercaseheaders = Object.fromEntries(
      Object.entries(headers).map(([k,v]) => [k.toLowerCase(), v])
    );
    expect(lowercaseheaders['content-type']).toContain('application/json');
    expect(lowercaseheaders['access-control-allow-origin']).toEqual('*');
    expect(lowercaseheaders['access-control-allow-credentials']).toEqual('true');
  });

  it('should respond with "Hello"', async () => {
    const { data } = await HelloAction.hello();
    expect(data.data.response).toEqual('Hello');
  });
});

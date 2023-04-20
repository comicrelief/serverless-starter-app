import axios from 'axios';

async function makeRequest() {
  return axios.get('hello', {
    headers: { Origin: '*' },
    baseURL: process.env.SERVICE_BASE_URL,
    responseType: 'json',
  });
}

// Test definitions.
describe('feat.Hello', () => {
  it('should return a successful status', async () => {
    const response = await makeRequest();
    expect(response.status).toEqual(200);
  });

  it('should return CORS headers', async () => {
    const { headers } = await makeRequest();
    const lowercaseheaders = Object.fromEntries(
      Object.entries(headers).map(([k, v]) => [k.toLowerCase(), v]),
    );
    expect(lowercaseheaders['content-type']).toContain('application/json');
    expect(lowercaseheaders['access-control-allow-origin']).toEqual('*');
    expect(lowercaseheaders['access-control-allow-credentials']).toEqual('true');
  });

  it('should respond with the correct message', async () => {
    const { data } = await makeRequest();
    console.log(data);
    expect(data.message).toEqual('hello nobody');
  });
});

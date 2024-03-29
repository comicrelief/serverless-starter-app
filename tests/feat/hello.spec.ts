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
    expect(headers['content-type']).toContain('application/json');
    expect(headers['access-control-allow-origin']).toEqual('*');
    expect(headers['access-control-allow-credentials']).toEqual('true');
  });

  it('should respond with the correct message', async () => {
    const { data } = await makeRequest();
    expect(data.data.response).toEqual('Hello');
  });
});

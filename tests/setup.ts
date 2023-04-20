import 'dotenv/config';

if (process.env.USE_SERVERLESS_OFFLINE) {
  // Execute the feature tests
  // against serverless offline.
  // Override URL and API Key
  // To match `yarn offline-feature-test`
  process.env.SERVICE_BASE_URL = 'http://localhost:3001';
}

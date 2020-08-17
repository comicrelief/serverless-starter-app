import chai from 'chai';
import { config } from 'dotenv';


// Load environment variables from `.env`
config();


// Force chai to show the complete object diff
chai.config.truncateThreshold = 0;


if (process.env.USE_SERVERLESS_OFFLINE) {
  // Execute the feature tests
  // against serverless offline.
  // Override URL and API Key
  // To match `yarn offline-feature-test`
  process.env.SERVICE_URL = 'http://localhost:3001';
  process.env.SERVICE_KEY = 'api-key';
}

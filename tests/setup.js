import chai from 'chai';
import { config } from 'dotenv';

// Global setup
before(() => {
  // Load environment variables from `.env`
  config();

  // Force chai to show the complete object diff
  chai.config.truncateThreshold = 0;

  // Execute the feature tests
  // against serverless offline.
  // Override URL and API Key
  // To match `yarn offline-feature-test`
  if (process.env.USE_SERVERLESS_OFFLINE) {
    process.env.SERVICE_URL = 'http://localhost:3001';
    process.env.SERVICE_KEY = 'api-key';
  }
});

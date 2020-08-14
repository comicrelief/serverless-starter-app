import chai from 'chai';
import { config } from 'dotenv';

// Global setup
before(() => {
  // Load environment variables from `.env`
  config();

  // Force chai to show the complete object diff
  chai.config.truncateThreshold = 0;
});

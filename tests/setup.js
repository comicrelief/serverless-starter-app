import { config } from 'dotenv';

// Load environment variables from `.env`
config();

if (process.env.USE_SERVERLESS_OFFLINE) {
  process.env.SERVICE_BASE_URL = 'http://localhost:3001';
}

// Type definitions for environment variables
// See https://stackoverflow.com/a/53981706

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXAMPLE_ENV_VAR: string;
      SERVICE_BASE_URL: string;
    }
  }
}

export {};

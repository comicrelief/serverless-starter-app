import type { ForegroundColor } from 'chalk';
import type { Config } from 'jest';

const getProject = (type: string, color: typeof ForegroundColor) => ({
  displayName: {
    name: type.toUpperCase(),
    color,
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/$1',
  },
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/tests/setup.ts'],
  testMatch: [`<rootDir>/tests/${type}/**/*.spec.ts`],
  testEnvironment: 'node',
});

const jestConfig: Config = {
  projects: [
    getProject('feat', 'magenta'),
    getProject('unit', 'blue'),
  ],
};

export default jestConfig;

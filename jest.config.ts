const getProject = (type: string, color: string) => ({
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

const jestConfig = {
  projects: [
    getProject('feat', 'magenta'),
    getProject('unit', 'blue'),
  ],
};

export default jestConfig;

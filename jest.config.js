const getProject = (type, color) => {
  return {
    displayName: {
      name: type.toUpperCase(),
      color,
    },
    moduleNameMapper: {
      '~/(.*)$': '<rootDir>/$1',
    },
    setupFiles: ['<rootDir>/tests/setup.js'],
    testMatch: [`<rootDir>/tests/${type}/**/*.spec.js`],
    testEnvironment: 'node',
  };
};

const jestConfig = {
  projects: [getProject('feat', 'magenta'), getProject('unit', 'blue')],
};

if (process.env.COVERAGE) {
  jestConfig.collectCoverage = true;
  jestConfig.collectCoverageFrom = ['<rootDir>/src/**/*.js'];
}

module.exports = jestConfig;

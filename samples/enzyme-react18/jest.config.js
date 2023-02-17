/**
 * @file Jest configuration.
 */

module.exports = {
  setupFilesAfterEnv: ['./test/setupTests.js'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
};

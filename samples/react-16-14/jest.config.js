module.exports = {
  // the setup file that will be run before the tests
  setupFilesAfterEnv: ['./test/setupTests.ts'],

  // allow us to use mount from enzyme
  testEnvironment: 'jest-environment-jsdom',

  // the test environment that will be used for testing
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'mjs'],

  // transform the code to be interpreted by node
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': '<rootDir>/node_modules/ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
};

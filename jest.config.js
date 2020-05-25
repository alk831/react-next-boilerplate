module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  modulePaths: ['<rootDir>'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/out/',
  ],
  moduleNameMapper: {
    '\\.css': '<rootDir>/__mocks__/cssMock.js',
    '\\.scss': '<rootDir>/__mocks__/cssMock.js',
  },
  setupFilesAfterEnv: ['./jest.setup.ts']
};
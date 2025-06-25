import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  rootDir: './',
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
};

export default config;

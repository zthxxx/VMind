// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  preset: 'ts-jest',
  runner: 'jest-electron/runner',
  testEnvironment: 'jest-electron/environment',
  testMatch: ['<rootDir>/src/**/*.test.(js|ts)'],
  silent: true,
  globals: {
    'ts-jest': {
      isolatedModules: true,
      resolveJsonModule: true,
      esModuleInterop: true,
      experimentalDecorators: true,
      module: 'ESNext',
      tsconfig: './tsconfig.test.json'
    }
  },
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['json-summary', 'lcov', 'text'],
  coveragePathIgnorePatterns: ['node_modules', '__tests__', 'interface.ts', '.d.ts', 'typings', 'vite'],
  collectCoverageFrom: [
    '**/src/**',
    '!**/cjs/**',
    '!**/build/**',
    '!**/esm/**',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/types/**',
    '!**/interface.ts',
    '!**/vite/**'
  ]
};

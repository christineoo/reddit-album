module.exports = {
  coveragePathIgnorePatterns: [
    '.*\\.d\\.ts',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  testMatch: [
    '<rootDir>/src/**/?(*.)(spec|test).ts?(x)',
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
  ],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\](?!(lodash-es|reach-router-hash-history)/.*).+\\.(js|jsx|ts|tsx)$',
  ],
    moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'node',
    'ts',
    'tsx',
    'web.js',
    'web.jsx',
    'web.ts',
    'web.tsx',
  ],
  globals: {
    window: {},
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  reporters: [
    'default',
  ],
  preset: 'ts-jest/presets/js-with-ts',
}

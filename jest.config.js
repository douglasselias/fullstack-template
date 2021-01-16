module.exports = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx}',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/pages/**',
    '!<rootDir>/main/**',
    '!<rootDir>/components/**',
    '!**/*.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10,
    },
  },
  transform: {
    '^.+\\.(tsx)$': '<rootDir>/node_modules/babel-jest',
    '.+\\.(ts)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
}

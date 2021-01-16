module.exports = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx}',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/pages/**',
    '!**/*.d.ts',
  ],
  transform: {
    '^.+\\.(tsx)$': '<rootDir>/node_modules/babel-jest',
    '.+\\.(ts)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
}

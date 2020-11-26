module.exports = {
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
}

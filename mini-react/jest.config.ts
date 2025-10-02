import type { Config } from 'jest'

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  testMatch: ['**/?(*.)test.ts', '**/?(*.)spec.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverage: true,
  coverageDirectory: 'coverage'
} as Config

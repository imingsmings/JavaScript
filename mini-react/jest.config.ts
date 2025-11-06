import type { Config } from 'jest'

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  testMatch: ['**/?(*.)test.{ts,tsx}', '**/?(*.)spec.{ts,tsx}'],
  moduleNameMapper: {
    '^packages/react/(.*)$': '<rootDir>/packages/react/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverage: true,
  coverageDirectory: 'coverage'
} as Config

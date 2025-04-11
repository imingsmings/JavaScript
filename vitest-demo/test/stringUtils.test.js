import { describe, test, expect } from 'vitest'
import { capitalize, reverse, toLowerCase, toUppercase } from '../src/utils/stringutils'

describe('String Utils', () => {
  test('should return string in uppercase', () => {
    expect(toUppercase('hello')).toBe('HELLO')
  })

  test('should retuern string in lowercase', () => {
    expect(toLowerCase('HELLO')).toBe('hello')
  })

  test('should capitalize first letter of string', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  test('should return string reversed', () => {
    expect(reverse('hello')).toBe('olleh')
  })
})

import { describe, test, expect } from 'vitest'
import { sum, subtract, multiply, divide } from '../src/utils/mathUtils'

describe('Math Utils', () => {
  test('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('adds numbers correctly: A.A.A Pattern', () => {
    // Arrange
    const a = 1
    const b = 2

    // Act
    const result = a + b

    // Assert
    expect(result).toBe(3)
  })

  test('should subtract one number', () => {
    expect(subtract(1, 2)).toBe(-1)
  })

  test('should multiply two numbers', () => {
    expect(multiply(2, 4)).toBe(8)
  })

  test('should divide one number by the other', () => {
    expect(divide(4, 2)).toBe(2)
    expect(divide(4, 1)).toBe(4)
  })

  test('should throw new error when dividing by zero', () => {
    expect(() => divide(2, 0)).toThrow('Division by zero is not allowed')
  })
})

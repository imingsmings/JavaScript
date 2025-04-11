import { describe, test, expect } from 'vitest'
import { filterEven, findMax, findMin, sum } from '../src/utils/arrayUtils'

describe('Array Utils', () => {
  test('should return correct sum of array', () => {
    expect(sum([1, 2, 3])).toBe(6)
    expect(sum([-1, -2, -3])).toBe(-6)
  })

  test('should return max value from array', () => {
    expect(findMax([1, 2, 3])).toBe(3)
    expect(findMax([-1, -2, -3])).toBe(-1)
  })

  test('should return min value from array', () => {
    expect(findMin([1, 2, 3])).toBe(1)
    expect(findMin([-1, -2, -3])).toBe(-3)
  })

  test('should return even number from array', () => {
    expect(filterEven([1, 2, 3])).toEqual([2])
    expect(filterEven([-1, -2, -3])).toEqual([-2])
  })
})

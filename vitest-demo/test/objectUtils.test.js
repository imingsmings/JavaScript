import { describe, test, expect } from 'vitest'
import { deepClone, deepEqual, merge } from '../src/utils/objectUtils'

describe('Object Utils', () => {
  test('should merge two objects', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 3, b: 4, c: 5 }
    const merged = merge(obj1, obj2)

    expect(merged).toEqual({ a: 3, b: 4, c: 5 })
  })

  test('should return a deep cloned object', () => {
    const origin = { a: 1, b: { c: 2 } }
    const cloned = deepClone(origin)
    cloned.b.c = 3

    expect(origin.b.c).toBe(2)
    expect(cloned.b.c).toBe(3)
  })

  test('should correctly check deep equality betweeb two objects', () => {
    const obj1 = { a: 1, b: { c: 2 } }
    const obj2 = { a: 1, b: { c: 2 } }
    const obj3 = { a: 1, b: { c: 3 } }

    expect(deepEqual(obj1, obj1)).toBe(true)
    expect(deepEqual(obj1, obj3)).toBe(false)
  })
})

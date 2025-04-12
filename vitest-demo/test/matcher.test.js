import { describe, expect, test } from 'vitest'

describe('Matchers', () => {
  test('toBe matcher', () => {
    const result = '5'
    expect(result).toBe('5')
  })

  test('toEqual matcher ==> deep equality', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 2 }

    expect(obj1).toEqual(obj2)
  })

  test('toStrictEqual matcher ==> deep equality, but other types are not strict equal', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 2 }

    expect(obj1).toStrictEqual(obj2)
  })
})

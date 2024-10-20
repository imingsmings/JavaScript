// import { test, expect } from 'vitest'
import { sum } from '../src/sum'

test('testing sum', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
})

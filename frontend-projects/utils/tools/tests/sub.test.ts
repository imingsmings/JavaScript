// import { test, expect } from 'vitest'
import { sub } from '../src/sub'

test('testing sum', () => {
    const result = sub(2, 1)
    expect(result).toBe(1)
})

import { describe, expect, test } from 'vitest'
import { fetchData } from '../src/utils/asyncUtils'

describe('fetchData Uitls', () => {
  test('should return the correct message after the promise resolved', async () => {
    // const result = await fetchData()
    // expect(result).toBe('Fetch data successfully')

    await expect(fetchData()).resolves.toBe('Fetch data successfully')
  })
})

import { fetchData } from '../ts/utils/tools'
import 'jest-fetch-mock'

test('Test fetch', async () => {
    const result = await fetchData(1)
    expect(result).toHaveProperty('userId')
    expect(result).toHaveProperty('id')
    expect(result).toHaveProperty('title')
    expect(result).toHaveProperty('completed')
})

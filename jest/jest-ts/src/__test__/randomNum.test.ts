import { randomNum } from '../utils/tools'

test('Test random number', () => {
    const result = randomNum()
    expect(result.length).toBe(4)
    expect(new Set(result).size).toBe(4)

    result.forEach((num: number) => {
        expect(num).toBeGreaterThanOrEqual(0)
        expect(num).toBeLessThanOrEqual(9)
    })
})

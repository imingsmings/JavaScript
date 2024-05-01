import { isRepeat } from '../utils/tools'

describe('Test isRepeat', () => {
    test('string type', () => {
        expect(isRepeat(['1', '2', '3', '4'])).toBe(false)
        expect(isRepeat(['1', '2', '3', '2'])).toBe(true)
    })

    test('number type', () => {
        expect(isRepeat([1, 2, 3, 4])).toBe(false)
        expect(isRepeat([1, 2, 3, 2])).toBe(true)
    })
})

const modulePath = './tools.js'
const { sum, sub, mul, div } = require(modulePath)

jest.mock(modulePath, () => {
    const originalModule = jest.requireActual(modulePath)

    return {
        ...originalModule
        // sum: jest.fn(() => 100),
        // sub: jest.fn(() => 50)
    }
})

test('test local module', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sub(10, 2)).toBe(8)
    expect(mul(6, 8)).toBe(48)
    expect(div(100, 4)).toBe(25)
})

const { sum, sub, mul, div } = require('./tool')

beforeAll(() => {
    console.log('Global beforeAll')
})

afterAll(() => {
    console.log('Global afterAll')
})

beforeEach(() => {
    console.log('Global beforeEach')
})

afterEach(() => {
    console.log('Global afterEach')
})

describe('group 1', () => {
    beforeAll(() => {
        console.log('group 1 beforeAll')
    })

    afterAll(() => {
        console.log('group 1 afterAll')
    })

    beforeEach(() => {
        console.log('group 1 beforeEach')
    })

    afterEach(() => {
        console.log('group 1 afterEach')
    })

    test('sum', () => {
        const result = sum(1, 3)
        expect(result).toBe(4)
        console.log('\x1b[31m%s\x1b[0m', 'test sum')
    })
})

test.only('mul', () => {
    const result = mul(2, 3)
    expect(result).toBe(6)
    console.log('\x1b[31m%s\x1b[0m', 'test mul')
})

// test('sum', () => {
//     const result = sum(1, 3)
//     expect(result).toBe(4)
//     console.log('\x1b[31m%s\x1b[0m', 'test sum')
// })

// test('sub', () => {
//     const result = sub(15, 10)
//     expect(result).toBe(5)
//     console.log('\x1b[31m%s\x1b[0m', 'test sub')
// })

// test('mul', () => {
//     const result = mul(2, 3)
//     expect(result).toBe(6)
//     console.log('\x1b[31m%s\x1b[0m', 'test mul')
// })

// test('div', () => {
//     const result = div(50, 2)
//     expect(result).toBe(25)
//     console.log('\x1b[31m%s\x1b[0m', 'test div')
// })

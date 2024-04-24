// 全局方法 test / expect / jest

/**
 * 一个test方法意味着书写了一个测试页用例
 *
 * param1: 该测试用例的描述
 * param2: 执行该用例所对应的回调函数
 */

const { sum, sub, mul, div } = require('./tool')

// test('test sum function', () => {
//     const result = sum(1, 2)
//     expect(result).toBe(3)
// })

// it('test sub function', () => {
//     const result = sub(1, 2)
//     expect(result).toBe(-1)
// })

// it('test mul function', () => {
//     expect(mul(10, 10)).toBe(100)
// })

describe('testing sum and sub', () => {
    test('test sum function', () => {
        const result = sum(1, 2)
        expect(result).toBe(3)
    })

    it('test sub function', () => {
        const result = sub(1, 2)
        expect(result).toBe(-1)
    })
})

describe('testing mul and div', () => {
    test('test mul function', () => {
        const result = mul(1, 2)
        expect(result).toBe(2)
    })

    it('test sub function', () => {
        const result = div(1, 2)
        expect(result).toBe(0.5)
    })
})

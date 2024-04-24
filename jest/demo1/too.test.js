// const can1 = {
//     flavor: 'grapefruit',
//     ounces: 12
// }
// const can2 = {
//     flavor: 'grapefruit',
//     ounces: 12
// }

// describe('the La Croix cans on my desk', () => {
//     test('have all the same properties', () => {
//         expect(can1).toEqual(can2)
//     })
//     test('are not the exact same can', () => {
//         expect(can1).not.toBe(can2)
//     })
// })

// test('test', () => {
//     expect(1 + 2).toBe(3)
//     expect(1 + 2).not.toBe(4)
// })

// test('boolean matcher', () => {
//     const n = null
//     expect(n).toBeFalsy()
//     expect(n).not.toBeTruthy()

//     const a = 0
//     expect(a).toBeFalsy()
//     expect(a).not.toBeTruthy()
// })

// test('NO Parametetrs', () => {
//     const n = null
//     expect(n).toBeNull()
//     expect(n).toBeDefined()
//     expect(n).not.toBeUndefined()
//     const a = 0
//     expect(a).not.toBeNull()
//     expect(a).toBeDefined()
//     expect(a).not.toBeUndefined()
// })

test('数值相关匹配器', () => {
    const value1 = 4
    // 大于
    expect(value1).toBeGreaterThan(3)
    // 大于等于
    expect(value1).toBeGreaterThanOrEqual(4)
    // 小于
    expect(value1).toBeLessThan(5)
    // 小于等于

    expect(value1).toBeLessThanOrEqual(4)

    // 这里需要注意一下浮点数
    const value2 = 0.1 + 0.2
    // Expected: 0.3
    // Received: 0.30000000000000004
    // expect(value2).toBe(0.3)

    expect(value2).toBeCloseTo(0.3)
    // toBeCloseTo 还接受第二个参数，第二个参数用于指定位数，默认是两位
    expect(0.302).toBeCloseTo(0.301)
    expect(0.302).not.toBeCloseTo(0.301, 5)
})

test('string', () => {
    expect('this is a test').toMatch(/test/)
    expect('this is a test').not.toMatch(/abc/)
})

const shoppingList = ['milk', 'ornage', 'rice']

test('Array', () => {
    expect([1, 2, 3]).toContain(1)
    // expect([1, 2, 3]).toContain('1')
    expect('this is a test').toContain('test')
    expect(new Set(shoppingList)).toContain('milk')
})

function compileCode() {
    throw new Error('aaa you are using the wrong JDK bbb')
}

test('Exception', () => {
    expect(() => compileCode()).toThrow()

    expect(() => compileCode()).toThrow(Error)
    expect(() => compileCode()).toThrow(
        'you are using the wrong JDK'
    )
    expect(() => compileCode()).toThrow(/JDK/)
})

const arr = [1]
test('Array do not include item', () => {
    expect([2, 3, 4]).toEqual(
        expect.not.arrayContaining(arr)
    )
})

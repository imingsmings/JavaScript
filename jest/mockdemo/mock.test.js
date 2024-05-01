// test('mock fn 0', () => {
//     const mock = jest.fn()
//     mock.mockReturnValue(42)
//     expect(mock()).toBe(42)
// })

// test('mock fn 1', () => {
//     const mock = jest.fn((x) => x + 1)
//     expect(mock(1)).toBe(2)
// })

const arr = [1, 2, 3]

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

test('forEach', () => {
    const mockFn = jest.fn((x) => x + 1)

    forEach(arr, mockFn)

    // [ [ 1 ], [ 2 ], [ 3 ] ]
    // console.log(mockFn.mock.calls)
    expect(mockFn.mock.calls).toHaveLength(3)
    expect(mockFn.mock.calls.length).toBe(3)

    // 测试每一次调用 callback 的时候传入的参数是否符合预期
    expect(mockFn.mock.calls[0][0]).toBe(1)
    expect(mockFn.mock.calls[1][0]).toBe(2)
    expect(mockFn.mock.calls[2][0]).toBe(3)

    // 针对每一次 callback 被调用后的返回值进行测试
    expect(mockFn.mock.results[0].value).toBe(2)

    // 模拟函数是否被调用过
    expect(mockFn).toHaveBeenCalled()

    // 前面在调用的时候是否有参数为 1 以及参数为 2 的调用
    expect(mockFn).toHaveBeenCalledWith(1)
    expect(mockFn).toHaveBeenCalledWith(2)

    // 还可以对模拟函数的参数进行一个边界判断，判断最后一次调用是否传入的参数为 3
    expect(mockFn).toHaveBeenLastCalledWith(3)
})

const fetchMockDataFn = jest.fn()
const json = { id: 1, name: 'Tom' }

test('Mock async', async () => {
    fetchMockDataFn.mockImplementation(() =>
        Promise.resolve(json)
    )

    const data = await fetchMockDataFn()
    expect(data).toEqual({ id: 1, name: 'Tom' })
})

test('Mock async error', async () => {
    fetchMockDataFn.mockImplementationOnce(() =>
        Promise.reject(new Error('network error'))
    )

    await expect(fetchMockDataFn()).rejects.toThrow(
        'network error'
    )
    await expect(fetchMockDataFn()).resolves.toEqual({
        id: 1,
        name: 'Tom'
    })
})

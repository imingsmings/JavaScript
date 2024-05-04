import {
    startTimeout,
    stopTimeout
} from '../src/utils/tools'

beforeEach(() => {
    jest.useFakeTimers()
})

afterEach(() => {
    jest.useRealTimers()
})

test('Start timeout', () => {
    const callback = jest.fn()
    const timeout = 2000

    const spy = jest.spyOn(window, 'setTimeout')

    const timerId = startTimeout(callback, timeout)

    expect(callback).not.toHaveBeenCalled()
    jest.advanceTimersByTime(1000)
    expect(callback).not.toHaveBeenCalled()
    jest.advanceTimersByTime(1000)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledTimes(1)

    stopTimeout(timerId)
})

test('Stop timeout', () => {
    const callback = jest.fn()
    const timeout = 2000

    const spy = jest.spyOn(window, 'setTimeout')
    const timerId = startTimeout(callback, timeout)

    stopTimeout(timerId)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(callback).not.toHaveBeenCalled()
})

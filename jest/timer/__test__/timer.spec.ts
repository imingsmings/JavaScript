import { startTimer, clearTimer } from '../src/utils/tools'

beforeEach(() => {
    jest.useFakeTimers()
})

afterEach(() => {
    jest.useRealTimers()
})

test('Start timer', () => {
    const callback = jest.fn()
    const interval = 1000

    // 避免调用真实的setInterval
    const spy = jest.spyOn(window, 'setInterval')

    const timerId = startTimer(callback, interval)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(
        expect.any(Function),
        interval
    )

    jest.advanceTimersByTime(interval)
    expect(callback).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(interval)
    expect(callback).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenCalledTimes(1)

    clearTimer(timerId)
})

test('Clear timer', () => {
    const callback = jest.fn()
    const interval = 1000

    const timerId = startTimer(callback, interval)
    clearTimer(timerId)

    jest.advanceTimersByTime(interval)
    expect(callback).toHaveBeenCalledTimes(0)
    expect(callback).not.toHaveBeenCalled()
})

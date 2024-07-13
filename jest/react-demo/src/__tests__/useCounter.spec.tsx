import useCounter from '../hooks/useCounter'
import { renderHook, act } from '@testing-library/react'

test('tesing inc', () => {
    const { result } = renderHook(() => useCounter(0))

    act(() => result.current[1].inc(2))

    expect(result.current[0]).toEqual(2)
})

test('tesing dec', () => {
    const { result } = renderHook(() => useCounter(0))

    act(() => result.current[1].dec(2))

    expect(result.current[0]).toEqual(-2)
})

test('set value', () => {
    const { result } = renderHook(() => useCounter(0))

    act(() => result.current[1].set(100))

    expect(result.current[0]).toEqual(100)
})

test('set max value', () => {
    const { result } = renderHook(() =>
        useCounter(0, { max: 100 })
    )

    act(() => result.current[1].set(1000))

    expect(result.current[0]).toEqual(100)
})

test('set min value', () => {
    const { result } = renderHook(() =>
        useCounter(0, { min: -100 })
    )

    act(() => result.current[1].set(-1000))

    expect(result.current[0]).toEqual(-100)
})

test('asyn inc', async () => {
    jest.useFakeTimers()
    const { result } = renderHook(() => useCounter(0))
    act(() => result.current[1].asyncInc(2))
    expect(result.current[0]).toEqual(0)
    await act(() => jest.advanceTimersByTime(2000))
    expect(result.current[0]).toEqual(2)
    jest.useRealTimers()
})

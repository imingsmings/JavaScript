export function startTimer(
    callback: () => void,
    interval: number
): NodeJS.Timeout {
    const timerId = setInterval(() => {
        callback()
    }, interval)
    return timerId
}

export function clearTimer(timerId: NodeJS.Timeout) {
    clearInterval(timerId)
}

export function startTimeout(
    callback: () => void,
    timeout: number
): NodeJS.Timeout {
    const timerId = setTimeout(() => {
        callback()
    }, timeout)

    return timerId
}

export function stopTimeout(timerId: NodeJS.Timeout) {
    clearTimeout(timerId)
}

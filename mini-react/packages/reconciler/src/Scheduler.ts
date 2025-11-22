type Task = {
  callback: () => void
  priority: number
  startTime: number
  expirationTime: number
}

const taskQueue: Task[] = []
let currentTask: Task | null = null
let startTime = -1
let schedulePerformWorkUnitDeadline: () => void

export function getStartTime() {
  return startTime
}

export function setStartTime(time: number) {
  startTime = time
}

export function getCurrentTime() {
  return Date.now()
}

export function shouldYield() {
  const timeElapsed = getCurrentTime() - startTime

  if (timeElapsed < 5) {
    return false
  }

  startTime = getCurrentTime()

  return true
}

export function scheduleCallback(callback: () => void, priority = 5000) {
  const startTime = getCurrentTime()
  const expirationTime = startTime + priority
  const newTask: Task = {
    callback,
    priority,
    startTime,
    expirationTime
  }
  taskQueue.push(newTask)
  schedulePerformWorkUnitDeadline()
}

if (typeof MessageChannel !== 'undefined') {
  const { port1, port2 } = new MessageChannel()

  port1.onmessage = performWorkUntilDeadline

  schedulePerformWorkUnitDeadline = () => {
    port2.postMessage(null)
  }
} else {
  schedulePerformWorkUnitDeadline = () => {
    setTimeout(performWorkUntilDeadline, 0)
  }
}

function performWorkUntilDeadline() {
  const startTime = getCurrentTime()
  let hasMoreWork = true
  try {
    hasMoreWork = workLoop(startTime)
  } finally {
    if (hasMoreWork) {
      schedulePerformWorkUnitDeadline()
    }
  }
}

function workLoop(startTime: number) {
  currentTask = taskQueue.shift() || null

  while (currentTask !== null) {
    currentTask.callback()

    const nextTask = taskQueue[0]
    if (nextTask && nextTask.expirationTime > startTime) {
      break
    }

    currentTask = taskQueue.shift() || null
  }

  return !!currentTask
}

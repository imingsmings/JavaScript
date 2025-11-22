import { scheduleMircoTask } from '../../react-dom-binding/FiberConfigDOM'
import { performWorkOnRoot } from './WorkLoop'
import { scheduleCallback } from './Scheduler'

let didScheduleMircoTask = false

function schedulerImmediateRootSchedulerTask() {
  scheduleMircoTask(() => {
    didScheduleMircoTask = false
    scheduleCallback(() => {
      performWorkOnRoot()
    })
  })
}

export function ensureRootScheduled() {
  if (!didScheduleMircoTask) {
    didScheduleMircoTask = true
    schedulerImmediateRootSchedulerTask()
  }
}

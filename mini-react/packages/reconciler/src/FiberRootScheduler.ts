import { scheduleMircoTask } from '../../react-dom-binding/FiberConfigDOM'
import { performWorkOnRoot } from './WorkLoop'

let didScheduleMircoTask = false

function schedulerImmediateRootSchedulerTask() {
  scheduleMircoTask(() => {
    didScheduleMircoTask = false
    performWorkOnRoot()
  })
}

export function ensureRootScheduled() {
  if (!didScheduleMircoTask) {
    didScheduleMircoTask = true
    schedulerImmediateRootSchedulerTask()
  }
}

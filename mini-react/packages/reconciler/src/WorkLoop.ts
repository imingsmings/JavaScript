import { beginWork } from './BeginWork'
import { completeWork } from './CompleteWork'
import { type FiberRootNode, type FiberNode } from './ReactInternalTypes'
import { commitMutationEffects, commitPassiveUnmountEffects } from './CommitWork'
import { createWorkInProgress } from './Fiber'
import { ensureRootScheduled } from './FiberRootScheduler'
import { getCurrentTime, getStartTime, scheduleCallback, setStartTime, shouldYield } from './Scheduler'

let workInProgress: FiberNode | null = null
let workInProgressRoot: FiberRootNode | null = null
let rootStatus = 0

export function scheduleUpdateOnFiber(fiberRoot: FiberRootNode) {
  if (workInProgressRoot === null) {
    workInProgressRoot = fiberRoot
  }
  ensureRootScheduled()
}

export function performWorkOnRoot() {
  const fiberRoot = workInProgressRoot!
  udpateOnFiber(fiberRoot)
}

export function getRootForUpdatedFiber(fiber: FiberNode): FiberRootNode {
  let node: FiberNode = fiber
  while (node.return) {
    node = node.return
  }
  return node.stateNode
}

function udpateOnFiber(fiberRoot: FiberRootNode) {
  if (workInProgress === null) {
    workInProgress = createWorkInProgress(fiberRoot.current!, fiberRoot.current!.pendingProps)
  }

  if (getStartTime() < 0) {
    setStartTime(getCurrentTime())
  }

  workLoop()

  if (rootStatus == 1) {
    const finishedWork = fiberRoot.current!.alternate!
    commitMutationEffects(finishedWork)
    fiberRoot.current = finishedWork
    scheduleCallback(() => {
      commitPassiveUnmountEffects(finishedWork)
    })
    workInProgressRoot = null
    setStartTime(-1)
    return
  }

  ensureRootScheduled()
}

function workLoop() {
  while (workInProgress !== null && !shouldYield()) {
    performUnitOfWork(workInProgress)
  }

  if (workInProgress === null) {
    rootStatus = 1
  }
}

function performUnitOfWork(fiber: FiberNode) {
  let next: FiberNode | null = beginWork(fiber)

  if (next !== null) {
    workInProgress = next
  } else {
    completeUnifOfWork(fiber)
  }
}

function completeUnifOfWork(fiber: FiberNode) {
  let completedFiber: FiberNode | null = fiber
  do {
    completeWork(completedFiber!)
    const siblingFiber = completedFiber!.sibling
    if (siblingFiber !== null) {
      workInProgress = siblingFiber
      return
    }

    completedFiber = completedFiber!.return
    workInProgress = completedFiber
  } while (completedFiber !== null)
}

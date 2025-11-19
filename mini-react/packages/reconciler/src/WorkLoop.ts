import { beginWork } from './BeginWork'
import { completeWork } from './CompleteWork'
import { type FiberRootNode, type FiberNode } from './ReactInternalTypes'
import { commitMutationEffects, commitPassiveUnmountEffects } from './CommitWork'
import { createWorkInProgress } from './Fiber'
import { ensureRootScheduled } from './FiberRootScheduler'

let workInProgress: FiberNode | null = null
let workInProgressRoot: FiberRootNode | null = null

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
  workInProgress = createWorkInProgress(fiberRoot.current!, fiberRoot.current!.pendingProps)
  workLoop()
  const finishedWork = fiberRoot.current!.alternate!
  commitMutationEffects(finishedWork)
  fiberRoot.current = finishedWork
  commitPassiveUnmountEffects(finishedWork)
}

function workLoop() {
  while (workInProgress !== null) {
    performUnitOfWork(workInProgress)
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

import { beginWork } from './BeginWork'
import { completeWork } from './CompleteWork'
import { removeChild } from '../../react-dom-binding/FiberConfigDOM'
import { type FiberRootNode, type FiberNode } from './ReactInternalTypes'
import { commitMutationEffects } from './CommitWork'
import { createWorkInProgress } from './Fiber'

let workInProgress: FiberNode | null = null

export function workLoop() {
  while (workInProgress !== null) {
    performUnitOfWork(workInProgress)
  }
}

export function updateOnFiber(fiberRoot: FiberRootNode) {
  workInProgress = createWorkInProgress(fiberRoot.current!, fiberRoot.current!.pendingProps)
  workLoop()

  const finishedWork = fiberRoot.current!.alternate!
  commitMutationEffects(finishedWork)
  fiberRoot.current = finishedWork
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

export function getRootForUpdatedFiber(fiber: FiberNode): FiberRootNode {
  let node: FiberNode = fiber
  while (node.return) {
    node = node.return
  }
  return node.stateNode
}

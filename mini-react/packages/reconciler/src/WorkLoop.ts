import { beginWork } from './BeginWork'
import { completeWork } from './CompleteWork'
import { appendChild, removeChild } from '../../react-dom-binding/FiberConfigDOM'
import { type FiberNode } from './ReactInternalTypes'

let workInProgress: FiberNode | null = null

export function workLoop(fiber: FiberNode) {
  workInProgress = fiber
  while (workInProgress !== null) {
    performUnitOfWork(workInProgress)
  }
}

export function updateOnFiber(fiber: FiberNode) {
  const hostRootFiber = getRootForUpdatedFiber(fiber)
  removeChild(hostRootFiber.stateNode.containerInfo, hostRootFiber.child?.stateNode)
  workLoop(fiber)
  appendChild(hostRootFiber.stateNode.containerInfo, hostRootFiber.child?.stateNode)
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

function getRootForUpdatedFiber(fiber: FiberNode) {
  let node: FiberNode = fiber
  while (node.return) {
    node = node.return
  }
  return node
}

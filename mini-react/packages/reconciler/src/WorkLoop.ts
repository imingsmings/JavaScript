import { beginWork } from './BeginWork'
import { completeWork } from './CompleteWork'
import { type FiberNode } from './ReactInternalTypes'

// export function workLoop(fiber: FiberNode) {
//   let child = beginWork(fiber)
//   if (child !== null) {
//     workLoop(child)
//   }
//   completeWork(fiber)
//   if (fiber.sibling !== null) {
//     workLoop(fiber.sibling)
//   }
// }

/**
<div>
  <h1>123</h1>
  <p>
    text
    <span>456</span>
  </p>
</div>
 */

let workInProgress: FiberNode | null = null

export function workLoop(fiber: FiberNode) {
  workInProgress = fiber
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

import { createFiberFromElement } from './Fiber'
import { FiberNode } from './ReactInternalTypes'
import { reconcileChildFibers } from './ChildFiber'

export function beginWork(fiber: FiberNode): FiberNode | null {
  fiber.child = reconcileChildFibers(fiber, fiber.pendingProps.children)
  return fiber.child
}

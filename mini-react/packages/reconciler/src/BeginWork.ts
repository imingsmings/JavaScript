import { FiberNode, HostText } from './ReactInternalTypes'
import { reconcileChildFibers } from './ChildFiber'

export function beginWork(fiber: FiberNode): FiberNode | null {
  if (fiber.tag === HostText) {
    return null
  }

  const children = fiber.pendingProps.children

  if (typeof children === 'string' || typeof children === 'number') {
    return null
  }

  fiber.child = reconcileChildFibers(fiber, children)
  return fiber.child
}

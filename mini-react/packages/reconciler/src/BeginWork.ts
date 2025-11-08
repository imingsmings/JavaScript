import { FiberNode, FunctionComponent, HostComponent, HostRoot, HostText } from './ReactInternalTypes'
import { reconcileChildFibers } from './ChildFiber'
import { renderWithHooks } from './FiberHook'

export function beginWork(fiber: FiberNode): FiberNode | null {
  if (typeof fiber.pendingProps?.children === 'string' || typeof fiber.pendingProps?.children === 'number') {
    return null
  }

  switch (fiber.tag) {
    case HostRoot:
      fiber.child = reconcileChildFibers(fiber, fiber.memoizedState.element)
      return fiber.child
    case HostText:
      return null
    case FunctionComponent:
      const children = renderWithHooks(fiber, fiber.type)
      fiber.child = reconcileChildFibers(fiber, children)
      return fiber.child
    case HostComponent:
      fiber.child = reconcileChildFibers(fiber, fiber.pendingProps.children)
      return fiber.child
    default:
      return null
  }
}

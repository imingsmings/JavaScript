import { FiberNode, FunctionComponent, HostComponent, HostText } from './ReactInternalTypes'
import { reconcileChildFibers } from './ChildFiber'
import { renderWithHooks } from './FiberHook'

export function beginWork(fiber: FiberNode): FiberNode | null {
  const childrenProps = fiber.pendingProps.children

  if (typeof childrenProps === 'string' || typeof childrenProps === 'number') {
    return null
  }

  switch (fiber.tag) {
    case HostText:
      return null
    case FunctionComponent:
      const children = renderWithHooks(fiber, fiber.type)
      fiber.child = reconcileChildFibers(fiber, children)
      return fiber.child
    case HostComponent:
      fiber.child = reconcileChildFibers(fiber, childrenProps)
      return fiber.child
    default:
      return null
  }
}

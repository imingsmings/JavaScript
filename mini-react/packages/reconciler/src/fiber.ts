import { type ReactElementType } from 'shared'
import { HostComponent, HostRoot, HostText, type FiberNode, type WorkTag } from './ReactInternalTypes'

export function createFiber(tag: WorkTag, key: string | null): FiberNode {
  return {
    tag,
    key,
    elementType: null,
    type: null,
    stateNode: null,
    return: null,
    child: null,
    sibling: null,
    ref: null,
    pendingProps: null
  }
}

export function createFiberFromTypeAndProps(type: any, props: any, key: string | null): FiberNode {
  let fiberTag: WorkTag = HostComponent
  const fiber = createFiber(fiberTag, key)
  fiber.elementType = type
  fiber.type = type
  fiber.pendingProps = props
  return fiber
}

export function createFiberFromElement(element: ReactElementType): FiberNode {
  const { type, key, props } = element
  const fiber = createFiberFromTypeAndProps(type, props, key)
  return fiber
}

export function createFiberFromText(text: string): FiberNode {
  const fiber = createFiber(HostText, null)
  fiber.pendingProps = text
  return fiber
}

export function createHostRootFiber(): FiberNode {
  const fiber = createFiber(HostRoot, null)
  return fiber
}

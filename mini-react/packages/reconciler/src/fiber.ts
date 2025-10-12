import { type ReactElementType } from 'shared'
import { HostComponent, type FiberNode, type WorkTag } from './ReactInternalTypes'

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
    ref: null
  }
}

export function createFiberFromTypeAndProps(type: any, key: string | null): FiberNode {
  let fiberTag: WorkTag = HostComponent
  const fiber = createFiber(fiberTag, key)
  fiber.elementType = type
  fiber.type = type
  return fiber
}

export function createFiberFromElement(element: ReactElementType): FiberNode {
  const { type, key } = element
  const fiber = createFiberFromTypeAndProps(type, key)
  return fiber
}

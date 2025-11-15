import { type ReactElementType } from 'shared'
import { FunctionComponent, HostComponent, HostRoot, HostText, type FiberNode, type WorkTag } from './ReactInternalTypes'
import { NoFlags } from './FiberFlags'

export function createFiber(tag: WorkTag, key: string | null, pendingProps: any): FiberNode {
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
    pendingProps,
    memoizedState: null,
    alternate: null,
    flags: NoFlags,
    deletions: null,
    index: 0,
    subtreeFlags: NoFlags
  }
}

export function createFiberFromTypeAndProps(type: any, props: any, key: string | null): FiberNode {
  const fiberTag: WorkTag = typeof type === 'function' ? FunctionComponent : HostComponent
  const fiber = createFiber(fiberTag, key, null)
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
  const fiber = createFiber(HostText, null, null)
  fiber.pendingProps = text
  return fiber
}

export function createHostRootFiber(): FiberNode {
  const fiber = createFiber(HostRoot, null, null)
  return fiber
}

export function createWorkInProgress(current: FiberNode, pendingProps: any): FiberNode {
  let workInProgress = current.alternate
  if (workInProgress === null) {
    workInProgress = createFiber(current.tag, current.key, pendingProps)
    workInProgress.type = current.type
    workInProgress.stateNode = current.stateNode
    workInProgress.alternate = current
    current.alternate = workInProgress
  } else {
    workInProgress.pendingProps = pendingProps
    workInProgress.flags = NoFlags
    workInProgress.subtreeFlags = NoFlags
  }

  workInProgress.memoizedState = current.memoizedState

  return workInProgress
}

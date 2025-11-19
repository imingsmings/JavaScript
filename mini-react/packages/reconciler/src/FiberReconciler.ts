import { ReactElementType } from 'shared'
import { createFiberRoot } from './FiberRoot'
import { createHostRootFiber } from './Fiber'
import { type FiberRootNode } from './ReactInternalTypes'
import { scheduleUpdateOnFiber } from './WorkLoop'
import { listenToAllSupportedEvents } from '../../react-dom-binding/DOMPluginEventSystem'

export function createContainer(containerInfo: HTMLElement) {
  const fiberRoot = createFiberRoot(containerInfo)
  const hostRootFiber = createHostRootFiber()
  hostRootFiber.memoizedState = { element: null }
  hostRootFiber.stateNode = fiberRoot
  fiberRoot.current = hostRootFiber
  listenToAllSupportedEvents(fiberRoot.containerInfo)
  return fiberRoot
}

export function updateContainer(element: ReactElementType, fiberRoot: FiberRootNode) {
  fiberRoot.current!.memoizedState.element = element
  scheduleUpdateOnFiber(fiberRoot)
}

import { ReactElementType } from 'shared'
import { createFiberRoot } from './FiberRoot'
import { createHostRootFiber, createFiberFromElement } from './Fiber'
import { type FiberNode } from './ReactInternalTypes'
import { workLoop } from './WorkLoop'
import { appendChild } from '../../react-dom-binding/FiberConfigDOM'
import { listenToAllSupportedEvents } from '../../react-dom-binding/DOMPluginEventSystem'

export function createContainer(containerInfo: HTMLElement) {
  const root = createFiberRoot(containerInfo)
  const hostRootFiber = createHostRootFiber()
  hostRootFiber.stateNode = root
  listenToAllSupportedEvents(root.containerInfo)
  return hostRootFiber
}

export function updateContainer(element: ReactElementType, root: FiberNode) {
  const containerFiber = createFiberFromElement(element)
  workLoop(containerFiber)
  root.child = containerFiber
  containerFiber.return = root

  appendChild(root.stateNode.containerInfo, root.child?.stateNode)
}

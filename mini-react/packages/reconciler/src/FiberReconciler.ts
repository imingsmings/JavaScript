import { ReactElementType } from 'shared'
import { createFiberRoot } from './FiberRoot'
import { createHostRootFiber, createFiberFromElement } from './Fiber'
import { FiberNode } from './ReactInternalTypes'
import { workLoop } from './WorkLoop'
import { appendChild } from './FiberConfigDOM'

export function createContainer(containerInfo: HTMLElement) {
  const root = createFiberRoot(containerInfo)
  const hostRootFiber = createHostRootFiber()
  hostRootFiber.stateNode = root
  return hostRootFiber
}

export function updateContainer(element: ReactElementType, root: FiberNode) {
  const containerFiber = createFiberFromElement(element)
  workLoop(containerFiber)
  root.child = containerFiber
  containerFiber.return = root

  appendChild(root.stateNode.containerInfo, root.child?.stateNode)
}

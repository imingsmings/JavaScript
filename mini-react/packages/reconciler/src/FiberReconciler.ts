import { createFiberRoot } from '../src/FiberRoot'
import { createHostRootFiber } from '../src/Fiber'
import { ReactElementType } from 'shared'
import { FiberNode } from '../src/ReactInternalTypes'
import { workLoop } from '../src/WorkLoop'
import { appendChild } from '../src/FiberConfigDOM'
import { createFiberFromElement } from '../src/Fiber'

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

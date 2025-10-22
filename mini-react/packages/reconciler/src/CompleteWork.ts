import { appendChild, createInstance, createTextInstance, setInitialProps, type Instance } from './FiberConfigDOM'
import { HostText, type FiberNode } from './ReactInternalTypes'

function appendAllChildren(parent: Instance, child: FiberNode | null) {
  let node: FiberNode | null = child
  while (node) {
    appendChild(parent, node.stateNode)
    node = node.sibling
  }
}

export function completeWork(fiber: FiberNode) {
  if (fiber.tag === HostText) {
    fiber.stateNode = createTextInstance(fiber.pendingProps)
  } else {
    const instance = createInstance(fiber.type)
    appendAllChildren(instance, fiber.child)
    setInitialProps(instance, fiber.pendingProps)
    fiber.stateNode = instance
  }
}

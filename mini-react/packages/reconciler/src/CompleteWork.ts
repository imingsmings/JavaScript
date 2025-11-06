import { appendChild, createInstance, createTextInstance, setInitialProps, type Instance } from '../../react-dom-binding/FiberConfigDOM'
import { FunctionComponent, HostComponent, HostText, type FiberNode } from './ReactInternalTypes'

function appendAllChildren(parent: Instance, child: FiberNode | null) {
  let node: FiberNode | null = child
  while (node) {
    const childStateNode = node.tag === FunctionComponent ? node.child!.stateNode : node.stateNode
    appendChild(parent, childStateNode)
    node = node.sibling
  }
}

export function completeWork(fiber: FiberNode) {
  switch (fiber.tag) {
    case HostText:
      fiber.stateNode = createTextInstance(fiber.pendingProps + '')
      break
    case FunctionComponent:
      break
    case HostComponent:
      const instance = createInstance(fiber.type, fiber)
      appendAllChildren(instance, fiber.child)
      setInitialProps(instance, fiber.pendingProps)
      fiber.stateNode = instance
      break
    default:
      break
  }
}

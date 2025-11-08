import { appendChild } from '../../react-dom-binding/FiberConfigDOM'
import { type FiberNode } from './ReactInternalTypes'

export function commitMutationEffects(fiber: FiberNode) {
  appendChild(fiber.stateNode.containerInfo, fiber.child?.stateNode)
}

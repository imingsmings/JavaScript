import { REACT_ELEMENT_TYPE } from 'shared'
import { FiberNode } from './ReactInternalTypes'
import { createFiberFromElement, createFiberFromText } from './Fiber'

export function reconcileChildFibers(fiber: FiberNode, children: any) {
  // multiple element
  if (Array.isArray(children)) {
    return reconcileChildrenArray(fiber, children)
  }

  // single element
  if (children.$$typeof === REACT_ELEMENT_TYPE) {
    return reconcileSingleElement(fiber, children)
  }

  return null
}

function reconcileSingleElement(returnFiber: FiberNode, children: any): FiberNode {
  const fiber = createFiberFromElement(children)
  fiber.return = returnFiber
  return fiber
}

function reconcileChildrenArray(returnFiber: FiberNode, children: any[]): FiberNode | null {
  let returnFirstChild: FiberNode | null = null
  let previousNewFiber: FiberNode | null = null

  for (let i = 0; i < children.length; i++) {
    const element = children[i]
    const newFiber = typeof element === 'string' || typeof element === 'number' ? createFiberFromText(element + '') : createFiberFromElement(element)

    newFiber.return = returnFiber

    if (previousNewFiber === null) {
      returnFirstChild = newFiber
    } else {
      previousNewFiber.sibling = newFiber
    }

    previousNewFiber = newFiber
  }

  return returnFirstChild
}

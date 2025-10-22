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

  // text node
  if (typeof children === 'string' || typeof children === 'number') {
    return null
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
    const create = typeof element === 'string' ? createFiberFromText : createFiberFromElement
    const newFiber = create(element)

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

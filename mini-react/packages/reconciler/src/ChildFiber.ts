import { REACT_ELEMENT_TYPE, ReactElementType } from 'shared'
import { FiberNode } from './ReactInternalTypes'
import { createFiberFromElement, createFiberFromText, createWorkInProgress } from './Fiber'
import { ChildDeletion, Placement } from './FiberFlags'

export function reconcileChildFibers(fiber: FiberNode, children: ReactElementType) {
  if (Array.isArray(children)) {
    return reconcileChildrenArray(fiber, children)
  }

  if (children.$$typeof === REACT_ELEMENT_TYPE) {
    return placeSingleChild(reconcileSingleElement(fiber, children))
  }

  return null
}

function placeSingleChild(newFiber: FiberNode) {
  if (newFiber.alternate === null) {
    newFiber.flags |= Placement
  }
  return newFiber
}

function deleteChild(returnFiber: FiberNode, childToDelete: FiberNode) {
  const deletions = returnFiber.deletions
  if (deletions === null) {
    returnFiber.deletions = [childToDelete]
    returnFiber.flags |= ChildDeletion
  } else {
    deletions.push(childToDelete)
  }
}

function deleteRemainingChildren(returnFiber: FiberNode, childrenToDelete: FiberNode | null) {
  let childToDelete = childrenToDelete
  while (childToDelete !== null) {
    deleteChild(returnFiber, childToDelete)
    childToDelete = childToDelete.sibling
  }
}

function reconcileSingleElement(returnFiber: FiberNode, children: ReactElementType): FiberNode {
  let child = returnFiber.alternate?.child
  while (child) {
    if (child?.key === children.key) {
      if (child?.type === children?.type) {
        // key 和 type 都相同，则可复用
        const existing = createWorkInProgress(child!, children.props)
        existing.return = returnFiber
        deleteRemainingChildren(returnFiber, child!.sibling)
        // 删除其余元素
        return existing
      } else {
        // 删除其余元素(包含自己), 后续在创建
        deleteRemainingChildren(returnFiber, child!)
        break
      }
    } else {
      // key不一样则删除当前节点，后续创建新节点
      deleteChild(returnFiber, child!)
    }
    child = child?.sibling
  }
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

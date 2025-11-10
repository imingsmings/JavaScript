import { REACT_ELEMENT_TYPE, ReactElementType } from 'shared'
import { FiberNode, HostText } from './ReactInternalTypes'
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

function reconcileSingleElement(returnFiber: FiberNode, children: ReactElementType): FiberNode {
  let child = returnFiber.alternate?.child
  while (child) {
    if (child?.key === children.key) {
      if (child?.type === children?.type) {
        // key 和 type 都相同，则可复用
        const existing = createWorkInProgress(child!, children.props)
        existing.return = returnFiber
        existing.index = 0
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

  // current树的第一个child
  let oldFiber: FiberNode | null = returnFiber.alternate?.child || null
  // 上一次插入的index
  let lastPlacedIndex = 0
  // 新的index
  let newIndex = 0

  // 第一阶段：顺序比较 A -> B -> C => [A, B, C] 位置相同，且元素相同
  for (; oldFiber !== null && newIndex < children.length; newIndex++) {
    // 判断节点是否在当前位置可以复用，可以则返回当前节点，不可以则返回 null
    const newFiber = updateSlot(returnFiber, oldFiber, children[newIndex])
    // 如果不能则跳出第一节阶段
    if (newFiber === null) {
      break
    }
    // 如果可以复用，但key相同而type不同，则删除current树上的旧节点 A -> B -> C => [A', B, C]
    if (oldFiber && newFiber.alternate === null) {
      deleteChild(returnFiber, oldFiber)
    }
    // 打标记
    lastPlacedIndex = placeChid(newFiber, lastPlacedIndex, newIndex)
    // 构建fiber链
    if (previousNewFiber === null) {
      returnFirstChild = newFiber
    } else {
      previousNewFiber.sibling = newFiber
    }
    // 移动指针
    previousNewFiber = newFiber
    oldFiber = oldFiber.sibling
  }

  // 第二阶段：快速路径处理，新旧树长度不同，但同样的位置上的元素相同
  // 1. 新树比旧树短，A -> B -> C => [A, B], 删除current树上的其余子节点
  if (newIndex === children.length) {
    deleteRemainingChildren(returnFiber, oldFiber)
    return returnFirstChild
  }
  // 2. 新树比旧树长，A -> B -> C => [A, B, C, D], 剩余的新树节点全部创建
  if (oldFiber === null) {
    for (; newIndex < children.length; newIndex++) {
      const element = children[newIndex]
      const newFiber = typeof element === 'string' || typeof element === 'number' ? createFiberFromText(element + '') : createFiberFromElement(element)
      newFiber.return = returnFiber
      lastPlacedIndex = placeChid(newFiber, lastPlacedIndex, newIndex)
      if (previousNewFiber === null) {
        returnFirstChild = newFiber
      } else {
        previousNewFiber.sibling = newFiber
      }
      previousNewFiber = newFiber
    }
  }

  // 第三阶段：Map查找，前两个阶段无法处理的情况，都在这个阶段处理，位置不同或完全不存在 A -> B -> C => [B, C, D, E]
  // 1. 将旧树上剩余的fiber转成Map
  const existingChildren = mapRemainingChildren(oldFiber!)
  // 2. 遍历剩余的新树节点，在map中查找是否可以复用，可以复用则更新，否则创建
  for (; newIndex < children.length; newIndex++) {
    // 从map获取节点
    const newFiber = updateFromMap(existingChildren, returnFiber, newIndex, children[newIndex])!
    // 如果节点是复用的，就删除map中的节点
    if (newFiber.alternate !== null) {
      existingChildren.delete(`${newFiber.key === null ? newIndex : newFiber.key}`)
    }
    // 打标记
    lastPlacedIndex = placeChid(newFiber, lastPlacedIndex, newIndex)
    // 构建fiber链
    if (previousNewFiber === null) {
      returnFirstChild = newFiber
    } else {
      previousNewFiber.sibling = newFiber
    }
    // 移动指针
    previousNewFiber = newFiber
  }

  existingChildren.forEach((child: FiberNode) => deleteChild(returnFiber, child))

  return returnFirstChild
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

function updateTextNode(returnFiber: FiberNode, oldFiber: FiberNode | null, textContent: string) {
  if (oldFiber === null || oldFiber.tag !== HostText) {
    const fiber = createFiberFromText(textContent)
    fiber.return = returnFiber
    return fiber
  }

  const existing = createWorkInProgress(oldFiber, textContent)
  existing.return = returnFiber
  return existing
}

function updateElement(returnFiber: FiberNode, oldFiber: FiberNode | null, element: any): FiberNode {
  const elementType = element.type
  if (oldFiber !== null) {
    if (oldFiber.type === elementType) {
      const existing = createWorkInProgress(oldFiber, element.props)
      existing.return = returnFiber
      return existing
    }
  }
  const fiber = createFiberFromElement(element)
  fiber.return = returnFiber
  return fiber
}

function updateSlot(returnFiber: FiberNode, oldFiber: FiberNode, newChild: any): FiberNode | null {
  // 获取旧节点的key
  const key = oldFiber.key

  // 如果新节点是文本节点
  if (typeof newChild === 'string' || typeof newChild === 'number') {
    // 如果旧节点有key，则不能进行文本节点更新
    if (key !== null) {
      return null
    }
    // 更新文本节点
    return updateTextNode(returnFiber, oldFiber, newChild + '')
  }

  if (typeof newChild === 'object' && newChild !== null) {
    switch (newChild.$$typeof) {
      case REACT_ELEMENT_TYPE:
        if (newChild.key === key) {
          return updateElement(returnFiber, oldFiber, newChild)
        }
        return null
    }
  }

  return null
}

function placeChid(newFiber: FiberNode, lastPlacedIndex: number, newIndex: number): number {
  // 更新新节点索引位置
  newFiber.index = newIndex
  // 获取旧节点
  const current = newFiber.alternate
  if (current !== null) {
    const oldIndex = current.index
    if (oldIndex < lastPlacedIndex) {
      newFiber.flags |= Placement
      return lastPlacedIndex
    }
    return oldIndex
  }

  newFiber.flags |= Placement
  return lastPlacedIndex
}

type ExistingChildrenMapType = Map<string, FiberNode>

function mapRemainingChildren(currentFirstChild: FiberNode | null): ExistingChildrenMapType {
  const existingChildren: ExistingChildrenMapType = new Map()

  let child = currentFirstChild

  while (child !== null) {
    existingChildren.set(`${child.key === null ? child.index : child.key}`, child)
    child = child.sibling
  }

  return existingChildren
}

function updateFromMap(existingChildren: ExistingChildrenMapType, returnFiber: FiberNode, newIndex: number, newChild: any): FiberNode | null {
  if (typeof newChild === 'string' || typeof newChild === 'number') {
    const matchedFiber = existingChildren.get(`${newIndex}`) || null
    return updateTextNode(returnFiber, matchedFiber, newChild as string)
  }

  if (typeof newChild === 'object' && newChild !== null) {
    switch (newChild.$$typeof) {
      case REACT_ELEMENT_TYPE:
        const matchedFiber: FiberNode | null = existingChildren.get(newChild.key === null ? newIndex : newChild.key) || null
        return updateElement(returnFiber, matchedFiber, newChild)
    }
  }

  return null
}

import { appendChild, insertBefore, Instance, removeChild, setProp, updateTextNode } from '../../react-dom-binding/FiberConfigDOM'
import { MutationMask, NoFlags, Placement, Update } from './FiberFlags'
import { FunctionComponent, HostComponent, HostRoot, HostText, type FiberNode } from './ReactInternalTypes'

let hostParent: HTMLElement | null = null
let hostParentIsContainer: boolean = false

export function commitMutationEffects(finishedWork: FiberNode) {
  commitMutationEffectsOnFiber(finishedWork)
}

function commitMutationEffectsOnFiber(finishedWork: FiberNode) {
  recursivelyTraverseMutationEffects(finishedWork)

  const flags = finishedWork.flags

  // Placement
  if ((finishedWork.flags & Placement) !== NoFlags) {
    commitHostPlacement(finishedWork)
    finishedWork.flags &= ~Placement
  }

  // Update
  switch (finishedWork.tag) {
    case FunctionComponent:
      break
    case HostRoot:
      break
    case HostComponent:
      if ((flags & Update) !== NoFlags) {
        const dom: Instance = finishedWork.stateNode
        if (!!dom) {
          const newProps = finishedWork.pendingProps
          const oldProps = finishedWork.alternate?.pendingProps
          commitHostUpdate(dom, oldProps, newProps)
        }
      }
      break
    case HostText:
      if ((flags & Update) !== NoFlags) {
        const newText = finishedWork.pendingProps
        commitTextUpdate(finishedWork.stateNode, newText)
      }
      break
    default:
      break
  }
}

function recursivelyTraverseMutationEffects(finishedWork: FiberNode) {
  // 删除子节点
  const deletions = finishedWork.deletions
  if (deletions !== null) {
    for (let i = 0; i < deletions.length; i++) {
      commitDeletionEffects(finishedWork, deletions[i])
    }
  }

  // 递归遍历子树
  if ((finishedWork.subtreeFlags & MutationMask) !== NoFlags) {
    let child = finishedWork.child
    while (child !== null) {
      commitMutationEffectsOnFiber(child)
      child = child.sibling
    }
  }
}

/**
 * Update
 */
function commitHostUpdate(dom: Instance, oldProps: any, newProps: any) {
  // 删除不存在的旧属性
  for (const oldKey in oldProps) {
    const oldValue = oldProps[oldKey]
    if (Object.hasOwn(oldProps, oldKey) && oldValue !== null && !Object.hasOwn(newProps, oldKey)) {
      setProp(dom, oldKey, null)
    }
  }

  for (const newKey in newProps) {
    const newValue = newProps[newKey]
    const oldValue = oldProps[newKey]
    if (Object.hasOwn(newProps, newKey) && newValue !== oldValue && newValue !== null) {
      setProp(dom, newKey, newValue)
    }
  }
}

function commitTextUpdate(dom: Instance, newText: string) {
  updateTextNode(dom, newText)
}

/**
 * Placement
 * 一个节点的位置由父节点和兄弟节点共同决定
 */
function commitHostPlacement(finishedWork: FiberNode) {
  const parentFiber = getHostParentFiber(finishedWork)!
  const before = getHostSibling(finishedWork)

  switch (parentFiber.tag) {
    case HostComponent:
      {
        const parent = parentFiber.stateNode
        insertOrAppendPlacementNode(finishedWork, parent, before)
      }
      break
    case HostRoot: {
      const parent = parentFiber.stateNode.containerInfo
      insertOrAppendPlacementNodeIntoContainer(finishedWork, parent, before)
    }
  }
}

function getHostParentFiber(finishedWork: FiberNode) {
  let parent = finishedWork.return
  while (parent !== null) {
    if (isHostParent(parent)) {
      return parent
    }
    parent = parent.return
  }
  return null
}

function getHostSibling(fiber: FiberNode) {
  let node: FiberNode = fiber
  sibling: while (node !== null) {
    // 1. 没有兄弟节点
    while (node.sibling === null) {
      // 如果是宿主节点则直接返回 null 表示直接append
      if (isHostParent(node.return!)) {
        return null
      }
      // 如果不是宿主节点，则继续向上找父节点
      node = node.return!
    }
    // 2. 有兄弟节点, 根据兄弟节点本身的flag和本身的类型去寻找
    node = node.sibling
    while (node.tag !== HostComponent && node.tag !== HostText) {
      // 兄弟节点不稳定，则跳过
      if ((node.flags & Placement) !== NoFlags) {
        continue sibling
      }
      // 兄弟节点稳定，判断有没有子节点
      if (node.child === null) {
        continue sibling
      } else {
        node = node.child
      }
    }
    if ((node!.flags & Placement) === NoFlags) {
      return node!.stateNode
    }
  }
}

function insertOrAppendPlacementNode(node: FiberNode, parent: Instance, before: Instance | null) {
  const isHost = node.tag === HostComponent || node.tag === HostText

  // 如果是宿主节点，则直接执行DOM操作
  if (isHost === true) {
    const stateNode = node.stateNode
    before ? insertBefore(parent, stateNode, before) : appendChild(parent, stateNode)
    return
  }

  const child = node.child

  if (child !== null) {
    insertOrAppendPlacementNode(child, parent, before)
    let sibling = child.sibling
    if (sibling !== null) {
      insertOrAppendPlacementNode(sibling, parent, before)
      sibling = sibling.sibling
    }
  }
}

function insertOrAppendPlacementNodeIntoContainer(node: FiberNode, parent: Instance, before: Instance | null) {
  const isHost = node.tag === HostComponent || node.tag === HostText

  // 如果是宿主节点，则直接执行DOM操作
  if (isHost === true) {
    const stateNode = node.stateNode
    before ? insertInContainerBefore(parent, stateNode, before) : appendChildToContainer(parent, stateNode)
    return
  }

  const child = node.child
  if (child !== null) {
    insertOrAppendPlacementNodeIntoContainer(child, parent, before)
    let sibling = child.sibling
    if (sibling !== null) {
      insertOrAppendPlacementNodeIntoContainer(sibling, parent, before)
      sibling = sibling.sibling
    }
  }
}

function isHostParent(parent: FiberNode) {
  return parent.tag === HostComponent || parent.tag === HostRoot
}

function insertInContainerBefore(parent: HTMLElement, child: HTMLElement, before: HTMLElement) {
  if (parent.nodeName === 'HTML') {
    insertBefore(parent.ownerDocument.body, child, before)
  } else {
    insertBefore(parent, child, before)
  }
}

function appendChildToContainer(parent: HTMLElement, child: HTMLElement) {
  if (parent.nodeName === 'HTML') {
    appendChild(parent.ownerDocument.body, child)
  } else {
    appendChild(parent, child)
  }
}

/**
 * Deletion
 */
function commitDeletionEffects(finishedWork: FiberNode, deletedFiber: FiberNode) {
  let parent: FiberNode | null = finishedWork

  findParent: while (parent !== null) {
    switch (parent.tag) {
      case HostComponent:
        hostParent = parent.stateNode
        hostParentIsContainer = false
        break findParent
      case HostRoot:
        hostParent = parent.stateNode.containerInfo
        hostParentIsContainer = true
        break findParent
      default:
        break
    }
    parent = parent.return
  }

  // 对节点处理删除标记
  commitDeletionEffectsOnFiber(deletedFiber)

  // 重置全局变量
  hostParent = null
  hostParentIsContainer = false

  // 断开return
  detachFiberMutation(deletedFiber)
}

function commitDeletionEffectsOnFiber(deletedFiber: FiberNode) {
  switch (deletedFiber.tag) {
    case HostRoot:
      recursivelyTraverseDeletionEffects(deletedFiber)
      return
    case FunctionComponent:
      recursivelyTraverseDeletionEffects(deletedFiber)
      return
    case HostComponent:
      const previousHostParent = hostParent
      hostParent = null
      recursivelyTraverseDeletionEffects(deletedFiber)
      hostParent = previousHostParent
      if (hostParent !== null) {
        if (hostParentIsContainer === true) {
          commitHostRemoveChildFromContainer(deletedFiber)
        } else {
          commitHostRemoveChild(deletedFiber)
        }
      }
      return
    case HostText:
      if (hostParentIsContainer === true) {
        commitHostRemoveChildFromContainer(deletedFiber)
      } else {
        commitHostRemoveChild(deletedFiber)
      }
  }
}

function recursivelyTraverseDeletionEffects(deletedFiber: FiberNode) {
  let child = deletedFiber.child
  while (child !== null) {
    commitDeletionEffectsOnFiber(child)
    child = child.sibling
  }
}

function detachFiberMutation(deletedFiber: FiberNode) {
  deletedFiber.return = null
  if (deletedFiber.alternate !== null) {
    deletedFiber.alternate.return = null
  }
}

function commitHostRemoveChildFromContainer(deletedFiber: FiberNode) {
  let parent = null
  if (hostParent!.nodeName === 'HTML') {
    parent = hostParent!.ownerDocument.body
  } else {
    parent = hostParent
  }
  removeChild(parent!, deletedFiber.stateNode)
}

function commitHostRemoveChild(deletedFiber: FiberNode) {
  removeChild(hostParent!, deletedFiber.stateNode)
}

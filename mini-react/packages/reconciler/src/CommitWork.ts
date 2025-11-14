import { removeChild } from '../../react-dom-binding/FiberConfigDOM'
import { MutationMask, NoFlags } from './FiberFlags'
import { FunctionComponent, HostComponent, HostRoot, HostText, type FiberNode } from './ReactInternalTypes'

let hostParent: HTMLElement | null = null
let hostParentIsContainer: boolean = false

export function commitMutationEffects(finishedWork: FiberNode) {
  commitMutationEffectsOnFiber(finishedWork)
}

function commitMutationEffectsOnFiber(finishedWork: FiberNode) {
  recursivelyTraverseMutationEffects(finishedWork)
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

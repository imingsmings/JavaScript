import { appendChild, createInstance, createTextInstance, setInitialProps, type Instance } from '../../react-dom-binding/FiberConfigDOM'
import { NoFlags, Update } from './FiberFlags'
import { FunctionComponent, HostComponent, HostRoot, HostText, type FiberNode } from './ReactInternalTypes'

export function completeWork(workInProgress: FiberNode) {
  const current = workInProgress.alternate

  const oldProps = current?.pendingProps || null
  const newProps = workInProgress.pendingProps

  switch (workInProgress.tag) {
    case HostRoot:
    case FunctionComponent:
      bubbleProperties(workInProgress)
      break
    case HostComponent:
      if (current && workInProgress.stateNode !== null) {
        updateHostComponent(workInProgress, oldProps, newProps)
      } else {
        const instance = createInstance(workInProgress.type, workInProgress)
        appendAllChildren(instance, workInProgress.child)
        setInitialProps(instance, workInProgress.pendingProps)
        workInProgress.stateNode = instance
      }
      bubbleProperties(workInProgress)
      break
    case HostText:
      if (current && workInProgress.stateNode !== null) {
        updateHostText(workInProgress, oldProps, newProps)
      } else {
        workInProgress.stateNode = createTextInstance(workInProgress.pendingProps + '')
      }
      bubbleProperties(workInProgress)
      break
    default:
      break
  }
}

function appendAllChildren(parent: Instance, child: FiberNode | null) {
  let node: FiberNode | null = child
  while (node) {
    const childStateNode = node.tag === FunctionComponent ? node.child!.stateNode : node.stateNode
    appendChild(parent, childStateNode)
    node = node.sibling
  }
}

function updateHostComponent(workInProgress: FiberNode, oldProps: any, newProps: any) {
  if (oldProps !== newProps) {
    makeUpdate(workInProgress)
  }
}

function updateHostText(workInProgress: FiberNode, oldText: string, newText: string) {
  if (oldText !== newText) {
    makeUpdate(workInProgress)
  }
}

function makeUpdate(workInProgress: FiberNode) {
  workInProgress.flags |= Update
}

function bubbleProperties(workInProgress: FiberNode) {
  const didBailout = workInProgress.alternate !== null && workInProgress.alternate.child === workInProgress.child

  let subtreeFlags = NoFlags

  if (!didBailout) {
    let child = workInProgress.child
    while (child !== null) {
      subtreeFlags |= child.flags
      subtreeFlags |= child.subtreeFlags
      child = child.sibling
    }
    workInProgress.subtreeFlags = subtreeFlags
  }
}

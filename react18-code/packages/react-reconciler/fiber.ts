import type { Props, Key, Ref, ElementType } from 'shared/ReactTypes'
import type { WorkTag } from './workTags'
import type { Flags } from './fiberFlags'
import { NoFlags } from './fiberFlags'
import type { Container } from './hostConfig'

export class FiberNode {
    type: ElementType

    tag: WorkTag

    key: Key

    // DOM节点
    stateNode: any

    ref: Ref

    return: FiberNode | null

    sibling: FiberNode | null

    child: FiberNode | null

    index: number

    // 正在工作中的单元
    pendingProps: Props

    // 确定之后的工作单元
    memoizeProps: Props | null

    // 更新完的状态
    memoizeState: any

    // 衔接上一次的工作单元
    alternate: FiberNode | null

    flags: Flags

    // 更新队列
    updateQueue: unknown

    constructor(tag: WorkTag, pendingProps: Props, key: Key) {
        this.tag = tag
        this.key = key
        this.stateNode = null
        this.type = null
        this.return = null
        this.sibling = null
        this.child = null
        this.index = 0
        this.ref = null
        this.pendingProps = pendingProps
        this.memoizeProps = null
        this.memoizeState = null
        this.updateQueue = null
        this.alternate = null
        this.flags = NoFlags
    }
}

export class FiberRootNode {
    container: Container

    current: FiberNode

    finishedWork: FiberNode | null

    constructor(container: Container, hostRootFiber: FiberNode) {
        this.container = container
        this.current = hostRootFiber
        hostRootFiber.stateNode = this
        this.finishedWork = null
    }
}

export function createWorkInProgress(current: FiberNode, pendingProps: Props): FiberNode {
    let wip = current.alternate

    if (wip === null) {
        wip = new FiberNode(current.tag, pendingProps, current.key)
        wip.stateNode = current.stateNode
        wip.alternate = current
        current.alternate = wip
    } else {
        wip.pendingProps = pendingProps
        wip.flags = NoFlags
    }

    wip.type = current.type
    wip.updateQueue = current.updateQueue
    wip.child = current.child
    wip.memoizeProps = current.memoizeProps
    wip.memoizeState = current.memoizeState

    return wip
}

import { beginWork } from './beginWork'
import { completeWork } from './completeWork'
import { createWorkInProgress, FiberNode, FiberRootNode } from './fiber'
import { HostRoot } from './workTags'

// 正在工作中的树
let workInProgress: FiberNode | null = null

function prepareFreshStack(root: FiberRootNode) {
    // workInProgress = fiber
    workInProgress = createWorkInProgress(root.current, {})
}

function renderRoot(root: FiberRootNode | null) {
    if (root === null) return

    prepareFreshStack(root)

    do {
        try {
            workLoop()
            break
        } catch (e) {
            workInProgress = null
        }
    } while (true)
}

function workLoop() {
    while (workInProgress !== null) {
        preformUnitOfWork(workInProgress)
    }
}

function preformUnitOfWork(fiber: FiberNode) {
    // 子节点
    const next = beginWork(fiber)

    fiber.memoizeProps = fiber.pendingProps

    if (next === null) {
        completeUnitOfWork(fiber)
    } else {
        workInProgress = next
    }
}

function completeUnitOfWork(fiber: FiberNode) {
    // 兄弟节点
    let node: FiberNode | null = fiber
    do {
        completeWork(node)
        const sibling = node.sibling
        if (sibling !== null) {
            workInProgress = sibling
            return
        }
        node = node?.return
        workInProgress = node
    } while (node !== null)
}

export function scheduleUpdateOnFiber(fiber: FiberNode) {
    const root = markUpdateFromFiberToRoot(fiber)
    renderRoot(root)
}

function markUpdateFromFiberToRoot(fiber: FiberNode): FiberRootNode | null {
    let node = fiber
    let parent = node.return

    while (parent !== null) {
        node = parent
        parent = node.return
    }

    if (node.tag === HostRoot) {
        return node.stateNode
    }

    return null
}

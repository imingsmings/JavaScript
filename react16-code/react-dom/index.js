import {
    createNode,
    getEventName,
    isEvent,
    isGoneProperty,
    isNewProperty,
    isProperty
} from '../shared/index.js'

// 下一个工作单元,即要处理的fiber节点
let nextUnitOfWork = null
// 正在工作的fiber树, 内存中的树 用于双缓存
let wipRoot = null
// 更新前的根节点fiber树
let currentRoot = null
// 需要移除的节点
let deletions = []

let wipFiber = null
let hookIndex = 0

function render(element, contianer) {
    // 初始化 nextUnitOfWork
    wipRoot = {
        dom: contianer,
        props: {
            children: [element]
        },
        alternate: currentRoot
    }
    nextUnitOfWork = wipRoot
}

// 协调子元素
function reconcileChildren(wipFiber, elements) {
    let index = 0
    let prevSibling = null
    // 上一次渲染的 fiber, 初次渲染 为 null 或 undefined
    let oldFiber = wipFiber.alternate && wipFiber.alternate.child

    while (index < elements.length || oldFiber != null) {
        const element = elements[index]
        let newFiber = null

        // 节点类型是否相同
        const sameType = oldFiber && element && element.type === oldFiber.type

        // 若类型相同则只更新 props
        if (sameType) {
            newFiber = {
                type: element.type,
                props: element.props,
                dom: oldFiber.dom,
                parent: wipFiber,
                alternate: oldFiber,
                effectTag: 'UPDATE'
            }
        }

        // 若新的存在并且类型和老的不同需要新增
        if (element && !sameType) {
            newFiber = {
                type: element.type,
                props: element.props,
                dom: null,
                parent: wipFiber,
                alternate: null,
                effectTag: 'PLACEMENT'
            }
        }

        // 若老的存在并且类型和新的不同需要移除
        if (oldFiber && !sameType) {
            oldFiber.effectTag = 'DELETION'
            deletions.push(oldFiber)
        }

        if (oldFiber) {
            oldFiber = oldFiber.sibling
        }

        // 将第一个子元素作为当前节点的子节点
        if (index === 0) {
            wipFiber.child = newFiber
        }
        // 其他子元素作为第一个子元素的兄弟节点
        else {
            prevSibling.sibling = newFiber
        }

        // 保存上一个节点
        prevSibling = newFiber
        index++
    }
}

// 提交任务，将fiber tree 渲染为真实 DOM
function commitRoot() {
    deletions.forEach(commitWork)
    commitWork(wipRoot.child)
    currentRoot = wipRoot
    wipRoot = null
}

// 处理提交的fiber树， 渲染真实DOM
function commitWork(fiber) {
    if (!fiber) {
        return
    }

    // let parentDom = fiber.parent.dom
    // parentDom.appendChild(fiber.dom)

    let parentFiber = fiber.parent
    while (!parentFiber.dom) {
        parentFiber = parentFiber.parent
    }

    const parentDOM = parentFiber.dom

    // 新增
    if (fiber.effectTag === 'PLACEMENT' && fiber.dom != null) {
        commitAppend(fiber, parentDOM)
    }
    // 删除
    else if (fiber.effectTag === 'DELETION') {
        commitDeletion(fiber, parentDOM)
    }
    // 更新
    else if (fiber.effectTag === 'UPDATE' && fiber.dom != null) {
        commitUpdate(fiber)
    }

    // 渲染子节点
    commitWork(fiber.child)
    // 渲染兄弟节点
    commitWork(fiber.sibling)
}

function commitAppend(fiber, parentDOM) {
    if (fiber.dom) {
        parentDOM.appendChild(fiber.dom)
    }
}

function commitDeletion(fiber, parentDOM) {
    if (fiber.dom) {
        parentDOM.removeChild(fiber.dom)
    } else {
        commitDeletion(fiber.child, parentDOM)
    }
}

function commitUpdate(fiber) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props)
}

function updateDom(dom, prevProps, nextProps) {
    // 移除旧的事件监听
    Object.keys(prevProps)
        .filter(isEvent)
        .filter(isGoneProperty(prevProps, nextProps) || isNewProperty(prevProps, nextProps)(key))
        .forEach((name) => {
            const eventName = name.toLowerCase().slice(2)
            dom.addEventListener(eventName, prevProps[name])
        })

    // 移除旧的属性
    Object.keys(prevProps)
        .filter(isProperty)
        .filter(isGoneProperty(prevProps, nextProps))
        .forEach((name) => {
            dom[name] = ''
        })

    // 设置新的属性
    Object.keys(nextProps)
        .filter(isProperty)
        .filter(isNewProperty(prevProps, nextProps))
        .forEach((name) => {
            dom[name] = nextProps[name]
        })

    // 添加新的事件处理
    Object.keys(nextProps)
        .filter(isEvent)
        .filter(isNewProperty(prevProps, nextProps))
        .forEach((name) => {
            const eventName = name.toLowerCase().slice(2)
            dom.addEventListener(eventName, nextProps[name])
        })
}

function createDom(fiber) {
    const dom = createNode(fiber.type)

    Object.keys(fiber.props)
        .filter(isProperty)
        .forEach((prop) => {
            dom[prop] = fiber.props[prop]
        })

    Object.keys(fiber.props)
        .filter((prop) => isEvent(prop, fiber.props[prop]))
        .forEach((prop) => {
            dom.addEventListener(getEventName(prop), fiber.props[prop])
        })

    return dom
}

function updateFunctionComponent(fiber) {
    wipFiber = fiber
    // 重置索引
    hookIndex = 0
    // 挂载 hooks
    wipFiber.hooks = []

    // 将函数执行后的结果作为children
    const children = [fiber.type(fiber.props)]

    // 协调渲染子子节点
    reconcileChildren(fiber, children)
}

function updateHostComponent(fiber) {
    // 如果没有真实DOM则创建
    if (!fiber.dom) {
        fiber.dom = createDom(fiber)
    }

    // 遍历当前节点的子元素依次创建 fiber 结构
    let elements = fiber.props.children
    // 协调子元素
    reconcileChildren(fiber, elements)
}

function useState(initialValue) {
    const oldHook =
        wipFiber.alternate && wipFiber.alternate.hooks && wipFiber.alternate.hooks[hookIndex]

    const hook = {
        state: oldHook ? oldHook.state : initialValue,
        queue: []
    }

    const actions = oldHook ? oldHook.queue : []
    actions.forEach((action) => {
        hook.state = typeof action === 'function' ? action(hook.state) : action
    })

    const setState = (action) => {
        hook.queue.push(action)
        wipRoot = {
            dom: currentRoot.dom,
            props: currentRoot.props,
            alternate: currentRoot
        }
        nextUnitOfWork = wipRoot
        deletions = []
    }

    wipFiber.hooks.push(hook)

    hookIndex++
    return [hook.state, setState]
}

// 处理当前工作单元，并返回下一个工作单元
function performNextUnitOfWork(fiber) {
    const isFunctionComponent = fiber.type instanceof Function

    if (isFunctionComponent) {
        // 函数组件
        updateFunctionComponent(fiber)
    } else {
        // 普通节点
        updateHostComponent(fiber)
    }

    // 查找并返回下一个 fiber
    // 如果有子节点则将其作为下一个工作单元
    if (fiber.child) {
        return fiber.child
    }

    let nextFiber = fiber
    while (nextFiber) {
        // 如果有兄弟节点 则将作为下一个工作单元
        if (nextFiber.sibling) {
            return nextFiber.sibling
        }

        // 如果没有兄弟节点 则返回其parent
        nextFiber = nextFiber.parent
    }
}

// 渲染工作循环
function workloop(deadline) {
    let shouldYield = true
    // 如果有下一个工作单元则继续
    while (nextUnitOfWork && shouldYield) {
        nextUnitOfWork = performNextUnitOfWork(nextUnitOfWork)
        shouldYield = deadline.timeRemaining() > 1
    }

    if (!nextUnitOfWork && wipRoot) {
        commitRoot()
    }

    requestIdleCallback(workloop)
}

// 利用浏览器空闲时间渲染，不阻塞界面交互
requestIdleCallback(workloop)

export { useState }

export default {
    render
}

import { createNode, getEventName, isEvent, isProperty } from '../shared/index.js'

// 下一个工作单元,即要处理的fiber节点
let nextUnitOfWork = null
// 正在工作的fiber树, 内存中的树 用于双缓存
let wipRoot = null

function render(element, contianer) {
    // 初始化 nextUnitOfWork
    wipRoot = {
        dom: contianer,
        props: {
            children: [element]
        }
    }
    nextUnitOfWork = wipRoot
}

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

function commitRoot() {
    commitWork(wipRoot.child)
    wipRoot = null
}

function commitWork(fiber) {
    if (!fiber) {
        return
    }

    let dompParentFiber = fiber.parent
    while (!dompParentFiber.dom) {
        dompParentFiber = dompParentFiber.parent
    }
    dompParentFiber.dom.appendChild(fiber.dom)
    // let parentDom = fiber.parent.dom
    // parentDom.appendChild(fiber.dom)

    commitWork(fiber.child)
    commitWork(fiber.sibling)
}

// 处理当前工作单元，并返回下一个工作单元
function performNextUnitOfWork(fiber) {
    // 如果没有真实DOM则创建
    if (!fiber.dom) {
        fiber.dom = createDom(fiber)
    }

    // 找到当前节点的父节点
    // if (fiber.parent) {
    //     fiber.parent.dom.appendChild(fiber.dom)
    // }

    // 遍历当前节点的子元素依次创建 fiber node 结构
    let index = 0
    let elements = fiber.props.children
    let prevSibling = null
    while (index < elements.length) {
        const element = elements[index]
        // 创建 fiber node
        const newFiber = {
            type: element.type,
            props: element.props,
            parent: fiber,
            dom: null
        }
        // 将第一个子元素作为当前节点的子节点
        if (index === 0) {
            fiber.child = newFiber
        }
        // 其他子元素作为第一个子元素的兄弟节点
        else {
            prevSibling.sibling = newFiber
        }

        // 保存上一个节点
        prevSibling = newFiber
        index++
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

// 利用浏览器空闲时间渲染，不阻塞界面交互
requestIdleCallback(workloop)

function createDom(fiber) {
    const dom = createNode(fiber.type)

    Object.keys(fiber.props)
        .filter(isProperty)
        .forEach((prop) => {
            const propValue = fiber.props[prop]
            if (isEvent(prop, propValue)) {
                dom.addEventListener(getEventName(prop), propValue)
            } else {
                dom[prop] = propValue
            }
        })

    return dom
}

// function render(element, contianer) {
//     const dom = createDOM(element.type)

//     Object.keys(element.props)
//         .filter(isProperty)
//         .forEach((prop) => {
//             const propValue = element.props[prop]
//             if (isEvent(prop, propValue)) {
//                 dom.addEventListener(
//                     getEventName(prop),
//                     propValue
//                 )
//             } else {
//                 dom[prop] = propValue
//             }
//         })

//     不可中断渲染,性能差
//     element.props.children.forEach((child) => {
//         render(child, dom)
//     })

//     contianer.appendChild(dom)
// }

export default {
    render
}

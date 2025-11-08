import { MULTIPLE_ELEMENTS } from './data'
import { createContainer, updateContainer } from '../src/FiberReconciler'

describe('WorkLoop', () => {
  test('测试Fiber构建', () => {
    const rootDOM = document.createElement('div')
    const fiberRoot = createContainer(rootDOM)
    updateContainer(MULTIPLE_ELEMENTS, fiberRoot)
    const containerFiber = fiberRoot.current?.child
    // 测试根节点
    expect(containerFiber!.tag).toBe(5)
    expect(containerFiber!.stateNode).not.toBeNull()
    expect(containerFiber!.stateNode?.tagName).toBe('DIV')
    expect(containerFiber!.stateNode?.childNodes.length).toBe(2)
    // 测试h1节点
    expect(containerFiber!.child).not.toBeNull()
    expect(containerFiber!.child?.tag).toBe(5)
    expect(containerFiber!.child?.child).toBeNull()
    expect(containerFiber!.child?.stateNode).not.toBeNull()
    expect(containerFiber!.child?.stateNode?.tagName).toBe('H1')
    expect(containerFiber!.child?.stateNode?.textContent).toBe('Hello,my react!!!')
    // 测试p节点
    expect(containerFiber!.child?.sibling).not.toBeNull()
    expect(containerFiber!.child?.sibling?.tag).toBe(5)
    expect(containerFiber!.child?.sibling?.stateNode?.tagName).toBe('P')
    expect(containerFiber!.child?.sibling?.stateNode?.childNodes.length).toBe(2)
    // 测试p节点中的第一个子节点
    expect(containerFiber!.child?.sibling?.child).not.toBeNull()
    expect(containerFiber!.child?.sibling?.child?.tag).toBe(6)
    expect(containerFiber!.child?.sibling?.child?.stateNode?.tagName).toBeUndefined()
    expect(containerFiber!.child?.sibling?.child?.stateNode?.textContent).toBe('123')
    // 测试p节点中的第二个子节点
    expect(containerFiber!.child?.sibling?.child?.sibling).not.toBeNull()
    expect(containerFiber!.child?.sibling?.child?.sibling?.tag).toBe(5)
    expect(containerFiber!.child?.sibling?.child?.sibling?.stateNode?.tagName).toBe('SPAN')
    expect(containerFiber!.child?.sibling?.child?.sibling?.stateNode?.textContent).toBe('span text')
  })
})

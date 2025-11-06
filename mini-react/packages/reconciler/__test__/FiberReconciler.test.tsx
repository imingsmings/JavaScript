import { createContainer, updateContainer } from '../src/FiberReconciler'
import { FunctionComponent, HostComponent } from '../src/ReactInternalTypes'
import { MULTIPLE_ELEMENTS } from './data'
import { TestState, App2 } from './FCData'

describe('FiberReconciler', () => {
  test('测试创建容器', () => {
    const root_dom = document.createElement('div')
    const container = createContainer(root_dom)
    expect(container.stateNode).not.toBeNull()
    expect(container.tag).toBe(3)
    expect(container.stateNode?.containerInfo).toBe(root_dom)
  })
  test('测试更新容器', () => {
    const root_dom = document.createElement('div')
    const hostRootFiber = createContainer(root_dom)
    updateContainer(MULTIPLE_ELEMENTS, hostRootFiber)
    expect(hostRootFiber.child?.tag).toBe(5)
    expect(hostRootFiber.child?.type).toBe('div')
    expect(hostRootFiber.child?.stateNode?.tagName).toBe('DIV')
    expect(hostRootFiber.child?.stateNode?.childNodes.length).toBe(2)
    expect(hostRootFiber.stateNode?.containerInfo.childNodes.length).toBe(1)
  })
  test('测试函数组件State Hook的创建', () => {
    const root_dom = document.createElement('div')
    const hostRootFiber = createContainer(root_dom)
    updateContainer(
      <div>
        <TestState />
      </div>,
      hostRootFiber
    )
    expect(hostRootFiber.child?.tag).toBe(HostComponent)
    expect(hostRootFiber.child?.child?.tag).toBe(FunctionComponent)
    expect(hostRootFiber.child?.child?.memoizedState).not.toBeNull()
    expect(hostRootFiber.child?.child?.memoizedState.memoizedState).toBe(0)
    expect(hostRootFiber.child?.child?.child?.pendingProps.children).toBe(0)
  })

  test('测试函数组件State Hook创建', async () => {
    jest.useRealTimers()
    const root_dom = document.createElement('div')
    const hostRootFiber = createContainer(root_dom)
    updateContainer(
      <p>
        <App2 />
      </p>,
      hostRootFiber
    )
    expect(hostRootFiber.child?.tag).toBe(HostComponent)
    expect(hostRootFiber.child?.child?.tag).toBe(FunctionComponent)
    expect(hostRootFiber.child?.child?.memoizedState).not.toBeNull()
    expect(hostRootFiber.child?.child?.memoizedState.memoizedState).toBe(0)
    expect(hostRootFiber.child?.child?.child?.pendingProps.children).toBe(0)
    // 等待足够的时间让 setTimeout 执行
    await new Promise((resolve) => setTimeout(resolve, 1100)) // 多等100ms确保执行
  })
})

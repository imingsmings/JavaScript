import { createContainer, updateContainer } from '../src/FiberReconciler'
import { FunctionComponent, HostComponent, HostRoot } from '../src/ReactInternalTypes'
import { MULTIPLE_ELEMENTS } from './data'
import { TestState, App2 } from './FCData'

describe('FiberReconciler', () => {
  test('测试创建容器', () => {
    const rootDOM = document.createElement('div')
    const fiberRoot = createContainer(rootDOM)

    expect(fiberRoot.containerInfo).toBe(rootDOM)
    expect(fiberRoot.current).not.toBeNull()
  })
  test('测试更新容器', () => {
    const rootDOM = document.createElement('div')
    const fiberRoot = createContainer(rootDOM)
    updateContainer(MULTIPLE_ELEMENTS, fiberRoot)
    const current = fiberRoot.current

    expect(current).not.toBeNull()
    expect(current?.tag).toBe(HostRoot)
    expect(current?.child?.tag).toBe(5)
    expect(current?.child?.type).toBe('div')
    expect(current?.child?.stateNode?.tagName).toBe('DIV')
    expect(current?.child?.stateNode?.childNodes.length).toBe(2)
    expect(current?.stateNode?.containerInfo.childNodes.length).toBe(1)
  })
  test('测试函数组件State Hook的创建', () => {
    const rootDOM = document.createElement('div')
    const fiberRoot = createContainer(rootDOM)
    updateContainer(
      <div>
        <TestState />
      </div>,
      fiberRoot
    )
    const current = fiberRoot.current
    expect(current?.child?.tag).toBe(HostComponent)
    expect(current?.child?.child?.tag).toBe(FunctionComponent)
    expect(current?.child?.child?.memoizedState).not.toBeNull()
    expect(current?.child?.child?.memoizedState.memoizedState).toBe(0)
    expect(current?.child?.child?.child?.pendingProps.children).toBe(0)
  })

  test('测试函数组件State Hook创建', async () => {
    jest.useRealTimers()
    const rootDOM = document.createElement('div')
    const fiberRoot = createContainer(rootDOM)
    updateContainer(
      <p>
        <App2 />
      </p>,
      fiberRoot
    )
    const current = fiberRoot.current
    expect(current?.child?.tag).toBe(HostComponent)
    expect(current?.child?.child?.tag).toBe(FunctionComponent)
    expect(current?.child?.child?.memoizedState).not.toBeNull()
    expect(current?.child?.child?.memoizedState.memoizedState).toBe(0)
    expect(current?.child?.child?.child?.pendingProps.children).toBe(0)
    // 等待足够的时间让 setTimeout 执行
    await new Promise((resolve) => setTimeout(resolve, 1100)) // 多等100ms确保执行
  })
})

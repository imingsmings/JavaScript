import { HostComponent } from '../src/ReactInternalTypes'
import { createFiber, createFiberFromElement, createFiberFromTypeAndProps } from '../src/Fiber'
import { ReactElementType } from 'shared'
import { jsx } from 'react/jsx-runtime'
import { NoFlags } from '../src/FiberFlags'

describe('Fiber testing', () => {
  test('createFiber with key', () => {
    const type = HostComponent
    const key = 'testkey'
    const fiber = createFiber(type, key, null)
    expect(fiber).toEqual({
      tag: HostComponent,
      key,
      elementType: null,
      type: null,
      stateNode: null,
      return: null,
      child: null,
      sibling: null,
      ref: null,
      pendingProps: null,
      memoizedState: null,
      alternate: null,
      flags: NoFlags,
      deletions: null,
      index: 0
    })
  })

  test('createFiber without key', () => {
    const type = HostComponent
    const fiber = createFiber(type, null, null)
    expect(fiber.key).toBeNull()
  })

  test('createFiberFromElement', () => {
    const element: ReactElementType = jsx('div', { children: 'hello' }, 'testkey')
    const fiber = createFiberFromElement(element)
    expect(fiber.tag).toBe(HostComponent)
    expect(fiber.elementType).toBe('div')
    expect(fiber.type).toBe('div')
    expect(fiber.key).toBe('testkey')
  })

  test('createFiberFromTypeAndProps', () => {
    const fiber = createFiberFromTypeAndProps('div', {}, 'testkey')
    expect(fiber.tag).toBe(HostComponent)
    expect(fiber.type).toBe('div')
    expect(fiber.key).toBe('testkey')
  })
})

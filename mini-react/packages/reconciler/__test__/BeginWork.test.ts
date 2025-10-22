import { beginWork } from '../src/BeginWork'
import { MULTIPLE_ELEMENTS, SINGLE_ELMENT } from './data'
import { createFiberFromElement } from '../src/Fiber'
import { HostComponent, HostText } from '../src/ReactInternalTypes'

describe('BeginWork', () => {
  test('Single Element', () => {
    const rootFiber = createFiberFromElement(SINGLE_ELMENT)
    const childFiber = beginWork(rootFiber)
    expect(childFiber?.type).toBe('p')
    expect(childFiber?.pendingProps).toEqual({ children: 'hello' })
  })

  test('Mixed Element', () => {
    const rootFiber = createFiberFromElement(MULTIPLE_ELEMENTS.props.children[1])
    const childFiber = beginWork(rootFiber)
    expect(childFiber?.tag).toBe(HostText)
    expect(childFiber?.type).toBeNull()
    expect(childFiber?.return).toBe(rootFiber)
    expect(childFiber?.sibling?.tag).toBe(HostComponent)
    expect(childFiber?.sibling?.type).toBe('span')
    expect(childFiber?.sibling?.return).toBe(rootFiber)
    expect(rootFiber.child).toBe(childFiber)
  })

  test('Mulitple Element', () => {
    const rootFiber = createFiberFromElement(MULTIPLE_ELEMENTS)
    const childFiber = beginWork(rootFiber)
    expect(childFiber?.type).toBe('h1')
    expect(childFiber?.child).toBeNull()
    expect(childFiber?.return).toBe(rootFiber)
    expect(childFiber?.sibling?.type).toBe('p')
    expect(childFiber?.sibling?.return).toBe(rootFiber)
  })
})

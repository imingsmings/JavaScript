import { jsx, jsxDEV } from '../src/jsx'
import { REACT_ELEMENT_TYPE } from 'shared'

describe('jsx runtime testing', () => {
  test('Normal element', () => {
    const element = jsx('div', { class: 'container', id: 'root' }, 'testkey')
    expect(element).toEqual({
      $$typeof: REACT_ELEMENT_TYPE,
      type: 'div',
      props: {
        class: 'container',
        id: 'root'
      },
      key: 'testkey',
      ref: null
    })
  })

  test('Without key', () => {
    const element = jsx('div', { children: 'hello world' })
    expect(element.$$typeof).toBe(REACT_ELEMENT_TYPE)
    expect(element.type).toBe('div')
    expect(element.key).toBeNull()
    expect(element.props).toEqual({ children: 'hello world' })
  })

  test('Props has key', () => {
    const props = { class: 'container', id: 'root', key: 'testkey' }
    const element = jsx('div', { ...props })
    expect(element.key).toBe('testkey')
    expect(element.props).toEqual({ class: 'container', id: 'root' })
  })

  test('Ref', () => {
    const ref = {}
    const element = jsxDEV('div', { ref })
    expect(element.ref).toBe(ref)
  })

  test('Without ref', () => {
    const element = jsxDEV('div', {})
    expect(element.ref).toBeNull()
  })
})

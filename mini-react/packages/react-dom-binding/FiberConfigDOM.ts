import { type FiberNode } from '../reconciler/src/ReactInternalTypes'
import { precacheFiberNode } from './ReactDOMComponentTree'

export type Instance = HTMLElement
export type TextInstance = Text

export function createTextInstance(text: string) {
  return document.createTextNode(text)
}

export function createInstance(type: string, fiber: FiberNode) {
  const instance = document.createElement(type)
  precacheFiberNode(fiber, instance)
  return instance
}

export function updateTextNode(dom: Instance, text: string) {
  dom.textContent = text
}

export function appendChild(parent: Instance, child: Instance) {
  parent.appendChild(child)
}

export function insertBefore(parent: Instance, child: Instance, before: Instance) {
  parent.insertBefore(child, before)
}

export function removeChild(parent: Instance, child: Instance) {
  parent.removeChild(child)
}

export function setInitialProps(dom: Instance, props: any) {
  for (const prop in props) {
    if (Object.hasOwn(props, prop)) {
      setProp(dom, prop, props[prop])
    }
  }
}

export function setProp(dom: Instance, prop: string, value: any) {
  const propType = getPropType(prop, value)

  switch (propType) {
    case 'children':
      if (typeof value === 'string' || typeof value === 'number') {
        updateTextNode(dom, `${value}`)
      }
      break
    case 'event':
    case 'ref':
      break
    case 'style':
      updateStyle(dom, value)
      break
    default:
      dom.setAttribute(prop, value)
  }
}

function updateStyle(dom: Instance, stylesObj: { [key: string]: string }) {
  const styles = []
  for (const attr in stylesObj) {
    if (Object.hasOwn(stylesObj, attr)) {
      styles.push(`${attr}:${stylesObj[attr]}`.replace(/[A-Z]/g, (node) => `-${node.toLowerCase()}`))
    }
  }
  dom.style.cssText = styles.join(';')
}

function getPropType(prop: string, value: any) {
  if (isEventProp(prop, value)) {
    return 'event'
  }

  return prop
}

function isEventProp(prop: string, value: any) {
  return /^on[A-Z]/.test(prop) && typeof value === 'function'
}

export const scheduleMircoTask = (() => {
  if (typeof queueMicrotask === 'function') {
    return queueMicrotask
  }

  if (typeof Promise === 'function') {
    return (callback: () => void) => Promise.resolve(callback)
  }

  return setTimeout
})()

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

export function appendChild(parent: Instance, child: Instance) {
  parent.appendChild(child)
}

export function removeChild(parent: Instance, child: Instance) {
  parent.removeChild(child)
}

export function setInitialProps(dom: Instance, props: any) {
  for (const prop in props) {
    if (!Object.hasOwn(props, prop)) {
      continue
    }
    if (prop === 'children') {
      if (typeof props.children === 'string' || typeof props.children === 'number') {
        dom.textContent = props.children + ''
      }
      continue
    }
    dom.setAttribute(prop, props[prop])
  }
}

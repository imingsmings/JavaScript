export type Instance = HTMLElement
export type TextInstance = Text

export function createTextInstance(text: string) {
  return document.createTextNode(text)
}

export function createInstance(type: string) {
  return document.createElement(type)
}

export function appendChild(parent: Instance, child: Instance) {
  parent.appendChild(child)
}

export function setInitialProps(dom: Instance, props: any) {
  for (const prop in props) {
    if (!Object.hasOwn(props, prop)) {
      continue
    }
    if (prop === 'children') {
      if (typeof props.children === 'string') {
        dom.textContent = props.children
      } else {
        continue
      }
    }
    dom.setAttribute(prop, props[prop])
  }
}

import { ReactElementType } from 'shared'

export const $$typeof = typeof Symbol === 'function' && Symbol.for ? Symbol.for('mini-react') : 'mini-react'

function ReactElement(type: any, props: any, key: any, ref: any): ReactElementType {
  return {
    $$typeof,
    type,
    props,
    key,
    ref
  }
}

export function jsx(type: any, config: any, maybeKey?: any) {
  let realkey = null
  let ref = null

  if (maybeKey !== undefined) {
    realkey = `${maybeKey}`
  }

  if (config.key !== undefined) {
    realkey = `${config.key}`
  }

  if (config.ref !== undefined) {
    ref = config.ref
  }

  const { key, ...props } = config

  return ReactElement(type, props, realkey, ref)
}

export const jsxDev = jsx

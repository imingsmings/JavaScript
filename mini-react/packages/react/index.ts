import { SimpleEffectCreate } from '../reconciler/src/EffectHook'

export const ReactSharedInternals: { [key: string]: any } = {
  H: null
}

export function useState(initialState: any) {
  return ReactSharedInternals.H.useState(initialState)
}

export function useEffect(create: SimpleEffectCreate, createDeps?: any[]) {
  ReactSharedInternals.H.useEffect(create, createDeps)
}

export function useRef(initialState: any) {
  return ReactSharedInternals.H.useRef(initialState)
}

export const version = '1.0.0'

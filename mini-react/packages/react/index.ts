import { SimpleEffectCreate } from '../reconciler/src/EffectHook'

export const ReactSharedInternals: { [key: string]: any } = {
  H: null
}

export function useState(initialState: any) {
  return ReactSharedInternals.H.useState(initialState)
}

export function useEffect(create: SimpleEffectCreate, createDeps?: any[]) {
  return ReactSharedInternals.H.useEffect(create, createDeps)
}

export const version = '1.0.0'

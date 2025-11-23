export type HookFlags = number

export const NoFlags = 0b0000
export const HasEffect = 0b0001

export type SimpleEffect = {
  tag: HookFlags
  deps: any[] | null
  create: () => () => void | void
  destroy: (() => void) | null
  next: SimpleEffect | null
}

export type SimpleEffectCreate = SimpleEffect['create']
export type FunctionComponentUpdateQueue = {
  lastEffect: SimpleEffect | null
}

export const FunctionComponent = 0
export const HostRoot = 3
export const HostComponent = 5
export const HostText = 6
export const Fragment = 7

export type WorkTag = typeof FunctionComponent | typeof HostRoot | typeof HostComponent | typeof HostText | typeof Fragment

export type FiberNode = {
  tag: WorkTag
  key: string | null
  elementType: any
  type: any
  stateNode: any
  return: FiberNode | null
  child: FiberNode | null
  sibling: FiberNode | null
  ref: any
}

import { type FiberNode } from '../reconciler/src/ReactInternalTypes'
import { type Instance } from './FiberConfigDOM'

const randomKey = Math.random().toString(36).slice(2)
// export const internalInstanceKey = `__reactFiber$${randomKey}`
export const internalInstanceKey = Symbol('ReactInternalFiber')

export function precacheFiberNode(fiber: FiberNode, instance: Instance) {
  ;(instance as any)[internalInstanceKey] = fiber
}

export function detachDeletedInstance(dom: Instance) {
  delete (dom as any)[internalInstanceKey]
}

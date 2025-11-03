import { type FiberRootNode } from './ReactInternalTypes'

export function createFiberRoot(containerInfo: HTMLElement): FiberRootNode {
  const root: FiberRootNode = {
    containerInfo
  }
  return root
}

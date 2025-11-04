import { ReactElementType } from 'shared'
import { type FiberNode } from '../reconciler/src/ReactInternalTypes'
import { createContainer, updateContainer } from '../reconciler/src/FiberReconciler'

export type ReactDOMRootType = {
  _internalRoot: FiberNode
  render: (element: ReactElementType) => void
}

function ReactDOMRoot(root: FiberNode): ReactDOMRootType {
  return {
    _internalRoot: root,
    render: function (element: ReactElementType) {
      updateContainer(element, this._internalRoot)
    }
  }
}

export function createRoot(container: HTMLElement): ReactDOMRootType {
  const hostRootFiber = createContainer(container)
  const root = ReactDOMRoot(hostRootFiber)
  return root
}

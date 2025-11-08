import { ReactElementType } from 'shared'
import { type FiberRootNode } from '../reconciler/src/ReactInternalTypes'
import { createContainer, updateContainer } from '../reconciler/src/FiberReconciler'

export type ReactDOMRootType = {
  _internalRoot: FiberRootNode
  render: (element: ReactElementType) => void
  unmount: () => void
}

function ReactDOMRoot(fiberRoot: FiberRootNode): ReactDOMRootType {
  return {
    _internalRoot: fiberRoot,
    render: function (element: ReactElementType) {
      updateContainer(element, this._internalRoot)
    },
    unmount: function () {}
  }
}

export function createRoot(container: HTMLElement): ReactDOMRootType {
  const fiberRoot = createContainer(container)
  return ReactDOMRoot(fiberRoot)
}

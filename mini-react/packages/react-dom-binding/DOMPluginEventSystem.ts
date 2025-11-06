import { type FiberNode } from '../reconciler/src/ReactInternalTypes'
import { HostComponent } from '../reconciler/src/ReactInternalTypes'
import { type SyntheticEvent, createSyntheticEvent } from './SyntheticEvent'
import { internalInstanceKey } from './ReactDOMComponentTree'
import { topLevelEventsToReactNames } from './DOMEventToReactEventMap'

type DispatchListener = {
  listener: Function
  currentTarget: EventTarget | null
  fiber: FiberNode | null
}

function createDispatchListener(fiber: FiberNode | null, listener: Function, currentTarget: EventTarget | null): DispatchListener {
  return {
    listener,
    currentTarget,
    fiber
  }
}

export function accumulateSinglePhaseListeners(targetFiber: FiberNode, reactEventName: string) {
  let fiber: FiberNode | null = targetFiber

  const listeners: DispatchListener[] = []

  while (fiber) {
    const { pendingProps, tag } = fiber
    if (tag === HostComponent) {
      const reactEventHandler = pendingProps[reactEventName]
      if (typeof reactEventHandler === 'function') {
        listeners.push(createDispatchListener(fiber, reactEventHandler, fiber.stateNode))
      }
    }
    fiber = fiber.return
  }

  return listeners
}

export function processEventQueueItemsInOrder(event: SyntheticEvent, listeners: DispatchListener[]) {
  for (const item of listeners) {
    const { listener, currentTarget, fiber } = item
    event.currentTarget = currentTarget
    event.target = event.nativeEvent.target
    listener(event)
    event.currentTarget = null
    event.target = null
    if (event.isPropagationStopped()) {
      return
    }
  }
}

export function listenToAllSupportedEvents(rootContainerElement: EventTarget) {
  topLevelEventsToReactNames.forEach((reactEventName, nativeEventName) => {
    rootContainerElement.addEventListener(nativeEventName, (e) => {
      const listeners = accumulateSinglePhaseListeners((e.target as any)[internalInstanceKey], reactEventName)
      const se = createSyntheticEvent(e)
      processEventQueueItemsInOrder(se, listeners)
    })
  })
}

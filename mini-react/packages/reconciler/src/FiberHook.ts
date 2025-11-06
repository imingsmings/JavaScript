import { type FiberNode } from './ReactInternalTypes'
import { updateOnFiber } from './WorkLoop'
import { ReactSharedInternals } from 'react'

export type Hook = {
  memoizedState: any
  dispatch: any
  next: Hook | null
}

let currentlyRenderingFiber: FiberNode | null = null
let workInProgressHook: Hook | null = null

function dispatchSetState(fiber: FiberNode, hook: Hook, newState: any) {
  hook.memoizedState = newState
  updateOnFiber(currentlyRenderingFiber!)
}

function mountWorkInProgressHook(initialState: any) {
  const hook: Hook = {
    memoizedState: initialState,
    dispatch: null,
    next: null
  }
  if (workInProgressHook === null) {
    currentlyRenderingFiber!.memoizedState = hook
  } else {
    workInProgressHook!.next = hook
  }

  workInProgressHook = hook
  return hook
}

function mountState(initialState: any) {
  const hook = mountWorkInProgressHook(initialState)
  const dispatch = dispatchSetState.bind(null, currentlyRenderingFiber!, hook)
  hook.dispatch = dispatch
  return [hook.memoizedState, hook.dispatch]
}

function updateWorkInProgressHook() {
  if (workInProgressHook === null) {
    workInProgressHook = currentlyRenderingFiber!.memoizedState
  } else {
    workInProgressHook = workInProgressHook.next
  }
  return workInProgressHook
}

function updateState() {
  const hook = updateWorkInProgressHook()
  return [hook!.memoizedState, hook!.dispatch]
}

// export let useState: any = null

export function renderWithHooks(workInProgress: FiberNode, Component: Function) {
  currentlyRenderingFiber = workInProgress

  if (currentlyRenderingFiber.memoizedState === null) {
    ReactSharedInternals.H = mountState
  } else {
    ReactSharedInternals.H = updateState
  }

  const children = Component()
  workInProgressHook = null

  return children
}

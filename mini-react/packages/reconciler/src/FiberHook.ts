import { PassiveEffect } from './FiberFlags'
import { type FiberNode } from './ReactInternalTypes'
import { getRootForUpdatedFiber, scheduleUpdateOnFiber } from './WorkLoop'
import { ReactSharedInternals } from 'react'
import { NoFlags, HasEffect, type HookFlags, type SimpleEffect, type SimpleEffectCreate } from './EffectHook'

export type Hook = {
  memoizedState: any
  dispatch: any
  next: Hook | null
}

export type RefObject<T> = {
  current: T
}

let currentlyRenderingFiber: FiberNode | null = null
let workInProgressHook: Hook | null = null
let currentHook: Hook | null = null

function dispatchSetState(fiber: FiberNode, hook: Hook, newState: any) {
  hook.memoizedState = newState
  const fiberRoot = getRootForUpdatedFiber(fiber)
  scheduleUpdateOnFiber(fiberRoot!)
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
  const current = currentlyRenderingFiber!.alternate
  if (current !== null) {
    if (currentHook === null) {
      currentHook = current.memoizedState
    } else {
      currentHook = currentHook.next
    }
  }

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

function mountEffect(create: SimpleEffectCreate, createDeps?: any[]) {
  const hook = mountWorkInProgressHook(null)
  const deps = createDeps === undefined ? null : createDeps
  currentlyRenderingFiber!.flags |= PassiveEffect
  hook.memoizedState = pushSimpleEffect(hook.memoizedState, HasEffect, create, deps)
}

function updateEffect(create: SimpleEffectCreate, createDeps?: any[]) {
  const hook = updateWorkInProgressHook()
  const nextDeps = createDeps === undefined ? null : createDeps
  if (currentHook !== null) {
    if (nextDeps !== null) {
      const prevDeps = currentHook!.memoizedState.deps
      if (areHookDepsEqual(prevDeps, nextDeps)) {
        hook!.memoizedState = pushSimpleEffect(hook!.memoizedState, NoFlags, create, nextDeps)
      } else {
        currentlyRenderingFiber!.flags |= PassiveEffect
        hook!.memoizedState = pushSimpleEffect(hook!.memoizedState, HasEffect, create, nextDeps)
      }
    } else {
      currentlyRenderingFiber!.flags |= PassiveEffect
      hook!.memoizedState = pushSimpleEffect(hook!.memoizedState, HasEffect, create, nextDeps)
    }
  }
}

function pushSimpleEffect(existEffect: SimpleEffect | null, tag: HookFlags, create: SimpleEffectCreate, deps: any[] | null) {
  let effect = existEffect

  if (effect === null) {
    effect = {
      tag,
      create,
      destroy: null,
      deps,
      next: null
    }
  } else {
    effect.tag = tag
    effect.create = create
    effect.deps = deps
  }

  let componentUpdateQueue = currentlyRenderingFiber!.updateQueue

  if (componentUpdateQueue === null) {
    componentUpdateQueue = { lastEffect: null }
    currentlyRenderingFiber!.updateQueue = componentUpdateQueue
  }
  const lastEffect = componentUpdateQueue.lastEffect
  if (lastEffect === null) {
    componentUpdateQueue.lastEffect = effect
    effect.next = effect
  } else {
    const firstEffect = lastEffect.next
    lastEffect.next = effect
    effect.next = firstEffect
    componentUpdateQueue.lastEffect = effect
  }

  return effect
}

function areHookDepsEqual(prevDeps: any[] | null, nextDeps: any[] | null) {
  if (prevDeps === null || nextDeps === null) {
    return false
  }

  if (prevDeps.length !== nextDeps.length) {
    return false
  }

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) {
      return false
    }
  }

  return true
}

function mountRef(initialState: any) {
  const ref: RefObject<any> = {
    current: initialState
  }
  const hook = mountWorkInProgressHook(ref)
  return hook.memoizedState
}

function updateRef() {
  const hook = updateWorkInProgressHook()
  return hook?.memoizedState
}

export function renderWithHooks(workInProgress: FiberNode, Component: Function) {
  currentlyRenderingFiber = workInProgress

  if (currentlyRenderingFiber.memoizedState === null) {
    ReactSharedInternals.H = {
      useState: mountState,
      useEffect: mountEffect,
      useRef: mountRef
    }
  } else {
    ReactSharedInternals.H = {
      useState: updateState,
      useEffect: updateEffect,
      useRef: updateRef
    }
  }

  const children = Component(workInProgress.pendingProps)
  workInProgressHook = null
  currentHook = null

  return children
}

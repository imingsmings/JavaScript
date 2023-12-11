import { createRoot } from "react-dom/client"
import { Component, createElement } from "react";

export const root = createRoot(document.getElementById('root'))

/**
 * [
 *  [state1, setState1],
 *  [state2, setState2],
 * ]
 */
const states = [],
      effects = [],
      memos = [],
      callbacks = [];

let stateIndex = 0,
    effectIndex = 0,
    memoIndex = 0,
    callbackIndex = 0;

function isExist(val) {
    return val !== undefined
}

function isFunction(val) {
    return typeof val === 'function'
}

export function useState(initialState) {
    const { _state, _setState} = createStates(initialState)

    stateIndex ++

    return [_state, _setState]
}

export function useEffect(callback, dependencies) {
    if (!isFunction(callback)) {
        throw new TypeError('useEffect hook callback must be a function')
    }

    if (!isExist(dependencies)) {
        if (!effects[effectIndex]) {
            collectEffect(effects, effectIndex, callback, dependencies)
        }
        runEffect(effects, effectIndex, callback)

        effectIndex++;
        return
    }

    if (!Array.isArray(dependencies)) {
        throw new TypeError('useEffect hook dependencies must be a array')
    }

    if (!effects[effectIndex]) {
        collectEffect(effects, effectIndex, callback, dependencies)
    }

    const isChanged = dependencies.some((dep, index) => dep !== effects[effectIndex].deps[index])

    if (isChanged) {
        runEffect(effects, effectIndex, callback)
    }

    effects[effectIndex] = {
        ...effects[effectIndex],
        deps: dependencies
    }

    effectIndex++
}

export function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState)

    function dispatch(action) {
        const newStata = reducer(state, action)
        setState(newStata)
    }

    return [state, dispatch]
}

export function memo(WrappedComponent) {
    class C extends PrueComponent {
        render () {
            return <WrappedComponent {...this.props} />
        }
    }

    return C
}

export function useMemo(callback, dependencies) {

    if (!Array.isArray(dependencies)) {
        new TypeError('useMemo hook dependencies must be a array')
    }

    if (memos[memoIndex]) {
        const [memo, deps] = memos[memoIndex]

        const isChanged = dependencies.some((dep, index) => dep !== deps[index])

        if (isChanged) {
            return collectMemo(callback, dependencies)
        }

        memoIndex++
        return memo
    } else {
        return collectMemo(callback, dependencies)
    }

    function collectMemo(callback, dependencies) {
        const memo = callback()
        memos[memoIndex] = [memo, dependencies]
        memoIndex++
        return memo
    }
}

export function useCallback(callback, dependencies){
    if (!Array.isArray(dependencies)) {
        new TypeError('useCallback hook dependencies must be a array')
    }

    if (callbacks[callbackIndex]) {
        const [cb, deps] = callbacks[callbackIndex]

        const isChanged = dependencies.some((dep, index) => dep !== deps[index])

        if (isChanged) {
            return collectMemo(callback, dependencies)
        }

        callbackIndex++
        return cb
    } else {
        return collectMemo(callback, dependencies)
    }

    function collectMemo(callback, dependencies) {
        callbacks[callbackIndex] = [callback, dependencies]
        callbackIndex++
        return callback
    }
}

async function render() {
    const App = (await import('./App')).default
    stateIndex = 0
    effectIndex = 0
    memoIndex = 0
    callbackIndex = 0

    console.log(callbacks);
    root.render(createElement(App))
}

function createStates (initialState) {
    if (isExist(states[stateIndex])) {
        return states[stateIndex]
    } else {
        const state = {}

        if (isFunction(initialState)) {
            state._state = initialState()
        } else {
            state._state = initialState
        }

        state._setState = (function(stateIndex){
            return function (newState) {
                let _newState = newState
                const _oldState = states[stateIndex]._state

                if (isFunction(newState)) {
                    _newState = newState(states[stateIndex]._state)
                 } else {
                    _newState = newState
                 }

                 states[stateIndex]._state = _newState

                 if (_newState !== _oldState) {
                    render()
                 }
            }
        })(stateIndex);

        states[stateIndex] = state

        return states[stateIndex]
    }
}

function collectEffect(allEffects, index, callback, dependencies) {
    allEffects[index] = {
        deps: dependencies,
    }
    setTimeout((function (index){
        return function () {
            effects[index].clearFn = callback()
        }
    })(index), 0)
}

function runEffect(allEffects, index, callback) {
    setTimeout((function (index) {
        return function () {
            isFunction(allEffects[index].clearFn) && allEffects[index].clearFn()
            setTimeout(callback, 0)
        }
    })(index), 0)
}

function shallowEqual(o1, o2) {
    if (o1 === o2) return true

    if (
        typeof o1 !== 'object' || 
        typeof o2 !== 'object' || 
        o1 === null || 
        o2 === null
        ) {
        return false
    }

    if (Object.keys(o1).length !== Object.keys(o2).length) {
        return false
    }
    
    for (let key in o1) {
        if (!o2.hasOwnProperty(key) || o1[key] !== o2[key]) {
            return false
        }
    }

    return true
}

class PrueComponent extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(nextProps, this.props) || !shallowEqual(nextState, this.state)
    }
}
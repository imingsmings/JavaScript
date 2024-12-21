import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols'
import type { Key, ElementType, Ref, Props, ReactElement } from 'shared/ReactTypes'

export function jsxDEV(type: ElementType, config: any) {
    let key: Key = null
    let ref: Ref = null!
    const props: Props = {}

    for (let prop in config) {
        const value = config[prop]

        if (prop === 'key' && hasValidKey(config)) {
            key = '' + value
            continue
        }

        if (prop === 'ref' && hasValidRef(config)) {
            ref = value
        }

        if (Object.hasOwn(config, prop)) {
            props[prop] = value
        }
    }

    return createReactElement(type, key, ref, props)
}

function createReactElement(type: ElementType, key: Key, ref: Ref, props: Props) {
    const element: ReactElement = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref,
        props,
        __mark: 'React Code'
    }

    return element
}

function hasValidKey(config: any) {
    return config.key !== undefined && config.key !== null
}

function hasValidRef(config: any) {
    return config.ref !== undefined && config.ref !== null
}

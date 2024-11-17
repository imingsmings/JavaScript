import { isObject } from '../shared/index.js'

export function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map((child) => {
                if (isObject(child)) {
                    return child
                }
                return createTextElement(child)
            })
        }
    }
}

function createTextElement(text) {
    return {
        type: 'text',
        props: {
            nodeValue: text,
            children: []
        }
    }
}

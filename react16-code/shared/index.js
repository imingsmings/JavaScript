export function isObject(value) {
    return typeof value === 'object' && value !== null
}

export function isProperty(property) {
    return property !== 'children'
}

export function isEvent(property, value) {
    return (
        property.startsWith('on') &&
        typeof value === 'function'
    )
}

export function isTextNode(type) {
    return type === 'text'
}

export function getEventName(prop) {
    return prop.replace('on', '').toLowerCase()
}

export function createNode(type) {
    return isTextNode(type)
        ? document.createTextNode('')
        : document.createElement(type)
}

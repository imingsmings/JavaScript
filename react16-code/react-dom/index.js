import {
    createDOM,
    getEventName,
    isEvent,
    isProperty
} from '../shared/index.js'

function render(element, contianer) {
    const dom = createDOM(element.type)

    Object.keys(element.props)
        .filter(isProperty)
        .forEach((prop) => {
            const propValue = element.props[prop]
            if (isEvent(prop, propValue)) {
                dom.addEventListener(
                    getEventName(prop),
                    propValue
                )
            } else {
                dom[prop] = propValue
            }
        })

    element.props.children.forEach((child) => {
        render(child, dom)
    })

    contianer.appendChild(dom)
}

export default {
    render
}

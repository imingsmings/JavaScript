import React from 'react'
import * as IconContainer from 'iconoir-react'

console.log(Object.keys(IconContainer));

class Icon extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      type: this.getRealIconType()
    }
  }

  getRealIconType() {
    const { type } = this.props

    this.validate(type)
    
    return this.parse(type)
  }

  validate(type) {
    if (!type) {
      throw new Error('prop type muse be specified')
    }

    if (typeof type !== 'string') {
      throw new TypeError('Prop type must be a string')
    }
  }

  parse(type) {
    return type.split('-').map(s => s.replace(/\w/, s => s.toUpperCase())).join('')
  }

  render() {
    const Component = IconContainer[this.state.type]
    const { type, ...props } = this.props
    return (
      <span className={`iconoir iconoir-${type}`}>
       <Component {...props} /> 
      </span>
    )
  }
}

export default Icon
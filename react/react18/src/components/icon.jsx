import React from 'react'

class Icon extends React.Component {

  render() {
    const { type, ...props } = this.props
    return (
        <i className={`iconoir iconoir-${type}`} {...props}>{this.props.children}</i>
    )
  }
}

export default Icon
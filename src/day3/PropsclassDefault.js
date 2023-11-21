import React, { Component } from 'react'

export default class PropsclassDefault extends Component {
  render() {
    return (
      <div>
        <h1>Rightraaa {this.props.frnd}</h1>
      </div>
    )
  }
}

PropsclassDefault.defaultProps ={
  frnd:"mameey"
}

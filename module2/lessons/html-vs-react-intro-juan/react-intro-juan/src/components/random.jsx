import React, { Component } from 'react'

export default class Random extends Component {
  render() {
    return (
      <div>
        <h1>My second component {this.props.number}</h1>
      </div>
    )
  }
}

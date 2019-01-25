import React, { Component } from 'react'

export class Timer extends Component {
  render() {
    let props = this.props
    return (
      <div>
        {props.countdown}
      </div>
    )
  }
}

export default Timer

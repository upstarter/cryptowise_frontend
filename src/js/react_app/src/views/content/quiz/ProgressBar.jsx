import React, { Component } from "react";
import { Line, Circle } from "rc-progress";

export class ProgressBar extends Component {
  render() {
    return (
        <Line
          percent={this.props.percent}
          strokeWidth="1"
          strokeColor="green"
        />
    );
  }
}

export default ProgressBar;

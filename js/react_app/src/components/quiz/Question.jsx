import React, { Component } from "react";

export default class Question extends Component {
  render() {
    let { currentQuestion } = this.props;
    return <h2>{currentQuestion.question}</h2>;
  }
}

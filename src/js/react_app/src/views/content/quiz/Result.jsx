import React, { Component } from "react";
import Question from "./Question";
import Answer from "./Answer";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }

  componentDidMount() {
    const { score } = this.state;
    const { correctAns, answers } = this.props;
    let tmpScore = score;
    answers.map((answer, index) => {
      if (answer == correctAns[index]) {
        tmpScore = tmpScore + 1;
      }
      return this.setState({
        score: tmpScore
      });
    });
  }

  render() {
    const { score } = this.state;
    const { questions, answers, correctAns } = this.props;
    const renderQuestion = questions.map((question, index) => {
      return (
        <div key={index}>
          <Question currentQuestion={question} />
          <Answer
            questionType={question.questionType}
            answers={question.answers}
            userAnswers={answers}
            renderInResult={true}
            correctAns={correctAns}
            qIdx={index}
          />
        </div>
      );
    });

    const renderResult = (
      <div>
        <h1>
          {" "}
          Your score:{" "}
          <span>
            {score}/{questions.length}
          </span>
        </h1>
      </div>
    );

    return (
      <div className="container">
        {renderResult}
        {renderQuestion}
      </div>
    );
  }
}
export default Result;

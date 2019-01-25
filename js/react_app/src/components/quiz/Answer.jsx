import React, { Component } from "react";
// import PropTypes from 'prop-types';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      userAnswers,
      answers,
      questionType,
      renderInResult,
      correctAns,
      qIdx
    } = this.props;
    const answerKey = ["A", "B", "C", "D"];
    const renderAnswer = answers.map((answer, index) => {
      let value = answerKey[index] + ". " + answer;
      return (
        (questionType == "text" && (
          <li style={{ margin: "2em 0" }}>
            <button
              className="button"
              key={index}
              data-value={answer}
              onClick={() => this.props.handleClick(index)}
            >
              {value}
            </button>
          </li>
        )) ||
        (questionType == "photo" && (
          <button>
            <img
              style={{ cursor: "pointer" }}
              width="300"
              key={index}
              alt=""
              src={answer}
              onClick={() => this.props.handleClick(index)}
            />
          </button>
        ))
      );
    });
    const renderAnswerInResult =
      renderInResult &&
      answers.map((answer, index) => {
        let c = "";
        if (index + 1 == correctAns[qIdx]) {
          c = "btn-success";
        } else if (
          index + 1 == userAnswers[qIdx] &&
          correctAns[qIdx] != userAnswers[qIdx]
        ) {
          c = "btn-danger";
        }
        let value = answerKey[index] + ". " + answer;
        return (
          (questionType == "text" && (
            <li>
              <button className={`${c} button`} key={index} data-value={answer}>
                {value}
              </button>
            </li>
          )) ||
          (questionType == "photo" && (
            <button className={`${c} img`}>
              <img key={index} alt="" src={answer} width="300" />
            </button>
          ))
        );
      });

    return (
      <div className="container">
        {renderInResult == true ? (
          <div className="">{renderAnswerInResult}</div>
        ) : (
          <ul>{renderAnswer}</ul>
        )}
      </div>
    );
  }
}

// Answer.propTypes = {
//   userAnswers: PropTypes.array,
//   answers: PropTypes.array,
//   questionType: PropTypes.string,
//   renderInResult: PropTypes.bool,
//   correctAns: PropTypes.array,
//   qIdx: PropTypes.number,
//   handleClick: PropTypes.func
// };

export default Answer;

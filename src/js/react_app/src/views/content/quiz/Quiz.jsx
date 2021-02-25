import React, { Component } from "react";
import Answer from "./Answer";
import Question from "./Question";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import Result from "./Result";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
  },
  header: {
    backgroundColor: "#373A40",
    height: "220px",
    width: "100%",
    padding: "8.5em 15em 0 15em",
    lineHeight: "4.5em"
  },
  title: {
    fontSize: "32px",
    color: "white",
    textAlign: "center"
  },
  main: {
    padding: "1em 15em"
  },
  tileGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    // gridTemplateRows: "repeat(3, auto)",
    gridColumnGap: "1em",
    gridRowGap: "1em"
  },
  "@media (max-width: 768px)": {
    tileGrid: {
      gridTemplateColumns: "1fr 1fr 1fr"
    },
    main: {
      padding: "1em 1em"
    }
  },
  "@media (max-width: 414px)": {
    tileGrid: {
      gridTemplateColumns: "1fr 1fr"
    },
    main: {
      padding: "1em 1em"
    },
    header: {
      padding: "2em 5em",
      height: "110px",
      lineHeight: "3em"
    },
    title: {
      fontSize: "20px"
    }
  }
};

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    let quiz = this.props.quiz;
    this.state = {
      step: 0,
      title: quiz.quizTitle,
      questions: quiz.questions,
      currentQuestion: quiz.questions[0],
      answers: [],
      correctAns: [],
      totalQuestions: quiz.questions.length,
      endQuiz: false,
      showResult: false,
      percent: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.parseCorrectAnswer();
  }
  parseCorrectAnswer() {
    const { correctAns, questions } = this.state;
    questions.map(question => {
      return correctAns.push(question.correctAnswer);
    });
  }
  handleClick = index => {
    
    const { step, questions, answers, totalQuestions } = this.state;
    answers.push(index + 1);
    let updatedStep = step;

    if (step < totalQuestions - 1) {
      let percent = ((step + 1) / totalQuestions) * 100;
      updatedStep = step + 1;
      this.setState({
        percent: percent,
        step: updatedStep,
        currentQuestion: questions[updatedStep]
      });
    } else {
      this.setState({
        endQuiz: true,
        percent: 100
      });
    }
  };
  render() {
    const {
      title,
      questions,
      currentQuestion,
      answers,
      correctAns,
      endQuiz,
      percent
    } = this.state;

    return (
      <div style={styles.container}>
        {endQuiz === true ? (
          <Result
            questions={questions}
            answers={answers}
            correctAns={correctAns}
          />
        ) : (
          <div>
            <div style={styles.header}>
              <h2 style={styles.title}>
                <Question currentQuestion={currentQuestion} />
              </h2>
            </div>
            <div styles={styles.main}>
              <Answer
                questionType={currentQuestion.questionType}
                answers={currentQuestion.answers}
                handleClick={this.handleClick}
                renderInResult={false}
              />
            </div>
          </div>
        )}
        <ProgressBar percent={percent} />
      </div>
    );
  }
}

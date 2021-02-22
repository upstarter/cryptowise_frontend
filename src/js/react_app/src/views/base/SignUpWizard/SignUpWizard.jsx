import React, { Component } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { connect } from "react-redux";
import { registerUser } from 'Redux/core/auth.core'

import { url } from "Utils/consts";
import { withRouter } from "react-router-dom";

export class SignUpWizard extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
      nickname: null,
      email: null,
      password: null,
      topic_knowledge_ids: [],
      topic_interest_ids: []
    };
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this._saveKnowledgeIds = this._saveKnowledgeIds.bind(this);
    this._saveinterestIds = this._saveinterestIds.bind(this);
    this._saveUserInfo = this._saveUserInfo.bind(this);
  }
  _saveKnowledgeIds(array) {
    this.setState({
      topic_knowledge_ids: array
    });
  }
  _saveinterestIds(array) {
    this.setState({
      topic_interest_ids: array
    });
  }
  _saveUserInfo(data)  {

    data.topic_knowledge_ids = this.state.topic_knowledge_ids

    this.props.dispatch(registerUser(data))
    this.props.history.replace('/discuss')

    this.setState({
        name: data.name,
        email: data.email,
        password: data.password
    }, () => {
      let state = this.state;
      if (
        state.topic_knowledge_ids !== null &&
        state._saveinterestIds !== null
      ) {
      }
    })
  }
  _next() {
    let currentStep = this.state.currentStep;
    // Make sure currentStep is set to something reasonable
    if (currentStep >= 2) {
      currentStep = 3;
    } else {
      currentStep = currentStep + 1;
    }

    this.setState({
      currentStep: currentStep
    });
  }
  _prev() {
    let currentStep = this.state.currentStep;
    if (currentStep <= 1) {
      currentStep = 1;
    } else {
      currentStep = currentStep - 1;
    }

    this.setState({
      currentStep: currentStep
    });
  }

  render() {
    let state = this.state;
    return (
      <div className="dark-wrap" style={{ height: "100% !important", fontFamily: "Avenir, Avenir-Light, Avenir-Book, Avenir-Roman, sans-serif" }}>
        <Step1
          currentStep={state.currentStep}
          afterValid={this._next}
          topics={this.props.topics}
          saveForm={this._saveKnowledgeIds}
          selectedIds={state.topic_knowledge_ids}
        />
        <Step2
          currentStep={state.currentStep}
          afterValid={this._next}
          prev={() => this._prev()}
          saveForm={this._saveUserInfo}
        />
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   registerUser: (userInfo) => dispatch(registerUser(userInfo))
// })

export default connect(null, null)(withRouter(SignUpWizard));

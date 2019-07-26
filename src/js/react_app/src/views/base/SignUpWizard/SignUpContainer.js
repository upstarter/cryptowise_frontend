import React, { Component } from "react";
import injectSheet from "react-jss";
import SignUpWizard from "../SignUpWizard/SignUpWizard";
import axios from "axios";
import { url } from "Utils/consts";
import colors from "Styles/colors"

class SignupContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
    };
  }

  componentDidMount() {
    fetch(`${url}/api/v1/topics`)
      .then(response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(data => {
          this.setState({ topics: data.data });
        });
      })
      .catch(err => {
        console.log("Fetch Error :-S", err);
      });
  }

  render() {
    let state = this.state;
    let classes = this.props.classes;

    return (
      <SignUpWizard topics={this.state.topics} />
    )
  }
}

const styles = {

}
const SignUpContainer = injectSheet(styles)(SignupContainer);
export default SignUpContainer;

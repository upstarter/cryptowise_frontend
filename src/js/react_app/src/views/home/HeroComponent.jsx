import React from "react";
import ReactDOM from "react-dom";
import AppButton from "../../components/Button/AppButton";
import { url } from "Utils/consts";
// quiz
import injectSheet, { jss } from "react-jss";
import nestedJSS from 'jss-nested'
import heroStyles from 'Styles/heroStyles'

class HeroComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      subscribeButtonLoading: false,
      applyNowButtonLoading: false,
    };
    this.signUpRouteChange = this.signUpRouteChange.bind(this);
  }

  signUpRouteChange() {
    let path = '/signup';
    this.props.history.push(path);
  }

  render() {
    var flags = { userType: "investor" };
    let state = this.state;
    const { classes } = this.props;
    return (
      <section className={classes.hero}>
        <div className='hero-body'>
          <div className="wrap">
            <h1 className="title">
              &#8592;	Become a <span className="fancy-underline">top 1%</span> crypto
              <div className="slidingVertical">
                <span>investor.</span>
                <span>analyst.</span>
                <span>coder.</span>
                <span>founder.</span>
                <span>trader.</span>
              </div>
            </h1>
            <div id="subscribe-form" className="email-leadgen">
              <section className="section">
                <div className="wrap has-text-centered">
                  <div id="form-container">

                    <AppButton
                      type="primary"
                      className={`${
                        state.subscribeButtonLoading ? "is-loading" : ''
                      }`}
                      onClick={this.signUpRouteChange}
                      size='large'
                    >
                      {" "}
                      Join Us{" "}
                    </AppButton>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default injectSheet(heroStyles)(HeroComponent)


// <p className="subtitle-big">Receive free insights in your inbox.</p>

// <div className="control has-text-centered">
//   <input
//     className="input"
//     type="text"
//     placeholder="Email Address"
//   />
// </div>

// <Modal
//   isOpen={state.showQuizModal}
//   // onAfterOpen={this.afterOpenModal}
//   onRequestClose={this.handleCloseModal}
//   style={modalStyles}
//   contentLabel="Example Modal"
// >
//   <Quiz quiz={quiz} />
// </Modal>

// <Button
//   className={`is-primary is-rounded ${
//     state.subscribeButtonLoading ? "is-loading" : null
//   }`}
//   onClick={this.handleOpenQuizModal}
// >
//   {" "}
//   Quiz{" "}
// </Button>
// Compile styles, apply plugins.

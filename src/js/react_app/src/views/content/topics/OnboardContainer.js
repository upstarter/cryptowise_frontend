import React from "react";
import ReactDOM from "react-dom";
import AppButton from 'Components/base/button/AppButton';
import { url } from "Utils/consts";
import colors from 'Styles/colors'
import FadeIn from 'react-fade-in';
import { withRouter } from "react-router-dom";

// quiz
import injectSheet, { jss } from "react-jss";
// import nestedJSS from 'jss-nested'
import heroStyles from 'Styles/heroStyles'
import onboardStyles from './onboardStyles'

class OnboardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      subscribeButtonLoading: false,
      applyNowButtonLoading: false,
    };
  }

  signUpRouteChange = () => {
    let path = '/signup';
    this.props.history.push(path);
  }

  render() {
    var flags = { userType: "investor" };
    let state = this.state;
    const { classes } = this.props;
    return (
      <FadeIn className={classes.fadeIn}>
        <section className={classes.hero}>
          <div className='hero-body'>
            <div className="wrap">
              <h1 className="title">
                Become a <span className="fancy-underline">top 1%</span> crypto
                <div className="slidingVertical">
                  <span>trader.</span>
                  <span>strategist.</span>
                  <span>engineer.</span>
                  <span>analyst.</span>
                  <span>investor.</span>
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
                        Sign Up
                      </AppButton>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    );
  }
}


export default injectSheet(onboardStyles)(withRouter(OnboardContainer))

// <div>
//   <a className="github-button" target="_blank" href="https://github.com/sponsors/upstarter" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-heart" aria-label="Sponsor @upstarter on GitHub">Sponsor</a>
//   <a className="github-button" target="_blank" href="https://github.com/upstarter/cryptowise" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" aria-label="Star upstarter/cryptowise on GitHub">Star</a>
//   <a className="github-button" target="_blank" href="https://github.com/upstarter/cryptowise/subscription" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-eye" aria-label="Watch upstarter/cryptowise on GitHub">Watch</a>
// </div>

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

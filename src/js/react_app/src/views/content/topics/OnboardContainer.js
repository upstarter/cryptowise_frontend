import React from "react";
import ReactDOM from "react-dom";
import AppButton from 'Components/base/button/AppButton';
import { url } from "Utils/consts";
import colors from 'Styles/colors'
import FadeIn from 'react-fade-in';
import { withRouter } from "react-router-dom";

import injectSheet, { jss } from "react-jss";
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
                <span className="fancy-underline">Take the Journey</span>
                <div className="slidingVertical">
                  <span>from Data.</span>
                  <span>to Information.</span>
                  <span>to Knowledge.</span>
                  <span style={{color: colors.spotifyGreen}}>to Wisdom.</span>
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
                        Sign Up to Discuss
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

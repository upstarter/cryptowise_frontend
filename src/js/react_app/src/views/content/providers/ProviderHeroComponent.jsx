import React from "react";
import ReactDOM from "react-dom";
// import Elm from 'react-elm-components'
// import {Main} from '../../../elm/src/Main'
import AppButton from "Components/base/button/AppButton";
import Modal from "react-modal";
import SignUpWizard from "Base/SignUpWizard/SignUpWizard";
import injectSheet, { jss } from 'react-jss'
import heroStyles from 'Styles/heroStyles'


class ProviderHeroComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      applyNowButtonLoading: false,
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentWillMount() {
    Modal.setAppElement("body");
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    var flags = { userType: "provider" };
    let state = this.state;
    const { classes } = this.props
    return (
      <section className={"dark-wrap", classes.hero}>
        <Modal
          isOpen={state.showModal}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.handleCloseModal}
          style={modalStyles}
          contentLabel="Example Modal"
        >
          {/* <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2> */}
          {/* <button onClick={this.handleCloseModal}>close</button> */}
          <SignUpWizard />
        </Modal>
        <div className="hero-body column">
          <div className="container">
            <h1 className="title">
              <span className="fancy-underline">Monetize</span> your crypto
              capabilities.
            </h1>
            <p className="subtitle-big">
              Earn money for contributing to the crypto economy.
            </p>
            <div id="subscribe-form" className="email-leadgen">
              <section className="section">
                <div className="container has-text-centered">
                  <div id="form-container">
                    {/* <Elm src={Main} flags={flags}/> */}
                    <div className="control has-text-centered">
                      <input
                        className="input"
                        type="text"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <AppButton
                      className={`${
                        state.applyNowButtonLoading ? "is-loading" : null
                      }`}
                      onClick={this.handleOpenModal}
                    >
                      {" "}
                      Apply Now{" "}
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

export default injectSheet(heroStyles)(ProviderHeroComponent)

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)"
  },
  content: {
    width: "960px",
    height: "714px",
    margin: "auto auto",
    padding: "0",
    border: "0"
  }
};

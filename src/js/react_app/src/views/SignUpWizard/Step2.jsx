import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import FacebookLogin from 'react-facebook-login';

import {url} from '../../utils/consts'
import injectSheet from "react-jss";
import Tile from "../../components/Tile/Tile";
import logo from "Images/white_nav_logo.svg";
import fbsvg from "Images/facebook.svg";
import fbWhite from "Images/facebook-white.svg";
import googleLogo from "Images/google.svg";
import googleLogoWhite from "Images/google-plus-white.png";
import googleSigninButton from "Images/btn_google_signin_dark_normal_web.png";
import colors from "Styles/colors"


class SignUpStep2 extends Component {
  constructor(props) {
    super(props);
    // this._validate = this._validate.bind(this);
    // Bindings for form fields would go here,
    // and state would keep track of field input
    this.handleSubmit = this.handleSubmit.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email: '',
      name: '',
      password: ''
    };
  }
  // _validate() {
  //   // a sanitized version of state can be passed instead
  //   this.props.afterValid(this.state);
  // }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.saveForm(this.state);
  }

  responseGoogle(response) {
    console.log(response);
  }

  responseFacebook = (response) => {
    console.log(response);
  }

  render() {
    let props = this.props;
    let classes = props.classes;
    if (props.currentStep !== 2) {
      return null;
    }
    let Tiles = [];
    for (let i = 0; i < 18; i++) {
      Tiles.push(<Tile />);
    }
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <h2 className={classes.title}>
            Uncover hypergrowth cryptoassets along with top analysts
          </h2>
        </div>
        <div className={classes.main}>
          <div className={classes.socialButtons}>
            <div>
              {/* <FacebookLogin
                appId="494273931358072"
                autoLoad
                callback={this.responseFacebook}
                cssClass={classes.fbLoginButton}
                icon="fa-facebook"
                textButton = "&nbsp;&nbsp;Continue with Facebook"
                // render={renderProps => (
                //   <button
                //     className="fb-login-button"
                //     onClick={renderProps.onClick}
                //   >
                //     Continue with Facebook
                //   </button>
                // )}
              /> */}
            </div>
              <GoogleLogin
                clientId={process.env.GOOGLE_CLIENT_ID}
                render={renderProps => (
                  <button
                    className={classes.googleLoginButton}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}>
                      <img src={googleSigninButton} />
                  </button>
                )}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              >
              </GoogleLogin>
          </div>
          <hr />
          -- or signup with email --
          <hr />
          <div className={classes.loginForm}>
            <form
              onSubmit={e => {
                this.handleSubmit(e);
              }}
            >
              <div className="field">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <div className="control has-icons-left">
                  <input
                    id="name"
                    value={this.state.name}
                    type="fullname"
                    placeholder="e.g. John Doe"
                    className="input"
                    required
                    onChange={this.handleNameChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <div className="control has-icons-left">
                  <input
                    id="email"
                    value={this.state.email}
                    type="email"
                    placeholder="e.g. johndoe@gmail.com"
                    className="input"
                    required
                    onChange={this.handleEmailChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <div className="control has-icons-left">
                  <input
                    id="password"
                    value={this.state.password}
                    type="password"
                    placeholder="*******"
                    className="input"
                    required
                    onChange={this.handlePasswordChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock" />
                  </span>
                </div>
              </div>
              <div className="field" style={{marginTop: 4}}>
                <label htmlFor="remember" className="checkbox">
                  <input id="remember" type="checkbox" />
                  Remember me
                </label>
              </div>
              <div className="field" style={{marginTop: 4}}>
                <button onClick={this.props.prev} className={classes.formButton}>
                  Back
                </button>
                <button
                  onClick={this.submit}
                  // type="submit"
                  style={{marginLeft: 4}}
                  className={classes.formButton}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: "center",

  },
  header: {
    textAlign: 'center',
    width: '100%',
    margin: [0,0,20,0],
    zIndex: 1,
    background: `${colors.white}`,
  },
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    width: '800px !important',
    'overflow-y': 'none',
  },
  title: {
    padding: [10,20,20,25],
    fontSize: "21px !important",
    color: `${colors.black}`,
  },
  formButton: {
    margin: [0, 0, 0, 0],
    padding: 4,
    borderRadius: 4,
    width: 75,
  },
  fbLoginButton: {
    width: 190,
    height:35,
    borderRadius: 3,
    background: '#3b5998',
    color: 'white',
    border: '0px transparent',
    textAlign: 'center',
    margin: [5, 0, 0, 0],
    display: 'inline-block',
    '&:hover': {
        background: '#3b5998',
        opacity: "0.6"
    }
  },
  googleLoginButton: {
    width: 190,
    height: 48,
    borderRadius: 3,
    color: 'white',
    background: 'transparent',
    border: '0px transparent',
    textAlign: 'center',
    margin: [10, 0, 0, 0],
    display: 'inline-block',
    '&:hover': {
        background: 'transparent',
        opacity: "0.6"
    }
  },
  socialButtons: {
    justifyContent: 'center',
  },
  loginForm: {
    justifyContent: 'center',
  },
  footer: {
    position: 'fixed',
    height: "80px",
    width: '100vw',
    bottom: 0,
    right: 0,
    fontSize: 22,
    background: `${colors.white}`,
    boxShadow: '8px 2px 4px 8px #f0f1f2',
  },
  "@media (min-width: 576px) (max-width: 992px)": {
    header: {
      height: "160px",
      lineHeight: "2em",
    },
    title: {
      width: '80vw',
      margin: '1.7em auto',
      fontSize: "21px"
    },
    tileGrid: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr"
    },
    main: {
      padding: "1em 1em"
    },
    socialButtons: {
      maxWidth: "100%"
    },
    vl: {
      borderTop: "1px solid black",
      width: "40em",
      borderLeft: "0",
      height: "0",
      maxWidth: "100%"
    }
  },
  "@media (max-width: 800px)": {
    header: {
      height: "160px",
      lineHeight: "2em",
    },
    title: {
      width: '80vw',
      margin: '1.7em auto',
      fontSize: "16px"
    },
    steps: {
      display: 'none !important',
    },
    tileGrid: {
      gridTemplateColumns: "1fr 1fr"
    },
    main: {
      padding: "0 1em"
    },
    loginForm: {
      maxWidth: "100%"
    }
  }
};

const Step2 = injectSheet(styles)(SignUpStep2);
export default withRouter(Step2);

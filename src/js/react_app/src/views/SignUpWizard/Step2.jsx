import React, { Component } from "react";
import injectSheet from "react-jss";
import Tile from "../../components/Tile/Tile";
import logo from "Images/white_nav_logo.svg";
import fbsvg from "Images/facebook.svg";
import fbWhite from "Images/facebook-white.svg";
import googleLogo from "Images/google.svg";
import googleLogoWhite from "Images/google-plus-white.png";
import colors from "Styles/colors"


class SignUpStep2 extends Component {
  constructor(props) {
    super(props);
    // this._validate = this._validate.bind(this);
    // Bindings for form fields would go here,
    // and state would keep track of field input
    this.handleSubmit = this.handleSubmit.bind(this);
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
            Monetize your crypto capabilities
          </h2>
        </div>
        <div className={classes.main}>
          <div className={classes.socialButtons}>
            <a
              href="#"
              className={"social-button " + classes.facebook_connect}
              id="facebook-connect"
            >
              {" "}
              <span>Connect with Facebook</span>
            </a>
            <a
              href="#"
              className={"social-button " + classes.google_connect}
              id="google-connect"
            >
              {" "}
              <span>Connect with Google</span>
            </a>
          </div>
          <div className={classes.vl} />
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
                    placeholder="e.g. Bob Smith"
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
                    placeholder="e.g. bobsmith@gmail.com"
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
              <div className="field">
                <label htmlFor="remember" className="checkbox">
                  <input id="remember" type="checkbox" />
                  Remember me
                </label>
              </div>
              <div className="field">
                <button onClick={this.props.prev} className="button is-primary">
                  Back
                </button>
                <button
                  onClick={this.submit}
                  // type="submit"
                  className="button is-success"
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
    justifyContent: "center",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: '5px auto',
    width: '800px !important',
    'overflow-y': 'none',
  },
  header: {
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    background: `${colors.white}`,
  },
  title: {
    padding: [10,20,20,25],
    fontSize: "21px !important",
    color: `${colors.black}`,
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
  button: {
    float: 'right',
    width: '75px',
    margin: "30px 170px 0 0",
  },
  socialButtons: {
    flex: "1",
    maxWidth: "40%"
  },
  loginForm: {
    flex: "1",
    maxWidth: "40%"
  },
  vl: {
    borderLeft: "1px solid black",
    height: "20em"
  },
  facebook_connect: {
    background: `rgb(255, 255, 255) url(${fbsvg}) no-repeat scroll 5px 0px / 30px 50px padding-box border-box`,
    "&:hover": {
      background: `rgb(60, 90, 154) url(${fbWhite}) no-repeat scroll 5px 0px / 30px 50px padding-box border-box`
    }
  },
  google_connect: {
    background: `rgb(255, 255, 255) url(${googleLogo}) no-repeat scroll 10px 0px / 30px 50px padding-box border-box`,
    "&:hover": {
      background: `rgb(220, 74, 61) url(${googleLogo}) no-repeat scroll 10px 0px / 30px 50px padding-box border-box`
    }
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
export default Step2;

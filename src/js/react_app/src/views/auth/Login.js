import React, { Component } from 'react';
import Auth from '../../components/auth/Auth'
import {
  Route,
  Redirect,
  Link,
  withRouter
} from "react-router-dom";

export default class Login extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  state = {
    redirectToReferrer: false,
    email: ``,
    password: ``
  };

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (Auth.authenticate(this.state)) {
      this.setState({ redirectToReferrer: true });
      // this.props.history.push("/profile");
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div title="Log In" className="light-wrap container">
        <div className="is-centered">
          <article className="card is-rounded">
            <form
              onSubmit={event => {
                this.handleSubmit(event);
              }}
            >
              <div className="card-content">
                <h1 className="title">
                  <img
                    src="https://placeholdit.imgix.net/~text?txtsize=13&txt=150%C3%9750&w=150&h=50"
                    alt="logo"
                    width={200}
                  />
                </h1>
                <p className="control has-icon">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleUpdate}
                  />
                  <i className="fa fa-envelope" />
                </p>
                <p className="control has-icon">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleUpdate}
                  />
                  <i className="fa fa-lock" />
                </p>
                <p className="control">
                  <button
                    type="submit"
                    className="button is-primary is-medium is-fullwidth"
                  >
                    <i className="fa fa-user" />
                    Login
                  </button>
                </p>
              </div>
            </form>
          </article>
        </div>
        <div className="">
          <p>
            For this demo, please log in with the username{" "}
            <code>cryptowise@gmail.com</code> and the password <code>demo</code>
            .
          </p>
        </div>
        <Link to="/sign_up">Sign up</Link>
      </div>
    );
  }
}

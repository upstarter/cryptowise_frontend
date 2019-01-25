import React, { Component } from 'react';
import Auth from '../../components/auth/Auth'
import { Route, Redirect } from "react-router-dom";

export default class Signup extends Component {

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
    if (Auth.signUp(this.state)) {
      this.props.history.push("/");
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <form
        method="post"
        onSubmit={event => {
          handleSubmit(event);
          window.location(`/app`);
        }}
      >
        <p>
          For this demo, please log in with the username <code>gatsby</code> and the
          password <code>demo</code>.
        </p>
        <label>
          Username
          <input type="text" name="username" onChange={handleUpdate} />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleUpdate} />
        </label>
        <input type="submit" value="Log In" />
      </form>
    );
  }
}

import React, { Component } from 'react';
import AuthService from 'Services/auth/AuthService'
import { Route, Redirect } from "react-router-dom";

export default class Logout extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    redirectToReferrer: false,
    email: ``,
    password: ``
  };

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidMount() {
    const auth = new AuthService
    if (auth.signOut(this.state)) {
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
      <></>
    );
  }
}

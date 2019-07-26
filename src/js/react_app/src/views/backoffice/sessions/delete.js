import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from 'Actions/sessions';
import Logout from 'Components/auth/Logout'

class SessionsDelete extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    const data = {
      email: this.refs.email.value,
      password: this.refs.password.value
    };

    dispatch(Actions.logOut(data));
  }

  render() {
    const { errors } = this.props;

    return (
      <Logout />
    );
  }
}

export default connect()(SessionsDelete)

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from '../../actions/sessions';
import Login from '../../components/auth/Login'

class SessionsNew extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    const data = {
      email: this.refs.email.value,
      password: this.refs.password.value
    };

    dispatch(Actions.signIn(data));
  }

  render() {
    const { errors } = this.props;

    return (
      <Login />
    );
  }
}

export default connect()(SessionsNew)

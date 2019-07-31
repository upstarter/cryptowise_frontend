import React from 'react';
import decode from 'jwt-decode'
import {
  Route,
  Redirect,
} from "react-router-dom";

const checkAuth = () => {
  const token = localStorage.getItem('cw_token')
  const refreshToken = localStorage.getItem('refreshToken')
  if (!token || !refreshToken) {
    return false
  }
  try {
    // { exp: 12588558858 }
    const payload = decode(refreshToken)
    if (exp < new Date.getTime() / 1000) {
      return false
    }
  } catch (err) {
    return false
  }
  return true
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      checkAuth()
      ? <Component {...props} />
      : <Redirect to={{pathname: "/login", state: { from: props.location } }}
        />
  )} />
);

export default AuthRoute

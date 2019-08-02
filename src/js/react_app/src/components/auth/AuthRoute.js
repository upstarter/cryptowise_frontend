import React from 'react';
import decode from 'jwt-decode'
import {
  Route,
  Redirect,
} from "react-router-dom";
import Cookies from 'universal-cookie';

const checkAuth = () => {
  const cookies = new Cookies();
  const token = cookies.get('cwjwt')
  // const refreshToken = cookies.get('refresh')
  // if (!token || !refreshToken) {
  if (!token) {
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

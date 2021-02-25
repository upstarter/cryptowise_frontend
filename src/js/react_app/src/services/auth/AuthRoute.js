import React from 'react';
import decode from 'jwt-decode'
import {
  Route,
  Redirect,
} from "react-router-dom";
import Cookies from 'universal-cookie';

const checkAuth = () => {
  const cookies = new Cookies();
  const token = cookies.get('_cw_acc')
  // localStorage.setItem('cw_user', JSON.stringify(data.user_info))

  // const refreshToken = cookies.get('_cw_ref')
  // if (!token || !refreshToken) {
  // 
  if (!token) {
    return false
  }
  try {
    // { exp: 12588558858 }
    const payload = decode(token)
    // 
    const dt = new Date
    if (payload.exp < dt.getTime() / 1000) {
      // 
      return false
    }
  } catch (err) {
    // 
    return false
  }
  return true
}

const AuthRoute = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={props => (
        checkAuth()
        ? <Component {...props} />
        : <Redirect to={{pathname: "/login", state: { from: props.history.location } }} />
    )} />
  )
};

export default AuthRoute

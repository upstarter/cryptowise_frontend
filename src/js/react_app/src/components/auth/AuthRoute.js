import React from 'react';
import decode from 'jwt-decode'
import {
  Route,
  Redirect,
} from "react-router-dom";
import Cookies from 'universal-cookie';

// Am I forced to use non-httpOnly cookies or localStorage for this?
//
// No. Keep your access_token in a cookie with the httpOnly flag, and (if
// possible) with the secure flag. Let's call this cookie session_cookie.
//
// When a user does a successful login you could return 2 cookies: the
// session_cookie and another one which informs to JS the user has been
// authenticated (let's call as SPA cookie).
//
// Your session_cookie is not accessible by JS so it's not vulnerable to XSS.
// This cookie is sent on each request to the server, which checks is a valid
// token, otherwise an unauthorized error is returned.
//
// Your SPA cookie has no httpOnly flag so it's accessible by JS but the server
// doesn't use it to authenticate the user, so fake this cookie is useless.
//
// Whenever you receive an unauthorized error on your SPA you can remove the SPA cookie.

const checkAuth = () => {
  const cookies = new Cookies();
  const token = cookies.get('_cw_acc')
  // localStorage.setItem('cw_user', JSON.stringify(data.user_info))

  // const refreshToken = cookies.get('_cw_ref')
  // if (!token || !refreshToken) {
  console.log('checkAuth token', token)
  if (!token) {
    return false
  }
  try {
    // { exp: 12588558858 }
    const payload = decode(token)
    console.log('payload', payload)
    const dt = new Date
    if (payload.exp < dt.getTime() / 1000) {
      return false
    }
  } catch (err) {
    console.log('err', err)
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

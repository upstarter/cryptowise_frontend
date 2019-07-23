import React from 'react';
import Auth from './Auth'
import {
  Route,
  Redirect,
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      Auth.isAuthenticated()
      ? <Component {...props} />
      : <Redirect to={{pathname: "/login", state: { from: props.location } }}
        />
  )} />
);

export default PrivateRoute

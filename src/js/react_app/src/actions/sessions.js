import { push } from 'react-router-redux';
import { url } from '../utils/consts';
import axios from "axios";
import { SESSION_ERROR } from "../actions/index";


export default const Sessions = {
  logIn: (creds) => {
    return dispatch => {
      const data = {
        session: creds,
      };
      axios.post(`${url}/api/v1/auth/sign_in`, data)
      .then((response) => {
        localStorage.setItem('jwt',
          response.jwt);
        setCurrentUser(dispatch, response.user);
        dispatch(push('/'));
      })
      .catch((error) => {
        error.response.json()
        .then((errorJSON) => {
          dispatch({
            type: SESSION_ERROR,
            error: errorJSON.error,
          });
        });
      });
    };
  }
}

export default Sessions

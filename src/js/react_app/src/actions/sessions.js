import { push } from 'react-router-redux';
import { url } from '../utils/consts';
import { httpPost } from '../utils/request';

export default const Sessions = {
  logIn: (creds) => {
    return dispatch => {
      const data = {
        session: creds,
      };
      httpPost('/api/v1/auth/sign_in', data)
      .then((response) => {
        localStorage.setItem('phoenixAuthToken',
          response.jwt);
        setCurrentUser(dispatch, response.user);
        dispatch(push('/'));
      })
      .catch((error) => {
        error.response.json()
        .then((errorJSON) => {
          dispatch({
            type: Constants.SESSIONS_ERROR,
            error: errorJSON.error,
          });
        });
      });
    };
  }
}

export default Sessions

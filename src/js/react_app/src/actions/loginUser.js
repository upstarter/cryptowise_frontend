import { push } from 'connected-react-router'
import { url } from '../utils/consts';
import axios from "axios";
import { LOGIN_USER } from "./index";
import { SESSION_ERROR } from "./index";
import setAuthToken from 'Components/auth/setAuthToken'
import setCurrentUser from 'Actions/setCurrentUser'
import decode from 'jwt-decode'

const loginUser = creds => {
    return dispatch => {
      const data = {
        session: creds,
      };

      axios.post(`${url}/api/v1/auth/sign_in`, data)
      .then((response) => {
        console.log(response)
        const token = response.data.jwt
        localStorage.setItem('cw_token', token);
        setAuthToken(token)
        dispatch(setCurrentUser(decode(token)))

        // dispatch(push('/'));
      })
      .catch((error) => {
        console.log('error', error)
          dispatch({
            type: SESSION_ERROR,
            error: error,
          });
      });
    };
}

export default loginUser

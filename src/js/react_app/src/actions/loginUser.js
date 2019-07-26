import { push } from 'connected-react-router'
import { url } from '../utils/consts';
import axios from "axios";
import { LOGIN_USER } from "./index";
import { SESSION_ERROR } from "./index";
import Auth from "Components/auth/Auth"

const loginUser = creds => {
    return dispatch => {
      const data = {
        session: creds,
      };
      console.log('sessions', creds, data)
      axios.post(`${url}/api/v1/auth/sign_in`, data)
      .then((response) => {
        console.log('resp', response)
        localStorage.setItem('token', response.jwt);
        // Auth.setCurrentUser(respo nse.user);
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

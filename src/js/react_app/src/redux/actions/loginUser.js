import { push } from 'connected-react-router'
import { url } from 'Utils/consts';
import axios from "Config/axios";
import { SESSION_ERROR } from "Actions/index";
import { SET_CURRENT_USER } from 'Actions/auth.actions'
import AuthService from 'Services/auth/AuthService'
import setCurrentUser from 'Actions/setCurrentUser'
import decode from 'jwt-decode'
import Cookies from 'universal-cookie';

const loginUser = creds => {
    const data = {
      session: creds,
    };
    const request = axios.post(`${url}/v1/auth/sign_in`, data)
    return dispatch => {
      return request.then(response => {
        const data = response.data
        if (data.error) {
          console.log('user signin error')
        } else {
          dispatch({
            type: SET_CURRENT_USER,
            payload: token
          })
        }
      })
      .catch((error) => {
        console.log('error', error)
        // dispatch({
        //   type: SESSION_ERROR,
        //   error: error,
        // });
      });
    };
}

export default loginUser

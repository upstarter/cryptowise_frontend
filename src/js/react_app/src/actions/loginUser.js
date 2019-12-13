import { push } from 'connected-react-router'
import { url } from 'Utils/consts';
import axios from "Config/axios";
import { SESSION_ERROR } from "Actions/index";
import { SET_CURRENT_USER } from 'Actions/index'
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
          const cookies = new Cookies();
          const token = cookies.get('_cw_acc')
          const auth = new AuthService
          auth.setToken(token)
          if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          } else {
            delete axios.defaults.headers.common['Authorization']
          }
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

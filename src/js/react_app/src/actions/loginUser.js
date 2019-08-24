import { push } from 'connected-react-router'
import { url } from '../utils/consts';
import axios from "axios";
import { SESSION_ERROR } from "./index";
import setAuthToken from 'Components/auth/setAuthToken'
import setCurrentUser from 'Actions/setCurrentUser'
import decode from 'jwt-decode'
import { SET_CURRENT_USER } from './index'
import Cookies from 'universal-cookie';

const loginUser = creds => {
    return dispatch => {
      const data = {
        session: creds,
        headers: {
        },
        withCredentials: true,
        credentials: 'include'
      };

      axios.post(`${url}/api/v1/auth/sign_in`, data)
      .then((response) => {
        const cookies = new Cookies();
        const token = cookies.get('_cw_acc')
        setAuthToken(token)
        dispatch({
          type: SET_CURRENT_USER,
          payload: token
        })
        dispatch(push('/proposals'));
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

const loginSuccessful = (response) => {
  const cookies = new Cookies();
  const token = cookies.get('_cw_acc')
  setAuthToken(token)
  dispatch({
    type: SET_CURRENT_USER,
    payload: token
  })
  dispatch(push('/proposals'));
}

export default loginUser

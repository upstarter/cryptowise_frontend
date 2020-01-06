import {REGISTER_USER, LOGIN_USER, USER} from "Actions/auth.actions"
import {API_SUCCESS, API_ERROR, apiRequest} from "Actions/api.actions"
import {setLoader} from "Actions/ui.actions"
import {API} from "Redux/constants/api"
import history from '../../../appHistory';
import AuthService from "Services/auth/AuthService"
import Cookies from 'universal-cookie';
import { push } from 'connected-react-router'

export const authMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  switch(action.type) {

    case REGISTER_USER:
      console.log('regist', action.payload)
      dispatch(apiRequest(action.payload, 'POST', API.USER_REGISTER, REGISTER_USER))
      break;

    case `${REGISTER_USER} ${API_SUCCESS}`:
      const cookies = new Cookies();
      const token = cookies.get('_cw_acc')
      const auth = new AuthService
      auth.setToken(token)
      console.log(token)
      // dispatch({
      //   type: SET_CURRENT_USER,
      //   payload: token
      // })
      history.replace('/proposals');
      window.location.reload() // FIXME
      // push('/assets')
      break;

    case `${REGISTER_USER} ${API_ERROR}`:
      console.log('api_err')
      break;



    case LOGIN_USER:
      dispatch(apiRequest(action.payload, 'POST', API.USER_LOGIN, LOGIN_USER))
      // dispatch(setLoader(true))
      break;

    case `${LOGIN_USER} ${API_SUCCESS}`:
      // dispatch({
      //   type: SET_CURRENT_USER,
      //   payload: token
      // })
      history.replace('/proposals');
      window.location.reload() // FIXME
      break;

    case `${LOGIN_USER} ${API_ERROR}`:
      console.log('api_err')
      break;

  }
}

// import { url } from 'Utils/consts';
// import axios from "Config/axios";
// import Cookies from 'universal-cookie';
// import { push } from 'connected-react-router'
// import AuthService from 'Services/auth/AuthService'
// import { SET_CURRENT_USER } from 'Actions/index'
//
// const registerUser = state => {
//     const request = axios(`${url}/v1/auth/create`, {
//           method: 'POST',
//           data: {
//             auth: {
//               nickname: state.nickname,
//               email: state.email,
//               password: state.password,
//               topic_knowledge_ids: state.topic_knowledge_ids,
//               topic_interest_ids: state.topic_interest_ids,
//               terms_accepted: state.terms_accepted,
//             }
//           },
//           withCredentials: true
//         })
//
//     return (dispatch) => {
//       return request.then(response => {
//         const data = response.data
//
//         if (data.error) {
//           console.log('user register create error')
//         } else {
//           const cookies = new Cookies();
//           const token = cookies.get('_cw_acc')
//           const auth = new AuthService
//           auth.setToken(token)
//           dispatch({
//             type: SET_CURRENT_USER,
//             payload: token
//           })
//         }
//       }).then((data) => {
//         localStorage.setItem('userName', state.nickname)
//         localStorage.setItem('topicIds', state.topic_interest_ids)
//       }).catch(function(error) {
//         console.log(error);
//       })
//     }
// }
//
// export default registerUser;


// import { push } from 'connected-react-router'
// import { url } from 'Utils/consts';
// import axios from "Config/axios";
// import { SESSION_ERROR } from "Actions/index";
// import { SET_CURRENT_USER } from 'Actions/index'
// import AuthService from 'Services/auth/AuthService'
// import setCurrentUser from 'Actions/setCurrentUser'
// import decode from 'jwt-decode'
// import Cookies from 'universal-cookie';
//
// const old_loginUser = creds => {
//     const data = {
//       session: creds,
//     };
//     const request = axios.post(`${url}/v1/auth/sign_in`, data)
//     return dispatch => {
//       return request.then(response => {
//         const data = response.data
//         if (data.error) {
//           console.log('user signin error')
//         } else {
//           dispatch({
//             type: SET_CURRENT_USER,
//             payload: token
//           })
//         }
//       })
//       .catch((error) => {
//         console.log('error', error)
//         // dispatch({
//         //   type: SESSION_ERROR,
//         //   error: error,
//         // });
//       });
//     };
// }
//
// export default loginUser

import axios from "axios";
import { api_url } from 'Utils/consts';
import AuthService from 'Services/auth/AuthService'
import decode from 'jwt-decode'
import Cookies from 'universal-cookie'
import {apiRequest} from 'Redux/core/api.core'

export const AUTH = '[AUTH]'
export const REGISTER_USER = `REGISTER_USER`
export const SET_CURRENT_USER = `SET_CURRENT_USER`
export const LOGIN_USER = `LOGIN_USER`
export const AUTH_SUCCESS = `AUTH_SUCCESS`
export const AUTH_ERROR = `AUTH_ERROR`

const API = {
  REGISTER_USER: `${api_url}/auth/create`,
  LOGIN_USER: `${api_url}/auth/sign_in`,
}
export const registerUser = (regFormData) => ({
  type : `${AUTH} ${REGISTER_USER}`,
  payload: {
    regFormData,
  }
})

export const authSuccess = (body) => ({
  type : `${AUTH} ${AUTH_SUCCESS}`,
  payload: {
    data: body
  }
})

export const authError = (body) => ({
  type : `${AUTH} ${AUTH_ERROR}`,
  payload: {
    data: body
  }
})

export const setCurrentUser = (token) => ({
  type: `${AUTH} ${SET_CURRENT_USER}`,
  payload: token
})

export const loginUser = (creds) => ({
  type : `${AUTH} ${LOGIN_USER}`,
  payload: {
    creds,
  }
})


let initialState = {}

export const authReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {

    case `${AUTH} ${REGISTER_USER}`:
      console.log('reg-user', payload)
      return { state: payload }

    case `${AUTH} ${AUTH_SUCCESS}`:
      console.log('auth-succe', payload)
      return { state: payload }

    case `${AUTH} ${AUTH_ERROR}`:
      console.log('auth-error', payload)
      return { state: payload }

    case `${AUTH} ${SET_CURRENT_USER}`:
      console.log('set-curr-user', payload)
      return { token: payload }

    default:
      return state
  }
}

// const authenticate = (state) => {
//   const request = axios(`${url}/v1/auth/create`, {
//         method: 'POST',
//         data: {
//           auth: {
//             nickname: state.nickname,
//             email: state.email,
//             password: state.password,
//             topic_knowledge_ids: state.topic_knowledge_ids,
//             topic_interest_ids: state.topic_interest_ids,
//             terms_accepted: state.terms_accepted,
//           }
//         },
//         withCredentials: true
//       })
//
//     request.then(response => {
//       const data = response.data
//       if (data.error) {
//         console.log('user register create error')
//       } else {
//         const cookies = new Cookies();
//         const token = cookies.get('_cw_acc')
//         const auth = new AuthService
//         auth.setToken(token)
//         dispatch({
//           type: SET_CURRENT_USER,
//           payload: token
//         })
//       }
//     }).then((data) => {
//       localStorage.setItem('userName', state.nickname)
//       localStorage.setItem('topicIds', state.topic_interest_ids)
//     }).catch(function(error) {
//       console.log(error);
//     })
// }
//
// export const authReducer = (state = initialState, action) => {
//
//   switch (action.type) {
//     case AUTH_USER:
//       authenticate(state)
//       return {
//         user: action.payload
//       }
//     case SET_CURRENT_USER:
//       return {
//         user: action.payload
//       }
//   }
//   return state;
// };



export const authMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  switch(action.type) {

    case `${AUTH} ${LOGIN_USER}`:
      const { creds } = action.payload
      const data = {session: creds}
      dispatch(apiRequest(null, 'POST', API.LOGIN_USER, LOGIN_USER))
      const request = axios.post(`${API.LOGIN_USER}`, data)
      request.then(response => {
        const data = response.data
        if (data.error) {
          dispatch( authError(error) )
          console.log('user signin error')
        } else {
          dispatch( authSuccess(data) )
          dispatch(setCurrentUser(creds))
        }
      })
      .catch((error) => {
        console.log('error', error)
        dispatch( authError(error) )
      })
      next({...action, payload: creds})
      break;


    case `${AUTH} ${REGISTER_USER}`:

      const { regFormData } = action.payload
      dispatch(apiRequest(null, 'POST', API.REGISTER_USER, REGISTER_USER))
      axios(`${API.REGISTER_USER}`, {
                method: 'POST',
                data: {
                  auth: {
                    nickname: regFormData.nickname,
                    email: regFormData.email,
                    password: regFormData.password,
                    topic_knowledge_ids: regFormData.topic_knowledge_ids,
                    topic_interest_ids: regFormData.topic_interest_ids,
                    terms_accepted: regFormData.terms_accepted,
                  }
                },
                withCredentials: true
        })
        .then( data => {
          dispatch( authSuccess(data) )
          const cookies = new Cookies();
          const token = cookies.get('_cw_acc')
          const auth = new AuthService
          auth.setToken(token)
          dispatch(setCurrentUser(token))

        }).then((data) => {
          localStorage.setItem('userName', regFormData.nickname)
          localStorage.setItem('topicIds', regFormData.topic_knowledge_ids)
        })
        .catch( error => {
          dispatch( authError(error) )
        })

        next({...action, payload: regFormData})
        break;


    case `${AUTH} ${AUTH_SUCCESS}`:
      console.log('auth succ')
      // dispatch(authSuccess())
      next({...action, payload: action.payload})

      break;


    case `${AUTH} ${AUTH_ERROR}`:
      console.log('auth err')
      // dispatch(apiError())
      next({...action, payload: action.payload})

      break;

  }
}

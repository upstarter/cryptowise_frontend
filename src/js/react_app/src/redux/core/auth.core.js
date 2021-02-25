import axios from "axios";
import { api_url } from 'Utils/consts';
import AuthService from 'Services/auth/AuthService'
import decode from 'jwt-decode'
import Cookies from 'universal-cookie'
import {apiRequest, API_SUCCESS, API_ERROR} from 'Redux/core/api.core'

export const AUTH = '[AUTH]'
export const REGISTER_USER = `${AUTH} REGISTER_USER`
export const LOGIN_USER = `${AUTH} LOGIN_USER`
export const AUTH_SUCCESS = `${AUTH} API_SUCCESS`
export const AUTH_ERROR = `${AUTH} API_ERROR`
export const LOGIN_SUCCESS = `${AUTH} LOGIN_SUCCESS`
export const LOGIN_ERROR = `${AUTH} LOGIN_ERROR`
export const SET_CURRENT_USER = `${AUTH} SET_CURRENT_USER`

const API = {
  REGISTER_USER: `${api_url}/auth/create`,
  LOGIN_USER: `${api_url}/auth/sign_in`,
}
export const registerUser = (regFormData) => ({
  type : REGISTER_USER,
  payload: {
    regFormData,
  }
})

export const loginUser = (creds) => ({
  type : LOGIN_USER,
  payload: {
    creds,
  }
})

export const authSuccess = (body) => ({
  type : AUTH_SUCCESS,
  payload: {
    data: body
  }
})

export const authError = (body) => ({
  type : AUTH_ERROR,
  payload: {
    data: body
  }
})

export const loginSuccess = (body) => ({
  type : LOGIN_SUCCESS,
  payload: {
    data: body
  }
})

export const loginError = (body) => ({
  type : LOGIN_ERROR,
  payload: {
    data: body
  }
})

export const setCurrentUser = (token) => ({
  type: SET_CURRENT_USER,
  payload: token
})



let initialState = {}

export const authReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {

    case REGISTER_USER:
      
      return { state: payload }

    // case AUTH_SUCCESS:
    //   
    //   return { state: payload }
    //
    // case AUTH_ERROR:
    //   
    //   return { state: payload }
    //
    // case LOGIN_SUCCESS:
    //   
    //   return { state: payload }
    //
    // case LOGIN_ERROR:
    //   
    //   return { state: payload }

    case SET_CURRENT_USER:
      
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
//         
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
//       
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

    case LOGIN_USER:
      const { creds } = action.payload
      const data = {session: creds}
      dispatch(apiRequest(data, 'POST', API.LOGIN_USER, AUTH))

      // const request = axios.post(`${API.LOGIN_USER}`, data)
      // request.then(response => {
      //   const data = response.data
      //   if (data.error) {
      //     dispatch( authError(error) )
      //     
      //   } else {
      //     dispatch( authSuccess(data) )
      //   }
      // })
      // .catch((error) => {
      //   
      //   dispatch( authError(error) )
      // })
      next({...action, payload: creds})
      break;


    case REGISTER_USER:

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
          // dispatch(setCurrentUser(token))

        }).then((data) => {
          localStorage.setItem('userName', regFormData.nickname)
          localStorage.setItem('topicIds', regFormData.topic_knowledge_ids)
        })
        .catch( error => {
          dispatch( authError(error) )
        })

        next({...action, payload: regFormData})
        break;

    case AUTH_SUCCESS:
      // dispatch(setCurrentUser(creds))
      // dispatch(authSuccess())
      

      next({...action, payload: action.payload})

      break;


    case AUTH_ERROR:
      

      
      // next({...action, payload: action.payload})

      break;

    case LOGIN_SUCCESS:
      dispatch(setCurrentUser(creds))

      
      // dispatch(authSuccess())
      next({...action, payload: action.payload})

      break;


    case LOGIN_ERROR:
      
      // dispatch(apiError())
      next({...action, payload: action.payload})

      break;

  }
}

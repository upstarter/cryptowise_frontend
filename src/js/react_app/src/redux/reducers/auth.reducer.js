import { AUTH,
  REGISTER_USER,
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_CURRENT_USER } from 'Actions/auth.actions'

let initialState = {

}

export const authReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {

    case `${AUTH} ${REGISTER_USER}`:
      console.log('reg-user', payload)
      return { regFormData: payload }

    case `${AUTH} ${AUTH_SUCCESS}`:
      console.log('auth-succe', payload)
      return { state: state }

    case `${AUTH} ${AUTH_ERROR}`:
      console.log('auth-error', payload)
      return { state: state }

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

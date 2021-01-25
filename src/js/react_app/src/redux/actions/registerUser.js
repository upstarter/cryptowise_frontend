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

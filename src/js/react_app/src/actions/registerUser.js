import { url } from '../utils/consts';
import axios from "axios";
import { LOGIN_USER } from "./index";
// import { push } from 'react-router-redux';

const registerUser = state => {
    console.error('registerUser', state)
    const request = axios
        .post(`${url}/api/v1/auth/create`, {
          auth: {
            name: state.name,
            email: state.email,
            password: state.password,
            topic_knowledge_ids: state.topic_knowledge_ids,
            topic_interest_ids: state.topic_interest_ids
          }
        })

    return (dispatch) => {
      return request.then(response => {
        const data = response.data
        console.log('user register create response',response.data)
        if (data.error) {
          console.log('user register create error')
        } else {
          console.log('regiseter user data', data)
          localStorage.setItem('token', data.jwt)
          localStorage.setItem('user_info', data.user_info)
        }
      }).then((data) => {
        dispatch(loginUser())
      }).catch(function(error) {
        console.log(error);
      })
    }
}

const loginUser = userObj => ({
    type: LOGIN_USER,
    payload: userObj
})

export default registerUser;

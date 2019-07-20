import { url } from '../utils/consts';
import axios from "axios";
import { LOGIN_USER } from "./index";
// import { push } from 'react-router-redux';


const userPostFetch = state => {
    console.log('userPostFetch', state)
    const response = axios
        .post(`${url}/api/v1/auth/create`, {
          auth: {
            name: state.name,
            email: state.email,
            password: state.password,
            topic_knowledge_ids: state.topic_knowledge_ids,
            topic_interest_ids: state.topic_interest_ids
          }
        })
        .then(response => {
          const data = response.data
          console.log(response.data)
          if (data.error) {
            console.log('yomama')
          } else {
            console.log('data', data)
            localStorage.setItem('token', data.jwt)
            localStorage.setItem('user_info', data.user_info)

          }
        })
        .catch(function(error) {
          console.log(error);
        });
    return {
      type: LOGIN_USER,
      payload: response
    };
}

const loginUser = userObj => ({
    type: LOGIN_USER,
    payload: userObj
})

export default userPostFetch;

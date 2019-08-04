import { url } from '../utils/consts';
import axios from "axios";
import Cookies from 'universal-cookie';

// import { push } from 'react-router-redux';

const registerUser = state => {
    const request = axios
        .post(`${url}/api/v1/auth/create`, {
          auth: {
            name: state.name,
            email: state.email,
            password: state.password,
            topic_knowledge_ids: state.topic_knowledge_ids,
            topic_interest_ids: state.topic_interest_ids
          },
          headers: {
          },
          withCredentials: true,
          credentials: 'include',
        })

    return (dispatch) => {
      return request.then(response => {
        const data = response.data

        if (data.error) {
          console.log('user register create error')
        } else {
          console.log(data)
          const cookies = new Cookies();
          console.log('cookies', cookies.getAll()); // Pacman
          const token = cookies.get('_cw_rem')
          localStorage.setItem('_cw_rem', data.jwt)
          // localStorage.setItem('cw_user', JSON.stringify(data.user_info))
        }
      }).then((data) => {

      }).catch(function(error) {
        console.log(error);
      })
    }
}

export default registerUser;

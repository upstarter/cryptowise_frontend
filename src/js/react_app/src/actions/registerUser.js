import { url } from 'Utils/consts';
import axios from "axios";
import Cookies from 'universal-cookie';
import { push } from 'connected-react-router'
import setAuthToken from 'Components/auth/setAuthToken'
import { SET_CURRENT_USER } from 'Actions/index'

const registerUser = state => {
    const request = axios
        .post(`${url}/v1/auth/create`, {
          auth: {
            nickname: state.nickname,
            email: state.email,
            password: state.password,
            topic_knowledge_ids: state.topic_knowledge_ids,
            topic_interest_ids: state.topic_interest_ids
          }
        })

    return (dispatch) => {
      return request.then(response => {
        const data = response.data

        if (data.error) {
          console.log('user register create error')
        } else {
          console.log('pushing', data)
          const cookies = new Cookies();
          const token = cookies.get('_cw_acc')
          dispatch(setAuthToken(token))
          dispatch({
            type: SET_CURRENT_USER,
            payload: token
          })
        }
      }).then((data) => {

      }).catch(function(error) {
        console.log(error);
      })
    }
}

export default registerUser;

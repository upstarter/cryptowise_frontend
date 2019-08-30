import { url } from '../utils/consts';
import axios from "axios";
import { USER_PROPOSAL_CREATE } from "./index";

// import { push } from 'react-router-redux';

const userProposalCreate = state => {
    console.error('userProposalCreate', state)
    const request = axios
        .post(`${url}/v1/proposals`, {
          proposal: {
            title: state.title,
            description: state.description
          },
        },
        {
          proxy: {
            host: '127.0.0.1',
            port: 4000
          },
          withCredentials: true,
          credentials: 'include',
        })

    return (dispatch) => {
      return request.then(response => {
        const data = response.data
        if (data.error) {
          console.error('user proposal create error')
        } else {
          console.error('user proposal create non-error')

        }
      }).then(({data}) => {
        // dispatch(doStuff())
      }).catch(function(error) {
        console.log(error);
      })
    }
}

const doStuff = userObj => ({
    type: USER_PROPOSAL_CREATE,
    payload: userObj
})

export default userProposalCreate;

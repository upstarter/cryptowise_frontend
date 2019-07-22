import { url } from '../utils/consts';
import axios from "axios";
import { USER_PROPOSAL_CREATE } from "./index";
// import { push } from 'react-router-redux';


const userProposalCreate = state => {
    console.error('userProposalCreate', state)
    const request = axios
        .post(`${url}/api/v1/proposals`, {
          proposal: {
            title: state.title,
            description: state.description
          }
        })

    return (dispatch) => {
      request.then(response => {
        const data = response.data
        console.log('proposal create response',response.data)
        if (data.error) {
          console.log('user proposal create error')
        } else {

        }
      }).then(({data}) => {
        dispatch(loginUser())
      }).catch(function(error) {
        console.log(error);
      })

    };
}

const loginUser = userObj => ({
    type: USER_PROPOSAL_CREATE,
    payload: userObj
})

export default userProposalCreate;

import url from "Utils/consts"
export const USER_PROPOSAL = '[USER_PROPOSAL]'
export const CREATE_USER_PROPOSAL = `${USER_PROPOSAL} Create`
export const SET_USER_PROPOSAL = `${USER_PROPOSAL} Set`


export const createUserProposal = proposal =>  {
  return {
    type: CREATE_USER_PROPOSAL,
    payload:  {
      proposal: {
        title: proposal.title,
        description: proposal.description
      }
    }
  }
}

// const createUserProposal = state => {
//
//     const request = axios
//         .post(`${url}/v1/proposals`, {
//           proposal: {
//             title: state.title,
//             description: state.description
//           },
//         })
//
//     return (dispatch) => {
//       return request.then(response => {
//         const data = response.data
//         if (data.error) {
//           console.error('user proposal create error')
//         } else {
//           console.error('user proposal create non-error')
//
//         }
//       }).then(({data}) => {
//         // dispatch(doStuff())
//       }).catch(function(error) {
//         console.log(error);
//       })
//     }
// }
//
// const doStuff = userObj => ({
//     type: USER_PROPOSAL_CREATE,
//     payload: userObj
// })
//
// export default userProposalCreate;

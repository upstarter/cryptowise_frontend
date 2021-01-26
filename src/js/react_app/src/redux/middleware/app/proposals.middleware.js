import axios from "Config/axios";
import {PROPOSALS,
  CREATE_PROPOSAL,
  viewProposals} from "Actions/proposals.actions"
import {API_SUCCESS,
  API_ERROR,
  apiRequest} from "Actions/api.actions"
import {setLoader} from "Actions/ui.actions"
import {API} from "Redux/constants/api"

export const proposalsMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  switch(action.type) {
    case `${PROPOSALS} ${CREATE_PROPOSAL}`:
      let {formData} = action.payload
      axios.post(`${API.CREATE_PROPOSAL}`, {
            proposal: {
              title: formData.title,
              description: formData.description
            },
          }).then(response => {
            const data = response.data
            if (data.error) {
            } else {
              console.error('user proposal create non-error')
            }
          }).catch(function(error) {
            console.log(error);
          })
      next({...action, formData})
      break;
    }
}

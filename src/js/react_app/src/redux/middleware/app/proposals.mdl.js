import {USER_PROPOSAL, CREATE_USER_PROPOSAL} from "Actions/user_proposals.actions"
import {API_SUCCESS, API_ERROR, apiRequest} from "Actions/api.actions"
import {setLoader} from "Actions/ui.actions"
import {API} from "Redux/constants/api"

export const proposalsMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  switch(action.type) {

    case CREATE_USER_PROPOSAL:
      console.log('yomammy')
      dispatch(apiRequest(action.payload, 'POST', API.USER_PROPOSAL, USER_PROPOSAL))
      // dispatch(setLoader(true))
      break;

    case `${USER_PROPOSAL} ${API_SUCCESS}`:
      // dispatch(setUserProposal(action.payload))
      // dispatch(setLoader(false))
      break;

    case `${USER_PROPOSAL} ${API_ERROR}`:
      next([
        createNotification(action.payload.data.message, USER_PROPOSAL),
        // setLoader(false, USER_PROPOSALS)
      ])
      break;
  }
}

import {USER_PROPOSALS, CREATE_USER_PROPOSALS, setUserTopics} from "Actions/user_topics.actions"
import {API_SUCCESS, API_ERROR, apiRequest} from "Actions/api.actions"
import {setLoader} from "Actions/ui.actions"
import {API} from "Redux/constants/api"

export const userTopicsMiddleware = ({dispatch}) => next => action => {
  console.log('topicsMdl')

  next(action) //  keep logger in right order

  switch(action.type) {

    case CREATE_USER_PROPOSALS:
      console.log('yomammy')
      dispatch(apiRequest(action.payload, 'POST', API.USER_PROPOSALS, USER_PROPOSALS))
      // dispatch(setLoader(true))
      break;

    case `${USER_PROPOSALS} ${API_SUCCESS}`:
      dispatch(setUserTopics(action.payload))
      // dispatch(setLoader(false))
      break;

    case `${USER_PROPOSALS} ${API_ERROR}`:
      next([
        createNotification(action.payload.data.message, USER_PROPOSALS),
        // setLoader(false, USER_PROPOSALS)
      ])
      break;
  }
}

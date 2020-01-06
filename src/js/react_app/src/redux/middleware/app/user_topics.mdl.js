import {USER_TOPICS, FETCH_USER_TOPICS, setUserTopics} from "Actions/user_topics.actions"
import {API_SUCCESS, API_ERROR, apiRequest} from "Actions/api.actions"
import {setLoader} from "Actions/ui.actions"
import {API} from "Redux/constants/api"

export const userTopicsMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  switch(action.type) {

    case FETCH_USER_TOPICS:
      console.log('yomammy')
      dispatch(apiRequest(null, 'GET', API.USER_TOPICS, USER_TOPICS))
      dispatch(setLoader(true))
      break;

    case `${USER_TOPICS} ${API_SUCCESS}`:
      dispatch(setUserTopics(action.payload))
      dispatch(setLoader(false))
      break;

    case `${USER_TOPICS} ${API_ERROR}`:
      next([
        createNotification(action.payload.data.message, USER_TOPICS),
        setLoader(false, USER_TOPICS)
      ])
      break;
  }
}

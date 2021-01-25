import {TOPICS, SET_TOPICS, setTopics} from "Actions/topics.actions"
import {API_SUCCESS, API_ERROR, apiRequest} from "Actions/api.actions"
import {setLoader} from "Actions/ui.actions"
import {API} from "Redux/constants/api"

export const topicsMiddleware = ({dispatch}) => next => action => {
  next(action)
  // filter document actions only
  if (action.type.includes(SET_TOPICS)) {
    // const { data } = action.payload
    // console.log('AAAAAA', action)
  }
    // case FETCH_TOPICS:
    //   dispatch(apiRequest(null, 'GET', API.TOPICS, TOPICS))
    //   dispatch(setLoader(true))
    //   break;
    //
    // case `${TOPICS} ${API_SUCCESS}`:
    //   dispatch(setTokens(action.payload))
    //   dispatch(setLoader(false))
    //   break;
    //
    // case `${TOPICS} ${API_ERROR}`:
    //   next([
    //     createNotification(action.payload.data.message, TOPICS),
    //     setLoader(false, TOPICS)
    //   ])
    //   break;
}

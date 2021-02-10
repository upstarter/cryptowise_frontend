import { api_url } from 'Utils/consts';
import {API_SUCCESS, API_ERROR, apiRequest} from "Redux/core/api.core"
import {setLoader} from "Redux/core"

export const TOPICS = '[TOPICS]'
export const SET_TOPICS = `${TOPICS} Set`

export const setTopics = (topics) => ({
    type: SET_TOPICS,
    payload: {
      topics: topics
    }
})

export const API = {
  TOPICS: `${api_url}/topics`,

}

let initialState = {

}

export const topicsReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {

    case SET_TOPICS:
      return { topics: payload.topics }

      default:
        return state
  }
}

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

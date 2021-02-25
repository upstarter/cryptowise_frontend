import {API_REQUEST, API_SUCCESS, API_ERROR, apiRequest, apiSuccess, apiError} from "Redux/core/api.core"

// ACTIONS
export const THREAD = '[THREAD]'
export const CREATE_THREAD = `${THREAD} Create`
export const FETCH_THREADS = `${THREAD} Fetch`
export const SET_THREAD = `${THREAD} Set`
export const POST = '[POST]'
export const CREATE_POST = `${POST} Create`
export const SET_POST = `${POST} Set`

import { api_url } from 'Utils/consts';

const API = {
  FETCH_THREADS: `${api_url}/discuss/threads`,
  CREATE_THREAD: `${api_url}/discuss/threads`,
  CREATE_POST: `${api_url}/discuss/posts`
}


// REDUCER
let initialState = {
  post: {},
  thread: {},
}
export const discussionsApiReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {


    case CREATE_POST:

      return {...state, post: payload }

    case `${POST} ${API_SUCCESS}`:

      return {...state, post: payload }

    case `${POST} ${API_ERROR}`:

      return {...state, post: payload }

    // don't care about commands or events like fetch, apiError, only document type
    case SET_POST:

      return {post: payload.data}

    // THREADS
    case SET_THREAD:

      return {...state, thread: payload.data}

    default:
      return state
  }
}

// ACTION CREATORS
export const createPost = (data) => ({
    type: CREATE_POST,
    payload: {
      data: data
    }
})

export const createThread = (data) => ({
    type: CREATE_THREAD,
    payload: {
      data: data
    }
})

export const setThread = (data) => ({
  type: SET_THREAD,
  payload: {
    data: data
  }
})

export const setPost = (data) => ({
  type: SET_POST,
  payload: {
    data: data
  }
})

// MIDDLEWARE
export const discussionsMiddleware = ({dispatch}) => next => action => {
  // let payload = action.payload
  let {data} = action.payload

  switch(action.type) {

    case CREATE_THREAD:

      let threadData = {}
      threadData.title = data.getFieldValue('title')
      threadData.description = data.getFieldValue('description')
      threadData.is_public = data.getFieldValue('is_public')
      threadData.topic_id = data.topicID
      threadData.user_id = 1
      dispatch(apiRequest(threadData, 'POST', API.CREATE_THREAD, THREAD))
      break;

    case `${THREAD} ${API_SUCCESS}`:

      next(setThread(data))
      break;

    case `${THREAD} ${API_ERROR}`:

      // next([
      //   setNotification(action.payload.data.message, THREAD),
      // ])
      break;

    case CREATE_POST:
      let postData = {}
      postData.body = data.getFieldValue('body')
      postData.thread_id = data.threadID
      postData.user_id = 1
      postData.parent_id = data.threadID
      dispatch(apiRequest(postData, 'POST', API.CREATE_POST, POST))
      break;

    case `${POST} ${API_SUCCESS}`:

      next(setPost(data))
      break;

    case `${POST} ${API_ERROR}`:
      data = action.payload

      // next([
      //   setNotification(action.payload.data.message, THREAD),
      // ])
      break;
  }
}

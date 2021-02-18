import {API_REQUEST, API_SUCCESS, API_ERROR, apiRequest, apiSuccess, apiError} from "Redux/core/api.core"

// ACTIONS
export const THREAD = '[THREAD]'
export const CREATE_THREAD = `${THREAD} Create`
export const FETCH_THREADS = `${THREAD} Fetch`
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
  post: {}
}
export const discussionsApiReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case CREATE_POST:
      console.log('create post ', payload)
      return { post: payload }

    case `${POST} ${API_SUCCESS}`:

      console.log('disc-post-success-reducer', payload)
      return { post: payload.data.data }

    case `${POST} ${API_ERROR}`:
      console.log('discussionpost-error-reducer', payload)
      return { post: payload }

    // don't care about commands or events like fetch, apiError, only document type
    case SET_POST:
      console.log('setreducer', payload.data.data)
      return {post: payload.data.data}

    // THREADS
    case `${CREATE_THREAD}`:
      console.log('create thread', payload)
      return { thread: payload }

    case `${THREAD} ${API_SUCCESS}`:
      console.log('auth-succe', payload)
      return { thread: payload.data.data }

    case `${THREAD} ${API_ERROR}`:
      console.log('auth-error', payload)
      return { thread: payload }

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

export const setPost = (data) => ({
  type: SET_POST,
  payload: {
    data: data
  }
})

// MIDDLEWARE
export const discussionsMiddleware = ({dispatch}) => next => action => {
  let {data} = action.payload

  switch(action.type) {

    case CREATE_POST:
      let postData = {}
      postData.body = data.getFieldValue('body')
      postData.thread_id = data.threadId
      postData.user_id = 1
      postData.parent_id = data.threadId

      dispatch(apiRequest(postData, 'POST', API.CREATE_POST, POST))
      next({...action, postData})
      break;


    case CREATE_THREAD:
      let threadData = {}
      threadData.title = data.getFieldValue('title')
      threadData.description = data.getFieldValue('description')
      threadData.is_public = data.getFieldValue('is_public')
      threadData.topic_id = data.getFieldValue('topicID')

      dispatch(apiRequest(threadData, 'POST', API.CREATE_THREAD, THREAD))
      next({...action, threadData})
      break;


    case `${POST} ${API_SUCCESS}`:

      data = action.payload
      console.log('api success', data)
      next({...action, data})
      next(setPost(data))
      break;

    case `${POST} ${API_ERROR}`:
      data = action.payload
      console.log('errr', data)
      // next({...action, data})

      // next([
      //   setNotification(action.payload.data.message, THREAD),
      // ])
      break;
  }
}

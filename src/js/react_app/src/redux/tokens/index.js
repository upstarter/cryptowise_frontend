import axios from "axios";
import url from "Utils/consts"
import { api_url } from 'Utils/consts';
import {API_SUCCESS, API_ERROR, apiRequest} from "Redux/core/api.core"
import {setLoader} from "Redux/core/ui.core"

const API = {
  TOKENS: `${api_url}/tokens`
}

export const TOKENS = '[TOKENS]'
export const FETCH_TOKENS = `${TOKENS} Fetch`
export const SET_TOKENS = `${TOKENS} Set`

export const fetchTokens = (query) =>  ({
    type: FETCH_TOKENS,
    payload:  {
      data: query
    }
})

export const setTokens = (tokens) => ({
  type: SET_TOKENS,
  payload: {
    data: tokens
  }
})


export const tokensReducer = (tokens = [], action) => {
  const { payload } = action

  switch (action.type) {

    // don't care about commands or events like fetch, apiError, only document type
    case SET_TOKENS:
      return payload
    default:
      return tokens
  }
};



export const tokensMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  switch(action.type) {

    case FETCH_TOKENS:
      dispatch(apiRequest(null, 'GET', API.TOKENS, TOKENS))
      dispatch(setLoader(true))
      break;

    case `${TOKENS} ${API_SUCCESS}`:
      dispatch(setTokens(action.payload))
      dispatch(setLoader(false))
      break;

    case `${TOKENS} ${API_ERROR}`:
      next([
        createNotification(action.payload.data.message, TOKENS),
        setLoader(false, TOKENS)
      ])
      break;
  }
}

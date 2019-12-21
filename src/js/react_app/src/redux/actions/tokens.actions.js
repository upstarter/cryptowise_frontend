import axios from "axios";
import url from "Utils/consts"
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

import axios from "axios";
import url from "../utils/consts"

export const FETCH_TOKENS = "FETCH_TOKENS";
export const LOGIN_USER = "LOGIN_USER";
export const SESSION_ERROR = "SESSION_ERROR";

// action receivers
import userPostFetch from "./userPostFetch"

export function fetchTokens(term) {
  const url = `${url}/api/v1/search?q=${term}`;
  const request = axios.get(url);

  return {
    type: FETCH_TOKENS,
    payload: request
  };
}

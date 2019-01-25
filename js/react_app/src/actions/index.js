import axios from "axios";
import url from "../utils/consts"

export const FETCH_TOKENS = "FETCH_TOKENS";

// action creator
export function fetchTokens(term) {
  const url = `${url}/api/v1/search?q=${term}`;
  const request = axios.get(url);

  console.log('Action Received: ', request);
  return {
    type: FETCH_TOKENS,
    payload: request
  };
}

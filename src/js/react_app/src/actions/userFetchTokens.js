import axios from "axios";
import url from "../utils/consts"

export function fetchTokens(term) {
  const url = `${url}/v1/search?q=${term}`;
  const request = axios.get(url);

  return {
    type: FETCH_TOKENS,
    payload: request
  };
}

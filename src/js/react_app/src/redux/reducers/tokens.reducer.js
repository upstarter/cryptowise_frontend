import { FETCH_TOKENS } from "../actions/index";
import { SET_TOKENS } from "../actions/index";

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

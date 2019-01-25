import { FETCH_TOKENS } from "../actions/index";

const TokensReducer = (state = [], action) => {
  console.log('Action called: ', action);

  switch (action.type) {
    case FETCH_TOKENS:
      return [action.payload.data, ...state];
  }
  return state;
};

export default TokensReducer;

import { combineReducers } from "redux";
import TokensReducer from "./reducer_tokens";

const rootReducer = combineReducers({
  tokens: TokensReducer
});

export default rootReducer;

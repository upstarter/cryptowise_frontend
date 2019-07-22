import { combineReducers } from "redux";
import TokensReducer from "./reducer_tokens";
import LoginUserReducer from "./reducer_login_user";
import UserProposalReducer from "./reducerUserProposal";

const rootReducer = combineReducers({
  tokens: TokensReducer,
  loginUser: LoginUserReducer
});

export default rootReducer;

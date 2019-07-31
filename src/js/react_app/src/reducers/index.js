import { combineReducers } from "redux";
import TokensReducer from "./reducer_tokens";
import LoginUserReducer from "./reducerLoginUser";
import UserProposalReducer from "./reducerUserProposal";
import authReducer from "./reducerAuth";
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  tokens: TokensReducer,
  loginUser: LoginUserReducer,
  currentUser: authReducer
});

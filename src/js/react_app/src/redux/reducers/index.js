import { combineReducers } from "redux";
import { tokensReducer} from "./tokens.reducer";
import LoginUserReducer from "./reducerLoginUser";
import UserProposalReducer from "./reducerUserProposal";
import authReducer from "./reducerAuth";
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  tokens: tokensReducer,
  loginUser: LoginUserReducer,
  auth: authReducer
});

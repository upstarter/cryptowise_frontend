import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { tokensReducer} from "./tokens.reducer";
import { authReducer } from "./auth.reducer";
import { topicsReducer } from "./topics.reducer";
import { proposalsReducer } from "./proposals.reducer";

export default (history) => combineReducers({
  router: connectRouter(history),
  tokens: tokensReducer,
  auth: authReducer,
  topics: topicsReducer,
  proposals: proposalsReducer
});

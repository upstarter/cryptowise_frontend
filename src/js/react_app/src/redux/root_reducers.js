import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { tokensReducer} from "Redux/tokens";
import { authReducer } from "Redux/core/auth.core";
import { topicsReducer } from "Redux/topics";
import { proposalsReducer } from "Redux/proposals";
import { discussionsApiReducer } from "Redux/discussions/api";

export default (history) => combineReducers({
  router: connectRouter(history),
  tokens: tokensReducer,
  auth: authReducer,
  topics: topicsReducer,
  proposals: proposalsReducer,
  discussions: discussionsApiReducer,
});

import { combineReducers } from "redux";
import { userTopicsReducer} from "./user_topics.reducer";
import LoginUserReducer from "./reducerLoginUser";
import UserProposalReducer from "./reducerUserProposal";
import authReducer from "./reducerAuth";
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  userTopics: userTopicsReducer,
  loginUser: LoginUserReducer,
  auth: authReducer
});

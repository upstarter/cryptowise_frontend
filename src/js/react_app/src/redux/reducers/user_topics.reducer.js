import { FETCH_USER_TOPICS} from "Actions/user_topics.actions";
import { SET_USER_TOPICS} from "Actions/user_topics.actions";

export const userTopicsReducer = (userTopics = [], action) => {
  const { payload } = action

  switch (action.type) {
    // don't care about commands or events like fetch, apiError, only document type
    case SET_USER_TOPICS:
      return payload.data
    default:
      return userTopics
  }
};

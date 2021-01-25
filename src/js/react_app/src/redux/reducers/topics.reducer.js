import { SET_TOPICS } from "../actions/topics.actions";

let initialState = {

}

export const topicsReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {

    case SET_TOPICS:
      return { topics: payload.topics }

      default:
        return state
  }
}

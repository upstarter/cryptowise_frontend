import { SET_CURRENT_USER } from '../actions/index'
import isEmpty from 'lodash/isEmpty'

const initialState = {
  isAuthenticated: false,
  currentUser: {}
}

const authReducer = (state = initialState, action) => {
  console.log('llkasjdflkjasdf0', action.payload)

  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.payload),
        currentUser: action.payload.currentUser
      }

  }
  return state;
};

export default authReducer;

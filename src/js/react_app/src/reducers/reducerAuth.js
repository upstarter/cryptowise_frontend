import { SET_CURRENT_USER } from '../actions/index'
import isEmpty from 'lodash/isEmpty'

const initialState = {
  user: {}
}

const authReducer = (state = initialState, action) => {
  console.log('llkasjdflkjasdf0', action.payload)

  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        user: action.payload
      }
  }
  return state;
};

export default authReducer;

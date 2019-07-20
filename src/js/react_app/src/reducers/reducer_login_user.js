import { LOGIN_USER } from "../actions/index";

const initialState = {
  currentUser: {}
}

const LoginUserReducer = (state = initialState, action) => {
  console.log('action type', action)
  switch (action.type) {
    case LOGIN_USER:
      return {...state, currentUser: action.payload};
  }
  return state;
};

export default LoginUserReducer;

import { SET_CURRENT_USER } from 'Actions/auth.actions'

const setCurrentUser = (user) => {
  return (dispatch) => {
    return {
      type: SET_CURRENT_USER,
      payload: user
    }
  }
}

export default setCurrentUser

import { SET_CURRENT_USER } from './index'

const setCurrentUser = (user) => {
  return (dispatch) => {
    return {
      type: SET_CURRENT_USER,
      payload: user
    }
  }
}

export default setCurrentUser

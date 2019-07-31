import { SET_CURRENT_USER } from './index'

const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    currentUser: user
  }
}

export default setCurrentUser

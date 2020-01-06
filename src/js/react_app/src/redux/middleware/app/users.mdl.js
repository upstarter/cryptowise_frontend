import {LOGIN_USER, USER} from "Actions/users.actions"
import {API_SUCCESS, API_ERROR, apiRequest} from "Actions/api.actions"
import {setLoader} from "Actions/ui.actions"
import {API} from "Redux/constants/api"
import history from '../../../appHistory';

export const usersMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  switch(action.type) {

    case LOGIN_USER:
      console.log('actionality:', action.payload)
      dispatch(apiRequest(action.payload, 'POST', API.USER_LOGIN, LOGIN_USER))
      // dispatch(setLoader(true))
      break;

    case `${LOGIN_USER} ${API_SUCCESS}`:
      // dispatch({
      //   type: SET_CURRENT_USER,
      //   payload: token
      // })
      history.replace('/proposals');
      window.location.reload() // FIXME
      break;

    case `${LOGIN_USER} ${API_ERROR}`:
      console.log('api_err')
      break;

  }
}

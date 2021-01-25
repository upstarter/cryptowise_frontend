import axios from "axios";
import {API} from '../../constants/api'
import {apiRequest} from 'Actions/api.actions'
import {AUTH,
  REGISTER_USER,
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_CURRENT_USER,
  authSuccess,
  authError,
  setCurrentUser
} from "Actions/auth.actions"

import Cookies from 'universal-cookie';
import AuthService from 'Services/auth/AuthService'

export const authMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  switch(action.type) {

    case `${AUTH} ${REGISTER_USER}`:

      const { regFormData } = action.payload
      dispatch(apiRequest(null, 'POST', API.REGISTER_USER, REGISTER_USER))
      console.log('auth reg')

      axios(`${API.REGISTER_USER}`, {
                method: 'POST',
                data: {
                  auth: {
                    nickname: regFormData.nickname,
                    email: regFormData.email,
                    password: regFormData.password,
                    topic_knowledge_ids: regFormData.topic_knowledge_ids,
                    topic_interest_ids: regFormData.topic_interest_ids,
                    terms_accepted: regFormData.terms_accepted,
                  }
                },
                withCredentials: true
        })
        .then( data => {
          dispatch( authSuccess(data) )
          const cookies = new Cookies();
          const token = cookies.get('_cw_acc')
          const auth = new AuthService
          auth.setToken(token)
          dispatch({
            type: SET_CURRENT_USER,
            payload: token
          })
        }).then((data) => {
          localStorage.setItem('userName', regFormData.nickname)
          localStorage.setItem('topicIds', regFormData.topic_interest_ids)
        })
        .catch( error => {
          dispatch( authError(error) )
        })

        next({...action, payload: regFormData})
        break;

    case `${AUTH} ${AUTH_SUCCESS}`:
      console.log('auth succ')
      // dispatch(authSuccess())
      next({...action, payload: regFormData})

      break;

    case `${AUTH} ${AUTH_ERROR}`:
      console.log('auth err')
      // dispatch(apiError())
      next({...action, payload: regFormData})

      break;

  }
}

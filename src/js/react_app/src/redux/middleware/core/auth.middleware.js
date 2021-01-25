import axios from "axios";
import {API} from '../../constants/api'
import {apiRequest} from 'Actions/api.actions'
import {AUTH,
  REGISTER_USER,
  AUTH_SUCCESS,
  AUTH_ERROR,
  authSuccess,
  authError
} from "Actions/auth.actions"

export const authMiddleware = ({dispatch}) => next => action => {
  next(action) //  keep logger in right order

  switch(action.type) {

    case `${AUTH} ${REGISTER_USER}`:
      console.log('auth reg')

      const { regFormData } = action.payload
      console.log(regFormData)
      dispatch(apiRequest(null, 'POST', API.REGISTER_USER, REGISTER_USER))
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
        .then( res => res.json() )
        .then( data => dispatch( authSuccess(data, entity) ) )
        .catch(res => dispatch( authError(error, entity) ) )
        next({...action, payload: {data}})
        break;

    case `${AUTH} ${AUTH_SUCCESS}`:
      console.log('auth succ')
      // dispatch(authSuccess())
      next({...action, payload: {data}})

      break;

    case `${AUTH} ${AUTH_ERROR}`:
      console.log('auth err')
      // dispatch(apiError())
      next({...action, payload: {data}})

      break;

  }
}
